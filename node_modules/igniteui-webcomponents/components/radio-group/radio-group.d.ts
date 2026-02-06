import { LitElement } from 'lit';
import type { ContentOrientation } from '../types.js';
/**
 * The igc-radio-group component unifies one or more igc-radio buttons.
 *
 * @element igc-radio-group
 *
 * @slot - Default slot
 */
export default class IgcRadioGroupComponent extends LitElement {
    static readonly tagName = "igc-radio-group";
    static styles: import("lit").CSSResult[];
    static register(): void;
    private readonly _internals;
    private readonly _slots;
    private _radios;
    private _defaultValue;
    private _name;
    private _value;
    /**
     * Alignment of the radio controls inside this group.
     * @attr
     */
    alignment: ContentOrientation;
    set defaultValue(value: string);
    get defaultValue(): string;
    /**
     * Gets/Sets the name for all child igc-radio components.
     * @attr
     */
    set name(value: string);
    get name(): string;
    /**
     * Gets/Sets the checked igc-radio element that matches `value`
     * @attr
     */
    set value(value: string);
    get value(): string;
    constructor();
    protected firstUpdated(): void;
    private _observerCallback;
    private _handleSlotChange;
    private _setRadiosDefaultChecked;
    private _setRadiosName;
    private _setDefaultValue;
    private _setSelectedRadio;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-radio-group': IgcRadioGroupComponent;
    }
}
