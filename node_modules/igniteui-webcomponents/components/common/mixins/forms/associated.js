var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { property } from 'lit/decorators.js';
import { addInternalsController } from '../../controllers/internals.js';
import { addSafeEventListener, isFunction, isString } from '../../util.js';
import { InternalInvalidEvent, InternalResetEvent, } from './types.js';
const INVALID_STATE = 'ig-invalid';
const eventOptions = {
    bubbles: false,
    composed: false,
};
function emitFormInvalidEvent(host) {
    host.dispatchEvent(new CustomEvent(InternalInvalidEvent, eventOptions));
}
function emitFormResetEvent(host) {
    host.dispatchEvent(new CustomEvent(InternalResetEvent, eventOptions));
}
function BaseFormAssociated(base) {
    class BaseFormAssociatedElement extends base {
        static { this.formAssociated = true; }
        get _hasUserInteraction() {
            return this._touched || this._isFormSubmit;
        }
        get _shouldApplyStyles() {
            if (this._isExternalInvalid) {
                return true;
            }
            return (this._invalid && this._hasUserInteraction && !this._isInternalValidation);
        }
        get __validators() {
            return [];
        }
        set disabled(value) {
            this._disabled = value;
            this.toggleAttribute('disabled', Boolean(this._disabled));
        }
        get disabled() {
            return this._disabled;
        }
        set invalid(value) {
            this._isExternalInvalid = value;
            this._setInvalidStyles();
        }
        get invalid() {
            return this._isExternalInvalid || this._shouldApplyStyles;
        }
        get form() {
            return this.__internals.form;
        }
        get validity() {
            return this.__internals.validity;
        }
        get validationMessage() {
            return this.__internals.validationMessage;
        }
        get willValidate() {
            return this.__internals.willValidate;
        }
        constructor(...args) {
            super(args);
            this.__internals = addInternalsController(this);
            this._isFormSubmit = false;
            this._isInternalValidation = false;
            this._touched = false;
            this._isExternalInvalid = false;
            this._disabled = false;
            this._invalid = false;
            this._pristine = true;
            addSafeEventListener(this, 'invalid', this._handleInvalid);
        }
        connectedCallback() {
            super.connectedCallback();
            this._pristine = true;
            this._touched = false;
            this._validate();
        }
        async _handleInvalid(event) {
            event.preventDefault();
            this._invalid = true;
            if (this._isInternalValidation) {
                this._isInternalValidation = false;
            }
            else {
                this._isFormSubmit = true;
                emitFormInvalidEvent(this);
            }
            this._setInvalidStyles();
            this.requestUpdate();
            if (this._isFormSubmit) {
                await this.updateComplete;
                this._isFormSubmit = false;
            }
        }
        _setInvalidStyles() {
            this.__internals.setState(INVALID_STATE, this._shouldApplyStyles);
        }
        __runValidators() {
            const validity = {};
            let message = '';
            let validationFailed = false;
            for (const validator of this.__validators) {
                const isValid = validator.isValid(this);
                validity[validator.key] = !isValid;
                if (!isValid) {
                    validationFailed = true;
                    message = isFunction(validator.message)
                        ? validator.message(this)
                        : validator.message;
                }
            }
            this._invalid = validationFailed;
            return { validity, message };
        }
        _validate(userMessage) {
            let { validity, message } = this.__runValidators();
            const hasCustomError = this.validity.customError;
            if (validity.valueMissing) {
                validity = {
                    valueMissing: true,
                    customError: hasCustomError,
                };
            }
            if (hasCustomError && userMessage === undefined) {
                validity.customError = true;
                message = this.validationMessage;
            }
            else if (hasCustomError && userMessage === '') {
                validity.customError = false;
            }
            else if (userMessage && userMessage !== '') {
                validity.customError = true;
                message = userMessage;
            }
            this.__internals.setValidity(validity, message);
            this._isInternalValidation = true;
            this._invalid = !this.__internals.checkValidity();
        }
        _handleBlur() {
            this._setTouchedState();
            this._validate();
        }
        _setTouchedState() {
            if (!this._touched) {
                this._touched = true;
            }
        }
        _setDefaultValue(current) {
            this._formValue.defaultValue = current;
        }
        _restoreDefaultValue() {
            const value = this._formValue.value;
            this._formValue.setValueAndFormState(this._formValue.defaultValue);
            this.requestUpdate('value', value);
        }
        _setFormValue(value, state) {
            this._pristine = false;
            this.__internals.setFormValue(value, state);
            this._validate();
            this._setInvalidStyles();
        }
        formAssociatedCallback(_form) { }
        formDisabledCallback(state) {
            this._disabled = state;
            this.requestUpdate();
        }
        formResetCallback() {
            this._restoreDefaultValue();
            this._pristine = true;
            this._touched = false;
            this._invalid = false;
            this._setInvalidStyles();
            emitFormResetEvent(this);
        }
        formStateRestoreCallback(_state, _mode) { }
        reportValidity() {
            const state = this.__internals.reportValidity();
            this._invalid = !state;
            return state;
        }
        checkValidity() {
            this._isInternalValidation = true;
            const state = this.__internals.checkValidity();
            this._invalid = !state;
            return state;
        }
        setCustomValidity(message) {
            this._validate(message);
            this._isInternalValidation = message === '';
            this._setInvalidStyles();
            this.requestUpdate();
        }
    }
    __decorate([
        property({ reflect: true })
    ], BaseFormAssociatedElement.prototype, "name", void 0);
    __decorate([
        property({ type: Boolean, reflect: true })
    ], BaseFormAssociatedElement.prototype, "disabled", null);
    __decorate([
        property({ type: Boolean })
    ], BaseFormAssociatedElement.prototype, "invalid", null);
    return BaseFormAssociatedElement;
}
export function FormAssociatedMixin(base) {
    class FormAssociatedElement extends BaseFormAssociated(base) {
        set defaultValue(value) {
            this._formValue.defaultValue = value;
            if (this._pristine && 'value' in this) {
                this.value = this.defaultValue;
                this._pristine = true;
                this._validate();
            }
        }
        get defaultValue() {
            return this._formValue.defaultValue;
        }
        attributeChangedCallback(name, prev, current) {
            super.attributeChangedCallback(name, prev, current);
            if (name === 'value') {
                this._setDefaultValue(current);
            }
        }
    }
    __decorate([
        property({ attribute: false })
    ], FormAssociatedElement.prototype, "defaultValue", null);
    return FormAssociatedElement;
}
export function FormAssociatedCheckboxMixin(base) {
    class FormAssociatedCheckboxElement extends BaseFormAssociated(base) {
        set defaultChecked(value) {
            this._formValue.defaultValue = value;
            if (this._pristine && 'checked' in this) {
                this.checked = this.defaultChecked;
                this._pristine = true;
                this._validate();
            }
        }
        get defaultChecked() {
            return this._formValue.defaultValue;
        }
        attributeChangedCallback(name, prev, current) {
            super.attributeChangedCallback(name, prev, current);
            if (name === 'checked') {
                this._setDefaultValue(isString(current) ? 'true' : null);
            }
        }
    }
    __decorate([
        property({ attribute: false })
    ], FormAssociatedCheckboxElement.prototype, "defaultChecked", null);
    return FormAssociatedCheckboxElement;
}
//# sourceMappingURL=associated.js.map