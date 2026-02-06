var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ContextProvider } from '@lit/context';
import { css, html, LitElement, } from 'lit';
import { property } from 'lit/decorators.js';
import { themeContext } from '../../theming/context.js';
import { registerComponent } from '../common/definitions/register.js';
export default class IgcThemeProviderComponent extends LitElement {
    static { this.tagName = 'igc-theme-provider'; }
    static { this.styles = css `
    :host {
      display: contents;
    }
  `; }
    static register() {
        registerComponent(IgcThemeProviderComponent);
    }
    constructor() {
        super();
        this.theme = 'bootstrap';
        this.variant = 'light';
        this._provider = new ContextProvider(this, {
            context: themeContext,
            initialValue: this._getContextValue(),
        });
    }
    update(changedProperties) {
        if (changedProperties.has('theme') || changedProperties.has('variant')) {
            this._provider.setValue(this._getContextValue());
        }
        super.update(changedProperties);
    }
    firstUpdated() {
        this.updateComplete.then(() => {
            this._provider.setValue(this._getContextValue());
        });
    }
    _getContextValue() {
        return {
            theme: this.theme,
            variant: this.variant,
        };
    }
    render() {
        return html `<slot></slot>`;
    }
}
__decorate([
    property({ reflect: true })
], IgcThemeProviderComponent.prototype, "theme", void 0);
__decorate([
    property({ reflect: true })
], IgcThemeProviderComponent.prototype, "variant", void 0);
//# sourceMappingURL=theme-provider.js.map