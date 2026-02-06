import { LitElement } from 'lit';
import type { IgcChatMessage } from './types.js';
/**
 * A chat message component for displaying individual messages in `<igc-chat>`.
 *
 * @element igc-chat-message
 *
 *
 * This component renders a single chat message including:
 * - Message text (sanitized)
 * - Attachments (if any)
 * - Custom templates for message content and actions (if provided via chat options)
 *
 * It distinguishes sent messages from received messages by comparing
 * the message sender with the current user ID from chat state.
 *
 * The message text is sanitized with DOMPurify before rendering,
 * and can be rendered with a markdown renderer if provided.
 */
export default class IgcChatMessageComponent extends LitElement {
    static readonly tagName = "igc-chat-message";
    static styles: import("lit").CSSResult[];
    static register(): void;
    private readonly _adoptedStyles;
    private readonly _defaults;
    private readonly _stateChanged;
    private readonly _stateConsumer;
    private get _state();
    /**
     * The chat message to render.
     */
    message: IgcChatMessage;
    constructor();
    private _adoptPageStyles;
    private _getRenderer;
    private _handleCopy;
    private _handleMessageActionClick;
    private _renderHeader;
    private _renderContent;
    private _renderActions;
    private _renderActionButton;
    private _renderAttachments;
    private _renderMessage;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-chat-message': IgcChatMessageComponent;
    }
}
