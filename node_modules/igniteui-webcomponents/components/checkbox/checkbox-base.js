var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { addKeyboardFocusRing } from '../common/controllers/focus-ring.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { blazorDeepImport } from '../common/decorators/blazorDeepImport.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { FormAssociatedCheckboxRequiredMixin } from '../common/mixins/forms/associated-required.js';
import { FormValueBooleanTransformers } from '../common/mixins/forms/form-transformers.js';
import { createFormValueState } from '../common/mixins/forms/form-value.js';
import { checkBoxValidators } from './validators.js';
let IgcCheckboxBaseComponent = class IgcCheckboxBaseComponent extends FormAssociatedCheckboxRequiredMixin(EventEmitterMixin(LitElement)) {
    constructor() {
        super(...arguments);
        this._slots = addSlotController(this, {
            slots: setSlots('helper-text', 'value-missing', 'custom-error', 'invalid'),
            onChange: this._handleSlotChange,
        });
        this._focusRingManager = addKeyboardFocusRing(this);
        this._formValue = createFormValueState(this, {
            initialValue: false,
            transformers: FormValueBooleanTransformers,
        });
        this._hideLabel = true;
        this.labelPosition = 'after';
    }
    get __validators() {
        return checkBoxValidators;
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
    }
    get checked() {
        return this._formValue.value;
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
    _handleSlotChange() {
        this._hideLabel = !this._slots.hasAssignedNodes('[default]');
    }
    _handleClick(event) {
        event.stopPropagation();
        this._setTouchedState();
        this.checked = !this.checked;
        this.emitEvent('igcChange', {
            detail: { checked: this.checked, value: this.value },
        });
    }
};
__decorate([
    query('input', true)
], IgcCheckboxBaseComponent.prototype, "_input", void 0);
__decorate([
    state()
], IgcCheckboxBaseComponent.prototype, "_hideLabel", void 0);
__decorate([
    property()
], IgcCheckboxBaseComponent.prototype, "value", null);
__decorate([
    property({ type: Boolean })
], IgcCheckboxBaseComponent.prototype, "checked", null);
__decorate([
    property({ reflect: true, attribute: 'label-position' })
], IgcCheckboxBaseComponent.prototype, "labelPosition", void 0);
IgcCheckboxBaseComponent = __decorate([
    blazorDeepImport
], IgcCheckboxBaseComponent);
export { IgcCheckboxBaseComponent };
//# sourceMappingURL=checkbox-base.js.map