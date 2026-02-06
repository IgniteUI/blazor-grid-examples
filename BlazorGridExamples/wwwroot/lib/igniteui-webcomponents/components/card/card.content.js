import { html, LitElement } from 'lit';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { styles } from './themes/card.content.base.css.js';
import { all } from './themes/content.js';
import { styles as shared } from './themes/shared/content/card.content.common.css.js';
export default class IgcCardContentComponent extends LitElement {
    static { this.tagName = 'igc-card-content'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcCardContentComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
    }
    render() {
        return html ` <slot></slot> `;
    }
}
//# sourceMappingURL=card.content.js.map