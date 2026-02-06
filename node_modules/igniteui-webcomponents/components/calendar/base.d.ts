import { LitElement, type PropertyValues } from 'lit';
import { type IgcCalendarResourceStrings } from '../common/i18n/EN/calendar.resources.js';
import { CalendarDay } from './model.js';
import type { CalendarSelection, DateRangeDescriptor, WeekDays } from './types.js';
export declare class IgcCalendarBaseComponent extends LitElement {
    protected readonly _i18nController: import("../common/i18n/i18n-controller.js").I18nController<IgcCalendarResourceStrings>;
    private _initialActiveDateSet;
    protected get _hasValues(): boolean;
    protected get _isSingle(): boolean;
    protected get _isMultiple(): boolean;
    protected get _isRange(): boolean;
    protected _rangePreviewDate?: CalendarDay;
    protected _firstDayOfWeek: number;
    protected _activeDate: CalendarDay;
    protected _value: CalendarDay | null;
    protected _values: CalendarDay[];
    protected _specialDates: DateRangeDescriptor[];
    protected _disabledDates: DateRangeDescriptor[];
    /**
     * The current value of the calendar.
     * Used when selection is set to single
     *
     * @attr value
     */
    set value(value: Date | string | null | undefined);
    get value(): Date | null;
    /**
     * The current values of the calendar.
     * Used when selection is set to multiple of range.
     *
     * @attr values
     */
    set values(values: (Date | string)[] | string | null | undefined);
    get values(): Date[];
    /** Get/Set the date which is shown in view and is highlighted. By default it is the current date. */
    set activeDate(value: Date | string | null | undefined);
    get activeDate(): Date;
    /**
     * Sets the type of selection in the component.
     * @attr selection
     * @default single
     */
    selection: CalendarSelection;
    /**
     * Whether to show the week numbers.
     * @attr show-week-numbers
     * @default false
     */
    showWeekNumbers: boolean;
    /**
     * Gets/Sets the first day of the week.
     * @attr week-start
     * @default sunday
     */
    weekStart: WeekDays;
    /**
     * Gets/Sets the locale used for formatting and displaying the dates in the component.
     * @attr locale
     */
    set locale(value: string);
    get locale(): string;
    /**
     * The resource strings for localization.
     */
    set resourceStrings(value: IgcCalendarResourceStrings);
    get resourceStrings(): IgcCalendarResourceStrings;
    /** Gets/Sets the special dates for the component. */
    set specialDates(value: DateRangeDescriptor[]);
    get specialDates(): DateRangeDescriptor[] | undefined;
    /** Gets/Sets the disabled dates for the component. */
    set disabledDates(value: DateRangeDescriptor[]);
    get disabledDates(): DateRangeDescriptor[] | undefined;
    /** @internal */
    protected update(props: PropertyValues<this>): void;
    /** @internal */
    protected firstUpdated(): void;
}
