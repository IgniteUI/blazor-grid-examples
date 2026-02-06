import { ValidationResourceStringsEN } from 'igniteui-i18n-core';
import { CalendarDay } from '../calendar/model.js';
import { asNumber, formatString, isDefined, numberOfDecimals, roundPrecise, } from './util.js';
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export const requiredValidator = {
    key: 'valueMissing',
    message: ValidationResourceStringsEN.required_validation_error,
    isValid: ({ required, value }) => (required ? !!value : true),
};
export const requiredBooleanValidator = {
    key: 'valueMissing',
    message: ValidationResourceStringsEN.required_validation_error,
    isValid: ({ required, checked }) => (required ? checked : true),
};
export const minLengthValidator = {
    key: 'tooShort',
    message: ({ minLength }) => formatString(ValidationResourceStringsEN.min_length_validation_error, minLength),
    isValid: ({ minLength, value }) => minLength && value ? value.length >= asNumber(minLength) : true,
};
export const maxLengthValidator = {
    key: 'tooLong',
    message: ({ maxLength }) => formatString(ValidationResourceStringsEN.max_length_validation_error, maxLength),
    isValid: ({ maxLength, value }) => maxLength && value ? value.length <= asNumber(maxLength) : true,
};
export const patternValidator = {
    key: 'patternMismatch',
    message: ValidationResourceStringsEN.pattern_validation_error,
    isValid: ({ pattern, value }) => pattern && value ? new RegExp(pattern, 'u').test(value) : true,
};
export const minValidator = {
    key: 'rangeUnderflow',
    message: ({ min }) => formatString(ValidationResourceStringsEN.min_validation_error, min),
    isValid: ({ min, value }) => isDefined(value) && value !== '' && isDefined(min)
        ? asNumber(value) >= asNumber(min)
        : true,
};
export const maxValidator = {
    key: 'rangeOverflow',
    message: ({ max }) => formatString(ValidationResourceStringsEN.max_validation_error, max),
    isValid: ({ max, value }) => isDefined(value) && value !== '' && isDefined(max)
        ? asNumber(value) <= asNumber(max)
        : true,
};
export const stepValidator = {
    key: 'stepMismatch',
    message: 'Value does not conform to step constraint',
    isValid: ({ min, step, value }) => {
        if (isDefined(value) && value !== '' && isDefined(step)) {
            const _value = asNumber(value) - asNumber(min);
            const _step = asNumber(step);
            const magnitude = numberOfDecimals(_step) + 1;
            const rem = roundPrecise(Math.abs(_value - _step * Math.round(_value / _step)), magnitude);
            return !rem;
        }
        return true;
    },
};
export const emailValidator = {
    key: 'typeMismatch',
    message: ValidationResourceStringsEN.email_validation_error,
    isValid: ({ value }) => (value ? emailRegex.test(value) : true),
};
export const urlValidator = {
    key: 'typeMismatch',
    message: ValidationResourceStringsEN.url_validation_error,
    isValid: ({ value }) => (value ? URL.canParse(value) : true),
};
export const minDateValidator = {
    key: 'rangeUnderflow',
    message: ({ min }) => formatString(ValidationResourceStringsEN.min_validation_error, min),
    isValid: ({ value, min }) => value && min ? CalendarDay.compare(value, min) >= 0 : true,
};
export const maxDateValidator = {
    key: 'rangeOverflow',
    message: ({ max }) => formatString(ValidationResourceStringsEN.max_validation_error, max),
    isValid: ({ value, max }) => value && max ? CalendarDay.compare(value, max) <= 0 : true,
};
//# sourceMappingURL=validators.js.map