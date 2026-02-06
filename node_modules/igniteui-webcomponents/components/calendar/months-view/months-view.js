var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IgcMonthsViewComponent_1;
import { getDateFormatter } from 'igniteui-i18n-core';
import { html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { addThemingController } from '../../../theming/theming-controller.js';
import { addKeybindings } from '../../common/controllers/key-bindings.js';
import { blazorIndirectRender } from '../../common/decorators/blazorIndirectRender.js';
import { blazorSuppressComponent } from '../../common/decorators/blazorSuppressComponent.js';
import { registerComponent } from '../../common/definitions/register.js';
import { EventEmitterMixin } from '../../common/mixins/event-emitter.js';
import { partMap } from '../../common/part-map.js';
import { addSafeEventListener, chunk } from '../../common/util.js';
import { areSameMonth, getViewElement, MONTHS_PER_ROW } from '../helpers.js';
import { CalendarDay } from '../model.js';
import { all } from '../themes/year-month.js';
import { styles } from '../themes/year-month-view.base.css.js';
const MONTHS = Array.from({ length: 12 }, (_, i) => i);
let IgcMonthsViewComponent = class IgcMonthsViewComponent extends EventEmitterMixin(LitElement) {
    static { IgcMonthsViewComponent_1 = this; }
    static { this.tagName = 'igc-months-view'; }
    static { this.styles = styles; }
    static register() {
        registerComponent(IgcMonthsViewComponent_1);
    }
    set value(value) {
        this._value = CalendarDay.from(value);
    }
    get value() {
        return this._value.native;
    }
    constructor() {
        super();
        this._value = CalendarDay.today;
        this.locale = 'en';
        this.monthFormat = 'long';
        addThemingController(this, all);
        addKeybindings(this).setActivateHandler(this._handleInteraction);
        addSafeEventListener(this, 'click', this._handleInteraction);
    }
    connectedCallback() {
        super.connectedCallback();
        this.role = 'grid';
    }
    _handleInteraction(event) {
        const value = getViewElement(event);
        if (value !== -1) {
            this._value = this._value.set({ month: value });
            this.emitEvent('igcChange', { detail: this.value });
        }
    }
    focusActiveDate(options) {
        this._activeMonth?.focus(options);
    }
    _renderMonth(month, now, ariaFormatter, labelFormatter) {
        const active = areSameMonth(this._value, month);
        const current = areSameMonth(now, month);
        const selected = this._value.month === month.month;
        return html `
      <span part=${partMap({ month: true, selected, current })}>
        <span
          role="gridcell"
          data-value=${month.month}
          part=${partMap({ 'month-inner': true, selected, current })}
          aria-selected=${selected}
          aria-label=${ariaFormatter.format(month.native)}
          tabindex=${active ? 0 : -1}
        >
          ${labelFormatter.format(month.native)}
        </span>
      </span>
    `;
    }
    *render() {
        const now = CalendarDay.today;
        const ariaFormatter = getDateFormatter().getIntlFormatter(this.locale, {
            month: 'long',
            year: 'numeric',
        });
        const labelFormatter = getDateFormatter().getIntlFormatter(this.locale, {
            month: this.monthFormat,
        });
        for (const row of chunk(MONTHS, MONTHS_PER_ROW)) {
            yield html `
        <div part="months-row" role="row">
          ${row.map((month) => this._renderMonth(this._value.set({ month }), now, ariaFormatter, labelFormatter))}
        </div>
      `;
        }
    }
};
__decorate([
    state()
], IgcMonthsViewComponent.prototype, "_value", void 0);
__decorate([
    query('[tabindex="0"]')
], IgcMonthsViewComponent.prototype, "_activeMonth", void 0);
__decorate([
    property({ attribute: false })
], IgcMonthsViewComponent.prototype, "value", null);
__decorate([
    property()
], IgcMonthsViewComponent.prototype, "locale", void 0);
__decorate([
    property({ attribute: 'month-format' })
], IgcMonthsViewComponent.prototype, "monthFormat", void 0);
IgcMonthsViewComponent = IgcMonthsViewComponent_1 = __decorate([
    blazorIndirectRender,
    blazorSuppressComponent
], IgcMonthsViewComponent);
export default IgcMonthsViewComponent;
//# sourceMappingURL=months-view.js.map