class ElementInternalsController {
    get form() {
        return this._internals.form;
    }
    get validity() {
        return this._internals.validity;
    }
    get validationMessage() {
        return this._internals.validationMessage;
    }
    get willValidate() {
        return this._internals.willValidate;
    }
    constructor(host, config) {
        this._host = host;
        this._internals = this._host.attachInternals();
        if (config?.initialARIA) {
            this.setARIA(config.initialARIA);
        }
        host.addController(this);
    }
    setARIA(state) {
        Object.assign(this._internals, state);
    }
    setState(state, value) {
        value
            ? this._internals.states.add(state)
            : this._internals.states.delete(state);
    }
    setFormValue(value, state) {
        this._internals.setFormValue(value, state);
    }
    setValidity(flags, message) {
        this._internals.setValidity(flags, message);
    }
    checkValidity() {
        return this._internals.checkValidity();
    }
    reportValidity() {
        return this._internals.reportValidity();
    }
}
export function addInternalsController(host, config) {
    return new ElementInternalsController(host, config);
}
//# sourceMappingURL=internals.js.map