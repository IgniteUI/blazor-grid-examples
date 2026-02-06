import { type LitElement, type ReactiveController, type ReactiveControllerHost } from 'lit';
import type { IgcChatMessageAttachment } from './types.js';
export type ChatAcceptedFileTypes = {
    extensions: Set<string>;
    mimeTypes: Set<string>;
    wildcardTypes: Set<string>;
};
export declare const ChatFileTypeIcons: Map<string, string>;
export declare function parseAcceptedFileTypes(fileTypes: string): ChatAcceptedFileTypes;
export declare function isAcceptedFileType(file: File, accepted: ChatAcceptedFileTypes | null): boolean;
export declare function getChatAcceptedFiles(event: DragEvent, accepted: ChatAcceptedFileTypes | null): File[];
export declare function getIconName(fileType?: string): "attach_document" | "attach_image";
export declare function createAttachmentURL(attachment: IgcChatMessageAttachment): string;
export declare function getFileExtension(name: string): string;
export declare function isImageAttachment(attachment: IgcChatMessageAttachment | File): boolean;
declare class AdoptedStylesController implements ReactiveController {
    private readonly _host;
    private _hasAdoptedStyles;
    get hasAdoptedStyles(): boolean;
    private _adoptRootStyles;
    constructor(host: ReactiveControllerHost & LitElement);
    shouldAdoptStyles(condition: boolean): void;
    /** @internal */
    hostDisconnected(): void;
}
export declare function addAdoptedStylesController(host: ReactiveControllerHost & LitElement): AdoptedStylesController;
export type { AdoptedStylesController };
