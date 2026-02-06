import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { IgcBaseOptionLikeComponent } from '../common/mixins/option.js';
import { styles } from './themes/dropdown-item.base.css.js';
import { all } from './themes/item.js';
import { styles as shared } from './themes/shared/item/dropdown-item.common.css.js';
export default class IgcDropdownItemComponent extends IgcBaseOptionLikeComponent {
    static { this.tagName = 'igc-dropdown-item'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcDropdownItemComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
    }
}
//# sourceMappingURL=dropdown-item.js.map