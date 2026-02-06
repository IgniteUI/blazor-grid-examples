var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { getDateFormatter } from 'igniteui-i18n-core';
import { html, nothing } from 'lit';
import { property, query, queryAll, state } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { addThemingController } from '../../theming/theming-controller.js';
import { addKeybindings, arrowDown, arrowLeft, arrowRight, arrowUp, endKey, homeKey, pageDownKey, pageUpKey, shiftKey, } from '../common/controllers/key-bindings.js';
import { registerComponent } from '../common/definitions/register.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { partMap } from '../common/part-map.js';
import { clamp, findElementFromEventPath, first, formatString, last, } from '../common/util.js';
import IgcIconComponent from '../icon/icon.js';
import { IgcCalendarBaseComponent } from './base.js';
import IgcDaysViewComponent from './days-view/days-view.js';
import { areSameMonth, getYearRange, isDateInRanges, MONTHS_PER_ROW, YEARS_PER_PAGE, YEARS_PER_ROW, } from './helpers.js';
import { CalendarDay } from './model.js';
import IgcMonthsViewComponent from './months-view/months-view.js';
import { styles } from './themes/calendar.base.css.js';
import { all } from './themes/calendar.js';
import IgcYearsViewComponent from './years-view/years-view.js';
export const focusActiveDate = Symbol();
export default class IgcCalendarComponent extends EventEmitterMixin(IgcCalendarBaseComponent) {
    static { this.tagName = 'igc-calendar'; }
    static { this.styles = styles; }
    static register() {
        registerComponent(IgcCalendarComponent, IgcIconComponent, IgcDaysViewComponent, IgcMonthsViewComponent, IgcYearsViewComponent);
    }
    get _isDayView() {
        return this.activeView === 'days';
    }
    get _isMonthView() {
        return this.activeView === 'months';
    }
    get _isYearView() {
        return this.activeView === 'years';
    }
    get _previousButtonLabel() {
        switch (this.activeView) {
            case 'days':
                return this.resourceStrings.previousMonth;
            case 'months':
                return this.resourceStrings.previousYear;
            case 'years':
                return formatString(this.resourceStrings.previousYears, YEARS_PER_PAGE);
            default:
                return '';
        }
    }
    get _nextButtonLabel() {
        switch (this.activeView) {
            case 'days':
                return this.resourceStrings.nextMonth;
            case 'months':
                return this.resourceStrings.nextYear;
            case 'years':
                return formatString(this.resourceStrings.nextYears, YEARS_PER_PAGE);
            default:
                return '';
        }
    }
    constructor() {
        super();
        this._contentRef = createRef();
        this._activeDaysViewIndex = 0;
        this.hideOutsideDays = false;
        this.hideHeader = false;
        this.headerOrientation = 'horizontal';
        this.orientation = 'horizontal';
        this.visibleMonths = 1;
        this.activeView = 'days';
        this.formatOptions = { month: 'long', weekday: 'narrow' };
        addThemingController(this, all);
        addKeybindings(this, {
            skip: this._shouldSkipKeyboardEvent,
            ref: this._contentRef,
            bindingDefaults: { triggers: ['keydownRepeat'] },
        })
            .set(arrowLeft, this._handleArrowKey.bind(this, 'day', -1))
            .set(arrowRight, this._handleArrowKey.bind(this, 'day', 1))
            .set(arrowUp, this._handleArrowKey.bind(this, 'week', -1))
            .set(arrowDown, this._handleArrowKey.bind(this, 'week', 1))
            .set([shiftKey, pageUpKey], this._handleShiftPageKeys.bind(this, -1))
            .set([shiftKey, pageDownKey], this._handleShiftPageKeys.bind(this, 1))
            .set(pageUpKey, this._handlePageKeys.bind(this, -1))
            .set(pageDownKey, this._handlePageKeys.bind(this, 1))
            .set(homeKey, this._handleHomeKey)
            .set(endKey, this._handleEndKey);
    }
    _shouldSkipKeyboardEvent(_, event) {
        return !findElementFromEventPath(`${IgcDaysViewComponent.tagName}, ${IgcMonthsViewComponent.tagName}, ${IgcYearsViewComponent.tagName}`, event);
    }
    _handleArrowKey(period, delta) {
        if (this._isDayView) {
            const date = this._getNextEnabledDate(this._activeDate.add(period, delta), delta);
            this._updateViewIndex(date, delta);
            this._activeDate = date;
        }
        else {
            const monthOrYear = this._isMonthView ? 'month' : 'year';
            const monthOrYearDelta = (this._isMonthView ? MONTHS_PER_ROW : YEARS_PER_ROW) * delta;
            this._activeDate = this._getNextEnabledDate(this._activeDate.add(monthOrYear, period === 'week' ? monthOrYearDelta : delta), delta);
        }
        this[focusActiveDate]();
    }
    _handlePageKeys(delta) {
        const unit = this._isDayView ? 'month' : 'year';
        const increment = (this._isYearView ? YEARS_PER_PAGE : 1) * delta;
        this._activeDate = this._getNextEnabledDate(this._activeDate.add(unit, increment), increment);
        this[focusActiveDate]();
    }
    _handleShiftPageKeys(delta) {
        if (this._isDayView) {
            this._activeDate = this._getNextEnabledDate(this._activeDate.add('year', delta), delta);
            this[focusActiveDate]();
        }
    }
    _handleHomeKey() {
        switch (this.activeView) {
            case 'days': {
                const firstView = CalendarDay.from(this._daysViews.item(0).activeDate);
                this._activeDate = this._getNextEnabledDate(firstView.set({ date: 1 }), 1);
                this._activeDaysViewIndex = 0;
                break;
            }
            case 'months':
                this._activeDate = this._getNextEnabledDate(this._activeDate.set({ month: 0 }), 1);
                break;
            case 'years':
                this._activeDate = this._getNextEnabledDate(this._activeDate.set({
                    year: getYearRange(this._activeDate, YEARS_PER_PAGE).start,
                }), 1);
                break;
        }
        this[focusActiveDate]();
    }
    _handleEndKey() {
        switch (this.activeView) {
            case 'days': {
                const index = this._daysViews.length - 1;
                const lastView = CalendarDay.from(this._daysViews.item(index).activeDate);
                this._activeDate = this._getNextEnabledDate(lastView.set({ month: lastView.month + 1, date: 0 }), -1);
                this._activeDaysViewIndex = index;
                break;
            }
            case 'months':
                this._activeDate = this._getNextEnabledDate(this._activeDate.set({ month: 11 }), -1);
                break;
            case 'years':
                this._activeDate = this._getNextEnabledDate(this._activeDate.set({
                    year: getYearRange(this._activeDate, YEARS_PER_PAGE).end,
                }), -1);
                break;
        }
        this[focusActiveDate]();
    }
    _handleMonthChange(event) {
        event.stopPropagation();
        this.activeDate = event.detail;
        this.activeView = 'days';
        this[focusActiveDate]();
    }
    _handleYearChange(event) {
        event.stopPropagation();
        this.activeDate = event.detail;
        this.activeView = 'months';
        this[focusActiveDate]();
    }
    _handleValueChange(event) {
        event.stopPropagation();
        const view = event.target;
        if (this._isSingle) {
            this.value = view.value;
        }
        else {
            this.values = view.values;
        }
        this.emitEvent('igcChange', {
            detail: this._isSingle ? this.value : this.values,
        });
    }
    _handleActiveDateChange(event) {
        const view = event.target;
        const views = Array.from(this._daysViews);
        this._activeDaysViewIndex = views.indexOf(view);
        this.activeDate = event.detail;
        if (!areSameMonth(this.activeDate, view.activeDate)) {
            this[focusActiveDate]();
        }
    }
    _handleRangePreviewChange(event) {
        this._rangePreviewDate = event.detail
            ? CalendarDay.from(event.detail)
            : undefined;
    }
    _setActiveDaysView(viewIndex) {
        const view = this._daysViews.item(viewIndex);
        this.activeDate = view.activeDate;
        this._activeDaysViewIndex = viewIndex;
    }
    _navigate(delta) {
        const unit = this._isDayView ? 'month' : 'year';
        const increment = (this._isYearView ? YEARS_PER_PAGE : 1) * delta;
        this._activeDate = this._activeDate.add(unit, increment);
    }
    _navigatePrevious() {
        this._navigate(-1);
    }
    _navigateNext() {
        this._navigate(1);
    }
    _navigateToMonthView(viewIndex) {
        this._setActiveDaysView(viewIndex);
        this.activeView = 'months';
        this[focusActiveDate]();
    }
    _navigateToYearView(viewIndex) {
        if (this._isDayView) {
            this._setActiveDaysView(viewIndex);
        }
        this.activeView = 'years';
        this[focusActiveDate]();
    }
    async [focusActiveDate](options) {
        await this.updateComplete;
        switch (this.activeView) {
            case 'days':
                return this._daysViews
                    .item(this._activeDaysViewIndex)
                    .focusActiveDate(options);
            case 'months':
                return this._monthsView.focusActiveDate(options);
            case 'years':
                return this._yearsView.focusActiveDate(options);
        }
    }
    _updateViewIndex(date, delta) {
        if (this.visibleMonths === 1) {
            return;
        }
        const index = this._activeDaysViewIndex;
        const view = CalendarDay.from(this._daysViews.item(index).activeDate);
        if (date.month !== view.month) {
            this._activeDaysViewIndex = clamp(index + delta, 0, this.visibleMonths - 1);
        }
    }
    _getActiveDates() {
        const current = this._activeDaysViewIndex;
        const length = Math.max(this.visibleMonths, 1);
        return Array.from({ length }, (_, i) => this._activeDate.add('month', i - current));
    }
    _getNextEnabledDate(start, delta) {
        const disabled = this._disabledDates;
        let beginning = start.clone();
        while (isDateInRanges(beginning, disabled)) {
            beginning = beginning.add('day', delta);
        }
        return beginning;
    }
    _renderNavigationButtons() {
        const parts = {
            'navigation-button': true,
            vertical: this.orientation === 'vertical',
        };
        return html `
      <div part="navigation-buttons">
        <button
          part=${partMap(parts)}
          aria-label=${this._previousButtonLabel}
          @click=${this._navigatePrevious}
        >
          <igc-icon
            aria-hidden="true"
            name="arrow_prev"
            collection="default"
          ></igc-icon>
        </button>

        <button
          part=${partMap(parts)}
          aria-label=${this._nextButtonLabel}
          @click=${this._navigateNext}
        >
          <igc-icon
            aria-hidden="true"
            name="arrow_next"
            collection="default"
          ></igc-icon>
        </button>
      </div>
    `;
    }
    _renderMonthButtonNavigation(active, viewIndex) {
        const formatter = getDateFormatter();
        const label = formatter.formatDateTime(active.native, this.locale, {
            month: 'long',
        });
        const value = formatter.formatDateTime(active.native, this.locale, {
            month: this.formatOptions.month,
        });
        const ariaLabel = `${label}, ${this.resourceStrings.selectMonth}`;
        return html `
      <button
        part="months-navigation"
        aria-label=${ariaLabel}
        @click=${() => this._navigateToMonthView(viewIndex)}
      >
        ${value}
      </button>
    `;
    }
    _renderYearButtonNavigation(active, viewIndex) {
        const { format } = getDateFormatter().getIntlFormatter(this.locale, {
            month: 'long',
            year: 'numeric',
        });
        const ariaLabel = `${active.year}, ${this.resourceStrings.selectYear}`;
        const ariaSkip = this._isDayView ? format(active.native) : active.year;
        return html `
      <span class="aria-off-screen" aria-live="polite">${ariaSkip}</span>
      <button
        part="years-navigation"
        aria-label=${ariaLabel}
        @click=${() => this._navigateToYearView(viewIndex)}
      >
        ${active.year}
      </button>
    `;
    }
    _renderYearRangeNavigation(active) {
        const { start, end } = getYearRange(active, YEARS_PER_PAGE);
        return html `
      <span part="years-range" aria-live="polite"> ${start} - ${end} </span>
    `;
    }
    _renderNavigation(date, showButtons = true, viewIndex = 0) {
        const activeDate = date ?? this._activeDate;
        return html `
      <div part="navigation">
        <div part="picker-dates">
          ${this._isDayView
            ? this._renderMonthButtonNavigation(activeDate, viewIndex)
            : nothing}
          ${this._isDayView || this._isMonthView
            ? this._renderYearButtonNavigation(activeDate, viewIndex)
            : nothing}
          ${this._isYearView
            ? this._renderYearRangeNavigation(activeDate)
            : nothing}
        </div>
        ${showButtons ? this._renderNavigationButtons() : nothing}
      </div>
    `;
    }
    _renderHeader() {
        if (this.hideHeader || this._isMultiple) {
            return nothing;
        }
        const title = this._isSingle
            ? this.resourceStrings.selectDate
            : this.resourceStrings.selectRange;
        return html `
      <div part="header">
        <h5 part="header-title">
          <slot name="title">${title}</slot>
        </h5>
        <h2 part="header-date">${this._renderHeaderDate()}</h2>
      </div>
    `;
    }
    _renderHeaderDateSingle() {
        const date = this.value ?? CalendarDay.today.native;
        const formatter = getDateFormatter();
        const weekday = formatter.formatDateTime(date, this.locale, {
            weekday: 'short',
        });
        const monthDay = formatter.formatDateTime(date, this.locale, {
            month: 'short',
            day: 'numeric',
        });
        const separator = this.headerOrientation === 'vertical' ? html `<br />` : ' ';
        const formatted = html `${weekday},${separator}${monthDay}`;
        return html `<slot name="header-date">${formatted}</slot>`;
    }
    _renderHeaderDateRange() {
        const values = this.values;
        const { format } = getDateFormatter().getIntlFormatter(this.locale, {
            month: 'short',
            day: 'numeric',
        });
        const { startDate, endDate } = this.resourceStrings;
        const start = this._hasValues ? format(first(values)) : startDate;
        const end = this._hasValues && values.length > 1 ? format(last(values)) : endDate;
        return html `
      <slot name="header-date">
        <span>${start}</span>
        <span> - </span>
        <span>${end}</span>
      </slot>
    `;
    }
    _renderHeaderDate() {
        return this._isSingle
            ? this._renderHeaderDateSingle()
            : this._renderHeaderDateRange();
    }
    _renderDaysView() {
        const activeDates = this._getActiveDates();
        const horizontal = this.orientation === 'horizontal';
        const length = activeDates.length - 1;
        const format = this.formatOptions
            .weekday;
        return html `${activeDates.map((date, idx) => html `
        <div part="days-view-container">
          ${this._renderNavigation(date, horizontal ? idx === length : idx === 0, idx)}
          <igc-days-view
            @igcChange=${this._handleValueChange}
            @igcActiveDateChange=${this._handleActiveDateChange}
            @igcRangePreviewDateChange=${this._handleRangePreviewChange}
            part="days-view"
            exportparts="days-row, label, date-inner, week-number-inner, week-number, date, first, last, selected, inactive, hidden, current, content-vertical, weekend, range, special, disabled, single, preview"
            .active=${this._activeDaysViewIndex === idx}
            .activeDate=${date.native}
            .disabledDates=${this.disabledDates}
            .hideLeadingDays=${this.hideOutsideDays || idx !== 0}
            .hideTrailingDays=${this.hideOutsideDays || idx !== length}
            .locale=${this.locale}
            .rangePreviewDate=${this._rangePreviewDate?.native}
            .resourceStrings=${this.resourceStrings}
            .selection=${this.selection}
            .showWeekNumbers=${this.showWeekNumbers}
            .specialDates=${this._specialDates}
            .value=${this.value}
            .values=${this.values}
            .weekDayFormat=${format}
            .weekStart=${this.weekStart}
          ></igc-days-view>
        </div>
      `)}`;
    }
    _renderMonthView() {
        const format = this.formatOptions
            .month;
        return html `
      ${this._renderNavigation()}
      <igc-months-view
        part="months-view"
        exportparts="month, selected, month-inner, current"
        @igcChange=${this._handleMonthChange}
        .value=${this.activeDate}
        .locale=${this.locale}
        .monthFormat=${format}
      ></igc-months-view>
    `;
    }
    _renderYearView() {
        return html `
      ${this._renderNavigation()}
      <igc-years-view
        part="years-view"
        exportparts="year, selected, year-inner, current"
        @igcChange=${this._handleYearChange}
        .value=${this.activeDate}
        .yearsPerPage=${YEARS_PER_PAGE}
      ></igc-years-view>
    `;
    }
    render() {
        const parts = {
            content: true,
            'content-vertical': this._isDayView && this.orientation === 'vertical',
        };
        return html `
      ${this._renderHeader()}
      <div ${ref(this._contentRef)} part=${partMap(parts)}>
        ${choose(this.activeView, [
            ['days', () => this._renderDaysView()],
            ['months', () => this._renderMonthView()],
            ['years', () => this._renderYearView()],
        ])}
      </div>
    `;
    }
}
__decorate([
    state()
], IgcCalendarComponent.prototype, "_activeDaysViewIndex", void 0);
__decorate([
    queryAll(IgcDaysViewComponent.tagName)
], IgcCalendarComponent.prototype, "_daysViews", void 0);
__decorate([
    query(IgcMonthsViewComponent.tagName)
], IgcCalendarComponent.prototype, "_monthsView", void 0);
__decorate([
    query(IgcYearsViewComponent.tagName)
], IgcCalendarComponent.prototype, "_yearsView", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-outside-days', reflect: true })
], IgcCalendarComponent.prototype, "hideOutsideDays", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-header', reflect: true })
], IgcCalendarComponent.prototype, "hideHeader", void 0);
__decorate([
    property({ reflect: true, attribute: 'header-orientation' })
], IgcCalendarComponent.prototype, "headerOrientation", void 0);
__decorate([
    property()
], IgcCalendarComponent.prototype, "orientation", void 0);
__decorate([
    property({ type: Number, attribute: 'visible-months' })
], IgcCalendarComponent.prototype, "visibleMonths", void 0);
__decorate([
    property({ attribute: 'active-view' })
], IgcCalendarComponent.prototype, "activeView", void 0);
__decorate([
    property({ attribute: false })
], IgcCalendarComponent.prototype, "formatOptions", void 0);
//# sourceMappingURL=calendar.js.map