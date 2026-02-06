import { asNumber, findElementFromEventPath, first, isString, last, modulo, } from '../common/util.js';
import { CalendarDay, DAYS_IN_WEEK, toCalendarDay, } from './model.js';
import { DateRangeType, } from './types.js';
export const MONTHS_PER_ROW = 3;
export const YEARS_PER_ROW = 3;
export const YEARS_PER_PAGE = 15;
const CALENDAR_CELLS = 42;
const ISO_DATE_PATTERN = /^\d{4}/;
const TIME_PATTERN = /^\d{2}/;
const WEEK_DAYS_MAP = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
};
export function isValidDate(date) {
    return Number.isNaN(date.valueOf()) ? null : date;
}
export function parseISODate(string) {
    if (ISO_DATE_PATTERN.test(string)) {
        const timeComponent = !string.includes('T') ? 'T00:00:00' : '';
        return isValidDate(new Date(`${string}${timeComponent}`));
    }
    if (TIME_PATTERN.test(string)) {
        const today = first(new Date().toISOString().split('T'));
        return isValidDate(new Date(`${today}T${string}`));
    }
    return null;
}
export function convertToDate(value) {
    if (!value) {
        return null;
    }
    return isString(value) ? parseISODate(value) : isValidDate(value);
}
export function convertToDateRange(value) {
    if (!value) {
        return null;
    }
    if (isString(value)) {
        const obj = JSON.parse(value);
        const start = convertToDate(obj.start);
        const end = convertToDate(obj.end);
        return {
            start: start ? CalendarDay.from(start).native : null,
            end: end ? CalendarDay.from(end).native : null,
        };
    }
    return value;
}
export function getDateFormValue(value) {
    return value ? value.toISOString() : null;
}
export function convertToDates(value) {
    if (!value) {
        return null;
    }
    const values = [];
    const sources = isString(value) ? value.split(',') : value;
    for (const source of sources) {
        const trimmed = isString(source) ? source.trim() : source;
        const date = convertToDate(trimmed);
        if (date) {
            values.push(date);
        }
    }
    return values;
}
export function getViewElement(event) {
    const element = findElementFromEventPath('[data-value]', event);
    return element ? asNumber(element.dataset.value, -1) : -1;
}
export function getWeekDayNumber(value) {
    return WEEK_DAYS_MAP[value];
}
export function areSameMonth(first, second) {
    const a = toCalendarDay(first);
    const b = toCalendarDay(second);
    return a.year === b.year && a.month === b.month;
}
export function isNextMonth(target, origin) {
    const a = toCalendarDay(target);
    const b = toCalendarDay(origin);
    return a.year === b.year ? a.month > b.month : a.year > b.year;
}
export function isPreviousMonth(target, origin) {
    const a = toCalendarDay(target);
    const b = toCalendarDay(origin);
    return a.year === b.year ? a.month < b.month : a.year < b.year;
}
export function* calendarRange(options) {
    const { start, end, unit = 'day', inclusive = false } = options;
    let currentDate = toCalendarDay(start);
    const endDate = typeof end === 'number'
        ? toCalendarDay(start).add(unit, end)
        : toCalendarDay(end);
    const isReversed = endDate.lessThan(currentDate);
    const step = isReversed ? -1 : 1;
    const shouldContinue = () => {
        if (inclusive) {
            return isReversed
                ? currentDate.greaterThanOrEqual(endDate)
                : currentDate.lessThanOrEqual(endDate);
        }
        return isReversed
            ? currentDate.greaterThan(endDate)
            : currentDate.lessThan(endDate);
    };
    while (shouldContinue()) {
        yield currentDate;
        currentDate = currentDate.add(unit, step);
    }
}
export function* generateMonth(value, firstWeekDay) {
    const { year, month } = toCalendarDay(value);
    const start = new CalendarDay({ year, month });
    const offset = modulo(start.day - firstWeekDay, DAYS_IN_WEEK);
    yield* calendarRange({
        start: start.add('day', -offset),
        end: CALENDAR_CELLS,
    });
}
export function getYearRange(current, range) {
    const year = toCalendarDay(current).year;
    const start = Math.floor(year / range) * range;
    return { start, end: start + range - 1 };
}
export function isDateInRanges(date, ranges) {
    const value = toCalendarDay(date);
    return ranges.some((range) => {
        if (!range.dateRange?.length) {
            return range.type === DateRangeType.Weekdays
                ? !value.weekend
                : range.type === DateRangeType.Weekends
                    ? value.weekend
                    : false;
        }
        const days = range.dateRange.map((day) => toCalendarDay(day));
        const firstDay = first(days);
        switch (range.type) {
            case DateRangeType.After:
                return value.greaterThan(firstDay);
            case DateRangeType.Before:
                return value.lessThan(firstDay);
            case DateRangeType.Between: {
                const lastDay = last(days);
                const min = Math.min(firstDay.timestamp, lastDay.timestamp);
                const max = Math.max(firstDay.timestamp, lastDay.timestamp);
                return value.timestamp >= min && value.timestamp <= max;
            }
            case DateRangeType.Specific:
                return days.some((day) => day.equalTo(value));
            default:
                return false;
        }
    });
}
export function createDateConstraints(min, max, disabledDates) {
    const constraints = [];
    if (min) {
        constraints.push({
            type: DateRangeType.Before,
            dateRange: [min],
        });
    }
    if (max) {
        constraints.push({
            type: DateRangeType.After,
            dateRange: [max],
        });
    }
    constraints.push(...(disabledDates ?? []));
    return constraints.length > 0 ? constraints : undefined;
}
//# sourceMappingURL=helpers.js.map