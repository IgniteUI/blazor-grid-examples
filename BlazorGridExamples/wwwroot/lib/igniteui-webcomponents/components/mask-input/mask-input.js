var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { createFormValueState } from '../common/mixins/forms/form-value.js';
import { partMap } from '../common/part-map.js';
import { bindIf } from '../common/util.js';
import { styles } from '../input/themes/input.base.css.js';
import { styles as shared } from '../input/themes/shared/input.common.css.js';
import { all } from '../input/themes/themes.js';
import IgcValidationContainerComponent from '../validation-container/validation-container.js';
import { IgcMaskInputBaseComponent, } from './mask-input-base.js';
import { maskValidators } from './validators.js';
const Slots = setSlots('prefix', 'suffix', 'helper-text', 'value-missing', 'bad-input', 'custom-error', 'invalid');
export default class IgcMaskInputComponent extends IgcMaskInputBaseComponent {
    constructor() {
        super(...arguments);
        this._themes = addThemingController(this, all);
        this._slots = addSlotController(this, {
            slots: Slots,
        });
        this._formValue = createFormValueState(this, {
            initialValue: '',
            transformers: {
                setFormValue: (value) => this._isRawMode ? value || null : this._maskedValue || null,
            },
        });
        this.valueMode = 'raw';
    }
    static { this.tagName = 'igc-mask-input'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcMaskInputComponent, IgcValidationContainerComponent);
    }
    get __validators() {
        return maskValidators;
    }
    get _isRawMode() {
        return this.valueMode === 'raw';
    }
    set value(string) {
        const value = string ?? '';
        this._maskedValue = this._parser.apply(value);
        this._updateMaskedValue();
        this._formValue.setValueAndFormState(value);
    }
    get value() {
        const value = this._formValue.value;
        if (this._isRawMode) {
            return value;
        }
        return value ? this._maskedValue : value;
    }
    set mask(value) {
        super.mask = value;
        if (this.value) {
            this._maskedValue = this._parser.apply(this._formValue.value);
        }
    }
    get mask() {
        return super.mask;
    }
    set prompt(value) {
        super.prompt = value;
        if (this.value) {
            this._maskedValue = this._parser.apply(this._formValue.value);
        }
    }
    get prompt() {
        return super.prompt;
    }
    _handleDragEnter() {
        if (!this._focused && !this._formValue.value) {
            this._maskedValue = this._parser.emptyMask;
        }
    }
    _handleDragLeave() {
        if (!this._focused) {
            this._updateMaskedValue();
        }
    }
    async _handleFocus() {
        this._focused = true;
        if (this.readOnly) {
            return;
        }
        if (!this._formValue.value) {
            this._maskedValue = this._parser.emptyMask;
            await this.updateComplete;
            this.select();
        }
    }
    _handleBlur() {
        this._focused = false;
        this._updateMaskedValue();
        super._handleBlur();
    }
    _handleChange() {
        this._setTouchedState();
        this.emitEvent('igcChange', { detail: this.value });
    }
    _restoreDefaultValue() {
        const value = this.defaultValue;
        this._maskedValue = this._parser.apply(value);
        this._updateMaskedValue();
        this._formValue.setValueAndFormState(value);
    }
    async _updateInput(text, { start, end }) {
        const result = this._parser.replace(this._maskedValue, text, start, end);
        this._maskedValue = result.value;
        this._formValue.setValueAndFormState(this._parser.parse(this._maskedValue));
        this.requestUpdate();
        if (start !== this.mask.length) {
            this.emitEvent('igcInput', { detail: this.value });
        }
        await this.updateComplete;
        this._input?.setSelectionRange(result.end, result.end);
    }
    _updateSetRangeTextValue() {
        this.value = this._parser.parse(this._maskedValue);
    }
    _updateMaskedValue() {
        if (this._maskedValue === this._parser.emptyMask) {
            this._maskedValue = '';
        }
    }
    isValidMaskPattern() {
        return this._parser.isValidString(this._maskedValue);
    }
    _renderInput() {
        const hasNegativeTabIndex = this.getAttribute('tabindex') === '-1';
        const hasHelperText = this._slots.hasAssignedElements('helper-text');
        return html `
      <input
        id=${this._inputId}
        type="text"
        part=${partMap(this._resolvePartNames('input'))}
        name=${ifDefined(this.name)}
        .value=${live(this._maskedValue)}
        .placeholder=${this.placeholder ?? this._parser.escapedMask}
        ?readonly=${this.readOnly}
        ?disabled=${this.disabled}
        ?autofocus=${this.autofocus}
        inputmode=${ifDefined(this.inputMode)}
        tabindex=${bindIf(hasNegativeTabIndex, -1)}
        aria-describedby=${bindIf(hasHelperText, 'helper-text')}
        @dragenter=${this._handleDragEnter}
        @dragleave=${this._handleDragLeave}
        @dragstart=${this._setMaskSelection}
        @blur=${this._handleBlur}
        @focus=${this._handleFocus}
        @cut=${this._setMaskSelection}
        @change=${this._handleChange}
        @click=${this._handleClick}
        @compositionstart=${this._handleCompositionStart}
        @compositionend=${this._handleCompositionEnd}
        @input=${this._handleInput}
        @keydown=${this._setMaskSelection}
      />
    `;
    }
}
__decorate([
    property({ attribute: 'value-mode' })
], IgcMaskInputComponent.prototype, "valueMode", void 0);
__decorate([
    property()
], IgcMaskInputComponent.prototype, "value", null);
__decorate([
    property()
], IgcMaskInputComponent.prototype, "mask", null);
__decorate([
    property()
], IgcMaskInputComponent.prototype, "prompt", null);
//# sourceMappingURL=mask-input.js.map