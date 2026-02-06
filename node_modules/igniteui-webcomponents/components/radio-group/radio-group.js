var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { addInternalsController } from '../common/controllers/internals.js';
import { createMutationController } from '../common/controllers/mutation-observer.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import IgcRadioComponent from '../radio/radio.js';
import { styles } from './themes/radio-group.base.css.js';
import { styles as shared } from './themes/shared/radio-group.common.css.js';
import { all } from './themes/themes.js';
export default class IgcRadioGroupComponent extends LitElement {
    static { this.tagName = 'igc-radio-group'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcRadioGroupComponent, IgcRadioComponent);
    }
    set defaultValue(value) {
        this._defaultValue = value;
        this._setRadiosDefaultChecked();
    }
    get defaultValue() {
        return this._defaultValue;
    }
    set name(value) {
        this._name = value;
        this._setRadiosName();
    }
    get name() {
        return this._name;
    }
    set value(value) {
        this._value = value;
        this._setSelectedRadio();
    }
    get value() {
        if (this._radios.length) {
            this._value = this._radios.find((radio) => radio.checked)?.value ?? '';
        }
        return this._value;
    }
    constructor() {
        super();
        this._internals = addInternalsController(this, {
            initialARIA: {
                role: 'radiogroup',
            },
        });
        this._slots = addSlotController(this, {
            slots: setSlots(),
            onChange: this._handleSlotChange,
            initial: true,
        });
        this._radios = [];
        this.alignment = 'vertical';
        addThemingController(this, all);
        createMutationController(this, {
            callback: this._observerCallback,
            filter: [IgcRadioComponent.tagName],
            config: {
                attributeFilter: ['disabled', 'label-position'],
                subtree: true,
            },
        });
    }
    firstUpdated() {
        const radios = Array.from(this._radios);
        const allRadiosUnchecked = radios.every((radio) => !radio.checked);
        this._setRadiosName();
        this._setRadiosDefaultChecked();
        if (allRadiosUnchecked && this._value) {
            this._setSelectedRadio();
            this._setDefaultValue();
        }
    }
    _observerCallback() {
        const disabled = this._radios.every((radio) => radio.disabled);
        const labeBefore = this._radios.some((radio) => radio.labelPosition === 'before');
        this._internals.setState('disabled', disabled);
        this._internals.setState('label-before', labeBefore);
    }
    _handleSlotChange() {
        this._radios = this._slots.getAssignedElements('[default]', {
            selector: IgcRadioComponent.tagName,
            flatten: true,
        });
        const elements = this._slots.getAssignedElements('[default]', {
            flatten: true,
        });
        this.style.setProperty('--layout-count', elements.length.toString());
    }
    _setRadiosDefaultChecked() {
        if (this._defaultValue) {
            for (const radio of this._radios) {
                radio.defaultChecked = radio.value === this._defaultValue;
            }
        }
    }
    _setRadiosName() {
        if (this._name) {
            for (const radio of this._radios) {
                radio.name = this._name;
            }
        }
    }
    _setDefaultValue() {
        for (const radio of this._radios) {
            radio.toggleAttribute('checked', radio.checked);
        }
    }
    _setSelectedRadio() {
        for (const radio of this._radios) {
            radio.checked = radio.value === this._value;
        }
    }
    render() {
        return html `<slot></slot>`;
    }
}
__decorate([
    property({ reflect: true })
], IgcRadioGroupComponent.prototype, "alignment", void 0);
__decorate([
    property({ attribute: false })
], IgcRadioGroupComponent.prototype, "defaultValue", null);
__decorate([
    property({ reflect: true })
], IgcRadioGroupComponent.prototype, "name", null);
__decorate([
    property()
], IgcRadioGroupComponent.prototype, "value", null);
//# sourceMappingURL=radio-group.js.map