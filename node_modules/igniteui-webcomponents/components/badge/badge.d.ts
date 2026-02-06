import { LitElement, type PropertyValues } from 'lit';
import type { BadgeShape, StyleVariant } from '../types.js';
/**
 * The badge is a component indicating a status on a related item or an area
 * where some active indication is required.
 *
 * @element igc-badge
 *
 * @slot - Default slot for the badge.
 *
 * @csspart base - The base wrapper of the badge.
 */
export default class IgcBadgeComponent extends LitElement {
    static readonly tagName = "igc-badge";
    static styles: import("lit").CSSResult[];
    static register(): void;
    private _iconPart;
    private readonly _slots;
    protected _handleSlotChange(): void;
    private readonly _internals;
    /**
     * The type of badge.
     * @attr
     */
    variant: StyleVariant;
    /**
     * Sets whether to draw an outlined version of the badge.
     * @attr
     */
    outlined: boolean;
    /**
     * The shape of the badge.
     * @attr
     */
    shape: BadgeShape;
    /**
     * Sets whether to render a dot type badge.
     * @attr
     */
    dot: boolean;
    constructor();
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-badge': IgcBadgeComponent;
    }
}
