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
import IgcValidationContainerComponent from '../validation-container/validation-container.js';
import { IgcInputBaseComponent } from './input-base.js';
import { styles } from './themes/input.base.css.js';
import { styles as shared } from './themes/shared/input.common.css.js';
import { all } from './themes/themes.js';
import { numberValidators, stringValidators } from './validators.js';
const Slots = setSlots('prefix', 'suffix', 'helper-text', 'value-missing', 'type-mismatch', 'pattern-mismatch', 'too-long', 'too-short', 'range-overflow', 'range-underflow', 'step-mismatch', 'custom-error', 'invalid');
export default class IgcInputComponent extends IgcInputBaseComponent {
    constructor() {
        super(...arguments);
        this._themes = addThemingController(this, all);
        this._slots = addSlotController(this, {
            slots: Slots,
        });
        this._formValue = createFormValueState(this, {
            initialValue: '',
        });
        this.type = 'text';
        this.readOnly = false;
        this.validateOnly = false;
    }
    static { this.tagName = 'igc-input'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcInputComponent, IgcValidationContainerComponent);
    }
    get __validators() {
        return this.type !== 'number' ? stringValidators : numberValidators;
    }
    set value(value) {
        this._formValue.setValueAndFormState(value);
    }
    get value() {
        return this._formValue.value;
    }
    set pattern(value) {
        this._pattern = value;
        this._validate();
    }
    get pattern() {
        return this._pattern;
    }
    set minLength(value) {
        this._minLength = value;
        this._validate();
    }
    get minLength() {
        return this._minLength;
    }
    set maxLength(value) {
        this._maxLength = value;
        this._validate();
    }
    get maxLength() {
        return this._maxLength;
    }
    set min(value) {
        this._min = value;
        this._validate();
    }
    get min() {
        return this._min;
    }
    set max(value) {
        this._max = value;
        this._validate();
    }
    get max() {
        return this._max;
    }
    set step(value) {
        this._step = value;
        this._validate();
    }
    get step() {
        return this._step;
    }
    setRangeText(replacement, start, end, selectMode = 'preserve') {
        this._input?.setRangeText(replacement, start, end, selectMode);
        this.value = this._input?.value ?? '';
    }
    setSelectionRange(start, end, direction = 'none') {
        this._input?.setSelectionRange(start ?? null, end ?? null, direction);
    }
    stepUp(n) {
        this._input?.stepUp(n);
        this.value = this._input?.value ?? '';
    }
    stepDown(n) {
        this._input?.stepDown(n);
        this.value = this._input?.value ?? '';
    }
    _handleInput() {
        this._setTouchedState();
        this.value = this._input?.value ?? '';
        this.emitEvent('igcInput', { detail: this.value });
    }
    _handleChange() {
        this._setTouchedState();
        this.value = this._input?.value ?? '';
        this.emitEvent('igcChange', { detail: this.value });
    }
    _renderInput() {
        const hasNegativeTabIndex = this.getAttribute('tabindex') === '-1';
        const hasHelperText = this._slots.hasAssignedElements('helper-text');
        return html `
      <input
        id=${this._inputId}
        part=${partMap(this._resolvePartNames('input'))}
        name=${ifDefined(this.name)}
        type=${ifDefined(this.type)}
        pattern=${ifDefined(this.pattern)}
        placeholder=${ifDefined(this.placeholder)}
        .value=${live(this.value)}
        ?readonly=${this.readOnly}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?autofocus=${this.autofocus}
        tabindex=${bindIf(hasNegativeTabIndex, -1)}
        autocomplete=${ifDefined(this.autocomplete)}
        inputmode=${ifDefined(this.inputMode)}
        min=${bindIf(!this.validateOnly, this.min)}
        max=${bindIf(!this.validateOnly, this.max)}
        minlength=${ifDefined(this.minLength)}
        maxlength=${bindIf(!this.validateOnly, this.maxLength)}
        step=${ifDefined(this.step)}
        aria-describedby=${bindIf(hasHelperText, 'helper-text')}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @blur=${this._handleBlur}
      />
    `;
    }
}
__decorate([
    property()
], IgcInputComponent.prototype, "value", null);
__decorate([
    property({ reflect: true })
], IgcInputComponent.prototype, "type", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcInputComponent.prototype, "readOnly", void 0);
__decorate([
    property({ attribute: 'inputmode' })
], IgcInputComponent.prototype, "inputMode", void 0);
__decorate([
    property()
], IgcInputComponent.prototype, "pattern", null);
__decorate([
    property({ type: Number, attribute: 'minlength' })
], IgcInputComponent.prototype, "minLength", null);
__decorate([
    property({ type: Number, attribute: 'maxlength' })
], IgcInputComponent.prototype, "maxLength", null);
__decorate([
    property({ type: Number })
], IgcInputComponent.prototype, "min", null);
__decorate([
    property({ type: Number })
], IgcInputComponent.prototype, "max", null);
__decorate([
    property({ type: Number })
], IgcInputComponent.prototype, "step", null);
__decorate([
    property({ type: Boolean })
], IgcInputComponent.prototype, "autofocus", void 0);
__decorate([
    property()
], IgcInputComponent.prototype, "autocomplete", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'validate-only' })
], IgcInputComponent.prototype, "validateOnly", void 0);
//# sourceMappingURL=input.js.map