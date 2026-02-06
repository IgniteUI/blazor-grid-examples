import { html, LitElement } from 'lit';
import { registerComponent } from '../common/definitions/register.js';
import { styles } from './themes/rating-symbol.base.css.js';
export default class IgcRatingSymbolComponent extends LitElement {
    static { this.tagName = 'igc-rating-symbol'; }
    static { this.styles = [styles]; }
    static register() {
        registerComponent(IgcRatingSymbolComponent);
    }
    connectedCallback() {
        super.connectedCallback();
        this.slot = this.slot || 'symbol';
    }
    render() {
        return html `
      <div part="symbol full">
        <slot></slot>
      </div>
      <div part="symbol empty">
        <slot name="empty"></slot>
      </div>
    `;
    }
}
//# sourceMappingURL=rating-symbol.js.map