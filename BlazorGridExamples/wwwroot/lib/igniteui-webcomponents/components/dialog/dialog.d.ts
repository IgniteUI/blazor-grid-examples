import { LitElement } from 'lit';
import type { Constructor } from '../common/mixins/constructor.js';
export interface IgcDialogComponentEventMap {
    igcClosing: CustomEvent<void>;
    igcClosed: CustomEvent<void>;
}
declare const IgcDialogComponent_base: Constructor<import("../common/mixins/event-emitter.js").EventEmitterInterface<IgcDialogComponentEventMap>> & Constructor<LitElement>;
/**
 * Represents a Dialog component.
 *
 * @element igc-dialog
 *
 * @fires igcClosing - Emitter just before the dialog is closed. Cancelable.
 * @fires igcClosed - Emitted after closing the dialog.
 *
 * @slot - Renders content inside the default slot of the dialog.
 * @slot title - Renders content in the title slot of the dialog header.
 * @slot message - Renders the message content of the dialog.
 * @slot footer - Renders content in the dialog footer.
 *
 * @csspart base - The base wrapper of the dialog.
 * @csspart title - The title container of the dialog.
 * @csspart footer - The footer container of the dialog.
 * @csspart overlay - The backdrop overlay of the dialog.
 */
export default class IgcDialogComponent extends IgcDialogComponent_base {
    static readonly tagName = "igc-dialog";
    static styles: import("lit").CSSResult[];
    static register(): void;
    private readonly _titleId;
    private readonly _slots;
    private readonly _dialogRef;
    private readonly _player;
    /**
     * Backdrop animation helper.
     */
    private _animating;
    private get _dialog();
    /**
     * Whether the dialog should be kept open when pressing the 'Escape' button.
     * @attr keep-open-on-escape
     */
    keepOpenOnEscape: boolean;
    /**
     * Whether the dialog should be closed when clicking outside of it.
     * @attr close-on-outside-click
     */
    closeOnOutsideClick: boolean;
    /**
     * Whether to hide the default action button for the dialog.
     *
     * When there is projected content in the `footer` slot this property
     * has no effect.
     * @attr hide-default-action
     */
    hideDefaultAction: boolean;
    /**
     * Whether the dialog is opened.
     * @attr
     */
    open: boolean;
    /**
     * Sets the title of the dialog.
     * @attr
     */
    title: string;
    /** Sets the return value for the dialog. */
    returnValue: string;
    constructor();
    protected firstUpdated(): void;
    protected _handleOpenState(): void;
    private _emitClosing;
    private _hide;
    private _closeWithEvent;
    protected _handleFormSubmit(event: SubmitEvent): void;
    private _handleCancel;
    private _handleClose;
    private _handleClick;
    /** Opens the dialog. */
    show(): Promise<boolean>;
    /** Closes the dialog. */
    hide(): Promise<boolean>;
    /** Toggles the open state of the dialog. */
    toggle(): Promise<boolean>;
    protected _renderBackdrop(): import("lit-html").TemplateResult<1>;
    protected _renderHeader(): import("lit-html").TemplateResult<1>;
    protected _renderContent(): import("lit-html").TemplateResult<1>;
    protected _renderFooter(): import("lit-html").TemplateResult<1>;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-dialog': IgcDialogComponent;
    }
}
export {};
