import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { registerComponent } from '../common/definitions/register.js';
import { partMap } from '../common/part-map.js';
import { IgcCheckboxBaseComponent } from './checkbox-base.js';
import { styles as shared } from './themes/shared/switch/switch.common.css.js';
import { styles } from './themes/switch.base.css.js';
import { all } from './themes/switch-themes.js';
let nextId = 1;
export default class IgcSwitchComponent extends IgcCheckboxBaseComponent {
    static { this.tagName = 'igc-switch'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcSwitchComponent);
    }
    constructor() {
        super();
        this._inputId = `switch-${nextId++}`;
        this._labelId = `switch-label-${this._inputId}`;
        addThemingController(this, all);
    }
    render() {
        const labelledBy = this.getAttribute('aria-labelledby');
        const checked = this.checked;
        return html `
      <label part=${partMap({ base: true, checked })} for=${this._inputId}>
        <input
          id=${this._inputId}
          type="checkbox"
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          ?required=${this.required}
          ?disabled=${this.disabled}
          .checked=${live(checked)}
          aria-labelledby=${labelledBy ? labelledBy : this._labelId}
          @click=${this._handleClick}
          @blur=${this._handleBlur}
        />
        <span
          part=${partMap({
            control: true,
            checked,
            focused: this._focusRingManager.focused,
        })}
        >
          <span part=${partMap({ thumb: true, checked })}></span>
        </span>
        <span
          id=${this._labelId}
          part=${partMap({ label: true, checked })}
          ?hidden=${this._hideLabel}
        >
          <slot></slot>
        </span>
      </label>
    `;
    }
}
//# sourceMappingURL=switch.js.map