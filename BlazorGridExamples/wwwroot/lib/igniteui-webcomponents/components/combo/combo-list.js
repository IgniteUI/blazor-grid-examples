import { LitVirtualizer } from '@lit-labs/virtualizer/LitVirtualizer.js';
import { registerComponent } from '../common/definitions/register.js';
export default class IgcComboListComponent extends LitVirtualizer {
    constructor() {
        super(...arguments);
        this.scroller = true;
    }
    static { this.tagName = 'igc-combo-list'; }
    static register() {
        registerComponent(IgcComboListComponent);
    }
}
//# sourceMappingURL=combo-list.js.map