import type { InputType, RangeTextSelectMode, SelectionRangeDirection } from '../types.js';
import { IgcInputBaseComponent } from './input-base.js';
/**
 * @element igc-input
 *
 * @slot prefix - Renders content before the input.
 * @slot suffix - Renders content after input.
 * @slot helper-text - Renders content below the input.
 * @slot value-missing - Renders content when the required validation fails.
 * @slot type-mismatch - Renders content when the a type url/email input pattern validation fails.
 * @slot pattern-mismatch - Renders content when the pattern validation fails.
 * @slot too-long - Renders content when the maxlength validation fails.
 * @slot too-short - Renders content when the minlength validation fails.
 * @slot range-overflow - Renders content when the max validation fails.
 * @slot range-underflow - Renders content when the min validation fails.
 * @slot step-mismatch - Renders content when the step validation fails.
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
export default class IgcInputComponent extends IgcInputBaseComponent {
    static readonly tagName = "igc-input";
    static styles: import("lit").CSSResult[];
    static register(): void;
    protected readonly _themes: import("../../theming/theming-controller.js").ThemingController;
    protected readonly _slots: import("../common/controllers/slot.js").SlotController<"invalid" | "prefix" | "[default]" | "helper-text" | "suffix" | "value-missing" | "range-overflow" | "range-underflow" | "custom-error" | "type-mismatch" | "pattern-mismatch" | "too-long" | "too-short" | "step-mismatch">;
    protected readonly _formValue: import("../common/mixins/forms/form-value.js").FormValue<string>;
    protected get __validators(): import("../common/validators.js").Validator<IgcInputComponent>[];
    private _min?;
    private _max?;
    private _minLength?;
    private _maxLength?;
    private _pattern?;
    private _step?;
    /**
     * The value of the control.
     * @attr
     */
    set value(value: string);
    get value(): string;
    /**
     * The type attribute of the control.
     * @attr
     */
    type: InputType;
    /**
     * Makes the control a readonly field.
     *
     * @attr readonly
     * @default false
     */
    readOnly: boolean;
    /**
     * The input mode attribute of the control.
     * See [relevant MDN article](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
     * @attr inputmode
     */
    inputMode: string;
    /**
     * The pattern attribute of the control.
     * @attr
     */
    set pattern(value: string | undefined);
    get pattern(): string | undefined;
    /**
     * The minimum string length required by the control.
     * @attr minlength
     */
    set minLength(value: number | undefined);
    get minLength(): number | undefined;
    /**
     * The maximum string length of the control.
     * @attr maxlength
     */
    set maxLength(value: number | undefined);
    get maxLength(): number | undefined;
    /**
     * The min attribute of the control.
     * @attr
     */
    set min(value: number | undefined);
    get min(): number | undefined;
    /**
     * The max attribute of the control.
     * @attr
     */
    set max(value: number | undefined);
    get max(): number | undefined;
    /**
     * The step attribute of the control.
     * @attr
     */
    set step(value: number | undefined);
    get step(): number | undefined;
    /**
     * The autofocus attribute of the control.
     * @attr
     */
    autofocus: boolean;
    /**
     * The autocomplete attribute of the control.
     * @attr
     */
    autocomplete: string;
    /**
     * Enables validation rules to be evaluated without restricting user input. This applies to the `maxLength` property for
     * string-type inputs or allows spin buttons to exceed the predefined `min/max` limits for number-type inputs.
     *
     * @attr validate-only
     * @default false
     */
    validateOnly: boolean;
    /** Replaces the selected text in the input. */
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: RangeTextSelectMode): void;
    /** Sets the text selection range of the control */
    setSelectionRange(start?: number, end?: number, direction?: SelectionRangeDirection): void;
    /** Increments the numeric value of the input by one or more steps. */
    stepUp(n?: number): void;
    /** Decrements the numeric value of the input by one or more steps. */
    stepDown(n?: number): void;
    private _handleInput;
    private _handleChange;
    protected _renderInput(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-input': IgcInputComponent;
    }
}
