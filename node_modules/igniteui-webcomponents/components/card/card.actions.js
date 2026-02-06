var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { all } from './themes/actions.js';
import { styles } from './themes/card.actions.base.css.js';
import { styles as shared } from './themes/shared/actions/card.actions.common.css.js';
export default class IgcCardActionsComponent extends LitElement {
    static { this.tagName = 'igc-card-actions'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcCardActionsComponent);
    }
    constructor() {
        super();
        this.orientation = 'horizontal';
        addThemingController(this, all);
    }
    render() {
        return html `
      <slot name="start"></slot>
      <slot></slot>
      <slot name="end"></slot>
    `;
    }
}
__decorate([
    property({ reflect: true })
], IgcCardActionsComponent.prototype, "orientation", void 0);
//# sourceMappingURL=card.actions.js.map