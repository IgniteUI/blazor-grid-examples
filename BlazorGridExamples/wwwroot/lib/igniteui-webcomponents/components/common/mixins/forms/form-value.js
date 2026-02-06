import { FormValueDefaultTransformers, } from './form-transformers.js';
export class FormValue {
    static { this.setFormValueKey = '_setFormValue'; }
    constructor(host, config) {
        this._host = host;
        this._value = config.initialValue;
        this._defaultValue = config.initialDefaultValue ?? this._value;
        this._setFormValue = host[FormValue.setFormValueKey];
        this._transformers = {
            ...FormValueDefaultTransformers,
            ...config.transformers,
        };
    }
    setValueAndFormState(value) {
        this.value = value;
        this._setFormValue.call(this._host, this._transformers.setFormValue(this.value, this._host));
    }
    set defaultValue(value) {
        this._defaultValue = this._transformers.setDefaultValue(value);
    }
    get defaultValue() {
        return this._transformers.getDefaultValue(this._defaultValue);
    }
    set value(value) {
        this._value = this._transformers.setValue(value);
    }
    get value() {
        return this._transformers.getValue(this._value);
    }
}
export function createFormValueState(host, config) {
    return new FormValue(host, config);
}
//# sourceMappingURL=form-value.js.map