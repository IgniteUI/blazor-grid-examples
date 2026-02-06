import { getDateFormatter } from 'igniteui-i18n-core';
import { parseISODate } from '../calendar/helpers.js';
import { clamp } from '../common/util.js';
export var FormatDesc;
(function (FormatDesc) {
    FormatDesc["Numeric"] = "numeric";
    FormatDesc["TwoDigits"] = "2-digit";
})(FormatDesc || (FormatDesc = {}));
export var DateParts;
(function (DateParts) {
    DateParts["Day"] = "day";
    DateParts["Month"] = "month";
    DateParts["Year"] = "year";
    DateParts["Date"] = "date";
    DateParts["Hours"] = "hours";
    DateParts["Minutes"] = "minutes";
    DateParts["Seconds"] = "seconds";
    DateParts["AmPm"] = "amPm";
    DateParts["Literal"] = "literal";
})(DateParts || (DateParts = {}));
export var DatePart;
(function (DatePart) {
    DatePart["Month"] = "month";
    DatePart["Year"] = "year";
    DatePart["Date"] = "date";
    DatePart["Hours"] = "hours";
    DatePart["Minutes"] = "minutes";
    DatePart["Seconds"] = "seconds";
    DatePart["AmPm"] = "amPm";
})(DatePart || (DatePart = {}));
function isDate(value) {
    return value instanceof Date;
}
export class DateTimeUtil {
    static { this.DEFAULT_INPUT_FORMAT = 'MM/dd/yyyy'; }
    static { this.DEFAULT_TIME_INPUT_FORMAT = 'hh:mm tt'; }
    static { this.PREDEFINED_FORMATS = new Set([
        'short',
        'medium',
        'long',
        'full',
    ]); }
    static parseValueFromMask(inputData, dateTimeParts, promptChar) {
        const parts = {};
        dateTimeParts.forEach((dp) => {
            let value = Number.parseInt(DateTimeUtil.getCleanVal(inputData, dp, promptChar), 10);
            if (!value) {
                value =
                    dp.type === DateParts.Date || dp.type === DateParts.Month ? 1 : 0;
            }
            parts[dp.type] = value;
        });
        parts[DateParts.Month] -= 1;
        if (parts[DateParts.Month] < 0 || 11 < parts[DateParts.Month]) {
            return null;
        }
        if (parts[DateParts.Year] < 50) {
            parts[DateParts.Year] += 2000;
        }
        if (parts[DateParts.Date] >
            DateTimeUtil.daysInMonth(parts[DateParts.Year], parts[DateParts.Month])) {
            return null;
        }
        if (parts[DateParts.Hours] > 23 ||
            parts[DateParts.Minutes] > 59 ||
            parts[DateParts.Seconds] > 59) {
            return null;
        }
        const amPm = dateTimeParts.find((p) => p.type === DateParts.AmPm);
        if (amPm) {
            parts[DateParts.Hours] %= 12;
        }
        if (amPm &&
            DateTimeUtil.getCleanVal(inputData, amPm, promptChar).toLowerCase() ===
                'pm') {
            parts[DateParts.Hours] += 12;
        }
        return new Date(parts[DateParts.Year] || 2000, parts[DateParts.Month] || 0, parts[DateParts.Date] || 1, parts[DateParts.Hours] || 0, parts[DateParts.Minutes] || 0, parts[DateParts.Seconds] || 0);
    }
    static getDefaultInputMask(locale) {
        return getDateFormatter().getLocaleDateTimeFormat(locale, true);
    }
    static parseDateTimeFormat(mask, locale, leadingZero = false) {
        const format = mask || DateTimeUtil.getDefaultInputMask(locale);
        const dateTimeParts = [];
        const formatArray = Array.from(format);
        let currentPart = null;
        let position = 0;
        for (let i = 0; i < formatArray.length; i++, position++) {
            const type = DateTimeUtil.determineDatePart(formatArray[i]);
            if (currentPart) {
                if (currentPart.type === type) {
                    currentPart.format += formatArray[i];
                    if (i < formatArray.length - 1) {
                        continue;
                    }
                }
                DateTimeUtil.addCurrentPart(currentPart, dateTimeParts, leadingZero);
                position = currentPart.end;
            }
            currentPart = {
                start: position,
                end: position + formatArray[i].length,
                type,
                format: formatArray[i],
            };
        }
        if (!dateTimeParts.filter((p) => p.format.includes(currentPart.format))
            .length) {
            DateTimeUtil.addCurrentPart(currentPart, dateTimeParts, leadingZero);
        }
        const yearPart = dateTimeParts.filter((p) => p.type === DateParts.Year)[0];
        if (yearPart && yearPart.format !== 'yy') {
            yearPart.end += 4 - yearPart.format.length;
            yearPart.format = 'yyyy';
        }
        return dateTimeParts;
    }
    static parseIsoDate(value) {
        return parseISODate(value);
    }
    static isValidDate(value) {
        if (isDate(value)) {
            return !Number.isNaN(value.getTime());
        }
        return false;
    }
    static formatDisplayDate(value, locale, displayFormat) {
        const options = {};
        switch (displayFormat) {
            case 'short':
            case 'long':
            case 'medium':
            case 'full':
                options.dateStyle = displayFormat;
                options.timeStyle = displayFormat;
                break;
            case 'shortDate':
            case 'longDate':
            case 'mediumDate':
            case 'fullDate':
                options.dateStyle = displayFormat.toLowerCase().split('date')[0];
                break;
            case 'shortTime':
            case 'longTime':
            case 'mediumTime':
            case 'fullTime':
                options.timeStyle = displayFormat.toLowerCase().split('time')[0];
                break;
            default:
                if (displayFormat) {
                    return getDateFormatter().formatDateCustomFormat(value, displayFormat, { locale });
                }
        }
        return getDateFormatter().formatDateTime(value, locale, options);
    }
    static getPartValue(datePartInfo, partLength, _dateValue) {
        let maskedValue;
        const datePart = datePartInfo.type;
        switch (datePart) {
            case DateParts.Date:
                maskedValue = _dateValue.getDate();
                break;
            case DateParts.Month:
                maskedValue = _dateValue.getMonth() + 1;
                break;
            case DateParts.Year:
                if (partLength === 2) {
                    maskedValue = DateTimeUtil.prependValue(Number.parseInt(_dateValue.getFullYear().toString().slice(-2), 10), partLength, '0');
                }
                else {
                    maskedValue = _dateValue.getFullYear();
                }
                break;
            case DateParts.Hours:
                if (datePartInfo.format.indexOf('h') !== -1) {
                    maskedValue = DateTimeUtil.prependValue(DateTimeUtil.toTwelveHourFormat(_dateValue.getHours()), partLength, '0');
                }
                else {
                    maskedValue = _dateValue.getHours();
                }
                break;
            case DateParts.Minutes:
                maskedValue = _dateValue.getMinutes();
                break;
            case DateParts.Seconds:
                maskedValue = _dateValue.getSeconds();
                break;
            case DateParts.AmPm:
                maskedValue = _dateValue.getHours() >= 12 ? 'PM' : 'AM';
                break;
        }
        if (datePartInfo.type !== DateParts.AmPm) {
            return DateTimeUtil.prependValue(maskedValue, partLength, '0');
        }
        return maskedValue;
    }
    static _spinTimePart(newDate, delta, max, min, setter, getter, spinLoop) {
        const range = max - min + 1;
        let newValue = getter.call(newDate) + delta;
        if (spinLoop) {
            newValue = min + ((((newValue - min) % range) + range) % range);
        }
        else {
            newValue = clamp(newValue, min, max);
        }
        setter.call(newDate, newValue);
    }
    static spinYear(delta, newDate) {
        const maxDate = DateTimeUtil.daysInMonth(newDate.getFullYear() + delta, newDate.getMonth());
        if (newDate.getDate() > maxDate) {
            newDate.setDate(maxDate);
        }
        newDate.setFullYear(newDate.getFullYear() + delta);
        return newDate;
    }
    static spinMonth(delta, newDate, spinLoop) {
        const maxDate = DateTimeUtil.daysInMonth(newDate.getFullYear(), newDate.getMonth() + delta);
        if (newDate.getDate() > maxDate) {
            newDate.setDate(maxDate);
        }
        const maxMonth = 11;
        const minMonth = 0;
        let month = newDate.getMonth() + delta;
        if (month > maxMonth) {
            month = spinLoop ? (month % maxMonth) - 1 : maxMonth;
        }
        else if (month < minMonth) {
            month = spinLoop ? maxMonth + (month % maxMonth) + 1 : minMonth;
        }
        newDate.setMonth(month);
    }
    static spinDate(delta, newDate, spinLoop) {
        const maxDate = DateTimeUtil.daysInMonth(newDate.getFullYear(), newDate.getMonth());
        let date = newDate.getDate() + delta;
        if (date > maxDate) {
            date = spinLoop ? date % maxDate : maxDate;
        }
        else if (date < 1) {
            date = spinLoop ? maxDate + (date % maxDate) : 1;
        }
        newDate.setDate(date);
    }
    static spinHours(delta, newDate, spinLoop) {
        DateTimeUtil._spinTimePart(newDate, delta, 23, 0, newDate.setHours, newDate.getHours, spinLoop);
    }
    static spinMinutes(delta, newDate, spinLoop) {
        DateTimeUtil._spinTimePart(newDate, delta, 59, 0, newDate.setMinutes, newDate.getMinutes, spinLoop);
    }
    static spinSeconds(delta, newDate, spinLoop) {
        DateTimeUtil._spinTimePart(newDate, delta, 59, 0, newDate.setSeconds, newDate.getSeconds, spinLoop);
    }
    static spinAmPm(newDate, currentDate, amPmFromMask) {
        let date = new Date(newDate);
        switch (amPmFromMask) {
            case 'am':
            case 'AM':
                date = new Date(newDate.setHours(newDate.getHours() + 12));
                break;
            case 'pm':
            case 'PM':
                date = new Date(newDate.setHours(newDate.getHours() - 12));
                break;
        }
        if (date.getDate() !== currentDate.getDate()) {
            return currentDate;
        }
        return date;
    }
    static greaterThanMaxValue(value, maxValue, includeTime = true, includeDate = true) {
        if (includeTime && includeDate) {
            return value.getTime() > maxValue.getTime();
        }
        const _value = new Date(value.getTime());
        const _maxValue = new Date(maxValue.getTime());
        if (!includeTime) {
            _value.setHours(0, 0, 0, 0);
            _maxValue.setHours(0, 0, 0, 0);
        }
        if (!includeDate) {
            _value.setFullYear(0, 0, 0);
            _maxValue.setFullYear(0, 0, 0);
        }
        return _value.getTime() > _maxValue.getTime();
    }
    static lessThanMinValue(value, minValue, includeTime = true, includeDate = true) {
        if (includeTime && includeDate) {
            return value.getTime() < minValue.getTime();
        }
        const _value = new Date(value.getTime());
        const _minValue = new Date(minValue.getTime());
        if (!includeTime) {
            _value.setHours(0, 0, 0, 0);
            _minValue.setHours(0, 0, 0, 0);
        }
        if (!includeDate) {
            _value.setFullYear(0, 0, 0);
            _minValue.setFullYear(0, 0, 0);
        }
        return _value.getTime() < _minValue.getTime();
    }
    static validateMinMax(value, minValue, maxValue, includeTime = true, includeDate = true) {
        const errors = {};
        const min = DateTimeUtil.isValidDate(minValue)
            ? minValue
            : DateTimeUtil.parseIsoDate(minValue);
        const max = DateTimeUtil.isValidDate(maxValue)
            ? maxValue
            : DateTimeUtil.parseIsoDate(maxValue);
        if (min &&
            value &&
            DateTimeUtil.lessThanMinValue(value, min, includeTime, includeDate)) {
            Object.assign(errors, { minValue: true });
        }
        if (max &&
            value &&
            DateTimeUtil.greaterThanMaxValue(value, max, includeTime, includeDate)) {
            Object.assign(errors, { maxValue: true });
        }
        return errors;
    }
    static predefinedToDateDisplayFormat(format) {
        return format && DateTimeUtil.PREDEFINED_FORMATS.has(format)
            ? `${format}Date`
            : format;
    }
    static addCurrentPart(currentPart, dateTimeParts, leadingZero = false) {
        DateTimeUtil.ensureLeadingZero(currentPart, leadingZero);
        currentPart.end = currentPart.start + currentPart.format.length;
        dateTimeParts.push(currentPart);
    }
    static ensureLeadingZero(part, leadingZero = false) {
        switch (part.type) {
            case DateParts.Date:
            case DateParts.Month:
            case DateParts.Hours:
            case DateParts.Minutes:
            case DateParts.Seconds:
                if (part.format.length === 1 && leadingZero) {
                    part.format = part.format.repeat(2);
                }
                break;
        }
    }
    static determineDatePart(char) {
        switch (char) {
            case 'd':
            case 'D':
                return DateParts.Date;
            case 'M':
                return DateParts.Month;
            case 'y':
            case 'Y':
                return DateParts.Year;
            case 'h':
            case 'H':
                return DateParts.Hours;
            case 'm':
                return DateParts.Minutes;
            case 's':
            case 'S':
                return DateParts.Seconds;
            case 't':
            case 'T':
                return DateParts.AmPm;
            default:
                return DateParts.Literal;
        }
    }
    static getCleanVal(inputData, datePart, prompt) {
        return DateTimeUtil.trimEmptyPlaceholders(inputData.substring(datePart.start, datePart.end), prompt);
    }
    static escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    static trimEmptyPlaceholders(value, prompt) {
        const result = value.replace(new RegExp(DateTimeUtil.escapeRegExp(prompt ?? '_'), 'g'), '');
        return result;
    }
    static daysInMonth(fullYear, month) {
        return new Date(fullYear, month + 1, 0).getDate();
    }
    static prependValue(value, partLength, prependChar) {
        return (prependChar + value.toString()).slice(-partLength);
    }
    static toTwelveHourFormat(value) {
        const hour12 = value % 12;
        return hour12 === 0 ? 12 : hour12;
    }
}
//# sourceMappingURL=date-util.js.map