var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { addKeyboardFocusRing } from '../common/controllers/focus-ring.js';
import { addKeybindings, arrowDown, arrowLeft, arrowRight, arrowUp, } from '../common/controllers/key-bindings.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { FormAssociatedCheckboxRequiredMixin } from '../common/mixins/forms/associated-required.js';
import { FormValueBooleanTransformers } from '../common/mixins/forms/form-transformers.js';
import { createFormValueState } from '../common/mixins/forms/form-value.js';
import { partMap } from '../common/part-map.js';
import { isDefined, isEmpty, isLTR, last, wrap } from '../common/util.js';
import IgcValidationContainerComponent from '../validation-container/validation-container.js';
import { styles } from './themes/radio.base.css.js';
import { styles as shared } from './themes/shared/radio.common.css.js';
import { all } from './themes/themes.js';
import { getGroup } from './utils.js';
import { radioValidators } from './validators.js';
let nextId = 1;
export default class IgcRadioComponent extends FormAssociatedCheckboxRequiredMixin(EventEmitterMixin(LitElement)) {
    static { this.tagName = 'igc-radio'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcRadioComponent, IgcValidationContainerComponent);
    }
    get __validators() {
        return radioValidators;
    }
    get _radios() {
        return getGroup(this).radios;
    }
    get _siblings() {
        return getGroup(this).siblings;
    }
    get _active() {
        return getGroup(this).active;
    }
    get _checkedRadios() {
        return getGroup(this).checked;
    }
    set required(value) {
        super.required = value;
        if (this.hasUpdated) {
            for (const radio of this._siblings) {
                radio._validate();
            }
        }
    }
    get required() {
        return this._required;
    }
    set value(value) {
        this._value = value;
        if (this.checked) {
            this._formValue.setValueAndFormState(this.checked);
        }
    }
    get value() {
        return this._value;
    }
    set checked(value) {
        this._formValue.setValueAndFormState(value);
        this._tabIndex = this.checked ? 0 : -1;
        if (this.hasUpdated && this.checked) {
            this._updateCheckedState();
        }
    }
    get checked() {
        return this._formValue.value;
    }
    constructor() {
        super();
        this._inputId = `radio-${nextId++}`;
        this._labelId = `radio-label-${this._inputId}`;
        this._focusRingManager = addKeyboardFocusRing(this);
        this._slots = addSlotController(this, {
            slots: setSlots('helper-text', 'value-missing', 'custom-error', 'invalid'),
            onChange: this._handleSlotChange,
        });
        this._formValue = createFormValueState(this, {
            initialValue: false,
            transformers: FormValueBooleanTransformers,
        });
        this._hideLabel = true;
        this._tabIndex = 0;
        this.labelPosition = 'after';
        addThemingController(this, all);
        addKeybindings(this, {
            skip: () => this.disabled,
            bindingDefaults: { preventDefault: true, triggers: ['keydownRepeat'] },
        })
            .set(arrowLeft, () => this._navigate(isLTR(this) ? -1 : 1))
            .set(arrowRight, () => this._navigate(isLTR(this) ? 1 : -1))
            .set(arrowUp, () => this._navigate(-1))
            .set(arrowDown, () => this._navigate(1));
    }
    async firstUpdated() {
        await this.updateComplete;
        if (this.checked && this === last(this._checkedRadios)) {
            for (const radio of this._siblings) {
                radio.checked = false;
                radio.defaultChecked = false;
            }
        }
        else {
            this._validate();
        }
    }
    _handleSlotChange() {
        this._hideLabel = !this._slots.hasAssignedNodes('[default]', true);
    }
    _setDefaultValue(current) {
        this._formValue.defaultValue = isDefined(current);
        for (const radio of this._siblings) {
            radio.defaultChecked = false;
        }
    }
    click() {
        this._input.click();
    }
    focus(options) {
        this._input.focus(options);
    }
    blur() {
        this._input.blur();
    }
    _checkValidity() {
        return super.checkValidity();
    }
    _reportValidity() {
        return super.reportValidity();
    }
    checkValidity() {
        for (const radio of this._siblings) {
            radio._checkValidity();
        }
        return this._checkValidity();
    }
    reportValidity() {
        for (const radio of this._siblings) {
            radio._reportValidity();
        }
        return this._reportValidity();
    }
    setCustomValidity(message) {
        for (const radio of this._radios) {
            radio._validate(message);
        }
    }
    _updateCheckedState() {
        for (const radio of this._siblings) {
            radio.checked = false;
        }
    }
    formResetCallback() {
        super.formResetCallback();
        this._resetTabIndexes();
        this.updateComplete.then(() => this._validate());
    }
    _resetTabIndexes() {
        const radios = this._radios;
        if (isEmpty(this._checkedRadios)) {
            for (const radio of radios) {
                radio._tabIndex = 0;
            }
        }
        else {
            for (const radio of radios) {
                radio._tabIndex = radio.checked ? 0 : -1;
            }
        }
    }
    _handleClick(event) {
        event.stopPropagation();
        this._setTouchedState();
        if (this.checked) {
            return;
        }
        this.checked = true;
        this._input.focus();
        this.emitEvent('igcChange', {
            detail: {
                checked: this.checked,
                value: this.value,
            },
        });
    }
    _navigate(idx) {
        const active = this._active;
        const next = wrap(0, active.length - 1, active.indexOf(this) + idx);
        const radio = active[next];
        this._setTouchedState();
        radio.focus();
        radio.checked = true;
        radio.emitEvent('igcChange', {
            detail: { checked: radio.checked, value: radio.value },
        });
    }
    _renderValidatorContainer() {
        return IgcValidationContainerComponent.create(this);
    }
    render() {
        const labelledBy = this.getAttribute('aria-labelledby');
        const describedBy = this._slots.hasAssignedElements('helper-text')
            ? 'helper-text'
            : nothing;
        const checked = this.checked;
        return html `
      <label
        part=${partMap({
            base: true,
            checked,
            focused: this._focusRingManager.focused,
        })}
        for=${this._inputId}
      >
        <input
          id=${this._inputId}
          type="radio"
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          ?required=${this.required}
          ?disabled=${this.disabled}
          .checked=${live(checked)}
          tabindex=${this._tabIndex}
          aria-labelledby=${labelledBy ? labelledBy : this._labelId}
          aria-describedby=${describedBy}
          @click=${this._handleClick}
        />
        <span part=${partMap({ control: true, checked })}>
          <span
            part=${partMap({ ripple: true, checked })}
            ?hidden=${this.disabled}
          ></span>
        </span>
        <span
          id=${this._labelId}
          part=${partMap({ label: true, checked })}
          ?hidden=${this._hideLabel}
        >
          <slot></slot>
        </span>
      </label>
      ${this._renderValidatorContainer()}
    `;
    }
}
__decorate([
    query('input', true)
], IgcRadioComponent.prototype, "_input", void 0);
__decorate([
    state()
], IgcRadioComponent.prototype, "_hideLabel", void 0);
__decorate([
    state()
], IgcRadioComponent.prototype, "_tabIndex", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcRadioComponent.prototype, "required", null);
__decorate([
    property()
], IgcRadioComponent.prototype, "value", null);
__decorate([
    property({ type: Boolean })
], IgcRadioComponent.prototype, "checked", null);
__decorate([
    property({ reflect: true, attribute: 'label-position' })
], IgcRadioComponent.prototype, "labelPosition", void 0);
//# sourceMappingURL=radio.js.map