export const DAYS_IN_WEEK = 7;
const MILLISECONDS_PER_DAY = 86400000;
const WEEKDAY_MIN = 1;
const WEEKDAY_MAX = 5;
export function toCalendarDay(date) {
    return date instanceof Date ? CalendarDay.from(date) : date;
}
function checkRollover(original, modified) {
    return original.date !== modified.date ? modified.set({ date: 0 }) : modified;
}
export class CalendarDay {
    static get today() {
        return CalendarDay.from(new Date());
    }
    static from(date) {
        return new CalendarDay({
            year: date.getFullYear(),
            month: date.getMonth(),
            date: date.getDate(),
        });
    }
    static compare(first, second) {
        const a = toCalendarDay(first);
        const b = toCalendarDay(second);
        if (a.equalTo(b)) {
            return 0;
        }
        return a.greaterThan(b) ? 1 : -1;
    }
    constructor(args) {
        this._date = new Date(args.year, args.month, args.date ?? 1);
    }
    clone() {
        return CalendarDay.from(this._date);
    }
    set(args) {
        const year = args.year ?? this.year;
        const month = args.month ?? this.month;
        const date = args.date ?? this.date;
        if (date > 0) {
            const temp = new Date(year, month, date);
            if (temp.getMonth() !== month) {
                const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
                return new CalendarDay({ year, month, date: lastDayOfMonth });
            }
        }
        return new CalendarDay({ year, month, date });
    }
    add(unit, value) {
        const result = this.clone();
        switch (unit) {
            case 'year':
                result._date.setFullYear(result.year + value);
                return checkRollover(this, result);
            case 'quarter':
                result._date.setMonth(result.month + 3 * value);
                return checkRollover(this, result);
            case 'month':
                result._date.setMonth(result.month + value);
                return checkRollover(this, result);
            case 'week':
                result._date.setDate(result.date + 7 * value);
                return result;
            case 'day':
                result._date.setDate(result.date + value);
                return result;
            default:
                throw new Error(`Invalid interval: ${unit}`);
        }
    }
    get day() {
        return this._date.getDay();
    }
    get year() {
        return this._date.getFullYear();
    }
    get month() {
        return this._date.getMonth();
    }
    get date() {
        return this._date.getDate();
    }
    get timestamp() {
        return this._date.getTime();
    }
    get week() {
        const target = new Date(this._date);
        const dayNum = target.getDay() || 7;
        target.setDate(target.getDate() + 4 - dayNum);
        const yearStart = new Date(target.getFullYear(), 0, 1);
        const weekNo = Math.ceil(((target.getTime() - yearStart.getTime()) / MILLISECONDS_PER_DAY + 1) /
            DAYS_IN_WEEK);
        return weekNo;
    }
    get native() {
        return new Date(this._date);
    }
    get weekend() {
        return this.day < WEEKDAY_MIN || this.day > WEEKDAY_MAX;
    }
    equalTo(value) {
        const other = toCalendarDay(value).timestamp;
        return this.timestamp === other;
    }
    greaterThan(value) {
        const other = toCalendarDay(value).timestamp;
        return this.timestamp > other;
    }
    greaterThanOrEqual(value) {
        const other = toCalendarDay(value).timestamp;
        return this.timestamp >= other;
    }
    lessThan(value) {
        const other = toCalendarDay(value).timestamp;
        return this.timestamp < other;
    }
    lessThanOrEqual(value) {
        const other = toCalendarDay(value).timestamp;
        return this.timestamp <= other;
    }
    toString() {
        return `${this.native}`;
    }
}
//# sourceMappingURL=model.js.map