import { ValidationResourceStringsEN } from 'igniteui-i18n-core';
import { calendarRange, isDateInRanges } from '../calendar/helpers.js';
import { CalendarDay } from '../calendar/model.js';
import { formatString, isEmpty } from '../common/util.js';
export const minDateRangeValidator = {
    key: 'rangeUnderflow',
    message: ({ min }) => formatString(ValidationResourceStringsEN.min_validation_error, min),
    isValid: ({ value, min }) => {
        if (!min) {
            return true;
        }
        const isStartInvalid = value?.start && CalendarDay.compare(value.start, min) < 0;
        const isEndInvalid = value?.end && CalendarDay.compare(value.end, min) < 0;
        return !(isStartInvalid || isEndInvalid);
    },
};
export const maxDateRangeValidator = {
    key: 'rangeOverflow',
    message: ({ max }) => formatString(ValidationResourceStringsEN.max_validation_error, max),
    isValid: ({ value, max }) => {
        if (!max) {
            return true;
        }
        const isStartInvalid = value?.start && CalendarDay.compare(value.start, max) > 0;
        const isEndInvalid = value?.end && CalendarDay.compare(value.end, max) > 0;
        return !(isStartInvalid || isEndInvalid);
    },
};
export const requiredDateRangeValidator = {
    key: 'valueMissing',
    message: ValidationResourceStringsEN.required_validation_error,
    isValid: ({ required, value }) => {
        return required ? isCompleteDateRange(value) : true;
    },
};
export const badInputDateRangeValidator = {
    key: 'badInput',
    message: ({ value }) => formatString(ValidationResourceStringsEN.disabled_date_validation_error, value),
    isValid: ({ value, disabledDates }) => {
        if (!isCompleteDateRange(value) ||
            !disabledDates ||
            isEmpty(disabledDates)) {
            return true;
        }
        return Array.from(calendarRange({ start: value.start, end: value.end, inclusive: true })).every((date) => !isDateInRanges(date, disabledDates));
    },
};
export const dateRangeValidators = [
    requiredDateRangeValidator,
    minDateRangeValidator,
    maxDateRangeValidator,
    badInputDateRangeValidator,
];
export function isCompleteDateRange(value) {
    return value != null && value.start != null && value.end != null;
}
//# sourceMappingURL=validators.js.map