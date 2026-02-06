var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { addAnimationController } from '../../animations/player.js';
import { growVerIn, growVerOut } from '../../animations/presets/grow/index.js';
import { addThemingController } from '../../theming/theming-controller.js';
import IgcButtonComponent from '../button/button.js';
import { addInternalsController } from '../common/controllers/internals.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { styles } from './themes/banner.base.css.js';
import { all } from './themes/themes.js';
export default class IgcBannerComponent extends EventEmitterMixin(LitElement) {
    static { this.tagName = 'igc-banner'; }
    static { this.styles = [styles]; }
    static register() {
        registerComponent(IgcBannerComponent, IgcButtonComponent);
    }
    constructor() {
        super();
        this._bannerRef = createRef();
        this._player = addAnimationController(this, this._bannerRef);
        this.open = false;
        addThemingController(this, all);
        addSlotController(this, { slots: setSlots('prefix', 'actions') });
        addInternalsController(this, {
            initialARIA: {
                role: 'status',
                ariaLive: 'polite',
            },
        });
    }
    async _handleClick() {
        if (this.emitEvent('igcClosing', { cancelable: true })) {
            await this.hide();
            this.emitEvent('igcClosed');
        }
    }
    async show() {
        if (this.open) {
            return false;
        }
        this.open = true;
        return this._player.playExclusive(growVerIn());
    }
    async hide() {
        if (!this.open) {
            return false;
        }
        await this._player.playExclusive(growVerOut());
        this.open = false;
        return true;
    }
    async toggle() {
        return this.open ? this.hide() : this.show();
    }
    render() {
        return html `
      <div ${ref(this._bannerRef)} part="base" .inert=${!this.open}>
        <div part="spacer">
          <div part="message">
            <div part="illustration">
              <slot name="prefix"></slot>
            </div>
            <div part="content">
              <slot></slot>
            </div>
          </div>
          <div part="actions">
            <slot name="actions">
              <igc-button
                type="button"
                variant="flat"
                @click=${this._handleClick}
                >OK</igc-button
              >
            </slot>
          </div>
        </div>
      </div>
    `;
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], IgcBannerComponent.prototype, "open", void 0);
//# sourceMappingURL=banner.js.map