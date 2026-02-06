var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property, state } from 'lit/decorators.js';
import { blazorDeepImport } from '../common/decorators/blazorDeepImport.js';
import { IgcInputBaseComponent } from '../input/input-base.js';
import { MaskParser } from './mask-parser.js';
let IgcMaskInputBaseComponent = class IgcMaskInputBaseComponent extends IgcInputBaseComponent {
    constructor() {
        super(...arguments);
        this._parser = new MaskParser();
        this._maskSelection = { start: 0, end: 0 };
        this._compositionStart = 0;
        this._focused = false;
        this._maskedValue = '';
        this.readOnly = false;
    }
    get _inputSelection() {
        return {
            start: this._input?.selectionStart || 0,
            end: this._input?.selectionEnd || 0,
        };
    }
    set mask(value) {
        this._parser.mask = value;
    }
    get mask() {
        return this._parser.mask;
    }
    set prompt(value) {
        this._parser.prompt = value;
    }
    get prompt() {
        return this._parser.prompt;
    }
    async _handleInput({ inputType, isComposing, }) {
        const value = this._input?.value ?? '';
        const { start, end } = this._maskSelection;
        const deletePosition = this._parser.getNextNonLiteralPosition(end) + 1;
        this._setTouchedState();
        switch (inputType) {
            case 'deleteContentForward':
                this._updateInput('', { start, end: deletePosition });
                await this.updateComplete;
                return this._input?.setSelectionRange(deletePosition, deletePosition);
            case 'deleteContentBackward':
                if (isComposing)
                    return;
                return this._updateInput('', {
                    start: this._parser.getPreviousNonLiteralPosition(this._inputSelection.start + 1),
                    end,
                });
            case 'deleteByCut':
                return this._updateInput('', this._maskSelection);
            case 'insertText':
                return this._updateInput(value.substring(start, this._inputSelection.end), this._maskSelection);
            case 'insertFromPaste':
                return this._updateInput(value.substring(start, this._inputSelection.end), {
                    start,
                    end: this._inputSelection.start,
                });
            case 'insertFromDrop':
                return this._updateInput(value.substring(this._inputSelection.start, this._inputSelection.end), { ...this._inputSelection });
            case undefined:
            case '':
                return this._updateInput(this._parser.parse(value.substring(start, this._inputSelection.end)), {
                    start,
                    end: this._inputSelection.end,
                });
        }
    }
    _setMaskSelection() {
        this._maskSelection = this._inputSelection;
    }
    _handleCompositionStart() {
        this._compositionStart = this._inputSelection.start;
    }
    _handleCompositionEnd({ data }) {
        this._updateInput(data, {
            start: this._compositionStart,
            end: this._inputSelection.end,
        });
    }
    _handleClick() {
        const { selectionStart: start, selectionEnd: end } = this._input ?? {
            selectionStart: 0,
            selectionEnd: 0,
        };
        if (start === end && start === this._maskedValue.length) {
            this.select();
        }
    }
    setSelectionRange(start, end, direction = 'none') {
        this._input?.setSelectionRange(start ?? null, end ?? null, direction);
        this._maskSelection = { start: start ?? 0, end: end ?? 0 };
    }
    setRangeText(replacement, start, end, selectMode) {
        const current = this._inputSelection;
        const _start = start ?? current.start;
        const _end = end ?? current.end;
        const result = this._parser.replace(this._maskedValue || this._parser.emptyMask, replacement, _start, _end);
        this._maskedValue = this._parser.apply(this._parser.parse(result.value));
        this._updateSetRangeTextValue();
        this.updateComplete.then(() => {
            switch (selectMode) {
                case 'select':
                    this.setSelectionRange(_start, _end);
                    break;
                case 'start':
                    this.setSelectionRange(_start, _start);
                    break;
                case 'end':
                    this.setSelectionRange(_end, _end);
                    break;
                default:
                    this.setSelectionRange(current.start, current.end);
            }
        });
    }
};
__decorate([
    state()
], IgcMaskInputBaseComponent.prototype, "_focused", void 0);
__decorate([
    state()
], IgcMaskInputBaseComponent.prototype, "_maskedValue", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcMaskInputBaseComponent.prototype, "readOnly", void 0);
__decorate([
    property()
], IgcMaskInputBaseComponent.prototype, "mask", null);
__decorate([
    property()
], IgcMaskInputBaseComponent.prototype, "prompt", null);
IgcMaskInputBaseComponent = __decorate([
    blazorDeepImport
], IgcMaskInputBaseComponent);
export { IgcMaskInputBaseComponent };
//# sourceMappingURL=mask-input-base.js.map