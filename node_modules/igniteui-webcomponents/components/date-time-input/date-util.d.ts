export declare enum FormatDesc {
    Numeric = "numeric",
    TwoDigits = "2-digit"
}
export declare enum DateParts {
    Day = "day",
    Month = "month",
    Year = "year",
    Date = "date",
    Hours = "hours",
    Minutes = "minutes",
    Seconds = "seconds",
    AmPm = "amPm",
    Literal = "literal"
}
export declare enum DatePart {
    Month = "month",
    Year = "year",
    Date = "date",
    Hours = "hours",
    Minutes = "minutes",
    Seconds = "seconds",
    AmPm = "amPm"
}
/** @ignore */
export interface DatePartInfo {
    type: DateParts;
    start: number;
    end: number;
    format: string;
}
export interface DatePartDeltas {
    date?: number;
    month?: number;
    year?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
}
export declare abstract class DateTimeUtil {
    static readonly DEFAULT_INPUT_FORMAT = "MM/dd/yyyy";
    static readonly DEFAULT_TIME_INPUT_FORMAT = "hh:mm tt";
    private static readonly PREDEFINED_FORMATS;
    static parseValueFromMask(inputData: string, dateTimeParts: DatePartInfo[], promptChar?: string): Date | null;
    static getDefaultInputMask(locale: string): string;
    static parseDateTimeFormat(mask: string, locale: string, leadingZero?: boolean): DatePartInfo[];
    static parseIsoDate(value: string): Date | null;
    static isValidDate(value: any): value is Date;
    /**
     * Format date for display.
     * @param value Date value
     * @param locale Locale of the component
     * @param displayFormat Display format specified by the user. Can be undefined.
     * @param inputFormat Input format, so it is not calculated again and used for leading zero format.
     * @returns
     */
    static formatDisplayDate(value: Date, locale: string, displayFormat: string | undefined): string;
    static getPartValue(datePartInfo: DatePartInfo, partLength: number, _dateValue: Date | null): string;
    private static _spinTimePart;
    static spinYear(delta: number, newDate: Date): Date;
    static spinMonth(delta: number, newDate: Date, spinLoop: boolean): void;
    static spinDate(delta: number, newDate: Date, spinLoop: boolean): void;
    static spinHours(delta: number, newDate: Date, spinLoop: boolean): void;
    static spinMinutes(delta: number, newDate: Date, spinLoop: boolean): void;
    static spinSeconds(delta: number, newDate: Date, spinLoop: boolean): void;
    static spinAmPm(newDate: Date, currentDate: Date, amPmFromMask: string): Date;
    static greaterThanMaxValue(value: Date, maxValue: Date, includeTime?: boolean, includeDate?: boolean): boolean;
    /**
     * Determines whether the provided value is less than the provided min value.
     *
     * @param includeTime set to false if you want to exclude time portion of the two dates
     * @param includeDate set to false if you want to exclude the date portion of the two dates
     * @returns true if provided value is less than provided minValue
     */
    static lessThanMinValue(value: Date, minValue: Date, includeTime?: boolean, includeDate?: boolean): boolean;
    /**
     * Validates a value within a given min and max value range.
     *
     * @param value The value to validate
     * @param minValue The lowest possible value that `value` can take
     * @param maxValue The largest possible value that `value` can take
     */
    static validateMinMax(value: Date, minValue: Date | string, maxValue: Date | string, includeTime?: boolean, includeDate?: boolean): {};
    /**
     * Transforms the predefined format to a display format containing only date parts.
     *
     * @param format The format to check and transform
     */
    static predefinedToDateDisplayFormat(format?: string): string | undefined;
    private static addCurrentPart;
    private static ensureLeadingZero;
    private static determineDatePart;
    private static getCleanVal;
    private static escapeRegExp;
    private static trimEmptyPlaceholders;
    private static daysInMonth;
    private static prependValue;
    private static toTwelveHourFormat;
}
