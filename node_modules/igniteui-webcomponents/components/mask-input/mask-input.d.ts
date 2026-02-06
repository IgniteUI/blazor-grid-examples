import type { MaskInputValueMode } from '../types.js';
import { IgcMaskInputBaseComponent, type MaskSelection } from './mask-input-base.js';
/**
 * A masked input is an input field where a developer can control user input and format the visible value,
 * based on configurable rules
 *
 * @element igc-mask-input
 *
 * @slot prefix - Renders content before the input
 * @slot suffix - Renders content after the input
 * @slot helper-text - Renders content below the input
 * @slot value-missing - Renders content when the required validation fails.
 * @slot bad-input - Renders content when a required mask pattern validation fails.
 * @slot custom-error - Renders content when setCustomValidity(message) is set.
 * @slot invalid - Renders content when the component is in invalid state (validity.valid = false).
 *
 * @fires igcInput - Emitted when the control receives user input
 * @fires igcChange - Emitted when an alteration of the control's value is committed by the user
 *
 * @csspart container - The main wrapper that holds all main input elements
 * @csspart input - The native input element
 * @csspart label - The native label element
 * @csspart prefix - The prefix wrapper
 * @csspart suffix - The suffix wrapper
 * @csspart helper-text - The helper text wrapper
 */
export default class IgcMaskInputComponent extends IgcMaskInputBaseComponent {
    static readonly tagName = "igc-mask-input";
    static styles: import("lit").CSSResult[];
    static register(): void;
    protected get __validators(): import("../common/validators.js").Validator<IgcMaskInputComponent>[];
    protected readonly _themes: import("../../theming/theming-controller.js").ThemingController;
    protected readonly _slots: import("../common/controllers/slot.js").SlotController<"invalid" | "prefix" | "[default]" | "helper-text" | "suffix" | "value-missing" | "custom-error" | "bad-input">;
    protected readonly _formValue: import("../common/mixins/forms/form-value.js").FormValue<string>;
    protected get _isRawMode(): boolean;
    /**
     * Dictates the behavior when retrieving the value of the control:
     *
     * - `raw`: Returns clean input (e.g. "5551234567")
     * - `withFormatting`: Returns with mask formatting (e.g. "(555) 123-4567")
     *
     * Empty values always return an empty string, regardless of the value mode.
     * @attr value-mode
     * @default 'raw'
     */
    valueMode: MaskInputValueMode;
    /**
     * The value of the input.
     *
     * Regardless of the currently set `value-mode`, an empty value will return an empty string.
     *
     * @attr
     */
    set value(string: string);
    get value(): string;
    /**
     * The masked pattern of the component.
     *
     * @attr
     * @default 'CCCCCCCCCC'
     */
    set mask(value: string);
    get mask(): string;
    /**
     * The prompt symbol to use for unfilled parts of the mask pattern.
     *
     * @attr
     * @default '_'
     */
    set prompt(value: string);
    get prompt(): string;
    protected _handleDragEnter(): void;
    protected _handleDragLeave(): void;
    protected _handleFocus(): Promise<void>;
    protected _handleBlur(): void;
    protected _handleChange(): void;
    protected _restoreDefaultValue(): void;
    protected _updateInput(text: string, { start, end }: MaskSelection): Promise<void>;
    protected _updateSetRangeTextValue(): void;
    private _updateMaskedValue;
    /** Returns whether the current masked input is valid according to the mask pattern. */
    isValidMaskPattern(): boolean;
    protected _renderInput(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-mask-input': IgcMaskInputComponent;
    }
}
