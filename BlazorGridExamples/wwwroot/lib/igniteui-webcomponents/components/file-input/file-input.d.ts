import { type IFileInputResourceStrings } from 'igniteui-i18n-core';
import type { AbstractConstructor } from '../common/mixins/constructor.js';
import { IgcInputBaseComponent, type IgcInputComponentEventMap } from '../input/input-base.js';
export interface IgcFileInputComponentEventMap extends Omit<IgcInputComponentEventMap, 'igcChange' | 'igcInput'> {
    igcCancel: CustomEvent<FileList>;
    igcChange: CustomEvent<FileList>;
}
declare const IgcFileInputComponent_base: import("../common/mixins/constructor.js").Constructor<import("../common/mixins/event-emitter.js").EventEmitterInterface<IgcFileInputComponentEventMap>> & AbstractConstructor<IgcInputBaseComponent>;
/**
 * @element igc-file-input
 *
 * @slot prefix - Renders content before the input.
 * @slot suffix - Renders content after input.
 * @slot helper-text - Renders content below the input.
 * @slot file-selector-text - Renders content for the browse button when input type is file.
 * @slot file-missing-text - Renders content when input type is file and no file is chosen.
 * @slot value-missing - Renders content when the required validation fails.
 * @slot custom-error - Renders content when setCustomValidity(message) is set.
 * @slot invalid - Renders content when the component is in invalid state (validity.valid = false).
 *
 * @fires igcChange - Emitted when the control's checked state changes.
 * @fires igcCancel - Emitted when the control's file picker dialog is canceled.
 *
 * @csspart container - The main wrapper that holds all main input elements.
 * @csspart input - The native input element.
 * @csspart label - The native label element.
 * @csspart file-names - The file names wrapper when input type is 'file'.
 * @csspart file-selector-button - The browse button when input type is 'file'.
 * @csspart prefix - The prefix wrapper.
 * @csspart suffix - The suffix wrapper.
 * @csspart helper-text - The helper text wrapper.
 */
export default class IgcFileInputComponent extends IgcFileInputComponent_base {
    static readonly tagName = "igc-file-input";
    static styles: import("lit").CSSResult[];
    static register(): void;
    protected readonly _themes: import("../../theming/theming-controller.js").ThemingController;
    protected readonly _slots: import("../common/controllers/slot.js").SlotController<"invalid" | "prefix" | "[default]" | "helper-text" | "suffix" | "value-missing" | "custom-error" | "file-selector-text" | "file-missing-text">;
    protected readonly _formValue: import("../common/mixins/forms/form-value.js").FormValue<FileList | null>;
    protected readonly _i18nController: import("../common/i18n/i18n-controller.js").I18nController<IFileInputResourceStrings>;
    protected get __validators(): import("../common/validators.js").Validator<IgcFileInputComponent>[];
    private get _fileNames();
    /**
     * Indicates whether the file picker dialog is currently active.
     * Used to manage validation on blur.
     */
    private _filePickerActive;
    /**
     * The value of the control.
     * Similar to native file input, this property is read-only and cannot be set programmatically.
     * @attr
     */
    set value(value: string);
    get value(): string;
    /**
     * The resource strings for localization.
     */
    set resourceStrings(value: IFileInputResourceStrings);
    get resourceStrings(): IFileInputResourceStrings;
    /**
     * Gets/Sets the locale used for getting language, affecting resource strings.
     * @attr locale
     */
    set locale(value: string);
    get locale(): string;
    /**
     * The multiple attribute of the control.
     * Used to indicate that a file input allows the user to select more than one file.
     *
     * @attr
     * @default false
     */
    multiple: boolean;
    /**
     * The accept attribute of the control.
     * Defines the file types as a list of comma-separated values that the file input should accept.
     * @attr
     */
    accept: string;
    /**
     * The autofocus attribute of the control.
     * @attr
     */
    autofocus: boolean;
    /** Returns the list of selected files. */
    get files(): FileList;
    protected _restoreDefaultValue(): void;
    private _handleChange;
    private _handleCancel;
    protected _handleBlur(): void;
    protected _handleClick(): void;
    protected _renderFileParts(): import("lit-html").TemplateResult<1>;
    protected _renderInput(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-file-input': IgcFileInputComponent;
    }
}
export {};
