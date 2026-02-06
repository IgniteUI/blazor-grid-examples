var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { partMap } from '../common/part-map.js';
import { styles } from './themes/item.base.css.js';
import { all } from './themes/item.js';
import { styles as shared } from './themes/shared/item/item.common.css.js';
export default class IgcNavDrawerItemComponent extends LitElement {
    static { this.tagName = 'igc-nav-drawer-item'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcNavDrawerItemComponent);
    }
    constructor() {
        super();
        this._slots = addSlotController(this, {
            slots: setSlots('content', 'icon'),
            onChange: this._handleSlotChange,
        });
        this._hasContent = true;
        this.disabled = false;
        this.active = false;
        addThemingController(this, all);
    }
    _handleSlotChange() {
        this._hasContent = this._slots.hasAssignedElements('content');
    }
    render() {
        const hasNoIcon = !this._slots.hasAssignedNodes('icon', true);
        return html `
      <div part=${partMap({ base: true, mini: !this._hasContent })}>
        <span part="icon" ?hidden=${hasNoIcon}>
          <slot name="icon"></slot>
        </span>
        <span part="content">
          <slot name="content"></slot>
        </span>
      </div>
    `;
    }
}
__decorate([
    state()
], IgcNavDrawerItemComponent.prototype, "_hasContent", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcNavDrawerItemComponent.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcNavDrawerItemComponent.prototype, "active", void 0);
//# sourceMappingURL=nav-drawer-item.js.map