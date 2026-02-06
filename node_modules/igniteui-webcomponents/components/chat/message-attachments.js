var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { consume } from '@lit/context';
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { repeat } from 'lit/directives/repeat.js';
import { until } from 'lit/directives/until.js';
import { addThemingController } from '../../theming/theming-controller.js';
import IgcIconButtonComponent from '../button/icon-button.js';
import { chatContext } from '../common/context.js';
import { registerComponent } from '../common/definitions/register.js';
import { partMap } from '../common/part-map.js';
import { trimmedHtml } from '../common/util.js';
import IgcIconComponent from '../icon/icon.js';
import { all } from './themes/attachments.js';
import { styles } from './themes/message-attachments.base.css.js';
import { styles as shared } from './themes/shared/message-attachments/message-attachments.common.css.js';
import { ChatFileTypeIcons, createAttachmentURL, getFileExtension, isImageAttachment, } from './utils.js';
export default class IgcMessageAttachmentsComponent extends LitElement {
    static { this.tagName = 'igc-message-attachments'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcMessageAttachmentsComponent, IgcIconComponent, IgcIconButtonComponent);
    }
    constructor() {
        super();
        this._defaults = Object.freeze({
            attachment: (ctx) => this._renderAttachment(ctx.attachment),
            attachmentHeader: (ctx) => this.renderHeader(ctx.attachment),
            attachmentContent: (ctx) => this._renderContent(ctx.attachment),
        });
        this._handleHeaderClick = (attachment) => {
            this._state.emitEvent('igcAttachmentClick', { detail: attachment });
        };
        addThemingController(this, all);
    }
    _getRenderer(name) {
        return this._state.options?.renderers
            ? (this._state.options.renderers[name] ?? this._defaults[name])
            : this._defaults[name];
    }
    renderHeader(attachment) {
        const isCurrentUser = this._state.isCurrentUserMessage(this.message);
        const iconName = isImageAttachment(attachment)
            ? 'attach_image'
            : 'document_thumbnail';
        return html `
      ${!isCurrentUser
            ? html `<igc-icon name=${iconName} part="attachment-icon"></igc-icon>`
            : nothing}
      <span part="file-name">${attachment.name}</span>
    `;
    }
    _renderContent(attachment) {
        const iconName = ChatFileTypeIcons.get(getFileExtension(attachment.name)) ??
            ChatFileTypeIcons.get('default');
        return isImageAttachment(attachment)
            ? html `
          <img
            part="image-attachment-icon"
            src=${createAttachmentURL(attachment)}
            alt=${attachment.name}
          />
        `
            : html `<igc-icon
          part="file-attachment-icon"
          name=${iconName}
        ></igc-icon>`;
    }
    _renderAttachment(attachment) {
        const isCurrentUser = this._state.isCurrentUserMessage(this.message);
        const contentParts = {
            'attachment-content': true,
            sent: isCurrentUser,
        };
        const headerParts = {
            'attachment-header': true,
            sent: isCurrentUser,
        };
        const ctx = {
            attachment,
            message: this.message,
            instance: this._state.host,
        };
        const content = html `<div part=${partMap(contentParts)}>
      ${until(this._getRenderer('attachmentContent')(ctx))}
    </div>`;
        const header = html ` <div
      part=${partMap(headerParts)}
      role="button"
      @click=${() => this._handleHeaderClick(attachment)}
    >
      <div part="details">
        ${until(this._getRenderer('attachmentHeader')(ctx))}
      </div>
    </div>`;
        return html `
      ${isCurrentUser ? content : nothing} ${header}
      ${!isCurrentUser ? content : nothing}
    `;
    }
    render() {
        const attachments = this.message?.attachments ?? [];
        const isCurrentUser = this._state.isCurrentUserMessage(this.message);
        const attachmentParts = {
            attachment: true,
            sent: isCurrentUser,
        };
        return html `${cache(this.message
            ? html `
            <div part="attachments-container">
              ${repeat(attachments, (attachment) => attachment.id, (attachment) => trimmedHtml `
                  <div part="${partMap(attachmentParts)}">
                    ${until(this._getRenderer('attachment')({
                attachment,
                message: this.message,
                instance: this._state.host,
            }))}
                  </div>
                `)}
            </div>
          `
            : nothing)}`;
    }
}
__decorate([
    consume({ context: chatContext, subscribe: true })
], IgcMessageAttachmentsComponent.prototype, "_state", void 0);
__decorate([
    property({ attribute: false })
], IgcMessageAttachmentsComponent.prototype, "message", void 0);
//# sourceMappingURL=message-attachments.js.map