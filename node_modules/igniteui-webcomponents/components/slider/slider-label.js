import { css, LitElement } from 'lit';
import { registerComponent } from '../common/definitions/register.js';
export default class IgcSliderLabelComponent extends LitElement {
    static { this.tagName = 'igc-slider-label'; }
    static { this.styles = css `
    :host {
      display: none;
    }
  `; }
    static register() {
        registerComponent(IgcSliderLabelComponent);
    }
    createRenderRoot() {
        return this;
    }
}
//# sourceMappingURL=slider-label.js.map