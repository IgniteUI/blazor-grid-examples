var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ContextConsumer } from '@lit/context';
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { until } from 'lit/directives/until.js';
import { addThemingController } from '../../theming/theming-controller.js';
import IgcIconButtonComponent from '../button/icon-button.js';
import { chatContext } from '../common/context.js';
import { registerComponent } from '../common/definitions/register.js';
import { partMap } from '../common/part-map.js';
import { isEmpty, trimmedHtml } from '../common/util.js';
import IgcMessageAttachmentsComponent from './message-attachments.js';
import { styles } from './themes/message.base.css.js';
import { all } from './themes/message.js';
import { styles as shared } from './themes/shared/chat-message/chat-message.common.css.js';
import { addAdoptedStylesController } from './utils.js';
const LIKE_INACTIVE = 'thumb_up_inactive';
const LIKE_ACTIVE = 'thumb_up_active';
const DISLIKE_INACTIVE = 'thumb_down_inactive';
const DISLIKE_ACTIVE = 'thumb_down_active';
const COPY_CONTENT = 'copy_content';
const REGENERATE = 'regenerate';
export default class IgcChatMessageComponent extends LitElement {
    static { this.tagName = 'igc-chat-message'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcChatMessageComponent, IgcMessageAttachmentsComponent, IgcIconButtonComponent);
    }
    get _state() {
        return this._stateConsumer.value;
    }
    constructor() {
        super();
        this._adoptedStyles = addAdoptedStylesController(this);
        this._defaults = Object.freeze({
            messageHeader: () => this._renderHeader(),
            messageContent: () => this._renderContent(),
            messageAttachments: () => this._renderAttachments(),
            messageActions: () => this._renderActions(),
        });
        this._stateChanged = () => {
            this._adoptedStyles.shouldAdoptStyles(!!this._state.options?.adoptRootStyles &&
                !this._adoptedStyles.hasAdoptedStyles);
        };
        this._stateConsumer = new ContextConsumer(this, {
            context: chatContext,
            callback: this._stateChanged,
            subscribe: true,
        });
        addThemingController(this, all, { themeChange: this._adoptPageStyles });
    }
    _adoptPageStyles() {
        this._adoptedStyles.shouldAdoptStyles(this._adoptedStyles.hasAdoptedStyles);
    }
    _getRenderer(name) {
        return this._state.options?.renderers
            ? (this._state.options.renderers[name] ?? this._defaults[name])
            : this._defaults[name];
    }
    async _handleCopy() {
        const text = this.message.text;
        const separator = text ? '\n\n' : '';
        const attachments = this.message.attachments ?? [];
        const { attachmentLabel, attachmentsListLabel, messageCopied } = this._state.resourceStrings;
        const attachmentsText = isEmpty(attachments)
            ? ''
            : attachments
                .map(({ name, url }) => `${name ?? attachmentLabel}: ${url ?? ''}`)
                .join('\n');
        const payload = attachmentsText
            ? `${text}${separator}${attachmentsListLabel}:\n${attachmentsText}`
            : text;
        try {
            await navigator.clipboard.writeText(payload);
            this._state.showActionToast(messageCopied);
        }
        catch (err) {
            throw new Error(`Failed to copy message: ${err}`);
        }
    }
    _handleMessageActionClick(event) {
        const targetButton = event.target;
        const button = targetButton.closest(IgcIconButtonComponent.tagName);
        if (!button) {
            return;
        }
        let reaction = button.name;
        switch (reaction) {
            case LIKE_INACTIVE:
            case LIKE_ACTIVE:
                reaction = this.message.reactions?.includes(LIKE_ACTIVE)
                    ? LIKE_INACTIVE
                    : LIKE_ACTIVE;
                break;
            case DISLIKE_INACTIVE:
            case DISLIKE_ACTIVE:
                reaction = this.message.reactions?.includes(DISLIKE_ACTIVE)
                    ? DISLIKE_INACTIVE
                    : DISLIKE_ACTIVE;
                break;
            case COPY_CONTENT:
                reaction = COPY_CONTENT;
                this._handleCopy();
                break;
            case REGENERATE:
                reaction = REGENERATE;
                break;
            default:
                reaction = '';
        }
        this.message.reactions = reaction ? [reaction] : [];
        this._state.emitMessageReaction({ message: this.message, reaction });
        this.requestUpdate();
    }
    _renderHeader() {
        return nothing;
    }
    _renderContent() {
        return html `${this.message.text}`;
    }
    _renderActions() {
        const isSent = this.message.sender === this._state.currentUserId;
        const hasText = this.message.text.trim();
        const hasAttachments = !isEmpty(this.message.attachments ?? []);
        const isTyping = this._state.options?.isTyping;
        const isLastMessage = this.message === this._state.messages.at(-1);
        const resourceStrings = this._state.resourceStrings;
        if (isSent || !(hasText || hasAttachments) || (isLastMessage && isTyping)) {
            return nothing;
        }
        return html `
      ${this._renderActionButton(COPY_CONTENT, resourceStrings.reactionCopy)}
      ${this._renderActionButton(this.message.reactions?.includes(LIKE_ACTIVE)
            ? LIKE_ACTIVE
            : LIKE_INACTIVE, resourceStrings.reactionLike)}
      ${this._renderActionButton(this.message.reactions?.includes(DISLIKE_ACTIVE)
            ? DISLIKE_ACTIVE
            : DISLIKE_INACTIVE, resourceStrings.reactionDislike)}
      ${this._renderActionButton(REGENERATE, resourceStrings.reactionRegenerate)}
    `;
    }
    _renderActionButton(name, tooltipMessage) {
        return html `
      <igc-icon-button
        id=${`${name}-button`}
        name=${name}
        variant="flat"
        @pointerenter=${({ target }) => this._state.showActionsTooltip(target, tooltipMessage)}
        @focus=${({ target }) => this._state.showActionsTooltip(target, tooltipMessage)}
      ></igc-icon-button>
    `;
    }
    _renderAttachments() {
        return isEmpty(this.message.attachments ?? [])
            ? nothing
            : html `
          <igc-message-attachments
            .message=${this.message}
            exportparts="
              attachment,
              attachment-header,
              attachment-icon,
              file-name,
              attachment-content"
          ></igc-message-attachments>
        `;
    }
    _renderMessage() {
        const ctx = {
            message: this.message,
            instance: this._state.host,
        };
        return trimmedHtml `
      <div part="message-header">
        ${until(this._getRenderer('messageHeader')(ctx))}
      </div>
      <div part="plain-text">
        ${until(this._getRenderer('messageContent')(ctx))}
      </div>
      <div part="message-attachments">
        ${until(this._getRenderer('messageAttachments')(ctx))}
      </div>
      <div part="message-actions" @click=${this._handleMessageActionClick}>
        ${until(this._getRenderer('messageActions')(ctx))}
      </div>
    `;
    }
    render() {
        const messageRenderer = this._state.options?.renderers?.message;
        const ctx = {
            message: this.message,
            instance: this._state.host,
        };
        const parts = {
            'message-container': true,
            sent: this._state.isCurrentUserMessage(this.message),
        };
        return html `
      ${cache(this.message
            ? html `
              <div part=${partMap(parts)}>
                ${cache(messageRenderer
                ? until(messageRenderer(ctx))
                : this._renderMessage())}
              </div>
            `
            : nothing)}
    `;
    }
}
__decorate([
    property({ attribute: false })
], IgcChatMessageComponent.prototype, "message", void 0);
//# sourceMappingURL=chat-message.js.map