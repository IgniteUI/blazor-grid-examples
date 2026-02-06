import { type IChipResourceStrings } from 'igniteui-i18n-core';
import { LitElement } from 'lit';
import type { Constructor } from '../common/mixins/constructor.js';
import type { StyleVariant } from '../types.js';
export interface IgcChipComponentEventMap {
    igcRemove: CustomEvent<boolean>;
    igcSelect: CustomEvent<boolean>;
}
declare const IgcChipComponent_base: Constructor<import("../common/mixins/event-emitter.js").EventEmitterInterface<IgcChipComponentEventMap>> & Constructor<LitElement>;
/**
 * Chips help people enter information, make selections, filter content, or trigger actions.
 *
 * @element igc-chip
 *
 * @slot - Renders content in the default slot of the chip.
 * @slot prefix - Renders content at the start of the chip, before the default content.
 * @slot suffix - Renders content at the end of the chip after the default content.
 * @slot select - Content to render when the chip in selected state.
 * @slot remove - Content to override the default remove chip icon.
 *
 * @fires igcRemove - Emits an event when the chip component is removed. Returns the removed chip component.
 * @fires igcSelect - Emits event when the chip component is selected/deselected and any related animations and transitions also end.
 *
 * @csspart base - The base wrapper of the chip.
 * @csspart prefix - The prefix container of the chip.
 * @csspart suffix - The suffix container of the chip.
 */
export default class IgcChipComponent extends IgcChipComponent_base {
    static readonly tagName = "igc-chip";
    static styles: import("lit").CSSResult[];
    static register(): void;
    private readonly _removePartRef;
    private readonly _slots;
    /**
     * Sets the disabled state for the chip.
     * @attr
     */
    disabled: boolean;
    /**
     * Defines if the chip is removable or not.
     * @attr
     */
    removable: boolean;
    /**
     * Defines if the chip is selectable or not.
     * @attr
     */
    selectable: boolean;
    /**
     * Defines if the chip is selected or not.
     * @attr
     */
    selected: boolean;
    /**
     * A property that sets the color variant of the chip component.
     * @attr
     */
    variant: StyleVariant;
    /**
     * Gets/Sets the locale used for getting language, affecting resource strings.
     * @attr locale
     */
    set locale(value: string);
    get locale(): string;
    /**
     * The resource strings for localization.
     * Currently only aria-labels for the default select/remove icons are localized.
     */
    set resourceStrings(value: IChipResourceStrings);
    get resourceStrings(): IChipResourceStrings;
    private readonly _i18nController;
    constructor();
    protected _handleSelect(): void;
    protected _handleRemove(event: Event): void;
    protected _renderPrefix(): import("lit-html").TemplateResult<1>;
    protected _renderSuffix(): import("lit-html").TemplateResult<1>;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-chip': IgcChipComponent;
    }
}
export {};
