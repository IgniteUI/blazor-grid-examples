import { IgcChatResourceStringEN } from '../common/i18n/EN/chat.resources.js';
import { isEmpty, nanoid } from '../common/util.js';
import IgcToastComponent from '../toast/toast.js';
import IgcTooltipComponent from '../tooltip/tooltip.js';
import { isImageAttachment, parseAcceptedFileTypes, } from './utils.js';
export class ChatState {
    get host() {
        return this._host;
    }
    get acceptedFileTypes() {
        return this._acceptedTypesCache;
    }
    get disableAutoScroll() {
        return this._options?.disableAutoScroll ?? false;
    }
    get messages() {
        return this._messages;
    }
    set messages(value) {
        this._messages = value;
    }
    get options() {
        return this._options;
    }
    set options(value) {
        this._options = value;
        this._setAcceptedTypesCache();
        this._contextUpdateFn.call(this._host);
    }
    get currentUserId() {
        return this._options?.currentUserId ?? 'user';
    }
    get suggestionsPosition() {
        return this._options?.suggestionsPosition ?? 'below-messages';
    }
    get stopTypingDelay() {
        return this._options?.stopTypingDelay ?? 3000;
    }
    get inputAttachments() {
        return this._inputAttachments;
    }
    set inputAttachments(value) {
        this._inputAttachments = value;
        this._userInputContextUpdateFn.call(this._host);
    }
    get inputValue() {
        return this._inputValue;
    }
    set inputValue(value) {
        this._inputValue = value;
        this._userInputContextUpdateFn.call(this._host);
    }
    get hasInputValue() {
        return !!this._inputValue.trim();
    }
    get hasInputAttachments() {
        return !isEmpty(this._inputAttachments);
    }
    constructor(chat, contextUpdateFn, userInputContextUpdateFn) {
        this._messages = [];
        this._inputAttachments = [];
        this._inputValue = '';
        this._acceptedTypesCache = null;
        this.resourceStrings = IgcChatResourceStringEN;
        this._host = chat;
        this._contextUpdateFn = contextUpdateFn;
        this._userInputContextUpdateFn = userInputContextUpdateFn;
    }
    isCurrentUserMessage(message) {
        return this.currentUserId === message?.sender;
    }
    emitEvent(name, args) {
        return this._host.emitEvent(name, args);
    }
    emitMessageCreated(message) {
        return this._host.emitEvent('igcMessageCreated', {
            detail: message,
            cancelable: true,
        });
    }
    emitAttachmentsAdded(attachments) {
        return this._host.emitEvent('igcAttachmentAdded', {
            detail: attachments,
            cancelable: true,
        });
    }
    emitAttachmentRemoved(attachment) {
        return this._host.emitEvent('igcAttachmentRemoved', {
            detail: attachment,
            cancelable: true,
        });
    }
    emitMessageReaction(reaction) {
        return this._host.emitEvent('igcMessageReact', { detail: reaction });
    }
    emitUserTypingState(state) {
        return this._host.emitEvent('igcTypingChange', { detail: state });
    }
    showActionsTooltip(target, message) {
        if (!this._actionsTooltip) {
            this._actionsTooltip = document.createElement(IgcTooltipComponent.tagName);
            this._actionsTooltip.hideTriggers = 'pointerleave,click,blur';
            this._actionsTooltip.hideDelay = 100;
            this._host.renderRoot.appendChild(this._actionsTooltip);
        }
        this._actionsTooltip.message = message;
        this._actionsTooltip.show(target);
    }
    showActionToast(content) {
        if (!this._actionToast) {
            this._actionToast = document.createElement(IgcToastComponent.tagName);
            this._actionToast.displayTime = 3000;
            this._host.renderRoot.appendChild(this._actionToast);
        }
        this._actionToast.textContent = content;
        this._actionToast.show();
    }
    _setAcceptedTypesCache() {
        this._acceptedTypesCache = this.options?.acceptedFiles
            ? parseAcceptedFileTypes(this.options.acceptedFiles)
            : null;
    }
    _createMessage(message) {
        return {
            id: message.id ?? nanoid(),
            text: message.text ?? '',
            sender: message.sender ?? this.currentUserId,
            timestamp: message.timestamp ?? Date.now().toString(),
            attachments: message.attachments || [],
        };
    }
    addMessage(message) {
        this.messages.push(this._createMessage(message));
        this._host.requestUpdate('messages');
    }
    addMessageWithEvent(message) {
        const newMessage = this._createMessage(message);
        if (this.emitMessageCreated(newMessage)) {
            this.addMessage(newMessage);
            this.inputValue = '';
            this.inputAttachments = [];
        }
    }
    attachFilesWithEvent(files) {
        const newAttachments = [];
        const fileNames = new Set(this.inputAttachments.map((attachment) => attachment.file?.name ?? ''));
        for (const file of files) {
            if (fileNames.has(file.name)) {
                continue;
            }
            const url = URL.createObjectURL(file);
            const attachment = {
                id: nanoid(),
                url,
                name: file.name,
                file,
            };
            if (isImageAttachment(file)) {
                attachment.thumbnail = url;
            }
            newAttachments.push(attachment);
        }
        if (this.emitAttachmentsAdded(newAttachments)) {
            this.inputAttachments = [...this.inputAttachments, ...newAttachments];
        }
    }
}
//# sourceMappingURL=chat-state.js.map