import { html, LitElement } from 'lit';
import { registerComponent } from '../common/definitions/register.js';
import { styles } from './themes/card.media.base.css.js';
export default class IgcCardMediaComponent extends LitElement {
    static { this.tagName = 'igc-card-media'; }
    static { this.styles = styles; }
    static register() {
        registerComponent(IgcCardMediaComponent);
    }
    render() {
        return html ` <slot></slot> `;
    }
}
//# sourceMappingURL=card.media.js.map