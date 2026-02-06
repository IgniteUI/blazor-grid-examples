import { html, LitElement } from 'lit';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { styles } from './themes/card.header.base.css.js';
import { all } from './themes/header.js';
import { styles as shared } from './themes/shared/header/card.header.common.css.js';
export default class IgcCardHeaderComponent extends LitElement {
    static { this.tagName = 'igc-card-header'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcCardHeaderComponent);
    }
    constructor() {
        super();
        addThemingController(this, all);
    }
    render() {
        return html `
      <section>
        <slot name="thumbnail"></slot>
      </section>
      <section>
        <header part="header">
          <slot part="title" name="title"></slot>
          <slot part="subtitle" name="subtitle"></slot>
        </header>
        <slot></slot>
      </section>
    `;
    }
}
//# sourceMappingURL=card.header.js.map