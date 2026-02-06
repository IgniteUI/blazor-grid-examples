var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IgcDaysViewComponent_1;
import { getDateFormatter } from 'igniteui-i18n-core';
import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { addThemingController } from '../../../theming/theming-controller.js';
import { addKeybindings } from '../../common/controllers/key-bindings.js';
import { blazorIndirectRender } from '../../common/decorators/blazorIndirectRender.js';
import { blazorSuppressComponent } from '../../common/decorators/blazorSuppressComponent.js';
import { registerComponent } from '../../common/definitions/register.js';
import { EventEmitterMixin } from '../../common/mixins/event-emitter.js';
import { partMap } from '../../common/part-map.js';
import { addSafeEventListener, chunk, first, last, take, } from '../../common/util.js';
import { IgcCalendarBaseComponent } from '../base.js';
import { areSameMonth, calendarRange, generateMonth, getViewElement, isDateInRanges, isNextMonth, isPreviousMonth, } from '../helpers.js';
import { CalendarDay, DAYS_IN_WEEK } from '../model.js';
import { all } from '../themes/days.js';
import { styles } from '../themes/days-view.base.css.js';
import { DateRangeType } from '../types.js';
let IgcDaysViewComponent = class IgcDaysViewComponent extends EventEmitterMixin(IgcCalendarBaseComponent) {
    static { IgcDaysViewComponent_1 = this; }
    static { this.tagName = 'igc-days-view'; }
    static { this.styles = styles; }
    static register() {
        registerComponent(IgcDaysViewComponent_1);
    }
    get _rangeStart() {
        return this._hasValues ? first(this._values) : undefined;
    }
    get _rangeEnd() {
        return this._hasValues ? last(this._values) : undefined;
    }
    set rangePreviewDate(value) {
        this._rangePreviewDate = value ? CalendarDay.from(value) : undefined;
    }
    get rangePreviewDate() {
        return this._rangePreviewDate?.native;
    }
    constructor() {
        super();
        this._dates = [];
        this.active = false;
        this.hideLeadingDays = false;
        this.hideTrailingDays = false;
        this.weekDayFormat = 'narrow';
        addThemingController(this, all);
        addKeybindings(this).setActivateHandler(this._handleInteraction);
        addSafeEventListener(this, 'click', this._handleInteraction);
    }
    connectedCallback() {
        super.connectedCallback();
        this.role = 'grid';
    }
    update(props) {
        if (props.has('activeDate') || props.has('weekStart')) {
            this._dates = Array.from(generateMonth(this._activeDate, this._firstDayOfWeek));
        }
        super.update(props);
    }
    _handleInteraction(event) {
        const value = getViewElement(event);
        if (value !== -1) {
            const date = CalendarDay.from(new Date(value));
            if (this._rangePreviewDate) {
                this._setRangePreviewDate();
            }
            if (this._selectDate(date)) {
                this.emitEvent('igcChange', { detail: date.native });
            }
            if (event.type === 'click') {
                this.emitEvent('igcActiveDateChange', { detail: date.native });
                this._activeDate = date;
            }
        }
    }
    _selectDate(value) {
        if (isDateInRanges(value, this._disabledDates)) {
            return false;
        }
        switch (this.selection) {
            case 'single':
                if (this._value?.equalTo(value)) {
                    return false;
                }
                this._value = value;
                break;
            case 'multiple':
                this._selectMultiple(value);
                break;
            case 'range':
                this._selectRange(value);
                break;
        }
        return true;
    }
    _selectMultiple(day) {
        const idx = this._values.findIndex((v) => v.equalTo(day));
        if (idx < 0) {
            this._values.push(day);
        }
        else {
            this._values.splice(idx, 1);
        }
        this._values = this._values.toSorted((a, b) => a.timestamp - b.timestamp);
    }
    _selectRange(day) {
        if (this._values.length !== 1) {
            this._values = [day];
            return;
        }
        const rangeStart = this._rangeStart;
        if (rangeStart.equalTo(day)) {
            this._values = [];
            return;
        }
        const [start, end] = rangeStart.greaterThan(day)
            ? [day, rangeStart]
            : [rangeStart, day];
        const range = Array.from(calendarRange({ start, end }));
        range.push(last(range).add('day', 1));
        this._values = range.filter((v) => !isDateInRanges(v, this._disabledDates));
    }
    _isSelected(day) {
        if (isDateInRanges(day, this._disabledDates)) {
            return false;
        }
        switch (this.selection) {
            case 'single':
                return Boolean(this._value?.equalTo(day));
            case 'multiple':
                return (this._hasValues &&
                    isDateInRanges(day, [
                        { type: DateRangeType.Specific, dateRange: this.values },
                    ]));
            case 'range':
                return (this._hasValues &&
                    isDateInRanges(day, [
                        {
                            type: DateRangeType.Between,
                            dateRange: [this._rangeStart.native, this._rangeEnd.native],
                        },
                    ]));
        }
    }
    _setRangePreviewDate(day) {
        this._rangePreviewDate = day;
        this.emitEvent('igcRangePreviewDateChange', {
            detail: day ? day.native : undefined,
        });
    }
    _changeRangePreview(day) {
        if (this._values.length === 1 && !first(this._values).equalTo(day)) {
            this._setRangePreviewDate(day);
        }
    }
    _clearRangePreview() {
        if (this._rangePreviewDate) {
            this._setRangePreviewDate();
        }
    }
    _getEffectiveRangeStart() {
        if (!this._rangeStart)
            return undefined;
        return this._rangePreviewDate?.lessThan(this._rangeStart)
            ? this._rangePreviewDate
            : this._rangeStart;
    }
    _getEffectiveRangeEnd() {
        if (!this._rangeEnd)
            return undefined;
        return this._rangePreviewDate?.greaterThan(this._rangeEnd)
            ? this._rangePreviewDate
            : this._rangeEnd;
    }
    _isFirstInRange(day) {
        const effectiveStart = this._getEffectiveRangeStart();
        return this._isRange && Boolean(effectiveStart?.equalTo(day));
    }
    _isLastInRange(day) {
        const effectiveEnd = this._getEffectiveRangeEnd();
        return this._isRange && Boolean(effectiveEnd?.equalTo(day));
    }
    _isRangeDate(day) {
        if (!this._hasValues)
            return false;
        const isSingleSelection = this._values.length === 1;
        if (isSingleSelection && !this._rangePreviewDate)
            return false;
        const max = isSingleSelection ? this._rangePreviewDate : this._rangeEnd;
        return isDateInRanges(day, [
            {
                type: DateRangeType.Between,
                dateRange: [this._rangeStart.native, max.native],
            },
        ]);
    }
    _isRangePreview(day) {
        if (!this._hasValues || !this._rangePreviewDate)
            return false;
        return isDateInRanges(day, [
            {
                type: DateRangeType.Between,
                dateRange: [this._rangeStart.native, this._rangePreviewDate.native],
            },
        ]);
    }
    _intlFormatDay(day) {
        const fmt = getDateFormatter().getIntlFormatter(this.locale, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        if (this._rangePreviewDate?.equalTo(day)) {
            return fmt.formatRange(first(this._values).native, this._rangePreviewDate.native);
        }
        if (this._isFirstInRange(day) || this._isLastInRange(day)) {
            return fmt.formatRange(first(this._values).native, last(this._values).native);
        }
        return fmt.format(day.native);
    }
    _getDayHandlers(day) {
        if (!this._isRange) {
            return { changePreview: nothing, clearPreview: nothing };
        }
        return {
            changePreview: this._changeRangePreview.bind(this, day),
            clearPreview: this._clearRangePreview.bind(this),
        };
    }
    _getDayProperties(day, today) {
        const inactive = !areSameMonth(day, this._activeDate);
        const disabled = isDateInRanges(day, this._disabledDates);
        const hidden = (this.hideLeadingDays && isPreviousMonth(day, this._activeDate)) ||
            (this.hideTrailingDays && isNextMonth(day, this._activeDate));
        return {
            disabled: disabled || hidden,
            first: this._isFirstInRange(day),
            last: this._isLastInRange(day),
            range: this._isRange && this._isRangeDate(day),
            preview: this._isRange && this._isRangePreview(day),
            current: !inactive && day.equalTo(today),
            inactive,
            hidden,
            weekend: day.weekend,
            single: !this._isRange,
            selected: !disabled && this._isSelected(day),
            special: !inactive && isDateInRanges(day, this._specialDates),
        };
    }
    focusActiveDate(options) {
        this._activeDay?.focus(options);
    }
    _renderDayWithProps(day, props) {
        const ariaLabel = this._intlFormatDay(day);
        const { changePreview, clearPreview } = this._getDayHandlers(day);
        return html `
      <span part=${partMap({ date: true, ...props })}>
        <span
          role="gridcell"
          part=${partMap({ 'date-inner': true, ...props })}
          aria-label=${ariaLabel}
          aria-disabled=${props.disabled}
          aria-selected=${props.selected}
          data-value=${day.timestamp}
          tabindex=${day.equalTo(this._activeDate) ? 0 : -1}
          @focus=${changePreview}
          @blur=${clearPreview}
          @pointerenter=${changePreview}
          @pointerleave=${clearPreview}
        >
          ${day.date}
        </span>
      </span>
    `;
    }
    _renderHeaderWeekNumber() {
        return html `
      <span role="columnheader" part="label week-number first">
        <span part="week-number-inner first">
          ${this.resourceStrings.weekLabel}
        </span>
      </span>
    `;
    }
    _renderWeekNumber(start, last) {
        return html `
      <span role="rowheader" part=${partMap({ 'week-number': true, last })}>
        <span part=${partMap({ 'week-number-inner': true, last })}>
          ${start.week}
        </span>
      </span>
    `;
    }
    _renderHeaders() {
        const label = getDateFormatter().getIntlFormatter(this.locale, {
            weekday: this.weekDayFormat,
        });
        const aria = getDateFormatter().getIntlFormatter(this.locale, {
            weekday: 'long',
        });
        const days = take(generateMonth(this._activeDate, this._firstDayOfWeek), DAYS_IN_WEEK);
        const weekNumber = this.showWeekNumbers
            ? this._renderHeaderWeekNumber()
            : nothing;
        const headers = days.map((day) => html `
        <span
          role="columnheader"
          part="label"
          aria-label=${aria.format(day.native)}
        >
          <span part="label-inner">${label.format(day.native)}</span>
        </span>
      `);
        return html `
      <div role="row" part="days-row first">${weekNumber}${headers}</div>
    `;
    }
    *_renderWeeks() {
        const today = CalendarDay.today;
        const weeks = Array.from(chunk(this._dates, DAYS_IN_WEEK));
        const lastIndex = weeks.length - 1;
        const dayPropertiesMap = new Map();
        for (const day of this._dates) {
            dayPropertiesMap.set(day.timestamp, this._getDayProperties(day, today));
        }
        for (const [idx, week] of weeks.entries()) {
            const isLast = idx === lastIndex;
            const hidden = week.every((day) => dayPropertiesMap.get(day.timestamp).hidden);
            yield html `
        <div role="row" part="days-row" aria-hidden=${hidden}>
          ${this.showWeekNumbers
                ? this._renderWeekNumber(week[0], isLast)
                : nothing}
          ${week.map((day) => this._renderDayWithProps(day, dayPropertiesMap.get(day.timestamp)))}
        </div>
      `;
        }
    }
    render() {
        return html `${this._renderHeaders()}${this._renderWeeks()}`;
    }
};
__decorate([
    state()
], IgcDaysViewComponent.prototype, "_dates", void 0);
__decorate([
    query('[tabindex="0"]')
], IgcDaysViewComponent.prototype, "_activeDay", void 0);
__decorate([
    property({ type: Boolean })
], IgcDaysViewComponent.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-leading-days' })
], IgcDaysViewComponent.prototype, "hideLeadingDays", void 0);
__decorate([
    property({ type: Boolean, attribute: 'hide-trailing-days' })
], IgcDaysViewComponent.prototype, "hideTrailingDays", void 0);
__decorate([
    property({ attribute: false })
], IgcDaysViewComponent.prototype, "rangePreviewDate", null);
__decorate([
    property({ attribute: 'week-day-format' })
], IgcDaysViewComponent.prototype, "weekDayFormat", void 0);
IgcDaysViewComponent = IgcDaysViewComponent_1 = __decorate([
    blazorSuppressComponent,
    blazorIndirectRender
], IgcDaysViewComponent);
export default IgcDaysViewComponent;
//# sourceMappingURL=days-view.js.map