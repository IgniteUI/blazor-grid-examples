import { LitElement } from 'lit';
import type { IgcChatMessage } from './types.js';
/**
 * A component that renders message attachments within a chat.
 *
 * Displays attachments such as images or files, supporting custom templates
 * and default rendering using expansion panels.
 *
 * @element igc-message-attachments
 *
 * @csspart attachments-container - Container wrapping all attachments.
 * @csspart attachment - Wrapper for a single attachment.
 * @csspart attachment-header - Wrapper for a single attachment header.
 * @csspart attachments-content - Part representing the attachment preview.
 * @csspart attachment-icon - Icon part representing the attachment type.
 * @csspart file-name - Part representing the attachment's file name.
 * @csspart actions - Container for header action buttons.
 * @csspart image-attachment - Part for the image element inside an image attachment.
 *
 * @fires igcAttachmentClick - Fired when an attachment header is toggled (clicked).
 */
export default class IgcMessageAttachmentsComponent extends LitElement {
    static readonly tagName = "igc-message-attachments";
    static styles: import("lit").CSSResult[];
    static register(): void;
    private readonly _defaults;
    private readonly _state;
    /**
     * The array of attachments to render.
     */
    message?: IgcChatMessage;
    constructor();
    private _getRenderer;
    private _handleHeaderClick;
    /**
     * Default attachment header template used when no custom template is provided.
     * Renders the attachment icon and name.
     * @param attachment The message attachment to render
     * @returns TemplateResult containing the rendered attachment header
     */
    private renderHeader;
    /**
     * Default attachment content template used when no custom template is provided.
     * Renders the attachment content based on its type.
     * @param attachment The message attachment to render
     * @returns TemplateResult containing the rendered attachment content
     */
    private _renderContent;
    private _renderAttachment;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-message-attachments': IgcMessageAttachmentsComponent;
    }
}
