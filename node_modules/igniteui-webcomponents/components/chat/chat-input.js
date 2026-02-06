var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ContextConsumer, consume } from '@lit/context';
import { html, LitElement, nothing } from 'lit';
import { query, state } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { until } from 'lit/directives/until.js';
import { addThemingController } from '../../theming/theming-controller.js';
import IgcIconButtonComponent from '../button/icon-button.js';
import IgcChipComponent from '../chip/chip.js';
import { chatContext, chatUserInputContext } from '../common/context.js';
import { enterKey, tabKey } from '../common/controllers/key-bindings.js';
import { registerComponent } from '../common/definitions/register.js';
import { partMap } from '../common/part-map.js';
import { bindIf, hasFiles, isEmpty, trimmedHtml } from '../common/util.js';
import IgcIconComponent from '../icon/icon.js';
import IgcTextareaComponent from '../textarea/textarea.js';
import { styles } from './themes/input.base.css.js';
import { all } from './themes/input.js';
import { styles as shared } from './themes/shared/input/input.common.css.js';
import { addAdoptedStylesController, getChatAcceptedFiles, getIconName, } from './utils.js';
export default class IgcChatInputComponent extends LitElement {
    static { this.tagName = 'igc-chat-input'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcChatInputComponent, IgcTextareaComponent, IgcIconButtonComponent, IgcChipComponent, IgcIconComponent);
    }
    get _state() {
        return this._stateConsumer.value;
    }
    get _acceptedTypes() {
        return this._state.acceptedFileTypes;
    }
    constructor() {
        super();
        this._defaults = Object.freeze({
            fileUploadButton: () => this._renderFileUploadButton(),
            input: () => this._renderTextArea(),
            inputActions: () => this._renderActionsArea(),
            inputActionsEnd: () => nothing,
            inputActionsStart: () => nothing,
            inputAttachments: (ctx) => this._renderAttachmentsArea(ctx.attachments),
            sendButton: () => this._renderSendButton(),
        });
        this._userIsTyping = false;
        this._userLastTypeTime = Date.now();
        this._typingTimeout = 0;
        this._adoptedStyles = addAdoptedStylesController(this);
        this._stateChanged = () => {
            this._adoptedStyles.shouldAdoptStyles(!!this._state.options?.adoptRootStyles &&
                !this._adoptedStyles.hasAdoptedStyles);
        };
        this._stateConsumer = new ContextConsumer(this, {
            context: chatContext,
            callback: this._stateChanged,
            subscribe: true,
        });
        this._parts = { 'input-container': true, dragging: false };
        addThemingController(this, all, { themeChange: this._adoptPageStyles });
    }
    focusInput() {
        this._textInputElement?.focus();
    }
    _adoptPageStyles() {
        this._adoptedStyles.shouldAdoptStyles(this._adoptedStyles.hasAdoptedStyles);
    }
    _getRenderer(name) {
        return this._state.options?.renderers
            ? (this._state.options.renderers[name] ??
                this._defaults[name])
            : this._defaults[name];
    }
    async _sendMessage() {
        if (!this._userInputState.hasInputValue &&
            !this._userInputState.hasInputAttachments) {
            return;
        }
        this._userInputState.addMessageWithEvent({
            text: this._userInputState.inputValue,
            attachments: this._userInputState.inputAttachments,
        });
        this.style.height = 'auto';
        await this._userInputState.host.updateComplete;
        this.focusInput();
    }
    _setTypingStateAndEmit(state) {
        this._userIsTyping = state;
        this._userInputState.emitUserTypingState(state);
    }
    _handleAttachmentRemoved(attachment) {
        const current = this._userInputState.inputAttachments;
        if (this._state.emitAttachmentRemoved(attachment)) {
            this._state.inputAttachments = current.toSpliced(current.indexOf(attachment), 1);
        }
    }
    _handleKeydown(event) {
        this._userLastTypeTime = Date.now();
        const isEnterKey = event.key.toLowerCase() === enterKey.toLowerCase();
        const isTab = event.key.toLocaleLowerCase() === tabKey.toLowerCase();
        if (isTab && !this._userIsTyping) {
            return;
        }
        if (isEnterKey && !event.shiftKey) {
            event.preventDefault();
            this._sendMessage();
            if (this._userIsTyping) {
                clearTimeout(this._typingTimeout);
                this._setTypingStateAndEmit(false);
            }
            return;
        }
        clearTimeout(this._typingTimeout);
        const delay = this._state.stopTypingDelay;
        if (!this._userIsTyping) {
            this._setTypingStateAndEmit(true);
        }
        this._typingTimeout = setTimeout(() => {
            if (this._userIsTyping && this._userLastTypeTime + delay <= Date.now()) {
                this._setTypingStateAndEmit(false);
            }
        }, delay);
    }
    _handleFileInputClick() {
        this._fileInput?.showPicker();
    }
    _handleFocusState(event) {
        this._state.emitEvent(event.type === 'focus' ? 'igcInputFocus' : 'igcInputBlur');
    }
    _handleDragEnter(event) {
        event.preventDefault();
        event.stopPropagation();
        const validFiles = getChatAcceptedFiles(event, this._acceptedTypes);
        this._parts = { 'input-container': true, dragging: !isEmpty(validFiles) };
        this._state.emitEvent('igcAttachmentDrag');
    }
    _handleDragOver(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    _handleDragLeave(event) {
        event.preventDefault();
        event.stopPropagation();
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX;
        const y = event.clientY;
        if (x <= rect.left ||
            x >= rect.right ||
            y <= rect.top ||
            y >= rect.bottom) {
            this._parts = { 'input-container': true, dragging: false };
        }
    }
    _handleDrop(event) {
        event.preventDefault();
        event.stopPropagation();
        this._parts = { 'input-container': true, dragging: false };
        const validFiles = getChatAcceptedFiles(event, this._acceptedTypes);
        this._state.emitEvent('igcAttachmentDrop');
        this._state.attachFilesWithEvent(validFiles);
        this.requestUpdate();
    }
    _handleInput({ detail }) {
        this._state.inputValue = detail;
        this._state.emitEvent('igcInputChange', { detail: { value: detail } });
    }
    _handleFileUpload(event) {
        const input = event.target;
        if (hasFiles(input)) {
            this._state.attachFilesWithEvent(Array.from(input.files));
        }
    }
    _renderAttachmentsArea(attachments) {
        return html `${attachments?.map((attachment) => html `
        <div part="attachment-wrapper" role="listitem">
          <igc-chip
            removable
            @igcRemove=${() => this._handleAttachmentRemoved(attachment)}
          >
            <igc-icon
              part="attachment-icon"
              slot="prefix"
              name=${getIconName(attachment.file?.type ?? attachment.type)}
            ></igc-icon>
            <span part="attachment-name">${attachment.name}</span>
          </igc-chip>
        </div>
      `)} `;
    }
    _renderTextArea() {
        return html `
      <igc-textarea
        part="text-input"
        aria-label="Chat text input"
        placeholder=${ifDefined(this._state.options?.inputPlaceholder)}
        resize="auto"
        rows="1"
        .value=${this._userInputState?.inputValue}
        @igcInput=${this._handleInput}
        @keydown=${this._handleKeydown}
        @focus=${this._handleFocusState}
        @blur=${this._handleFocusState}
      ></igc-textarea>
    `;
    }
    _renderFileUploadButton() {
        const accepted = this._state.options?.acceptedFiles;
        const attachmentsDisabled = this._state.options?.disableInputAttachments;
        return html `${cache(attachmentsDisabled
            ? nothing
            : html `
            <label for="input_attachments" part="file-upload">
              <igc-icon-button
                aria-label="Attach files"
                variant="flat"
                name="attach_file"
                @click=${this._handleFileInputClick}
              ></igc-icon-button>
              <input
                type="file"
                id="input_attachments"
                tabindex="-1"
                name="input_attachments"
                aria-label="Upload button"
                multiple
                accept=${bindIf(accepted, accepted)}
                @change=${this._handleFileUpload}
              />
            </label>
          `)}`;
    }
    _renderSendButton() {
        const enabled = this._state.hasInputValue || this._state.hasInputAttachments;
        return html `
      <igc-icon-button
        aria-label="Send message"
        name="send_message"
        variant="contained"
        part="send-button"
        ?disabled=${!enabled}
        @click=${this._sendMessage}
      ></igc-icon-button>
    `;
    }
    _renderActionsArea() {
        const ctx = { instance: this._state.host };
        return trimmedHtml `
      <div part="file-upload-container">
        ${this._getRenderer('fileUploadButton')(ctx)}
      </div>
      <div part="input-actions-start">
        ${this._getRenderer('inputActionsStart')(ctx)}
      </div>
      <div part="send-button-container">${this._getRenderer('sendButton')(ctx)}</div>
      <div part="input-actions-end">
        ${this._getRenderer('inputActionsEnd')(ctx)}
      </div>
    `;
    }
    render() {
        const ctx = { instance: this._state.host };
        const inputCtx = {
            ...ctx,
            attachments: this._state.inputAttachments,
            value: this._state.inputValue,
        };
        return html `
      <div
        part=${partMap(this._parts)}
        @dragenter=${this._handleDragEnter}
        @dragover=${this._handleDragOver}
        @dragleave=${this._handleDragLeave}
        @drop=${this._handleDrop}
      >
        ${this._state.hasInputAttachments
            ? html `
              <div part="attachments" role="list" aria-label="Attachments">
                ${until(this._getRenderer('inputAttachments')(inputCtx))}
              </div>
            `
            : nothing}

        <div part="input-wrapper">
          ${until(this._getRenderer('input')(inputCtx))}
        </div>

        <div part="actions-container">
          ${until(this._getRenderer('inputActions')(ctx))}
        </div>
      </div>
    `;
    }
}
__decorate([
    consume({ context: chatUserInputContext, subscribe: true })
], IgcChatInputComponent.prototype, "_userInputState", void 0);
__decorate([
    query(IgcTextareaComponent.tagName)
], IgcChatInputComponent.prototype, "_textInputElement", void 0);
__decorate([
    query('#input_attachments')
], IgcChatInputComponent.prototype, "_fileInput", void 0);
__decorate([
    state()
], IgcChatInputComponent.prototype, "_parts", void 0);
//# sourceMappingURL=chat-input.js.map