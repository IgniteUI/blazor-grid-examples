var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ChipResourceStringsEN, } from 'igniteui-i18n-core';
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { addKeybindings } from '../common/controllers/key-bindings.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { addI18nController } from '../common/i18n/i18n-controller.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import IgcIconComponent from '../icon/icon.js';
import { styles } from './themes/chip.base.css.js';
import { styles as shared } from './themes/shared/chip.common.css.js';
import { all } from './themes/themes.js';
export default class IgcChipComponent extends EventEmitterMixin(LitElement) {
    static { this.tagName = 'igc-chip'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcChipComponent, IgcIconComponent);
    }
    set locale(value) {
        this._i18nController.locale = value;
    }
    get locale() {
        return this._i18nController.locale;
    }
    set resourceStrings(value) {
        this._i18nController.resourceStrings = value;
    }
    get resourceStrings() {
        return this._i18nController.resourceStrings;
    }
    constructor() {
        super();
        this._removePartRef = createRef();
        this._slots = addSlotController(this, {
            slots: setSlots('prefix', 'suffix', 'start', 'end', 'select', 'remove'),
        });
        this.disabled = false;
        this.removable = false;
        this.selectable = false;
        this.selected = false;
        this._i18nController = addI18nController(this, {
            defaultEN: ChipResourceStringsEN,
        });
        addThemingController(this, all);
        addKeybindings(this, {
            ref: this._removePartRef,
            bindingDefaults: { triggers: ['keyup'] },
        }).setActivateHandler(this._handleRemove);
    }
    _handleSelect() {
        if (this.selectable) {
            this.selected = !this.selected;
            this.emitEvent('igcSelect', { detail: this.selected });
        }
    }
    _handleRemove(event) {
        event.stopPropagation();
        this.emitEvent('igcRemove');
    }
    _renderPrefix() {
        const isVisible = this._slots.hasAssignedElements('prefix') ||
            this._slots.hasAssignedElements('start');
        const selectSlot = this.selectable && this.selected
            ? html `
            <slot name="select">
              <igc-icon
                name="selected"
                collection="default"
                aria-label=${this.resourceStrings.chip_select ?? 'select chip'}
              ></igc-icon>
            </slot>
          `
            : nothing;
        return html `
      <span part="prefix" ?hidden=${!isVisible && !this.selected}>
        ${selectSlot}
        <slot name="start"></slot>
        <slot name="prefix"></slot>
      </span>
    `;
    }
    _renderSuffix() {
        const isVisible = this._slots.hasAssignedElements('suffix') ||
            this._slots.hasAssignedElements('end');
        const removeSlot = this.removable && !this.disabled
            ? html `
            <slot
              ${ref(this._removePartRef)}
              name="remove"
              @click=${this._handleRemove}
            >
              <igc-icon
                name="remove"
                collection="default"
                tabindex="0"
                role="button"
                aria-label=${this.resourceStrings.chip_remove ?? 'remove chip'}
              ></igc-icon>
            </slot>
          `
            : nothing;
        return html `
      <span part="suffix" ?hidden=${!isVisible && !this.removable}>
        <slot name="end"></slot>
        <slot name="suffix"></slot>
        ${removeSlot}
      </span>
    `;
    }
    render() {
        const ariaPressed = this.selectable ? this.selected.toString() : null;
        return html `
      <button
        part="base"
        .ariaPressed=${ariaPressed}
        ?disabled=${this.disabled}
        @click=${this._handleSelect}
      >
        ${this._renderPrefix()}
        <slot></slot>
        ${this._renderSuffix()}
      </button>
    `;
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], IgcChipComponent.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcChipComponent.prototype, "removable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcChipComponent.prototype, "selectable", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcChipComponent.prototype, "selected", void 0);
__decorate([
    property({ reflect: true })
], IgcChipComponent.prototype, "variant", void 0);
__decorate([
    property()
], IgcChipComponent.prototype, "locale", null);
__decorate([
    property({ attribute: false })
], IgcChipComponent.prototype, "resourceStrings", null);
//# sourceMappingURL=chip.js.map