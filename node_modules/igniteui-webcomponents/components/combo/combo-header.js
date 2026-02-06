import { html, LitElement } from 'lit';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { all } from '../dropdown/themes/header.js';
import { styles as shared } from '../dropdown/themes/shared/header/dropdown-header.common.css.js';
import { styles } from './themes/combo-header.base.css.js';
export default class IgcComboHeaderComponent extends LitElement {
    static { this.tagName = 'igc-combo-header'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcComboHeaderComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
    }
    render() {
        return html `<slot></slot>`;
    }
}
//# sourceMappingURL=combo-header.js.map