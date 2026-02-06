import { html } from 'lit';
import { addAnimationController } from '../../animations/player.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { IgcBaseAlertLikeComponent } from '../common/mixins/alert.js';
import { styles as shared } from './themes/shared/toast.common.css.js';
import { all } from './themes/themes.js';
import { styles } from './themes/toast.base.css.js';
export default class IgcToastComponent extends IgcBaseAlertLikeComponent {
    static { this.tagName = 'igc-toast'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcToastComponent);
    }
    constructor() {
        super();
        this._player = addAnimationController(this);
        addThemingController(this, all);
    }
    render() {
        return html `<slot .inert=${!this.open}></slot>`;
    }
}
//# sourceMappingURL=toast.js.map