var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { arrow, autoUpdate, computePosition, flip, inline, limitShift, offset, shift, size, } from '@floating-ui/dom';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { addSlotController, setSlots, } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { first, getElementByIdFromRoot, isString, roundByDPR, setStyles, } from '../common/util.js';
import { styles } from './themes/light/popover.base.css.js';
export default class IgcPopoverComponent extends LitElement {
    constructor() {
        super(...arguments);
        this._slots = addSlotController(this, {
            slots: setSlots('anchor'),
            onChange: this._handleSlotChange,
        });
        this.arrow = null;
        this.arrowOffset = 0;
        this.inline = false;
        this.flip = false;
        this.offset = 0;
        this.open = false;
        this.placement = 'bottom-start';
        this.sameWidth = false;
        this.shift = false;
        this.shiftPadding = 0;
    }
    static { this.tagName = 'igc-popover'; }
    static { this.styles = styles; }
    static { this._oppositeArrowSide = new Map(Object.entries({
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
    })); }
    static register() {
        registerComponent(IgcPopoverComponent);
    }
    update(properties) {
        if (properties.has('anchor')) {
            const target = isString(this.anchor)
                ? getElementByIdFromRoot(this, this.anchor)
                : this.anchor;
            if (target) {
                this._target = target;
            }
        }
        if (this.hasUpdated && properties.has('open')) {
            this._setOpenState(this.open);
        }
        this._updateState();
        super.update(properties);
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => {
            this._setOpenState(this.open);
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this._setOpenState(false);
    }
    _handleSlotChange({ isDefault, }) {
        if (isDefault) {
            return;
        }
        const possibleTarget = first(this._slots.getAssignedElements('anchor', { flatten: true }));
        if (this.anchor || !possibleTarget) {
            return;
        }
        this._target = possibleTarget;
        this._updateState();
    }
    _setOpenState(state) {
        state ? this._setDispose() : this._clearDispose();
        this._setPopoverState(state);
    }
    _setPopoverState(open) {
        if (!this._target) {
            return;
        }
        open ? this._container?.showPopover() : this._container?.hidePopover();
    }
    _setDispose() {
        if (!this._target) {
            return;
        }
        this._dispose = autoUpdate(this._target, this._container, this._updatePosition.bind(this));
    }
    _clearDispose() {
        return new Promise((resolve) => {
            this._dispose?.();
            this._dispose = undefined;
            resolve();
        });
    }
    async _updateState() {
        if (this.open) {
            await this._clearDispose();
            this._setDispose();
        }
    }
    _createMiddleware() {
        const middleware = [];
        const container = this._container;
        if (this.offset) {
            middleware.push(offset(this.offset));
        }
        if (this.inline) {
            middleware.push(inline());
        }
        if (this.shift) {
            middleware.push(shift({
                padding: this.shiftPadding,
                limiter: limitShift(),
            }));
        }
        if (this.arrow) {
            middleware.push(arrow({ element: this.arrow }));
        }
        if (this.flip) {
            middleware.push(flip());
        }
        if (this.sameWidth) {
            middleware.push(size({
                apply: ({ rects }) => setStyles(container, { width: `${rects.reference.width}px` }),
            }));
        }
        else {
            setStyles(container, { width: '' });
        }
        return middleware;
    }
    async _updatePosition() {
        if (!(this.open && this._target)) {
            return;
        }
        const { x, y, middlewareData, placement } = await computePosition(this._target, this._container, {
            placement: this.placement ?? 'bottom-start',
            middleware: this._createMiddleware(),
            strategy: 'absolute',
        });
        setStyles(this._container, {
            left: '0',
            top: '0',
            transform: `translate(${roundByDPR(x)}px,${roundByDPR(y)}px)`,
        });
        this._updateArrowPosition(placement, middlewareData);
    }
    _updateArrowPosition(placement, data) {
        if (!(data.arrow && this.arrow)) {
            return;
        }
        const { x, y } = data.arrow;
        const arrow = this.arrow;
        const offset = this.arrowOffset;
        const currentPlacement = first(placement.split('-'));
        const staticSide = IgcPopoverComponent._oppositeArrowSide.get(currentPlacement);
        arrow.part = currentPlacement;
        setStyles(arrow, {
            left: x != null ? `${roundByDPR(x + offset)}px` : '',
            top: y != null ? `${roundByDPR(y + offset)}px` : '',
            [staticSide]: '-4px',
        });
    }
    render() {
        return html `
      <slot name="anchor"></slot>
      <div id="container" part="container" popover="manual">
        <slot></slot>
      </div>
    `;
    }
}
__decorate([
    query('#container', true)
], IgcPopoverComponent.prototype, "_container", void 0);
__decorate([
    property()
], IgcPopoverComponent.prototype, "anchor", void 0);
__decorate([
    property({ attribute: false })
], IgcPopoverComponent.prototype, "arrow", void 0);
__decorate([
    property({ type: Number, attribute: 'arrow-offset' })
], IgcPopoverComponent.prototype, "arrowOffset", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcPopoverComponent.prototype, "inline", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcPopoverComponent.prototype, "flip", void 0);
__decorate([
    property({ type: Number })
], IgcPopoverComponent.prototype, "offset", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcPopoverComponent.prototype, "open", void 0);
__decorate([
    property()
], IgcPopoverComponent.prototype, "placement", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'same-width' })
], IgcPopoverComponent.prototype, "sameWidth", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcPopoverComponent.prototype, "shift", void 0);
__decorate([
    property({ type: Number, attribute: 'shift-padding' })
], IgcPopoverComponent.prototype, "shiftPadding", void 0);
//# sourceMappingURL=popover.js.map