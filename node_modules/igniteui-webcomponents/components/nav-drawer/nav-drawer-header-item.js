import { html, LitElement } from 'lit';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { styles } from './themes/header-item.base.css.js';
import { all } from './themes/header-item.js';
import { styles as shared } from './themes/shared/header-item/header-item.common.css.js';
export default class IgcNavDrawerHeaderItemComponent extends LitElement {
    static { this.tagName = 'igc-nav-drawer-header-item'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcNavDrawerHeaderItemComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
    }
    render() {
        return html `<slot></slot>`;
    }
}
//# sourceMappingURL=nav-drawer-header-item.js.map