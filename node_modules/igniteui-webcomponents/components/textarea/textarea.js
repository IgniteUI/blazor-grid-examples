var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IgcTextareaComponent_1;
import { html, LitElement, nothing, } from 'lit';
import { property, query } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { styleMap } from 'lit/directives/style-map.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { createResizeObserverController } from '../common/controllers/resize-observer.js';
import { addSlotController, setSlots, } from '../common/controllers/slot.js';
import { shadowOptions } from '../common/decorators/shadow-options.js';
import { registerComponent } from '../common/definitions/register.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { FormAssociatedRequiredMixin } from '../common/mixins/forms/associated-required.js';
import { createFormValueState } from '../common/mixins/forms/form-value.js';
import { partMap } from '../common/part-map.js';
import { addSafeEventListener, asNumber } from '../common/util.js';
import IgcValidationContainerComponent from '../validation-container/validation-container.js';
import { styles as shared } from './themes/shared/textarea.common.css.js';
import { styles } from './themes/textarea.base.css.js';
import { all } from './themes/themes.js';
import { textAreaValidators } from './validators.js';
let nextId = 1;
const Slots = setSlots('prefix', 'suffix', 'helper-text', 'value-missing', 'too-long', 'too-short', 'custom-error', 'invalid');
let IgcTextareaComponent = class IgcTextareaComponent extends FormAssociatedRequiredMixin(EventEmitterMixin(LitElement)) {
    static { IgcTextareaComponent_1 = this; }
    static { this.tagName = 'igc-textarea'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcTextareaComponent_1, IgcValidationContainerComponent);
    }
    get __validators() {
        return textAreaValidators;
    }
    set value(value) {
        this._formValue.setValueAndFormState(value);
    }
    get value() {
        return this._formValue.value;
    }
    constructor() {
        super();
        this._inputId = `textarea-${nextId++}`;
        this._themes = addThemingController(this, all);
        this._slots = addSlotController(this, {
            slots: Slots,
            onChange: this._handleSlotChange,
        });
        this._formValue = createFormValueState(this, {
            initialValue: '',
        });
        this.outlined = false;
        this.readOnly = false;
        this.resize = 'vertical';
        this.rows = 3;
        this.spellcheck = true;
        this.wrap = 'soft';
        this.validateOnly = false;
        createResizeObserverController(this, {
            callback: this._setAreaHeight,
        });
        addSafeEventListener(this, 'blur', this._handleBlur);
    }
    updated(props) {
        if (props.has('rows') || props.has('resize') || props.has('value')) {
            this._setAreaHeight();
        }
    }
    _setAutoHeight() {
        const { borderTopWidth, borderBottomWidth } = getComputedStyle(this._input);
        return (this._input.scrollHeight +
            asNumber(borderTopWidth) +
            asNumber(borderBottomWidth));
    }
    _setAreaHeight() {
        if (this.resize === 'auto') {
            this._input.style.height = 'auto';
            this._input.style.height = `${this._setAutoHeight()}px`;
        }
        else {
            Object.assign(this._input.style, { height: undefined });
        }
    }
    _resolvePartNames() {
        return {
            container: true,
            prefixed: this._slots.hasAssignedElements('prefix', {
                selector: ':not([hidden])',
            }),
            suffixed: this._slots.hasAssignedElements('suffix', {
                selector: ':not([hidden])',
            }),
            filled: !!this.value,
        };
    }
    _handleSlotChange({ isDefault, }) {
        if (isDefault) {
            const value = this._slots
                .getAssignedNodes('[default]', true)
                .map((node) => node.textContent?.trim())
                .filter((node) => Boolean(node))
                .join('\r\n');
            if (value !== this.value) {
                this.value = value;
            }
        }
    }
    _handleInput() {
        this._setTouchedState();
        this.value = this._input.value;
        this.emitEvent('igcInput', { detail: this.value });
    }
    _handleChange() {
        this._setTouchedState();
        this.value = this._input.value;
        this.emitEvent('igcChange', { detail: this.value });
    }
    select() {
        this._input.select();
    }
    setSelectionRange(start, end, direction = 'none') {
        this._input.setSelectionRange(start, end, direction);
    }
    setRangeText(replacement, start, end, selectMode = 'preserve') {
        this._input.setRangeText(replacement, start, end, selectMode);
        this.value = this._input.value;
    }
    scrollTo(x, y) {
        x != null && y != null
            ? this._input.scrollTo(x, y)
            : this._input.scrollTo(x);
    }
    _renderSlot(name) {
        const isHidden = !this._slots.hasAssignedElements(name, {
            selector: ':not([hidden])',
        });
        return html `
      <div part=${name} ?hidden=${isHidden}>
        <slot name=${name}></slot>
      </div>
    `;
    }
    _renderLabel() {
        return this.label
            ? html `
          <label part="label" for=${this.id || this._inputId}>
            ${this.label}
          </label>
        `
            : nothing;
    }
    _renderStandard() {
        return html `
      ${this._renderLabel()}
      <div part=${partMap(this._resolvePartNames())}>
        ${this._renderSlot('prefix')} ${this._renderInput()}
        ${this._renderSlot('suffix')}
      </div>
      ${this._renderValidationContainer()}
    `;
    }
    _renderMaterial() {
        return html `
      <div
        part=${partMap({
            ...this._resolvePartNames(),
            labelled: !!this.label,
            placeholder: !!this.placeholder,
        })}
      >
        <div part="start">${this._renderSlot('prefix')}</div>
        ${this._renderInput()}
        <div part="notch">${this._renderLabel()}</div>
        <div part="filler"></div>
        <div part="end">${this._renderSlot('suffix')}</div>
      </div>
      ${this._renderValidationContainer()}
    `;
    }
    _renderInput() {
        const describedBy = this._slots.hasAssignedElements('helper-text')
            ? 'helper-text'
            : nothing;
        return html `
      <slot style="display: none"></slot>
      <textarea
        id=${this.id || this._inputId}
        part="input"
        style=${styleMap({
            resize: this.resize === 'auto' ? 'none' : this.resize,
        })}
        @input=${this._handleInput}
        @change=${this._handleChange}
        placeholder=${ifDefined(this.placeholder)}
        .rows=${this.rows}
        .value=${live(this.value)}
        .wrap=${this.wrap}
        autocomplete=${ifDefined(this.autocomplete)}
        autocapitalize=${ifDefined(this.autocapitalize)}
        inputmode=${ifDefined(this.inputMode)}
        spellcheck=${ifDefined(this.spellcheck)}
        minlength=${ifDefined(this.minLength)}
        maxlength=${ifDefined(this.validateOnly ? undefined : this.maxLength)}
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?readonly=${this.readOnly}
        aria-describedby=${describedBy}
      ></textarea>
    `;
    }
    _renderValidationContainer() {
        return IgcValidationContainerComponent.create(this);
    }
    render() {
        return cache(this._themes.theme === 'material'
            ? this._renderMaterial()
            : this._renderStandard());
    }
};
__decorate([
    query('textarea')
], IgcTextareaComponent.prototype, "_input", void 0);
__decorate([
    property()
], IgcTextareaComponent.prototype, "autocomplete", void 0);
__decorate([
    property()
], IgcTextareaComponent.prototype, "autocapitalize", void 0);
__decorate([
    property({ attribute: 'inputmode' })
], IgcTextareaComponent.prototype, "inputMode", void 0);
__decorate([
    property()
], IgcTextareaComponent.prototype, "label", void 0);
__decorate([
    property({ type: Number, attribute: 'maxlength' })
], IgcTextareaComponent.prototype, "maxLength", void 0);
__decorate([
    property({ type: Number, attribute: 'minlength' })
], IgcTextareaComponent.prototype, "minLength", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], IgcTextareaComponent.prototype, "outlined", void 0);
__decorate([
    property()
], IgcTextareaComponent.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'readonly' })
], IgcTextareaComponent.prototype, "readOnly", void 0);
__decorate([
    property()
], IgcTextareaComponent.prototype, "resize", void 0);
__decorate([
    property({ type: Number })
], IgcTextareaComponent.prototype, "rows", void 0);
__decorate([
    property()
], IgcTextareaComponent.prototype, "value", null);
__decorate([
    property({
        type: Boolean,
        converter: {
            fromAttribute: (value) => !(!value || value === 'false'),
            toAttribute: (value) => (value ? 'true' : 'false'),
        },
    })
], IgcTextareaComponent.prototype, "spellcheck", void 0);
__decorate([
    property()
], IgcTextareaComponent.prototype, "wrap", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'validate-only' })
], IgcTextareaComponent.prototype, "validateOnly", void 0);
IgcTextareaComponent = IgcTextareaComponent_1 = __decorate([
    shadowOptions({ delegatesFocus: true })
], IgcTextareaComponent);
export default IgcTextareaComponent;
//# sourceMappingURL=textarea.js.map