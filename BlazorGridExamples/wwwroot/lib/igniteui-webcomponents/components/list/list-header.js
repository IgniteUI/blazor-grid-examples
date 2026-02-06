import { html, LitElement } from 'lit';
import { addThemingController } from '../../theming/theming-controller.js';
import { addInternalsController } from '../common/controllers/internals.js';
import { registerComponent } from '../common/definitions/register.js';
import { styles } from './themes/header.base.css.js';
import { all } from './themes/header.js';
import { styles as shared } from './themes/shared/header/list-header.common.css.js';
export default class IgcListHeaderComponent extends LitElement {
    static { this.tagName = 'igc-list-header'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcListHeaderComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
        addInternalsController(this, {
            initialARIA: { role: 'separator' },
        });
    }
    render() {
        return html `<slot></slot>`;
    }
}
//# sourceMappingURL=list-header.js.map