import type IgcChatComponent from './chat.js';
import type { IgcChatComponentEventMap } from './chat.js';
import type { ChatSuggestionsPosition, IgcChatMessage, IgcChatMessageAttachment, IgcChatMessageReaction, IgcChatOptions } from './types.js';
import { type ChatAcceptedFileTypes } from './utils.js';
/**
 * Internal state manager for the `<igc-chat>` component.
 *
 * Manages messages, input value, attachments, options, and event emissions.
 */
export declare class ChatState {
    private readonly _host;
    private readonly _contextUpdateFn;
    private readonly _userInputContextUpdateFn;
    private _actionsTooltip?;
    private _actionToast?;
    /** The current list of messages */
    private _messages;
    /** Chat options/configuration */
    private _options?;
    /** List of current input attachments */
    private _inputAttachments;
    /** Current input text */
    private _inputValue;
    /**
     * Cache of accepted file types, organized into extensions, mimeTypes, and wildcardTypes
     */
    private _acceptedTypesCache;
    resourceStrings: import("../common/i18n/EN/chat.resources.js").IgcChatResourceStrings;
    get host(): IgcChatComponent;
    get acceptedFileTypes(): ChatAcceptedFileTypes | null;
    get disableAutoScroll(): boolean;
    /**
     * Gets the list of chat messages.
     */
    get messages(): IgcChatMessage[];
    /**
     * Sets the list of chat messages.
     */
    set messages(value: IgcChatMessage[]);
    /**
     * Gets current chat options.
     */
    get options(): IgcChatOptions | undefined;
    /**
     * Sets chat options and requests host update.
     */
    set options(value: IgcChatOptions);
    /**
     * Gets the current user ID from options or returns 'user' as fallback.
     */
    get currentUserId(): string;
    /**
     * Gets the current suggestionsPosition from options or returns the default value 'below-messages'.
     */
    get suggestionsPosition(): ChatSuggestionsPosition;
    /**
     * Gets the current stopTypingDelay from options or returns the default value `3000`.
     */
    get stopTypingDelay(): number;
    /**
     * Gets the list of attachments currently attached to input.
     */
    get inputAttachments(): IgcChatMessageAttachment[];
    /**
     * Sets the input attachments and requests host update.
     */
    set inputAttachments(value: IgcChatMessageAttachment[]);
    /**
     * Gets the current input value.
     */
    get inputValue(): string;
    /**
     * Sets the current input value and requests host update.
     */
    set inputValue(value: string);
    /**
     * Returns whether the default chat input textarea has a trimmed value payload.
     * @internal
     */
    get hasInputValue(): boolean;
    /**
     * Returns whether the default file input of the chat has any attached files.
     * @internal
     */
    get hasInputAttachments(): boolean;
    constructor(chat: IgcChatComponent, contextUpdateFn: () => unknown, userInputContextUpdateFn: () => unknown);
    isCurrentUserMessage(message?: IgcChatMessage): boolean;
    emitEvent(name: keyof IgcChatComponentEventMap, args?: any): boolean;
    /** @internal */
    emitMessageCreated(message: IgcChatMessage): boolean;
    /** @internal */
    emitAttachmentsAdded(attachments: IgcChatMessageAttachment[]): boolean;
    /** @internal */
    emitAttachmentRemoved(attachment: IgcChatMessageAttachment): boolean;
    /** @internal */
    emitMessageReaction(reaction: IgcChatMessageReaction): boolean;
    /** @internal */
    emitUserTypingState(state: boolean): boolean;
    /**
     * @internal
     */
    showActionsTooltip(target: Element, message: string): void;
    /**
     * @internal
     */
    showActionToast(content: string): void;
    /**
     * Updates the internal cache for accepted file types.
     * Parses the acceptedFiles string option into extensions, mimeTypes, and wildcard types.
     */
    private _setAcceptedTypesCache;
    protected _createMessage(message: Partial<IgcChatMessage>): IgcChatMessage;
    addMessage(message: Partial<IgcChatMessage>): void;
    /**
     * Adds a new chat message.
     * Emits 'igcMessageCreated' event which can be canceled to prevent adding.
     * Clears input value and attachments on success.
     * @internal
     */
    addMessageWithEvent(message: Partial<IgcChatMessage>): void;
    /**
     * Adds files as attachments to the input.
     * Emits 'igcAttachmentChange' event which can be canceled to prevent adding.
     * @internal
     */
    attachFilesWithEvent(files: File[]): void;
}
