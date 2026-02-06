import type { AbstractConstructor } from '../common/mixins/constructor.js';
import type { IgcInputComponentEventMap } from '../input/input-base.js';
import { IgcMaskInputBaseComponent, type MaskSelection } from '../mask-input/mask-input-base.js';
import { DatePart, type DatePartDeltas } from './date-util.js';
export interface IgcDateTimeInputComponentEventMap extends Omit<IgcInputComponentEventMap, 'igcChange'> {
    igcChange: CustomEvent<Date | null>;
}
declare const IgcDateTimeInputComponent_base: import("../common/mixins/constructor.js").Constructor<import("../common/mixins/event-emitter.js").EventEmitterInterface<IgcDateTimeInputComponentEventMap>> & AbstractConstructor<IgcMaskInputBaseComponent>;
/**
 * A date time input is an input field that lets you set and edit the date and time in a chosen input element
 * using customizable display and input formats.
 *
 * @element igc-date-time-input
 *
 * @slot prefix - Renders content before the input.
 * @slot suffix - Renders content after input.
 * @slot helper-text - Renders content below the input.
 * @slot value-missing - Renders content when the required validation fails.
 * @slot range-overflow - Renders content when the max validation fails.
 * @slot range-underflow - Renders content when the min validation fails.
 * @slot custom-error - Renders content when setCustomValidity(message) is set.
 * @slot invalid - Renders content when the component is in invalid state (validity.valid = false).
 *
 * @fires igcInput - Emitted when the control input receives user input.
 * @fires igcChange - Emitted when the control's checked state changes.
 *
 * @csspart container - The main wrapper that holds all main input elements.
 * @csspart input - The native input element.
 * @csspart label - The native label element.
 * @csspart prefix - The prefix wrapper.
 * @csspart suffix - The suffix wrapper.
 * @csspart helper-text - The helper text wrapper.
 */
export default class IgcDateTimeInputComponent extends IgcDateTimeInputComponent_base {
    static readonly tagName = "igc-date-time-input";
    static styles: import("lit").CSSResult[];
    static register(): void;
    protected get __validators(): import("../common/validators.js").Validator<IgcDateTimeInputComponent>[];
    protected readonly _themes: import("../../theming/theming-controller.js").ThemingController;
    protected readonly _slots: import("../common/controllers/slot.js").SlotController<"invalid" | "prefix" | "[default]" | "helper-text" | "suffix" | "value-missing" | "range-overflow" | "range-underflow" | "custom-error">;
    protected readonly _formValue: import("../common/mixins/forms/form-value.js").FormValue<Date | null>;
    private readonly _i18nController;
    protected _defaultMask: string;
    private _defaultDisplayFormat;
    private _displayFormat?;
    private _oldValue;
    private _min;
    private _max;
    private _inputDateParts;
    private _inputFormat;
    private _datePartDeltas;
    /**
     * The date format to apply on the input.
     * @attr input-format
     */
    get inputFormat(): string;
    set inputFormat(val: string);
    get value(): Date | null;
    /**
     * The value of the input.
     * @attr
     */
    set value(value: Date | string | null | undefined);
    /**
     * The minimum value required for the input to remain valid.
     * @attr
     */
    set min(value: Date | string | null | undefined);
    get min(): Date | null;
    /**
     * The maximum value required for the input to remain valid.
     * @attr
     */
    set max(value: Date | string | null | undefined);
    get max(): Date | null;
    /**
     * Format to display the value in when not editing.
     * Defaults to the locale format if not set.
     * @attr display-format
     */
    set displayFormat(value: string);
    get displayFormat(): string;
    /**
     * Delta values used to increment or decrement each date part on step actions.
     * All values default to `1`.
     */
    spinDelta: DatePartDeltas;
    /**
     * Sets whether to loop over the currently spun segment.
     * @attr spin-loop
     */
    spinLoop: boolean;
    /**
     * Gets/Sets the locale used for formatting the display value.
     * @attr locale
     */
    set locale(value: string);
    get locale(): string;
    protected setDefaultMask(): void;
    protected setDisplayFormat(): void;
    protected get hasDateParts(): boolean;
    protected get hasTimeParts(): boolean;
    private get targetDatePart();
    private get datePartDeltas();
    constructor();
    connectedCallback(): void;
    /** Increments a date/time portion. */
    stepUp(datePart?: DatePart, delta?: number): void;
    /** Decrements a date/time portion. */
    stepDown(datePart?: DatePart, delta?: number): void;
    /** Clears the input element of user input. */
    clear(): void;
    protected setToday(): void;
    protected updateMask(): void;
    private _fireInputEvent;
    protected handleDragLeave(): void;
    protected handleDragEnter(): void;
    protected _updateInput(text: string, { start, end }: MaskSelection): Promise<void>;
    private trySpinValue;
    private spinValue;
    private onWheel;
    private updateDefaultMask;
    private updateDefaultDisplayFormat;
    private setMask;
    private parseDate;
    private getMaskedValue;
    private isComplete;
    private updateValue;
    protected _updateSetRangeTextValue(): void;
    private getNewPosition;
    protected handleFocus(): Promise<void>;
    protected handleBlur(): void;
    protected navigateParts(delta: number): void;
    protected keyboardSpin(direction: 'up' | 'down'): Promise<void>;
    protected _renderInput(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-date-time-input': IgcDateTimeInputComponent;
    }
}
export {};
