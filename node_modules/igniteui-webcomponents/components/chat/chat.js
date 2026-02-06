var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ContextProvider } from '@lit/context';
import { html, LitElement, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { repeat } from 'lit/directives/repeat.js';
import { addThemingController } from '../../theming/theming-controller.js';
import IgcButtonComponent from '../button/button.js';
import { chatContext, chatUserInputContext } from '../common/context.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { IgcChatResourceStringEN } from '../common/i18n/EN/chat.resources.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { isEmpty } from '../common/util.js';
import IgcIconComponent from '../icon/icon.js';
import IgcListComponent from '../list/list.js';
import IgcToastComponent from '../toast/toast.js';
import IgcTooltipComponent from '../tooltip/tooltip.js';
import IgcChatInputComponent from './chat-input.js';
import IgcChatMessageComponent from './chat-message.js';
import { ChatState } from './chat-state.js';
import { styles } from './themes/chat.base.css.js';
import { styles as shared } from './themes/shared/chat.common.css.js';
import { all } from './themes/themes.js';
const Slots = setSlots('prefix', 'title', 'actions', 'suggestions-header', 'suggestions', 'suggestions-actions', 'suggestion', 'empty-state', 'typing-indicator');
export default class IgcChatComponent extends EventEmitterMixin(LitElement) {
    static { this.tagName = 'igc-chat'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcChatComponent, IgcChatInputComponent, IgcChatMessageComponent, IgcButtonComponent, IgcIconComponent, IgcListComponent, IgcTooltipComponent, IgcToastComponent);
    }
    _updateContext() {
        this._context.setValue(this._state, true);
    }
    _updateUserInputContext() {
        this._userInputContext.setValue(this._state, true);
    }
    set messages(value) {
        this._state.messages = value;
    }
    get messages() {
        return this._state.messages;
    }
    set draftMessage(value) {
        if (this._state && value) {
            this._state.inputValue = value.text;
            this._state.inputAttachments = value.attachments || [];
            this.requestUpdate();
        }
    }
    get draftMessage() {
        return {
            text: this._state.inputValue,
            attachments: this._state.inputAttachments,
        };
    }
    set options(value) {
        this._state.options = value;
    }
    get options() {
        return this._state.options;
    }
    constructor() {
        super();
        this._state = new ChatState(this, this._updateContext, this._updateUserInputContext);
        this._defaults = Object.freeze({
            typingIndicator: () => this._renderLoadingTemplate(),
            suggestionPrefix: () => this._renderSuggestionPrefix(),
        });
        this._slots = addSlotController(this, {
            slots: Slots,
        });
        this._context = new ContextProvider(this, {
            context: chatContext,
            initialValue: this._state,
        });
        this._userInputContext = new ContextProvider(this, {
            context: chatUserInputContext,
            initialValue: this._state,
        });
        this.resourceStrings = IgcChatResourceStringEN;
        addThemingController(this, all);
    }
    _getRenderer(name) {
        return this._state.options?.renderers
            ? (this._state.options.renderers[name] ?? this._defaults[name])
            : this._defaults[name];
    }
    _handleSuggestionClick(text) {
        this._state.addMessageWithEvent({ text });
        this._input?.focusInput();
    }
    scrollToMessage(messageId) {
        if (!isEmpty(this.messages)) {
            const message = this.renderRoot.querySelector(`#message-${messageId}`);
            message?.scrollIntoView({ block: 'end', inline: 'end' });
        }
    }
    updated(properties) {
        if ((properties.has('messages') ||
            this._typingIndicator ||
            this._suggestionsContainer) &&
            !this._state.disableAutoScroll) {
            this._scrollToBottom();
        }
    }
    _scrollToBottom() {
        const current = this._scrollContainer.scrollTop;
        requestAnimationFrame(() => {
            const scrollHeight = this._scrollContainer.scrollHeight;
            if (current < scrollHeight) {
                this._scrollContainer.scrollBy({
                    top: Math.abs(scrollHeight - current),
                });
            }
        });
    }
    _renderHeader() {
        const hasContent = this._slots.hasAssignedElements('prefix') ||
            this._slots.hasAssignedElements('title') ||
            this._slots.hasAssignedElements('actions') ||
            this._state.options?.headerText;
        return html `
      <div part="header" ?hidden=${!hasContent}>
        <slot
          name="prefix"
          ?hidden=${!this._slots.hasAssignedElements('prefix')}
        ></slot>
        <slot name="title">${this._state.options?.headerText}</slot>
        <slot name="actions"></slot>
      </div>
    `;
    }
    _renderMessages() {
        const ctx = { instance: this };
        return html `
      <div part="message-list" tabindex="0">
        ${repeat(this._state.messages, (message) => message.id, (message) => {
            return html `
              <igc-chat-message
                id=${`message-${message.id}`}
                part="message-item"
                .message=${message}
                exportparts="
                  message-container,
                  message-list,
                  message-header,
                  plain-text: message-content,
                  message-attachments: message-attachments-container,
                  attachment: message-attachment,
                  message-actions: message-actions-container,
                  sent: message-sent,
                  attachment-header,
                  attachment-content,
                  attachment-icon,
                  file-name,
                "
              >
              </igc-chat-message>
            `;
        })}
        ${this._state.options?.isTyping
            ? html `
              <div part="typing-indicator">
                <slot name="typing-indicator"
                  >${this._getRenderer('typingIndicator')(ctx)}</slot
                >
              </div>
            `
            : nothing}
      </div>
    `;
    }
    _renderLoadingTemplate() {
        return html `
      <div part="typing-dot"></div>
      <div part="typing-dot"></div>
      <div part="typing-dot"></div>
      <div part="typing-dot"></div>
    `;
    }
    _renderSuggestionPrefix() {
        return html `<igc-icon name="auto_suggest"></igc-icon>`;
    }
    _renderSuggestions() {
        const hasContent = this._slots.hasAssignedElements('suggestions-header');
        const suggestions = this._state.options?.suggestions ?? [];
        const ctx = { instance: this };
        return html `
      <div part="suggestions-container">
        <igc-list>
          <igc-list-header part="suggestions-header">
            <span ?hidden=${hasContent}>
              ${this.resourceStrings.suggestionsHeader}
            </span>
            <slot name="suggestions-header"></slot>
          </igc-list-header>
          <slot name="suggestions">
            ${suggestions.map((suggestion) => html `
                <slot name="suggestion">
                  <igc-list-item
                    part="suggestion"
                    @click=${() => this._handleSuggestionClick(suggestion)}
                  >
                    <span slot="start" part="suggestion-prefix">
                      ${this._getRenderer('suggestionPrefix')(ctx)}
                    </span>
                    <span slot="title" part="suggestion-title"
                      >${suggestion}</span
                    >
                  </igc-list-item>
                </slot>
              `)}
          </slot>
          <slot name="suggestions-actions"></slot>
        </igc-list>
      </div>
    `;
    }
    _renderEmptyState() {
        return html `
      <div part="empty-state">
        <slot name="empty-state"></slot>
      </div>
    `;
    }
    render() {
        const hasMessages = !isEmpty(this.messages);
        const suggestions = isEmpty(this._state.options?.suggestions ?? [])
            ? nothing
            : this._renderSuggestions();
        return html `
      <div part="chat-container">
        ${this._renderHeader()}

        <div part="message-area-container">
          ${cache(hasMessages || this._state.options?.isTyping
            ? this._renderMessages()
            : this._renderEmptyState())}
          ${this._state.suggestionsPosition === 'below-messages'
            ? suggestions
            : nothing}
        </div>

        <div part="input-area-container">
          <igc-chat-input
            exportparts="
                input-container: input-area,
                input-wrapper: input-container,
                attachments: input-attachments-container,
                attachment-wrapper: input-attachment-container,
                attachment-name: input-attachment-name,
                attachment-icon: input-attachment-icon,
                text-input,
                actions-container: input-actions-container,
                input-actions-start,
                input-actions-end,
                file-upload-container,
                file-upload,
                send-button-container,
                send-button"
          >
          </igc-chat-input>
          ${this._state.suggestionsPosition === 'below-input'
            ? suggestions
            : nothing}
        </div>
      </div>
    `;
    }
}
__decorate([
    query(IgcChatInputComponent.tagName)
], IgcChatComponent.prototype, "_input", void 0);
__decorate([
    query('[part="typing-indicator"]')
], IgcChatComponent.prototype, "_typingIndicator", void 0);
__decorate([
    query('[part="suggestions-container"]')
], IgcChatComponent.prototype, "_suggestionsContainer", void 0);
__decorate([
    query('[part="message-area-container"]', true)
], IgcChatComponent.prototype, "_scrollContainer", void 0);
__decorate([
    property({ attribute: false })
], IgcChatComponent.prototype, "messages", null);
__decorate([
    property({ attribute: false })
], IgcChatComponent.prototype, "draftMessage", null);
__decorate([
    property({ attribute: false })
], IgcChatComponent.prototype, "options", null);
__decorate([
    property({ attribute: false })
], IgcChatComponent.prototype, "resourceStrings", void 0);
//# sourceMappingURL=chat.js.map