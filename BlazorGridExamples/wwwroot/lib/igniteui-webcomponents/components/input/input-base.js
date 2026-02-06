var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { blazorDeepImport } from '../common/decorators/blazorDeepImport.js';
import { shadowOptions } from '../common/decorators/shadow-options.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { FormAssociatedRequiredMixin } from '../common/mixins/forms/associated-required.js';
import { partMap } from '../common/part-map.js';
import IgcValidationContainerComponent from '../validation-container/validation-container.js';
let nextId = 1;
let IgcInputBaseComponent = class IgcInputBaseComponent extends FormAssociatedRequiredMixin(EventEmitterMixin(LitElement)) {
    constructor() {
        super(...arguments);
        this._inputId = `input-${nextId++}`;
        this.outlined = false;
    }
    _resolvePartNames(base) {
        return {
            [base]: true,
            prefixed: this._slots.hasAssignedElements('prefix', {
                selector: '[slot="prefix"]:not([hidden])',
            }),
            suffixed: this._slots.hasAssignedElements('suffix', {
                selector: '[slot="suffix"]:not([hidden])',
            }),
            filled: !!this.value,
        };
    }
    select() {
        this._input?.select();
    }
    focus(options) {
        this._input?.focus(options);
    }
    blur() {
        this._input?.blur();
    }
    _renderFileParts() {
        return nothing;
    }
    _renderValidatorContainer() {
        return IgcValidationContainerComponent.create(this);
    }
    _renderPrefix() {
        return html `
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
    `;
    }
    _renderSuffix() {
        return html `
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    `;
    }
    _renderLabel() {
        return this.label
            ? html `<label part="label" for=${this._inputId}>${this.label}</label>`
            : nothing;
    }
    _renderMaterial() {
        return html `
      <div
        part=${partMap({
            ...this._resolvePartNames('container'),
            labelled: !!this.label,
        })}
      >
        <div part="start">${this._renderPrefix()}</div>
        ${this._renderInput()} ${this._renderFileParts()}
        <div part="notch">${this._renderLabel()}</div>
        <div part="filler"></div>
        <div part="end">${this._renderSuffix()}</div>
      </div>
      ${this._renderValidatorContainer()}
    `;
    }
    _renderStandard() {
        return html `
      ${this._renderLabel()}
      <div part=${partMap(this._resolvePartNames('container'))}>
        ${this._renderPrefix()}${this._renderFileParts()}
        ${this._renderInput()}${this._renderSuffix()}
      </div>
      ${this._renderValidatorContainer()}
    `;
    }
    render() {
        return cache(this._themes.theme === 'material'
            ? this._renderMaterial()
            : this._renderStandard());
    }
};
__decorate([
    query('input')
], IgcInputBaseComponent.prototype, "_input", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcInputBaseComponent.prototype, "outlined", void 0);
__decorate([
    property()
], IgcInputBaseComponent.prototype, "placeholder", void 0);
__decorate([
    property()
], IgcInputBaseComponent.prototype, "label", void 0);
IgcInputBaseComponent = __decorate([
    blazorDeepImport,
    shadowOptions({ delegatesFocus: true })
], IgcInputBaseComponent);
export { IgcInputBaseComponent };
//# sourceMappingURL=input-base.js.map