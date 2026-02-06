var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IgcSelectComponent_1;
import { html } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { addKeybindings, altKey, arrowDown, arrowLeft, arrowRight, arrowUp, endKey, enterKey, escapeKey, homeKey, spaceBar, tabKey, } from '../common/controllers/key-bindings.js';
import { addRootClickController } from '../common/controllers/root-click.js';
import { addRootScrollHandler } from '../common/controllers/root-scroll.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { blazorAdditionalDependencies } from '../common/decorators/blazorAdditionalDependencies.js';
import { watch } from '../common/decorators/watch.js';
import { registerComponent } from '../common/definitions/register.js';
import { getActiveItems, getItems, getNextActiveItem, getPreviousActiveItem, IgcBaseComboBoxLikeComponent, setInitialSelectionState, } from '../common/mixins/combo-box.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { FormAssociatedRequiredMixin } from '../common/mixins/forms/associated-required.js';
import { FormValueSelectTransformers } from '../common/mixins/forms/form-transformers.js';
import { createFormValueState } from '../common/mixins/forms/form-value.js';
import { partMap } from '../common/part-map.js';
import { addSafeEventListener, findElementFromEventPath, isString, } from '../common/util.js';
import IgcIconComponent from '../icon/icon.js';
import IgcInputComponent from '../input/input.js';
import IgcPopoverComponent from '../popover/popover.js';
import IgcValidationContainerComponent from '../validation-container/validation-container.js';
import IgcSelectGroupComponent from './select-group.js';
import IgcSelectHeaderComponent from './select-header.js';
import IgcSelectItemComponent from './select-item.js';
import { styles } from './themes/select.base.css.js';
import { styles as shared } from './themes/shared/select.common.css.js';
import { all } from './themes/themes.js';
import { selectValidators } from './validators.js';
const Slots = setSlots('prefix', 'suffix', 'header', 'footer', 'helper-text', 'toggle-icon', 'toggle-icon-expanded', 'value-missing', 'custom-error', 'invalid');
let IgcSelectComponent = class IgcSelectComponent extends FormAssociatedRequiredMixin(EventEmitterMixin(IgcBaseComboBoxLikeComponent)) {
    static { IgcSelectComponent_1 = this; }
    static { this.tagName = 'igc-select'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcSelectComponent_1, IgcIconComponent, IgcInputComponent, IgcPopoverComponent, IgcSelectGroupComponent, IgcSelectHeaderComponent, IgcSelectItemComponent);
    }
    get __validators() {
        return selectValidators;
    }
    get _activeItems() {
        return Array.from(getActiveItems(this, IgcSelectItemComponent.tagName));
    }
    set value(value) {
        this._updateValue(value);
        const item = this._getItem(this._formValue.value);
        item ? this._setSelectedItem(item) : this._clearSelectedItem();
    }
    get value() {
        return this._formValue.value;
    }
    get items() {
        return Array.from(getItems(this, IgcSelectItemComponent.tagName));
    }
    get groups() {
        return Array.from(getItems(this, IgcSelectGroupComponent.tagName));
    }
    get selectedItem() {
        return this._selectedItem;
    }
    _scrollStrategyChange() {
        this._rootScrollController.update({ resetListeners: true });
    }
    _openChange() {
        this._rootClickController.update();
        this._rootScrollController.update();
    }
    constructor() {
        super();
        this._searchTerm = '';
        this._lastKeyTime = 0;
        this._slots = addSlotController(this, { slots: Slots });
        this._rootScrollController = addRootScrollHandler(this, {
            hideCallback: this._handleClosing,
        });
        this._rootClickController = addRootClickController(this, {
            onHide: this._handleClosing,
        });
        this._formValue = createFormValueState(this, {
            initialValue: undefined,
            transformers: FormValueSelectTransformers,
        });
        this._selectedItem = null;
        this.outlined = false;
        this.distance = 0;
        this.placement = 'bottom-start';
        this.scrollStrategy = 'scroll';
        addThemingController(this, all);
        addKeybindings(this, {
            skip: () => this.disabled,
            bindingDefaults: { preventDefault: true, triggers: ['keydownRepeat'] },
        })
            .set([altKey, arrowDown], this._handleAltArrowDown)
            .set([altKey, arrowUp], this._handleAltArrowUp)
            .set(arrowDown, this._handleArrowDown)
            .set(arrowUp, this._handleArrowUp)
            .set(arrowLeft, this._handleArrowUp)
            .set(arrowRight, this._handleArrowDown)
            .set(tabKey, this._handleTab, { preventDefault: false })
            .set(escapeKey, this._handleEscape)
            .set(homeKey, this._handleHome)
            .set(endKey, this._handleEnd)
            .set(spaceBar, this._handleSpace)
            .set(enterKey, this._handleEnter);
        addSafeEventListener(this, 'keydown', this._handleSearch);
        addSafeEventListener(this, 'focusin', this._handleFocusIn);
        addSafeEventListener(this, 'focusout', this._handleFocusOut);
    }
    async firstUpdated() {
        await this.updateComplete;
        const selected = setInitialSelectionState(this.items);
        if (this.value && !selected) {
            this._selectItem(this._getItem(this.value), false);
        }
        if (selected && selected.value !== this.value) {
            this.defaultValue = selected.value;
            this._selectItem(selected, false);
        }
        if (this.autofocus) {
            this.focus();
        }
        this._validate();
    }
    _handleSearch(event) {
        if (!/^.$/u.test(event.key)) {
            return;
        }
        event.preventDefault();
        const now = Date.now();
        if (now - this._lastKeyTime > 500) {
            this._searchTerm = '';
        }
        this._lastKeyTime = now;
        this._searchTerm += event.key.toLocaleLowerCase();
        const item = this._activeItems.find((item) => item.textContent?.trim().toLocaleLowerCase().startsWith(this._searchTerm));
        if (item) {
            this.open ? this._activateItem(item) : this._selectItem(item);
            this._activeItem.focus();
        }
    }
    _handleEnter() {
        this.open && this._activeItem
            ? this._selectItem(this._activeItem)
            : this.handleAnchorClick();
    }
    _handleSpace() {
        if (!this.open) {
            this.handleAnchorClick();
        }
    }
    _handleArrowDown() {
        const item = getNextActiveItem(this.items, this._activeItem);
        this.open ? this._navigateToActiveItem(item) : this._selectItem(item);
    }
    _handleArrowUp() {
        const item = getPreviousActiveItem(this.items, this._activeItem);
        this.open ? this._navigateToActiveItem(item) : this._selectItem(item);
    }
    _handleAltArrowDown() {
        if (!this.open) {
            this._show(true);
            this._focusItemOnOpen();
        }
    }
    async _handleAltArrowUp() {
        if (this.open && (await this._hide(true))) {
            this._input.focus();
        }
    }
    async _handleEscape() {
        if (await this._hide(true)) {
            this._input.focus();
        }
    }
    _handleTab(event) {
        if (this.open) {
            event.preventDefault();
            this._selectItem(this._activeItem ?? this._selectedItem);
            this._hide(true);
        }
    }
    _handleHome() {
        const item = this._activeItems.at(0);
        this.open ? this._navigateToActiveItem(item) : this._selectItem(item);
    }
    _handleEnd() {
        const item = this._activeItems.at(-1);
        this.open ? this._navigateToActiveItem(item) : this._selectItem(item);
    }
    _handleFocusIn() {
        this._setTouchedState();
    }
    _handleFocusOut({ relatedTarget }) {
        if (this.contains(relatedTarget)) {
            return;
        }
        super._handleBlur();
    }
    _handleClick(event) {
        const item = findElementFromEventPath(IgcSelectItemComponent.tagName, event);
        if (item && this._activeItems.includes(item)) {
            this._selectItem(item);
        }
    }
    _handleChange(item) {
        this._setTouchedState();
        return this.emitEvent('igcChange', { detail: item });
    }
    _handleClosing() {
        this._hide(true);
    }
    handleAnchorClick() {
        super.handleAnchorClick();
        this._focusItemOnOpen();
    }
    _restoreDefaultValue() {
        super._restoreDefaultValue();
        this._formValue.setValueAndFormState(this._formValue.defaultValue);
        const item = this._getItem(this._formValue.value);
        item ? this._setSelectedItem(item) : this._clearSelectedItem();
    }
    _activateItem(item) {
        if (this._activeItem) {
            this._activeItem.active = false;
        }
        this._activeItem = item;
        this._activeItem.active = true;
    }
    _setSelectedItem(item) {
        if (this._selectedItem) {
            this._selectedItem.selected = false;
        }
        this._selectedItem = item;
        this._selectedItem.selected = true;
        return this._selectedItem;
    }
    _selectItem(item, emit = true) {
        if (!item) {
            this._clearSelectedItem();
            this._updateValue();
            return null;
        }
        const shouldFocus = emit && this.open;
        const shouldHide = emit && !this.keepOpenOnSelect;
        if (this._selectedItem === item) {
            if (shouldFocus)
                this._input.focus();
            return this._selectedItem;
        }
        const newItem = this._setSelectedItem(item);
        this._activateItem(newItem);
        this._updateValue(newItem.value);
        if (emit)
            this._handleChange(newItem);
        if (shouldFocus)
            this._input.focus();
        if (shouldHide)
            this._hide(true);
        return this._selectedItem;
    }
    _navigateToActiveItem(item) {
        if (item) {
            this._activateItem(item);
            this._activeItem.focus({ preventScroll: true });
            item.scrollIntoView({ behavior: 'auto', block: 'nearest' });
        }
    }
    _updateValue(value) {
        this._formValue.setValueAndFormState(value);
    }
    _clearSelectedItem() {
        if (this._selectedItem) {
            this._selectedItem.selected = false;
        }
        this._selectedItem = null;
    }
    async _focusItemOnOpen() {
        await this.updateComplete;
        (this._selectedItem || this._activeItem)?.focus();
    }
    _getItem(value) {
        return this.items.find((item) => item.value === value);
    }
    focus(options) {
        this._input.focus(options);
    }
    blur() {
        this._input.blur();
    }
    reportValidity() {
        const valid = super.reportValidity();
        if (!valid)
            this._input.focus();
        return valid;
    }
    navigateTo(value) {
        const item = isString(value) ? this._getItem(value) : this.items[value];
        if (item) {
            this._navigateToActiveItem(item);
        }
        return item ?? null;
    }
    select(value) {
        const item = isString(value) ? this._getItem(value) : this.items[value];
        return item ? this._selectItem(item, false) : null;
    }
    clearSelection() {
        this._updateValue();
        this._clearSelectedItem();
    }
    _renderInputSlots() {
        const prefix = this._slots.hasAssignedElements('prefix') ? 'prefix' : '';
        const suffix = this._slots.hasAssignedElements('suffix') ? 'suffix' : '';
        return html `
      <span slot=${prefix}>
        <slot name="prefix"></slot>
      </span>

      <span slot=${suffix}>
        <slot name="suffix"></slot>
      </span>
    `;
    }
    _renderToggleIcon() {
        const parts = { 'toggle-icon': true, filled: !!this.value };
        const iconName = this.open ? 'input_collapse' : 'input_expand';
        const iconHidden = this.open && this._slots.hasAssignedElements('toggle-icon-expanded');
        return html `
      <span slot="suffix" part=${partMap(parts)} aria-hidden="true">
        <slot name="toggle-icon" ?hidden=${iconHidden}>
          <igc-icon name=${iconName} collection="default"></igc-icon>
        </slot>
        <slot name="toggle-icon-expanded" ?hidden=${!iconHidden}></slot>
      </span>
    `;
    }
    _renderHelperText() {
        return IgcValidationContainerComponent.create(this, {
            id: 'select-helper-text',
            slot: 'anchor',
            hasHelperText: true,
        });
    }
    _renderInputAnchor() {
        const value = this.selectedItem?.textContent?.trim();
        return html `
      <igc-input
        id="input"
        slot="anchor"
        role="combobox"
        readonly
        aria-controls="dropdown"
        aria-describedby="select-helper-text"
        aria-expanded=${this.open}
        exportparts="container: input, input: native-input, label, prefix, suffix"
        value=${ifDefined(value)}
        placeholder=${ifDefined(this.placeholder)}
        label=${ifDefined(this.label)}
        .disabled=${this.disabled}
        .required=${this.required}
        .invalid=${this.invalid}
        .outlined=${this.outlined}
        @click=${this.handleAnchorClick}
      >
        ${this._renderInputSlots()} ${this._renderToggleIcon()}
      </igc-input>

      ${this._renderHelperText()}
    `;
    }
    _renderDropdown() {
        return html `
      <div part="base" .inert=${!this.open}>
        <div
          id="dropdown"
          role="listbox"
          part="list"
          aria-labelledby="input"
          @click=${this._handleClick}
        >
          <slot name="header"></slot>
          <slot></slot>
          <slot name="footer"></slot>
        </div>
      </div>
    `;
    }
    render() {
        return html `
      <igc-popover
        ?open=${this.open}
        flip
        shift
        same-width
        .offset=${this.distance}
        .placement=${this.placement}
      >
        ${this._renderInputAnchor()} ${this._renderDropdown()}
      </igc-popover>
    `;
    }
};
__decorate([
    state()
], IgcSelectComponent.prototype, "_selectedItem", void 0);
__decorate([
    state()
], IgcSelectComponent.prototype, "_activeItem", void 0);
__decorate([
    query(IgcInputComponent.tagName, true)
], IgcSelectComponent.prototype, "_input", void 0);
__decorate([
    property()
], IgcSelectComponent.prototype, "value", null);
__decorate([
    property({ reflect: true, type: Boolean })
], IgcSelectComponent.prototype, "outlined", void 0);
__decorate([
    property({ type: Boolean })
], IgcSelectComponent.prototype, "autofocus", void 0);
__decorate([
    property({ type: Number })
], IgcSelectComponent.prototype, "distance", void 0);
__decorate([
    property()
], IgcSelectComponent.prototype, "label", void 0);
__decorate([
    property()
], IgcSelectComponent.prototype, "placeholder", void 0);
__decorate([
    property()
], IgcSelectComponent.prototype, "placement", void 0);
__decorate([
    property({ attribute: 'scroll-strategy' })
], IgcSelectComponent.prototype, "scrollStrategy", void 0);
__decorate([
    watch('scrollStrategy', { waitUntilFirstUpdate: true })
], IgcSelectComponent.prototype, "_scrollStrategyChange", null);
__decorate([
    watch('open', { waitUntilFirstUpdate: true })
], IgcSelectComponent.prototype, "_openChange", null);
IgcSelectComponent = IgcSelectComponent_1 = __decorate([
    blazorAdditionalDependencies('IgcIconComponent, IgcInputComponent, IgcSelectGroupComponent, IgcSelectHeaderComponent, IgcSelectItemComponent')
], IgcSelectComponent);
export default IgcSelectComponent;
//# sourceMappingURL=select.js.map