var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, nothing } from 'lit';
import { property, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { addAnimationController } from '../../animations/player.js';
import { fadeIn, fadeOut } from '../../animations/presets/fade/index.js';
import { addThemingController } from '../../theming/theming-controller.js';
import IgcButtonComponent from '../button/button.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { watch } from '../common/decorators/watch.js';
import { registerComponent } from '../common/definitions/register.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { partMap } from '../common/part-map.js';
import { bindIf, numberInRangeInclusive } from '../common/util.js';
import { styles } from './themes/dialog.base.css.js';
import { styles as shared } from './themes/shared/dialog.common.css.js';
import { all } from './themes/themes.js';
let nextId = 1;
export default class IgcDialogComponent extends EventEmitterMixin(LitElement) {
    static { this.tagName = 'igc-dialog'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcDialogComponent, IgcButtonComponent);
    }
    get _dialog() {
        return this._dialogRef.value;
    }
    constructor() {
        super();
        this._titleId = `title-${nextId++}`;
        this._slots = addSlotController(this, {
            slots: setSlots('title', 'message', 'footer'),
        });
        this._dialogRef = createRef();
        this._player = addAnimationController(this, this._dialogRef);
        this._animating = false;
        this.keepOpenOnEscape = false;
        this.closeOnOutsideClick = false;
        this.hideDefaultAction = false;
        this.open = false;
        addThemingController(this, all);
    }
    firstUpdated() {
        if (this.open) {
            this._dialog?.showModal();
        }
    }
    _handleOpenState() {
        this.open ? this._dialog?.showModal() : this._dialog?.close();
    }
    _emitClosing() {
        return this.emitEvent('igcClosing', { cancelable: true });
    }
    async _hide(emitEvent = false) {
        if (!this.open || (emitEvent && !this._emitClosing())) {
            return false;
        }
        this._animating = true;
        await this._player.playExclusive(fadeOut());
        this.open = false;
        this._animating = false;
        if (emitEvent) {
            await this.updateComplete;
            this.emitEvent('igcClosed');
        }
        return true;
    }
    _closeWithEvent() {
        this._hide(true);
    }
    _handleFormSubmit(event) {
        const form = event.target;
        if (form.method === 'dialog') {
            if (hasSubmitter(event.submitter)) {
                this.returnValue = event.submitter.value ?? '';
            }
            if (!event.defaultPrevented) {
                this._closeWithEvent();
            }
        }
    }
    _handleCancel(event) {
        event.preventDefault();
        if (!this.keepOpenOnEscape) {
            this._closeWithEvent();
        }
    }
    _handleClose() {
        if (this.open) {
            this._dialog?.showModal();
        }
    }
    _handleClick({ clientX, clientY, target }) {
        if (this.closeOnOutsideClick && this._dialog === target) {
            const rect = this._dialog.getBoundingClientRect();
            const inX = numberInRangeInclusive(clientX, rect.left, rect.right);
            const inY = numberInRangeInclusive(clientY, rect.top, rect.bottom);
            if (!(inX && inY)) {
                this._closeWithEvent();
            }
        }
    }
    async show() {
        if (this.open) {
            return false;
        }
        this.open = true;
        await this._player.playExclusive(fadeIn());
        return true;
    }
    async hide() {
        return this._hide();
    }
    async toggle() {
        return this.open ? this.hide() : this.show();
    }
    _renderBackdrop() {
        return html `
      <div
        aria-hidden=${!this.open}
        part=${partMap({ backdrop: true, animating: this._animating })}
      ></div>
    `;
    }
    _renderHeader() {
        return html `
      <header part="title" id=${this._titleId}>
        <slot name="title">
          <span>${this.title}</span>
        </slot>
      </header>
    `;
    }
    _renderContent() {
        const hasMessage = this._slots.hasAssignedElements('message');
        return html `
      <section part="content">
        <slot name="message" ?hidden=${!hasMessage}></slot>
        <slot @submit=${this._handleFormSubmit}></slot>
      </section>
    `;
    }
    _renderFooter() {
        return html `
      <footer part="footer">
        <slot name="footer">
          ${this.hideDefaultAction
            ? nothing
            : html `
                <igc-button variant="flat" @click=${this._closeWithEvent}>
                  OK
                </igc-button>
              `}
        </slot>
      </footer>
    `;
    }
    render() {
        const hasTitle = this._slots.hasAssignedElements('title') || !!this.title;
        const hasFooter = this._slots.hasAssignedElements('footer') || !this.hideDefaultAction;
        const labelledBy = this.ariaLabel ?? this._titleId;
        return html `
      ${this._renderBackdrop()}
      <dialog
        ${ref(this._dialogRef)}
        part=${partMap({ base: true, titled: hasTitle, footed: hasFooter })}
        role="dialog"
        aria-label=${bindIf(this.ariaLabel, this.ariaLabel)}
        aria-labelledby=${bindIf(labelledBy, labelledBy)}
        @click=${this._handleClick}
        @cancel=${this._handleCancel}
        @close=${bindIf(this.keepOpenOnEscape, this._handleClose)}
      >
        ${this._renderHeader()} ${this._renderContent()} ${this._renderFooter()}
      </dialog>
    `;
    }
}
__decorate([
    state()
], IgcDialogComponent.prototype, "_animating", void 0);
__decorate([
    property({ type: Boolean, attribute: 'keep-open-on-escape' })
], IgcDialogComponent.prototype, "keepOpenOnEscape", void 0);
__decorate([
    property({ type: Boolean, attribute: 'close-on-outside-click' })
], IgcDialogComponent.prototype, "closeOnOutsideClick", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-default-action' })
], IgcDialogComponent.prototype, "hideDefaultAction", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcDialogComponent.prototype, "open", void 0);
__decorate([
    property()
], IgcDialogComponent.prototype, "title", void 0);
__decorate([
    property({ attribute: false })
], IgcDialogComponent.prototype, "returnValue", void 0);
__decorate([
    watch('open', { waitUntilFirstUpdate: true })
], IgcDialogComponent.prototype, "_handleOpenState", null);
function hasSubmitter(submitter) {
    return submitter != null;
}
//# sourceMappingURL=dialog.js.map