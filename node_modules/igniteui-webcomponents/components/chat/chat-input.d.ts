import { LitElement } from 'lit';
/**
 * A web component that provides the input area for the `igc-chat` interface.
 *
 * It supports:
 * - Text input with automatic resizing
 * - Sending messages on Enter key (with Shift+Enter for newlines)
 * - File attachments via file picker or drag-and-drop
 * - Customizable templates for send button, attachments, and text input
 * - Emits various chat-related events (typing, input focus/blur, attachment drop, etc.)
 *
 * @element igc-chat-input
 *
 * @slot - Default unnamed slot for rendering inside the component
 * @fires igcTypingChange - Fired when the user starts/stops typing
 * @fires igcInputFocus - Fired when the input area receives focus
 * @fires igcInputBlur - Fired when the input area loses focus
 * @fires igcAttachmentDrag - Fired when dragging a file over the input
 * @fires igcAttachmentDrop - Fired when a file is dropped into the input
 * @fires igcChange - Fired when file input changes (delegated from `<igc-file-input>`)
 *
 * @csspart input-container - Container for the input section
 * @csspart input-wrapper - Wrapper around the text input
 * @csspart text-input - The `<igc-textarea>` component
 * @csspart actions-container - Container for file upload/send buttons
 * @csspart send-button - The send icon button
 * @csspart attachments - Container for rendering attachments
 * @csspart attachment-wrapper - Wrapper for individual attachment
 * @csspart attachment-name - Display name of an attachment
 */
export default class IgcChatInputComponent extends LitElement {
    static readonly tagName = "igc-chat-input";
    static styles: import("lit").CSSResult[];
    static register(): void;
    private readonly _defaults;
    private _userIsTyping;
    private _userLastTypeTime;
    private _typingTimeout;
    private readonly _adoptedStyles;
    private readonly _stateChanged;
    private readonly _stateConsumer;
    private readonly _userInputState;
    private readonly _textInputElement?;
    protected readonly _fileInput?: HTMLInputElement;
    private _parts;
    private get _state();
    private get _acceptedTypes();
    constructor();
    /** @internal */
    focusInput(): void;
    private _adoptPageStyles;
    private _getRenderer;
    private _sendMessage;
    private _setTypingStateAndEmit;
    private _handleAttachmentRemoved;
    private _handleKeydown;
    private _handleFileInputClick;
    private _handleFocusState;
    private _handleDragEnter;
    private _handleDragOver;
    private _handleDragLeave;
    private _handleDrop;
    private _handleInput;
    private _handleFileUpload;
    /**
     * Default attachments area template used when no custom template is provided.
     * Renders the list of input attachments as chips.
     * @returns TemplateResult containing the attachments area
     */
    private _renderAttachmentsArea;
    /**
     * Default text area template used when no custom template is provided.
     * Renders a text area for user input.
     * @returns TemplateResult containing the text area
     */
    private _renderTextArea;
    private _renderFileUploadButton;
    private _renderSendButton;
    private _renderActionsArea;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-chat-input': IgcChatInputComponent;
    }
}
