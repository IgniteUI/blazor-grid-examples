export type DayParameter = CalendarDay | Date;
export type CalendarRangeParams = {
    start: DayParameter;
    end: DayParameter | number;
    unit?: DayInterval;
    inclusive?: boolean;
};
type DayInterval = 'year' | 'quarter' | 'month' | 'week' | 'day';
type CalendarDayParams = {
    year: number;
    month: number;
    date?: number;
};
export declare const DAYS_IN_WEEK = 7;
export declare function toCalendarDay(date: DayParameter): CalendarDay;
export declare class CalendarDay {
    private readonly _date;
    /** Constructs and returns the current day. */
    static get today(): CalendarDay;
    /** Constructs a new CalendarDay instance from a Date object. */
    static from(date: Date): CalendarDay;
    /**
     * Compares the date portion of two date objects.
     *
     * @returns
     * ```
     *  first === second // 0
     *  first > second // 1
     *  first < second // -1
     * ```
     */
    static compare(first: DayParameter, second: DayParameter): number;
    constructor(args: CalendarDayParams);
    /** Returns a copy of this instance. */
    clone(): CalendarDay;
    /**
     * Returns a new instance with values replaced.
     */
    set(args: Partial<CalendarDayParams>): CalendarDay;
    add(unit: DayInterval, value: number): CalendarDay;
    /** Returns the day of the week (Sunday = 0). */
    get day(): number;
    /** Returns the full year. */
    get year(): number;
    /** Returns the month. */
    get month(): number;
    /** Returns the date */
    get date(): number;
    /** Returns the timestamp since epoch in milliseconds. */
    get timestamp(): number;
    /**
     * Returns the ISO 8601 week number.
     *
     * @remarks
     * Week 1 is the week containing the first Thursday of the year.
     * Weeks start on Monday. Some years can have 53 weeks.
     */
    get week(): number;
    /** Returns the underlying native date instance. */
    get native(): Date;
    /**
     * Whether the current date is a weekend day.
     *
     * @remarks
     * This is naive, since it does not account for locale specifics.
     */
    get weekend(): boolean;
    equalTo(value: DayParameter): boolean;
    greaterThan(value: DayParameter): boolean;
    greaterThanOrEqual(value: DayParameter): boolean;
    lessThan(value: DayParameter): boolean;
    lessThanOrEqual(value: DayParameter): boolean;
    toString(): string;
}
export {};
