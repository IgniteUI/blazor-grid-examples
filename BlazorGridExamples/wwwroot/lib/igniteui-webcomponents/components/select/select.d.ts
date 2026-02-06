import { type TemplateResult } from 'lit';
import { IgcBaseComboBoxLikeComponent } from '../common/mixins/combo-box.js';
import type { AbstractConstructor } from '../common/mixins/constructor.js';
import IgcInputComponent from '../input/input.js';
import { type PopoverPlacement } from '../popover/popover.js';
import type { PopoverScrollStrategy } from '../types.js';
import IgcSelectGroupComponent from './select-group.js';
import IgcSelectItemComponent from './select-item.js';
export interface IgcSelectComponentEventMap {
    igcChange: CustomEvent<IgcSelectItemComponent>;
    focus: FocusEvent;
    blur: FocusEvent;
    igcOpening: CustomEvent<void>;
    igcOpened: CustomEvent<void>;
    igcClosing: CustomEvent<void>;
    igcClosed: CustomEvent<void>;
}
declare const IgcSelectComponent_base: import("../common/mixins/constructor.js").Constructor<import("../common/mixins/forms/types.js").FormRequiredInterface & import("../common/mixins/forms/types.js").FormAssociatedElementInterface> & import("../common/mixins/constructor.js").Constructor<import("../common/mixins/event-emitter.js").EventEmitterInterface<IgcSelectComponentEventMap>> & AbstractConstructor<IgcBaseComboBoxLikeComponent>;
/**
 * Represents a control that provides a menu of options.
 *
 * @element igc-select
 *
 * @slot - Renders the list of select items.
 * @slot prefix - Renders content before the input.
 * @slot suffix - Renders content after input.
 * @slot header - Renders a container before the list of options.
 * @slot footer - Renders a container after the list of options.
 * @slot helper-text - Renders content below the input.
 * @slot toggle-icon - Renders content inside the suffix container.
 * @slot toggle-icon-expanded - Renders content for the toggle icon when the component is in open state.
 * @slot value-missing - Renders content when the required validation fails.
 * @slot custom-error - Renders content when setCustomValidity(message) is set.
 * @slot invalid - Renders content when the component is in invalid state (validity.valid = false).
 *
 * @fires igcChange - Emitted when the control's checked state changes.
 * @fires igcOpening - Emitted just before the list of options is opened.
 * @fires igcOpened - Emitted after the list of options is opened.
 * @fires igcClosing - Emitter just before the list of options is closed.
 * @fires igcClosed - Emitted after the list of options is closed.
 *
 * @csspart list - The list wrapping container for the items of the igc-select.
 * @csspart input - The encapsulated igc-input of the igc-select.
 * @csspart label - The encapsulated text label of the igc-select.
 * @csspart prefix - The prefix wrapper of the input of the igc-select.
 * @csspart suffix - The suffix wrapper of the input of the igc-select.
 * @csspart toggle-icon - The toggle icon wrapper of the igc-select.
 * @csspart helper-text - The helper text wrapper of the igc-select.
 */
export default class IgcSelectComponent extends IgcSelectComponent_base {
    static readonly tagName = "igc-select";
    static styles: import("lit").CSSResult[];
    static register(): void;
    protected get __validators(): import("../common/validators.js").Validator<IgcSelectComponent>[];
    private _searchTerm;
    private _lastKeyTime;
    private readonly _slots;
    private readonly _rootScrollController;
    protected readonly _rootClickController: import("../common/controllers/root-click.js").RootClickController;
    protected readonly _formValue: import("../common/mixins/forms/form-value.js").FormValue<string | undefined>;
    protected _selectedItem: IgcSelectItemComponent | null;
    protected _activeItem: IgcSelectItemComponent;
    protected _input: IgcInputComponent;
    protected get _activeItems(): IgcSelectItemComponent[];
    /**
     * The value attribute of the control.
     * @attr
     */
    set value(value: string | undefined);
    get value(): string | undefined;
    /**
     * The outlined attribute of the control.
     * @attr
     */
    outlined: boolean;
    /**
     * The autofocus attribute of the control.
     * @attr
     */
    autofocus: boolean;
    /**
     * The distance of the select dropdown from its input.
     * @attr
     */
    distance: number;
    /**
     * The label attribute of the control.
     * @attr
     */
    label: string;
    /**
     * The placeholder attribute of the control.
     * @attr
     */
    placeholder: string;
    /** The preferred placement of the select dropdown around its input.
     * @attr
     */
    placement: PopoverPlacement;
    /**
     * Determines the behavior of the component during scrolling of the parent container.
     * @attr scroll-strategy
     */
    scrollStrategy: PopoverScrollStrategy;
    /** Returns the items of the igc-select component. */
    get items(): IgcSelectItemComponent[];
    /** Returns the groups of the igc-select component. */
    get groups(): IgcSelectGroupComponent[];
    /** Returns the selected item from the dropdown or null.  */
    get selectedItem(): IgcSelectItemComponent | null;
    protected _scrollStrategyChange(): void;
    protected _openChange(): void;
    constructor();
    protected firstUpdated(): Promise<void>;
    private _handleSearch;
    private _handleEnter;
    private _handleSpace;
    private _handleArrowDown;
    private _handleArrowUp;
    private _handleAltArrowDown;
    private _handleAltArrowUp;
    private _handleEscape;
    private _handleTab;
    private _handleHome;
    private _handleEnd;
    private _handleFocusIn;
    private _handleFocusOut;
    private _handleClick;
    private _handleChange;
    private _handleClosing;
    protected handleAnchorClick(): void;
    protected _restoreDefaultValue(): void;
    private _activateItem;
    private _setSelectedItem;
    private _selectItem;
    private _navigateToActiveItem;
    private _updateValue;
    private _clearSelectedItem;
    private _focusItemOnOpen;
    private _getItem;
    /** Sets focus on the component. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the component. */
    blur(): void;
    /** Checks the validity of the control and moves the focus to it if it is not valid. */
    reportValidity(): boolean;
    /** Navigates to the item with the specified value. If it exists, returns the found item, otherwise - null. */
    navigateTo(value: string): IgcSelectItemComponent | null;
    /** Navigates to the item at the specified index. If it exists, returns the found item, otherwise - null. */
    navigateTo(index: number): IgcSelectItemComponent | null;
    /** Selects the item with the specified value. If it exists, returns the found item, otherwise - null. */
    select(value: string): IgcSelectItemComponent | null;
    /** Selects the item at the specified index. If it exists, returns the found item, otherwise - null. */
    select(index: number): IgcSelectItemComponent | null;
    /**  Resets the current value and selection of the component. */
    clearSelection(): void;
    protected _renderInputSlots(): TemplateResult<1>;
    protected _renderToggleIcon(): TemplateResult<1>;
    protected _renderHelperText(): TemplateResult;
    protected _renderInputAnchor(): TemplateResult<1>;
    protected _renderDropdown(): TemplateResult<1>;
    protected render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-select': IgcSelectComponent;
    }
}
export {};
