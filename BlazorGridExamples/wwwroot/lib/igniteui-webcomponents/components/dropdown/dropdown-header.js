import { html, LitElement } from 'lit';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { styles } from './themes/dropdown-header.base.css.js';
import { all } from './themes/header.js';
import { styles as shared } from './themes/shared/header/dropdown-header.common.css.js';
export default class IgcDropdownHeaderComponent extends LitElement {
    static { this.tagName = 'igc-dropdown-header'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcDropdownHeaderComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
    }
    render() {
        return html `<slot></slot>`;
    }
}
//# sourceMappingURL=dropdown-header.js.map