const MASK_FLAGS = new Set('aACL09#&?');
const MASK_REQUIRED_FLAGS = new Set('0#LA&');
const ESCAPE_CHAR = '\\';
const DEFAULT_FORMAT = 'CCCCCCCCCC';
const DEFAULT_PROMPT = '_';
const ASCII_ZERO = 0x0030;
const DIGIT_ZERO_CODEPOINTS = [
    ASCII_ZERO,
    0x0660,
    0x06f0,
    0x0966,
    0x09e6,
    0x0a66,
    0x0ae6,
    0x0b66,
    0x0c66,
    0x0ce6,
    0x0d66,
    0x0e50,
    0x0ed0,
    0x0f20,
    0x1040,
    0x17e0,
    0x1810,
    0xff10,
];
const UNICODE_DIGIT_TO_ASCII = new Map(DIGIT_ZERO_CODEPOINTS.flatMap((zeroCodePoint) => Array.from({ length: 10 }, (_, i) => [
    zeroCodePoint + i,
    String.fromCharCode(ASCII_ZERO + i),
])));
function replaceUnicodeNumbers(text) {
    const matcher = /\p{Nd}/gu;
    return text.replace(matcher, (digit) => {
        return UNICODE_DIGIT_TO_ASCII.get(digit.charCodeAt(0)) ?? digit;
    });
}
const MASK_PATTERNS = new Map([
    ['C', /[\s\S]/u],
    ['&', /[^\p{Separator}]/u],
    ['a', /[\p{Letter}\p{Number}\p{Separator}]/u],
    ['A', /[\p{Letter}\p{Number}]/u],
    ['?', /[\p{Letter}\p{Separator}]/u],
    ['L', /\p{Letter}/u],
    ['0', /\p{Number}/u],
    ['9', /[\p{Number}\p{Separator}]/u],
    ['#', /[\p{Number}\-+]/u],
]);
function validate(char, flag) {
    return MASK_PATTERNS.get(flag)?.test(char) ?? false;
}
const MaskDefaultOptions = {
    format: DEFAULT_FORMAT,
    promptCharacter: DEFAULT_PROMPT,
};
export class MaskParser {
    get literalPositions() {
        return this._literalPositions;
    }
    get escapedMask() {
        return this._escapedMask;
    }
    get emptyMask() {
        return this.apply();
    }
    get mask() {
        return this._options.format;
    }
    set mask(value) {
        this._options.format = value || this._options.format;
        this._parseMaskLiterals();
    }
    get prompt() {
        return this._options.promptCharacter;
    }
    set prompt(value) {
        const char = value ? value.substring(0, 1) : this._options.promptCharacter;
        if (MASK_FLAGS.has(char)) {
            return;
        }
        this._options.promptCharacter = char;
    }
    constructor(options) {
        this._literals = new Map();
        this._literalPositions = new Set();
        this._escapedMask = '';
        this._requiredPositions = [];
        this._options = { ...MaskDefaultOptions, ...options };
        this._parseMaskLiterals();
    }
    _isEscapedFlag(char, nextChar) {
        return char === ESCAPE_CHAR && MASK_FLAGS.has(nextChar);
    }
    _parseMaskLiterals() {
        const mask = this.mask;
        const length = mask.length;
        const escapedMaskChars = [];
        let currentPos = 0;
        this._literals.clear();
        for (let i = 0; i < length; i++) {
            const [current, next] = [mask.charAt(i), mask.charAt(i + 1)];
            if (this._isEscapedFlag(current, next)) {
                this._literals.set(currentPos, next);
                escapedMaskChars.push(next);
                i++;
            }
            else if (MASK_FLAGS.has(current)) {
                escapedMaskChars.push(current);
            }
            else {
                this._literals.set(currentPos, current);
                escapedMaskChars.push(current);
            }
            currentPos++;
        }
        this._escapedMask = escapedMaskChars.join('');
        this._literalPositions = new Set(this._literals.keys());
        this._requiredPositions = this._computeRequiredPositions();
    }
    _computeRequiredPositions() {
        const literalPositions = this._literalPositions;
        const escapedMask = this._escapedMask;
        const length = escapedMask.length;
        const result = [];
        for (let i = 0; i < length; i++) {
            const char = escapedMask[i];
            if (MASK_REQUIRED_FLAGS.has(char) && !literalPositions.has(i)) {
                result.push(i);
            }
        }
        return result;
    }
    getPreviousNonLiteralPosition(start) {
        const literalPositions = this._literalPositions;
        for (let i = start - 1; i >= 0; i--) {
            if (!literalPositions.has(i)) {
                return i;
            }
        }
        return 0;
    }
    getNextNonLiteralPosition(start) {
        const literalPositions = this._literalPositions;
        const length = this._escapedMask.length;
        for (let i = Math.max(0, start); i < length; i++) {
            if (!literalPositions.has(i)) {
                return i;
            }
        }
        return length;
    }
    replace(maskString, value, start, end) {
        const literalPositions = this.literalPositions;
        const escapedMask = this._escapedMask;
        const length = escapedMask.length;
        const prompt = this.prompt;
        const endBoundary = Math.min(end, length);
        const maskedChars = maskString ? [...maskString] : [...this.apply('')];
        const inputChars = Array.from(replaceUnicodeNumbers(value));
        const inputLength = inputChars.length;
        for (let i = start; i < endBoundary; i++) {
            if (!literalPositions.has(i)) {
                maskedChars[i] = prompt;
            }
        }
        let cursor = start;
        let inputIndex = 0;
        let maskPosition = start;
        for (; maskPosition < length && inputIndex < inputLength; maskPosition++) {
            if (literalPositions.has(maskPosition)) {
                cursor = maskPosition + 1;
                continue;
            }
            const char = inputChars[inputIndex];
            if (validate(char, escapedMask[maskPosition]) && char !== prompt) {
                maskedChars[maskPosition] = char;
                cursor = maskPosition + 1;
                inputIndex++;
            }
            else {
                inputIndex++;
                maskPosition--;
            }
        }
        while (cursor < length && literalPositions.has(cursor)) {
            cursor++;
        }
        return {
            value: maskedChars.join(''),
            end: cursor,
        };
    }
    parse(masked = '') {
        const literalPositions = this.literalPositions;
        const prompt = this.prompt;
        const length = masked.length;
        const result = [];
        for (let i = 0; i < length; i++) {
            const char = masked[i];
            if (!literalPositions.has(i) && char !== prompt) {
                result.push(char);
            }
        }
        return result.join('');
    }
    isValidString(input = '') {
        const prompt = this.prompt;
        return this._requiredPositions.every((position) => {
            const char = input[position];
            return validate(char, this._escapedMask[position]) && char !== prompt;
        });
    }
    apply(input = '') {
        const literals = this._literals;
        const prompt = this.prompt;
        const escapedMask = this._escapedMask;
        const length = escapedMask.length;
        const result = new Array(length).fill(prompt);
        for (const [position, literal] of literals.entries()) {
            result[position] = literal;
        }
        if (!input) {
            return result.join('');
        }
        const normalizedInput = replaceUnicodeNumbers(input);
        const inputLength = normalizedInput.length;
        let inputIndex = 0;
        for (let i = 0; i < length; i++) {
            if (inputIndex >= inputLength) {
                break;
            }
            if (literals.has(i)) {
                continue;
            }
            if (validate(normalizedInput[inputIndex], escapedMask[i])) {
                result[i] = normalizedInput[inputIndex];
            }
            inputIndex++;
        }
        return result.join('');
    }
}
//# sourceMappingURL=mask-parser.js.map