var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { getDateFormatter } from 'igniteui-i18n-core';
import { html } from 'lit';
import { eventOptions, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { convertToDate } from '../calendar/helpers.js';
import { addKeybindings, arrowDown, arrowLeft, arrowRight, arrowUp, ctrlKey, } from '../common/controllers/key-bindings.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { watch } from '../common/decorators/watch.js';
import { registerComponent } from '../common/definitions/register.js';
import { addI18nController } from '../common/i18n/i18n-controller.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { FormValueDateTimeTransformers } from '../common/mixins/forms/form-transformers.js';
import { createFormValueState } from '../common/mixins/forms/form-value.js';
import { partMap } from '../common/part-map.js';
import { styles } from '../input/themes/input.base.css.js';
import { styles as shared } from '../input/themes/shared/input.common.css.js';
import { all } from '../input/themes/themes.js';
import { IgcMaskInputBaseComponent, } from '../mask-input/mask-input-base.js';
import IgcValidationContainerComponent from '../validation-container/validation-container.js';
import { DatePart, DateParts, DateTimeUtil, } from './date-util.js';
import { dateTimeInputValidators } from './validators.js';
const Slots = setSlots('prefix', 'suffix', 'helper-text', 'value-missing', 'range-overflow', 'range-underflow', 'custom-error', 'invalid');
export default class IgcDateTimeInputComponent extends EventEmitterMixin(IgcMaskInputBaseComponent) {
    static { this.tagName = 'igc-date-time-input'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcDateTimeInputComponent, IgcValidationContainerComponent);
    }
    get __validators() {
        return dateTimeInputValidators;
    }
    get inputFormat() {
        return this._inputFormat || this._defaultMask;
    }
    set inputFormat(val) {
        if (val) {
            this.setMask(val);
            this._inputFormat = val;
            if (this.value) {
                this.updateMask();
            }
        }
    }
    get value() {
        return this._formValue.value;
    }
    set value(value) {
        this._formValue.setValueAndFormState(value);
        this.updateMask();
    }
    set min(value) {
        this._min = convertToDate(value);
        this._validate();
    }
    get min() {
        return this._min;
    }
    set max(value) {
        this._max = convertToDate(value);
        this._validate();
    }
    get max() {
        return this._max;
    }
    set displayFormat(value) {
        this._displayFormat = value;
    }
    get displayFormat() {
        return (this._displayFormat ?? this._inputFormat ?? this._defaultDisplayFormat);
    }
    set locale(value) {
        this._i18nController.locale = value;
    }
    get locale() {
        return this._i18nController.locale;
    }
    setDefaultMask() {
        this.updateDefaultDisplayFormat();
        if (!this._inputFormat) {
            this.updateDefaultMask();
            this.setMask(this._defaultMask);
        }
        if (this.value) {
            this.updateMask();
        }
    }
    setDisplayFormat() {
        this.updateDefaultDisplayFormat();
        if (this.value) {
            this.updateMask();
        }
    }
    get hasDateParts() {
        const parts = this._inputDateParts ||
            DateTimeUtil.parseDateTimeFormat(this.inputFormat, this.locale);
        return parts.some((p) => p.type === DateParts.Date ||
            p.type === DateParts.Month ||
            p.type === DateParts.Year);
    }
    get hasTimeParts() {
        const parts = this._inputDateParts ||
            DateTimeUtil.parseDateTimeFormat(this.inputFormat, this.locale);
        return parts.some((p) => p.type === DateParts.Hours ||
            p.type === DateParts.Minutes ||
            p.type === DateParts.Seconds);
    }
    get targetDatePart() {
        let result;
        if (this._focused) {
            const partType = this._inputDateParts.find((p) => p.start <= this._inputSelection.start &&
                this._inputSelection.start <= p.end &&
                p.type !== DateParts.Literal)?.type;
            if (partType) {
                result = partType;
            }
        }
        else if (this._inputDateParts.some((p) => p.type === DateParts.Date)) {
            result = DatePart.Date;
        }
        else if (this._inputDateParts.some((p) => p.type === DateParts.Hours)) {
            result = DatePart.Hours;
        }
        else {
            result = this._inputDateParts[0].type;
        }
        return result;
    }
    get datePartDeltas() {
        return Object.assign({}, this._datePartDeltas, this.spinDelta);
    }
    constructor() {
        super();
        this._themes = addThemingController(this, all);
        this._slots = addSlotController(this, {
            slots: Slots,
        });
        this._formValue = createFormValueState(this, {
            initialValue: null,
            transformers: FormValueDateTimeTransformers,
        });
        this._i18nController = addI18nController(this, {
            defaultEN: {},
            onResourceChange: () => {
                this.setDefaultMask();
            },
        });
        this._oldValue = null;
        this._min = null;
        this._max = null;
        this._datePartDeltas = {
            date: 1,
            month: 1,
            year: 1,
            hours: 1,
            minutes: 1,
            seconds: 1,
        };
        this.spinLoop = true;
        addKeybindings(this, {
            skip: () => this.readOnly,
            bindingDefaults: { triggers: ['keydownRepeat'] },
        })
            .set([ctrlKey, ';'], this.setToday)
            .set(arrowUp, this.keyboardSpin.bind(this, 'up'))
            .set(arrowDown, this.keyboardSpin.bind(this, 'down'))
            .set([ctrlKey, arrowLeft], this.navigateParts.bind(this, 0))
            .set([ctrlKey, arrowRight], this.navigateParts.bind(this, 1));
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateDefaultMask();
        this.updateDefaultDisplayFormat();
        this.setMask(this.inputFormat);
        if (this.value) {
            this.updateMask();
        }
    }
    stepUp(datePart, delta) {
        const targetPart = datePart || this.targetDatePart;
        if (!targetPart) {
            return;
        }
        const { start, end } = this._inputSelection;
        const newValue = this.trySpinValue(targetPart, delta);
        this.value = newValue;
        this.updateComplete.then(() => this._input?.setSelectionRange(start, end));
    }
    stepDown(datePart, delta) {
        const targetPart = datePart || this.targetDatePart;
        if (!targetPart) {
            return;
        }
        const { start, end } = this._inputSelection;
        const newValue = this.trySpinValue(targetPart, delta, true);
        this.value = newValue;
        this.updateComplete.then(() => this._input?.setSelectionRange(start, end));
    }
    clear() {
        this._maskedValue = '';
        this.value = null;
    }
    setToday() {
        this.value = new Date();
        this._fireInputEvent();
    }
    updateMask() {
        if (this._focused) {
            this._maskedValue = this.getMaskedValue();
        }
        else {
            if (!DateTimeUtil.isValidDate(this.value)) {
                this._maskedValue = '';
                return;
            }
            this._maskedValue = DateTimeUtil.formatDisplayDate(this.value, this.locale, this.displayFormat);
        }
    }
    _fireInputEvent() {
        this._setTouchedState();
        this.emitEvent('igcInput', { detail: this.value?.toString() });
    }
    handleDragLeave() {
        if (!this._focused) {
            this.updateMask();
        }
    }
    handleDragEnter() {
        if (!this._focused) {
            this._maskedValue = this.getMaskedValue();
        }
    }
    async _updateInput(text, { start, end }) {
        const result = this._parser.replace(this._maskedValue, text, start, end);
        this._maskedValue = result.value;
        this.updateValue();
        this.requestUpdate();
        if (start !== this.inputFormat.length) {
            this._fireInputEvent();
        }
        await this.updateComplete;
        this._input?.setSelectionRange(result.end, result.end);
    }
    trySpinValue(datePart, delta, negative = false) {
        const _delta = delta || this.datePartDeltas[datePart] || 1;
        const spinValue = negative ? -Math.abs(_delta) : Math.abs(_delta);
        return this.spinValue(datePart, spinValue);
    }
    spinValue(datePart, delta) {
        if (!(this.value && DateTimeUtil.isValidDate(this.value))) {
            return new Date();
        }
        const newDate = new Date(this.value.getTime());
        let formatPart;
        let amPmFromMask;
        switch (datePart) {
            case DatePart.Date:
                DateTimeUtil.spinDate(delta, newDate, this.spinLoop);
                break;
            case DatePart.Month:
                DateTimeUtil.spinMonth(delta, newDate, this.spinLoop);
                break;
            case DatePart.Year:
                DateTimeUtil.spinYear(delta, newDate);
                break;
            case DatePart.Hours:
                DateTimeUtil.spinHours(delta, newDate, this.spinLoop);
                break;
            case DatePart.Minutes:
                DateTimeUtil.spinMinutes(delta, newDate, this.spinLoop);
                break;
            case DatePart.Seconds:
                DateTimeUtil.spinSeconds(delta, newDate, this.spinLoop);
                break;
            case DatePart.AmPm:
                formatPart = this._inputDateParts.find((dp) => dp.type === DateParts.AmPm);
                if (formatPart !== undefined) {
                    amPmFromMask = this._maskedValue.substring(formatPart.start, formatPart.end);
                    return DateTimeUtil.spinAmPm(newDate, this.value, amPmFromMask);
                }
                break;
        }
        return newDate;
    }
    async onWheel(event) {
        if (!this._focused || this.readOnly) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const { start, end } = this._inputSelection;
        event.deltaY > 0 ? this.stepDown() : this.stepUp();
        this._fireInputEvent();
        await this.updateComplete;
        this.setSelectionRange(start, end);
    }
    updateDefaultMask() {
        this._defaultMask = DateTimeUtil.getDefaultInputMask(this.locale);
    }
    updateDefaultDisplayFormat() {
        this._defaultDisplayFormat = getDateFormatter().getLocaleDateTimeFormat(this.locale);
    }
    setMask(string) {
        const oldFormat = this._inputDateParts?.map((p) => p.format).join('');
        this._inputDateParts = DateTimeUtil.parseDateTimeFormat(string, this.locale, true);
        const value = this._inputDateParts.map((p) => p.format).join('');
        this._defaultMask = value;
        const newMask = (value || DateTimeUtil.DEFAULT_INPUT_FORMAT).replace(new RegExp(/(?=[^t])[\w]/, 'g'), '0');
        this.mask = newMask.includes('tt') ? newMask.replace(/tt/g, 'LL') : newMask;
        if (!this.placeholder || oldFormat === this.placeholder) {
            this.placeholder = value;
        }
    }
    parseDate(val) {
        return val
            ? DateTimeUtil.parseValueFromMask(val, this._inputDateParts, this.prompt)
            : null;
    }
    getMaskedValue() {
        let mask = this._parser.emptyMask;
        if (DateTimeUtil.isValidDate(this.value)) {
            for (const part of this._inputDateParts) {
                if (part.type === DateParts.Literal) {
                    continue;
                }
                const targetValue = DateTimeUtil.getPartValue(part, part.format.length, this.value);
                mask = this._parser.replace(mask, targetValue, part.start, part.end).value;
            }
            return mask;
        }
        if (this.readOnly) {
            return '';
        }
        return this._maskedValue === '' ? mask : this._maskedValue;
    }
    isComplete() {
        return !this._maskedValue.includes(this.prompt);
    }
    updateValue() {
        if (this.isComplete()) {
            const parsedDate = this.parseDate(this._maskedValue);
            this.value = DateTimeUtil.isValidDate(parsedDate) ? parsedDate : null;
        }
        else {
            this.value = null;
        }
    }
    _updateSetRangeTextValue() {
        this.updateValue();
    }
    getNewPosition(value, direction = 0) {
        const cursorPos = this._maskSelection.start;
        if (!direction) {
            const part = this._inputDateParts.findLast((part) => part.type === DateParts.Literal && part.end < cursorPos);
            return part?.end ?? 0;
        }
        const part = this._inputDateParts.find((part) => part.type === DateParts.Literal && part.start > cursorPos);
        return part?.start ?? value.length;
    }
    async handleFocus() {
        this._focused = true;
        if (this.readOnly) {
            return;
        }
        this._oldValue = this.value;
        const areFormatsDifferent = this.displayFormat !== this.inputFormat;
        if (!this.value) {
            this._maskedValue = this._parser.emptyMask;
            await this.updateComplete;
            this.select();
        }
        else if (areFormatsDifferent) {
            this.updateMask();
        }
    }
    handleBlur() {
        const isEmptyMask = this._maskedValue === this._parser.emptyMask;
        this._focused = false;
        if (!(this.isComplete() || isEmptyMask)) {
            const parse = this.parseDate(this._maskedValue);
            if (parse) {
                this.value = parse;
            }
            else {
                this.value = null;
                this._maskedValue = '';
            }
        }
        else {
            this.updateMask();
        }
        const isSameValue = this._oldValue === this.value;
        if (!(this.readOnly || isSameValue)) {
            this.emitEvent('igcChange', { detail: this.value });
        }
        super._handleBlur();
    }
    navigateParts(delta) {
        const position = this.getNewPosition(this._input?.value ?? '', delta);
        this.setSelectionRange(position, position);
    }
    async keyboardSpin(direction) {
        direction === 'up' ? this.stepUp() : this.stepDown();
        this._fireInputEvent();
        await this.updateComplete;
        this.setSelectionRange(this._maskSelection.start, this._maskSelection.end);
    }
    _renderInput() {
        return html `
      <input
        type="text"
        part=${partMap(this._resolvePartNames('input'))}
        name=${ifDefined(this.name)}
        .value=${live(this._maskedValue)}
        .placeholder=${this.placeholder || this._parser.emptyMask}
        ?readonly=${this.readOnly}
        ?disabled=${this.disabled}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @input=${this._handleInput}
        @wheel=${this.onWheel}
        @keydown=${this._setMaskSelection}
        @click=${this._handleClick}
        @cut=${this._setMaskSelection}
        @compositionstart=${this._handleCompositionStart}
        @compositionend=${this._handleCompositionEnd}
        @dragenter=${this.handleDragEnter}
        @dragleave=${this.handleDragLeave}
        @dragstart=${this._setMaskSelection}
      />
    `;
    }
}
__decorate([
    property({ attribute: 'input-format' })
], IgcDateTimeInputComponent.prototype, "inputFormat", null);
__decorate([
    property({ converter: convertToDate })
], IgcDateTimeInputComponent.prototype, "value", null);
__decorate([
    property({ converter: convertToDate })
], IgcDateTimeInputComponent.prototype, "min", null);
__decorate([
    property({ converter: convertToDate })
], IgcDateTimeInputComponent.prototype, "max", null);
__decorate([
    property({ attribute: 'display-format' })
], IgcDateTimeInputComponent.prototype, "displayFormat", null);
__decorate([
    property({ attribute: false })
], IgcDateTimeInputComponent.prototype, "spinDelta", void 0);
__decorate([
    property({ type: Boolean, attribute: 'spin-loop' })
], IgcDateTimeInputComponent.prototype, "spinLoop", void 0);
__decorate([
    property()
], IgcDateTimeInputComponent.prototype, "locale", null);
__decorate([
    watch('locale', { waitUntilFirstUpdate: true })
], IgcDateTimeInputComponent.prototype, "setDefaultMask", null);
__decorate([
    watch('displayFormat', { waitUntilFirstUpdate: true })
], IgcDateTimeInputComponent.prototype, "setDisplayFormat", null);
__decorate([
    eventOptions({ passive: false })
], IgcDateTimeInputComponent.prototype, "onWheel", null);
//# sourceMappingURL=date-time-input.js.map