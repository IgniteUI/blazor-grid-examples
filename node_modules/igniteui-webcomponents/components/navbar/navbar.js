import { html, LitElement } from 'lit';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { styles } from './themes/navbar.base.css.js';
import { styles as shared } from './themes/shared/navbar.common.css.js';
import { all } from './themes/themes.js';
export default class IgcNavbarComponent extends LitElement {
    static { this.tagName = 'igc-navbar'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcNavbarComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
    }
    render() {
        return html `
      <div part="base">
        <span part="start">
          <slot name="start"></slot>
        </span>
        <span part="middle">
          <slot></slot>
        </span>
        <span part="end">
          <slot name="end"></slot>
        </span>
      </div>
    `;
    }
}
//# sourceMappingURL=navbar.js.map