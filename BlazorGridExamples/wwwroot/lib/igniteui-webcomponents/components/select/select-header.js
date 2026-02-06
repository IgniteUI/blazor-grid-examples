import { html, LitElement } from 'lit';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { styles } from '../dropdown/themes/dropdown-header.base.css.js';
import { all } from '../dropdown/themes/header.js';
import { styles as shared } from '../dropdown/themes/shared/header/dropdown-header.common.css.js';
export default class IgcSelectHeaderComponent extends LitElement {
    static { this.tagName = 'igc-select-header'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcSelectHeaderComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
    }
    render() {
        return html `<slot></slot>`;
    }
}
//# sourceMappingURL=select-header.js.map