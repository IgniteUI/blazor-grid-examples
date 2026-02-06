import { html, svg } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { partMap } from '../common/part-map.js';
import { IgcProgressBaseComponent } from './base.js';
import IgcCircularGradientComponent from './circular-gradient.js';
import { styles } from './themes/circular/circular.progress.base.css.js';
import { styles as shared } from './themes/circular/shared/circular.progress.common.css.js';
import { all } from './themes/circular/themes.js';
let nextId = 1;
export default class IgcCircularProgressComponent extends IgcProgressBaseComponent {
    static { this.tagName = 'igc-circular-progress'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcCircularProgressComponent, IgcCircularGradientComponent);
    }
    constructor() {
        super();
        this._gradientId = `circular-progress-${nextId++}`;
        this._slots = addSlotController(this, {
            slots: setSlots('gradient'),
        });
        addThemingController(this, all);
    }
    _renderSvg() {
        const gradients = this._slots.hasAssignedElements('gradient')
            ? this._slots
                .getAssignedElements('gradient', {
                selector: IgcCircularGradientComponent.tagName,
            })
                .map(({ offset, color, opacity }) => svg `<stop offset=${offset} stop-color=${color} stop-opacity=${opacity}/>`)
            : svg `
        <stop offset="0%" part="gradient_start" />
        <stop offset="100%" part="gradient_end" />
      `;
        return svg `
      <circle part=${partMap({ track: true, indeterminate: this.indeterminate })}/>
      <circle style=${styleMap({ stroke: `url(#${this._gradientId})` })} part="fill"/>

      <defs>
          <linearGradient id=${this._gradientId} gradientTransform="rotate(90)">
          ${gradients}
          </linearGradient>
      </defs>
    `;
    }
    render() {
        return html `
      <div part="base" style=${styleMap(this._styleInfo)}>
        <svg part=${partMap({ svg: true, indeterminate: this.indeterminate })}>
          ${this._renderSvg()}
        </svg>
        <slot name="gradient"></slot>
        ${this._renderDefaultSlot()}
      </div>
    `;
    }
}
//# sourceMappingURL=circular-progress.js.map