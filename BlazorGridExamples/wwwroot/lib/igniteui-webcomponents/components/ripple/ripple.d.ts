import { LitElement } from 'lit';
/**
 * A ripple can be applied to an element to represent
 * interactive surface.
 *
 * @element igc-ripple
 */
export default class IgcRippleComponent extends LitElement {
    static readonly tagName = "igc-ripple";
    static styles: import("lit").CSSResult;
    static register(): void;
    constructor();
    private _handler;
    private _getDimensions;
    protected render(): symbol;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-ripple': IgcRippleComponent;
    }
}
