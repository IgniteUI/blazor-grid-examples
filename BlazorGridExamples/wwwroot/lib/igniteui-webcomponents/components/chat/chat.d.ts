import { LitElement, type PropertyValues } from 'lit';
import type { Constructor } from '../common/mixins/constructor.js';
import type { IgcChatMessage, IgcChatMessageAttachment, IgcChatMessageReaction, IgcChatOptions } from './types.js';
/**
 * Defines the custom events dispatched by the `<igc-chat>` component.
 */
export interface IgcChatComponentEventMap {
    /**
     * Dispatched when a new chat message is created (sent).
     */
    igcMessageCreated: CustomEvent<IgcChatMessage>;
    /**
     * Dispatched when a message is reacted to.
     */
    igcMessageReact: CustomEvent<IgcChatMessageReaction>;
    /**
     * Dispatched when a chat message attachment is clicked.
     */
    igcAttachmentClick: CustomEvent<IgcChatMessageAttachment>;
    /**
     * Dispatched when attachment(s) are added either through drag & drop or through
     * the default file input.
     */
    igcAttachmentAdded: CustomEvent<IgcChatMessageAttachment[]>;
    /**
     * Dispatched when an attachment is removed by the user.
     */
    igcAttachmentRemoved: CustomEvent<IgcChatMessageAttachment>;
    /**
     * Dispatched during an attachment drag operation.
     */
    igcAttachmentDrag: CustomEvent<void>;
    /**
     * Dispatched when an attachment is dropped (e.g., in a drag-and-drop operation).
     */
    igcAttachmentDrop: CustomEvent<void>;
    /**
     * Dispatched when the typing status changes (e.g., user starts or stops typing).
     */
    igcTypingChange: CustomEvent<boolean>;
    /**
     * Dispatched when the chat input field gains focus.
     */
    igcInputFocus: CustomEvent<void>;
    /**
     * Dispatched when the chat input field loses focus.
     */
    igcInputBlur: CustomEvent<void>;
    /**
     * Dispatched when the content of the chat input changes.
     */
    igcInputChange: CustomEvent<string>;
}
declare const IgcChatComponent_base: Constructor<import("../common/mixins/event-emitter.js").EventEmitterInterface<IgcChatComponentEventMap>> & Constructor<LitElement>;
/**
 * A chat UI component for displaying messages, attachments, and input interaction.
 *
 * @element igc-chat
 *
 * @fires igcMessageCreated - Dispatched when a new chat message is created (sent).
 * @fires igcMessageReact - Dispatched when a message is reacted to.
 * @fires igcAttachmentClick - Dispatched when a chat message attachment is clicked.
 * @fires igcAttachmentAdded - Dispatched when attachment(s) are added either through drag & drop or through the default file input.
 * @fires igcAttachmentRemoved - Dispatched when an attachment is removed by the user.
 * @fires igcAttachmentDrag - Dispatched during an attachment drag operation.
 * @fires igcAttachmentDrop - Dispatched when an attachment is dropped (e.g., in a drag-and-drop operation).
 * @fires igcTypingChange - Dispatched when the typing status changes (e.g., user starts or stops typing).
 * @fires igcInputFocus - Dispatched when the chat input field gains focus.
 * @fires igcInputBlur - Dispatched when the chat input field loses focus.
 * @fires igcInputChange - Dispatched when the content of the chat input changes.
 *
 * @slot prefix - Slot for injecting content (e.g., avatar or icon) before the chat title.
 * @slot title - Slot for overriding the chat title content.
 * @slot actions - Slot for injecting header actions (e.g., buttons, menus).
 * @slot suggestions-header - Slot for rendering a custom header for the suggestions list.
 * @slot suggestions - Slot for rendering a custom list of quick reply suggestions.
 * @slot suggestions-actions - Slot for rendering additional actions.
 * @slot suggestion - Slot for rendering a single suggestion item.
 * @slot empty-state - Slot shown when there are no messages.
 * @slot typing-indicator - Slot for the "is typing" indicator.
 *
 * @csspart chat-container - Styles the main chat container.
 * @csspart header - Styles the chat header container.
 * @csspart prefix - Styles the element before the chat title (e.g., avatar).
 * @csspart title - Styles the chat header title.
 *
 * @csspart message-area-container - Styles the container holding the messages and (optional) suggestions.
 * @csspart message-list - Styles the message list container.
 * @csspart message-item - Styles each message wrapper.
 * @csspart typing-indicator - Styles the typing indicator container.
 * @csspart typing-dot - Styles individual typing indicator dots.
 *
 * @csspart suggestions-container - Styles the container holding all suggestions.
 * @csspart suggestions-header - Styles the suggestions header.
 * @csspart suggestion - Styles each suggestion item.
 * @csspart suggestion-prefix - Styles the icon or prefix in a suggestion.
 * @csspart suggestion-title - Styles the text/title of a suggestion.
 *
 * @csspart empty-state - Styles the empty state container when there are no messages.
 *
 * @csspart input-area-container - Styles the wrapper around the chat input area.
 * @csspart input-area - Styles the main text input area.
 * @csspart input-attachments-container - Styles the container for attachments in the input.
 * @csspart input-attachment-container - Styles a single attachment in the input area.
 * @csspart input-attachment-name - Styles the file name of an attachment.
 * @csspart input-attachment-icon - Styles the icon of an attachment.
 * @csspart text-input - Styles the text input field for typing messages.
 * @csspart input-actions-container - Styles the container for input actions.
 * @csspart input-actions-start - Styles the group of actions at the start of the input after the default file upload.
 * @csspart input-actions-end - Styles the group of actions at the end of the input.
 * @csspart file-upload-container - Styles the container for the file upload input.
 * @csspart file-upload - Styles the file upload input itself.
 * @csspart send-button-container - Styles the container around the send button.
 * @csspart send-button - Styles the send button.
 *
 * @csspart message-container - Styles the container of a single message.
 * @csspart message-list (forwarded) - Styles the internal list of messages.
 * @csspart message-header - Styles the header of a message (e.g., sender, timestamp).
 * @csspart message-content - Styles the text content of a message.
 * @csspart message-attachments-container - Styles the container for message attachments.
 * @csspart message-attachment - Styles a single message attachment.
 * @csspart message-actions-container - Styles the container holding message actions.
 * @csspart message-sent - Styles messages marked as sent by the current user.
 * @csspart attachment-header - Styles the header of an attachment block.
 * @csspart attachment-content - Styles the content of an attachment block.
 * @csspart attachment-icon - Styles the icon of an attachment.
 * @csspart file-name - Styles the file name shown in an attachment.
 */
export default class IgcChatComponent extends IgcChatComponent_base {
    static readonly tagName = "igc-chat";
    static styles: import("lit").CSSResult[];
    static register(): void;
    private readonly _state;
    private readonly _defaults;
    private readonly _slots;
    private readonly _context;
    private readonly _userInputContext;
    private readonly _input?;
    private readonly _typingIndicator?;
    private readonly _suggestionsContainer?;
    private readonly _scrollContainer;
    private _updateContext;
    private _updateUserInputContext;
    /**
     * The list of chat messages currently displayed.
     * Use this property to set or update the message history.
     */
    set messages(value: IgcChatMessage[]);
    get messages(): IgcChatMessage[];
    /**
     * The chat message currently being composed but not yet sent.
     * Includes the draft text and any attachments.
     */
    set draftMessage(value: {
        text: string;
        attachments?: IgcChatMessageAttachment[];
    });
    get draftMessage(): {
        text: string;
        attachments?: IgcChatMessageAttachment[];
    };
    /**
     * Controls the chat behavior and appearance through a configuration object.
     * Use this to toggle UI options, provide suggestions, templates, etc.
     */
    set options(value: IgcChatOptions);
    get options(): IgcChatOptions | undefined;
    /**
     * The resource strings of the chat.
     */
    resourceStrings: import("../common/i18n/EN/chat.resources.js").IgcChatResourceStrings;
    constructor();
    private _getRenderer;
    private _handleSuggestionClick;
    /**
     * Scrolls the view to a specific message by id.
     */
    scrollToMessage(messageId: string): void;
    protected updated(properties: PropertyValues<this>): void;
    private _scrollToBottom;
    private _renderHeader;
    private _renderMessages;
    private _renderLoadingTemplate;
    private _renderSuggestionPrefix;
    private _renderSuggestions;
    private _renderEmptyState;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-chat': IgcChatComponent;
    }
}
export {};
