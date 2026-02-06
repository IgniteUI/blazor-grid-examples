var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { addAnimationController } from '../../animations/player.js';
import { growVerIn, growVerOut } from '../../animations/presets/grow/index.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { addKeybindings, altKey, arrowDown, arrowUp, } from '../common/controllers/key-bindings.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import IgcIconComponent from '../icon/icon.js';
import { styles } from './themes/expansion-panel.base.css.js';
import { styles as shared } from './themes/shared/expansion-panel.common.css.js';
import { all } from './themes/themes.js';
let nextId = 1;
export default class IgcExpansionPanelComponent extends EventEmitterMixin(LitElement) {
    static { this.tagName = 'igc-expansion-panel'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcExpansionPanelComponent, IgcIconComponent);
    }
    constructor() {
        super();
        this._panelId = `${IgcExpansionPanelComponent.tagName}-${nextId++}`;
        this._headerRef = createRef();
        this._panelRef = createRef();
        this._player = addAnimationController(this, this._panelRef);
        this._slots = addSlotController(this, {
            slots: setSlots('title', 'subtitle', 'indicator', 'indicator-expanded'),
        });
        this.open = false;
        this.disabled = false;
        this.indicatorPosition = 'start';
        addThemingController(this, all);
        addKeybindings(this, {
            ref: this._headerRef,
            skip: () => this.disabled,
        })
            .setActivateHandler(this._toggle)
            .set([altKey, arrowDown], this._show)
            .set([altKey, arrowUp], this._hide);
    }
    connectedCallback() {
        super.connectedCallback();
        this._panelId = this.id || this._panelId;
    }
    _handleClick() {
        this._headerRef.value?.focus();
        this._toggle();
    }
    async _setOpenState({ state, withEvent, }) {
        if (this.open === state)
            return;
        const args = { detail: this };
        const event = state ? 'igcOpening' : 'igcClosing';
        const eventDone = state ? 'igcOpened' : 'igcClosed';
        const animation = state ? growVerIn : growVerOut;
        if (withEvent && !this.emitEvent(event, { cancelable: true, ...args })) {
            return;
        }
        this.open = state;
        if (await this._player.playExclusive(animation())) {
            if (withEvent) {
                this.emitEvent(eventDone, args);
            }
        }
    }
    async _toggle() {
        this.open ? await this._hide() : await this._show();
    }
    async _show() {
        await this._setOpenState({ state: true, withEvent: true });
    }
    async _hide() {
        await this._setOpenState({ state: false, withEvent: true });
    }
    async toggle() {
        return this.open ? this.hide() : this.show();
    }
    async hide() {
        if (!this.open)
            return false;
        await this._setOpenState({ state: false });
        return true;
    }
    async show() {
        if (this.open)
            return false;
        await this._setOpenState({ state: true });
        return true;
    }
    _renderIndicator() {
        const iconName = this.open ? 'collapse' : 'expand';
        const indicatorHidden = this.open && this._slots.hasAssignedElements('indicator-expanded');
        return html `
      <div part="indicator" aria-hidden="true">
        <slot name="indicator" ?hidden=${indicatorHidden}>
          <igc-icon name=${iconName} collection="default"></igc-icon>
        </slot>
        <slot name="indicator-expanded" ?hidden=${!indicatorHidden}></slot>
      </div>
    `;
    }
    _renderHeader() {
        return html `
      <div
        ${ref(this._headerRef)}
        part="header"
        id="${this._panelId}-header"
        role="button"
        aria-expanded=${this.open}
        aria-disabled=${this.disabled}
        aria-controls="${this._panelId}-content"
        tabindex=${this.disabled ? '-1' : '0'}
        @click=${this.disabled ? nothing : this._handleClick}
      >
        ${this._renderIndicator()}
        <div>
          <slot name="title" part="title"></slot>
          <slot name="subtitle" part="subtitle"></slot>
        </div>
      </div>
    `;
    }
    _renderPanel() {
        return html `
      <div
        ${ref(this._panelRef)}
        part="content"
        role="region"
        id="${this._panelId}-content"
        aria-labelledby="${this._panelId}-header"
        .inert=${!this.open}
        aria-hidden=${!this.open}
      >
        <slot></slot>
      </div>
    `;
    }
    render() {
        return html `${this._renderHeader()}${this._renderPanel()}`;
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], IgcExpansionPanelComponent.prototype, "open", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcExpansionPanelComponent.prototype, "disabled", void 0);
__decorate([
    property({ reflect: true, attribute: 'indicator-position' })
], IgcExpansionPanelComponent.prototype, "indicatorPosition", void 0);
//# sourceMappingURL=expansion-panel.js.map