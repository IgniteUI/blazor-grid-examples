import { LitElement, type PropertyValues } from 'lit';
/**
 * Describes the preferred placement of a toggle component.
 */
export type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
/**
 * @element igc-popover
 *
 * @slot - Content of the popover.
 * @slot anchor - The element the popover will be anchored to.
 *
 * @csspart container - The container wrapping the slotted content in the popover.
 */
export default class IgcPopoverComponent extends LitElement {
    static readonly tagName = "igc-popover";
    static styles: import("lit").CSSResult;
    private static _oppositeArrowSide;
    static register(): void;
    private _dispose?;
    private _target?;
    private readonly _slots;
    private readonly _container;
    /**
     * Pass an IDREF or an DOM element reference to use as the
     * anchor target for the floating element.
     */
    anchor?: Element | string;
    /**
     * Element to render as an "arrow" element for the current popover.
     */
    arrow: HTMLElement | null;
    /** Additional offset to apply to the arrow element if enabled. */
    arrowOffset: number;
    /**
     * Improves positioning for inline reference elements that span over multiple lines.
     * Useful for tooltips or similar components.
     */
    inline: boolean;
    /**
     * When enabled this changes the placement of the floating element in order to keep it
     * in view along the main axis.
     */
    flip: boolean;
    /**
     * Placement modifier which translates the floating element along the main axis.
     */
    offset: number;
    /**
     * The visibility state of the popover component.
     */
    open: boolean;
    /**
     * Where to place the floating element relative to the parent anchor element.
     */
    placement: PopoverPlacement;
    /**
     * When enabled the floating element will match the width of its parent anchor element.
     */
    sameWidth: boolean;
    /**
     * When enabled this tries to shift the floating element along the main axis
     * keeping it in view, preventing overflow while maintaining the desired placement.
     */
    shift: boolean;
    /**
     * Virtual padding for the resolved overflow detection offsets in pixels.
     */
    shiftPadding: number;
    protected update(properties: PropertyValues<this>): void;
    /** @internal */
    connectedCallback(): void;
    /** @internal */
    disconnectedCallback(): void;
    private _handleSlotChange;
    private _setOpenState;
    private _setPopoverState;
    private _setDispose;
    private _clearDispose;
    private _updateState;
    private _createMiddleware;
    private _updatePosition;
    private _updateArrowPosition;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-popover': IgcPopoverComponent;
    }
}
