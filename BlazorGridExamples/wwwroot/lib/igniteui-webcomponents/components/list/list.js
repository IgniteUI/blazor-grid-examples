import { html, LitElement } from 'lit';
import { addThemingController } from '../../theming/theming-controller.js';
import { addInternalsController } from '../common/controllers/internals.js';
import { registerComponent } from '../common/definitions/register.js';
import IgcListHeaderComponent from './list-header.js';
import IgcListItemComponent from './list-item.js';
import { styles } from './themes/container.base.css.js';
import { all } from './themes/container.js';
import { styles as shared } from './themes/shared/container/list.common.css.js';
export default class IgcListComponent extends LitElement {
    static { this.tagName = 'igc-list'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcListComponent, IgcListItemComponent, IgcListHeaderComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
        addInternalsController(this, {
            initialARIA: {
                role: 'list',
            },
        });
    }
    render() {
        return html `<slot></slot>`;
    }
}
//# sourceMappingURL=list.js.map