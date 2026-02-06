import { LitElement } from 'lit';
import type { StyleInfo } from 'lit/directives/style-map.js';
import type { SlotController } from '../common/controllers/slot.js';
import type { StyleVariant } from '../types.js';
export declare abstract class IgcProgressBaseComponent extends LitElement {
    private readonly _internals;
    protected abstract _slots: SlotController<any>;
    protected _base: HTMLElement;
    protected _percentage: number;
    protected _progress: number;
    protected _hasFraction: boolean;
    protected _styleInfo: StyleInfo;
    /**
     * Maximum value of the control.
     * @attr
     */
    max: number;
    /**
     * The value of the control.
     * @attr
     */
    value: number;
    /**
     * The variant of the control.
     * @attr
     */
    variant: StyleVariant;
    /**
     * Animation duration in milliseconds.
     * @attr animation-duration
     */
    animationDuration: number;
    /**
     * The indeterminate state of the control.
     * @attr
     */
    indeterminate: boolean;
    /**
     * Shows/hides the label of the control.
     * @attr hide-label
     */
    hideLabel: boolean;
    /**
     * Format string for the default label of the control.
     * Placeholders:
     *  {0} - current value of the control.
     *  {1} - max value of the control.
     * @attr label-format
     */
    labelFormat: string;
    protected _indeterminateChange(): void;
    protected _maxChange(): void;
    protected _valueChange(): void;
    protected updated(): void;
    private _updateARIA;
    private _updateProgress;
    protected _renderLabel(): import("lit-html").TemplateResult<1>;
    protected _renderLabelFormat(): string;
    protected _renderDefaultSlot(): import("lit-html").TemplateResult<1>;
}
