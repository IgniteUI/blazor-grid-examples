var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IgcYearsViewComponent_1;
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
import { getViewElement, getYearRange, YEARS_PER_ROW } from '../helpers.js';
import { CalendarDay } from '../model.js';
import { all } from '../themes/year-month.js';
import { styles } from '../themes/year-month-view.base.css.js';
let IgcYearsViewComponent = class IgcYearsViewComponent extends EventEmitterMixin(LitElement) {
    static { IgcYearsViewComponent_1 = this; }
    static { this.tagName = 'igc-years-view'; }
    static { this.styles = styles; }
    static register() {
        registerComponent(IgcYearsViewComponent_1);
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
        this.yearsPerPage = 15;
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
            this._value = this._value.set({ year: value });
            this.emitEvent('igcChange', { detail: this.value });
        }
    }
    focusActiveDate(options) {
        this._activeYear?.focus(options);
    }
    _renderYear(year, now) {
        const selected = this._value.year === year;
        const current = year === now.year;
        return html `
      <span part=${partMap({ year: true, selected, current })}>
        <span
          role="gridcell"
          data-value=${year}
          part=${partMap({ 'year-inner': true, selected, current })}
          aria-selected=${selected}
          tabindex=${selected ? 0 : -1}
        >
          ${year}
        </span>
      </span>
    `;
    }
    *render() {
        const now = CalendarDay.today;
        const { start } = getYearRange(this._value, this.yearsPerPage);
        const years = Array.from({ length: this.yearsPerPage }, (_, i) => start + i);
        for (const row of chunk(years, YEARS_PER_ROW)) {
            yield html `
        <div part="years-row" role="row">
          ${row.map((year) => this._renderYear(year, now))}
        </div>
      `;
        }
    }
};
__decorate([
    state()
], IgcYearsViewComponent.prototype, "_value", void 0);
__decorate([
    query('[tabindex="0"]')
], IgcYearsViewComponent.prototype, "_activeYear", void 0);
__decorate([
    property({ attribute: false })
], IgcYearsViewComponent.prototype, "value", null);
__decorate([
    property({ type: Number, attribute: 'years-per-page' })
], IgcYearsViewComponent.prototype, "yearsPerPage", void 0);
IgcYearsViewComponent = IgcYearsViewComponent_1 = __decorate([
    blazorIndirectRender,
    blazorSuppressComponent
], IgcYearsViewComponent);
export default IgcYearsViewComponent;
//# sourceMappingURL=years-view.js.map