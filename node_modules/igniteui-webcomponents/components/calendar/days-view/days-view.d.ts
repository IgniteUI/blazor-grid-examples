import { type PropertyValues, type TemplateResult } from 'lit';
import type { Constructor } from '../../common/mixins/constructor.js';
import { IgcCalendarBaseComponent } from '../base.js';
import { CalendarDay } from '../model.js';
import { type IgcCalendarComponentEventMap } from '../types.js';
export interface IgcDaysViewEventMap extends IgcCalendarComponentEventMap {
    igcActiveDateChange: CustomEvent<Date>;
    igcRangePreviewDateChange: CustomEvent<Date>;
}
interface DayProperties {
    disabled: boolean;
    first: boolean;
    last: boolean;
    range: boolean;
    preview: boolean;
    current: boolean;
    inactive: boolean;
    hidden: boolean;
    weekend: boolean;
    single: boolean;
    selected: boolean;
    special: boolean;
}
declare const IgcDaysViewComponent_base: Constructor<import("../../common/mixins/event-emitter.js").EventEmitterInterface<IgcDaysViewEventMap>> & Constructor<IgcCalendarBaseComponent>;
/**
 * Instantiate a days view as a separate component in the calendar.
 *
 * @element igc-days-view
 *
 * @fires igcActiveDateChange - Emitted when the active date changes.
 * @fires igcRangePreviewDateChange - Emitted when the range preview date changes.
 *
 * @csspart days-row - The days row container.
 * @csspart label - The label container.
 * @csspart label-inner - The inner label container.
 * @csspart week-number - The week number container.
 * @csspart week-number-inner - The inner week number container.
 */
export default class IgcDaysViewComponent extends IgcDaysViewComponent_base {
    static readonly tagName = "igc-days-view";
    static styles: import("lit").CSSResult;
    static register(): void;
    private _dates;
    private _activeDay?;
    /** Returns the first date in the current range selection. */
    private get _rangeStart();
    /** Returns the last date in the current range selection. */
    private get _rangeEnd();
    /** The active state of the component. */
    active: boolean;
    /**
     * Whether to show leading days which do not belong to the current month.
     * @attr hide-leading-days
     */
    hideLeadingDays: boolean;
    /**
     * Whether to show trailing days which do not belong to the current month.
     * @attr hide-trailing-days
     */
    hideTrailingDays: boolean;
    /** The range preview date. */
    set rangePreviewDate(value: Date | undefined);
    get rangePreviewDate(): Date | undefined;
    /**
     * The format of the days. Defaults to narrow.
     * @attr week-day-format
     */
    weekDayFormat: 'long' | 'short' | 'narrow';
    constructor();
    /** @internal */
    connectedCallback(): void;
    /** @internal */
    protected update(props: PropertyValues<this>): void;
    protected _handleInteraction(event: Event): void;
    private _selectDate;
    private _selectMultiple;
    private _selectRange;
    private _isSelected;
    private _setRangePreviewDate;
    private _changeRangePreview;
    private _clearRangePreview;
    /** Gets the effective start of the visual range, accounting for preview. */
    private _getEffectiveRangeStart;
    /** Gets the effective end of the visual range, accounting for preview. */
    private _getEffectiveRangeEnd;
    private _isFirstInRange;
    private _isLastInRange;
    private _isRangeDate;
    private _isRangePreview;
    private _intlFormatDay;
    private _getDayHandlers;
    private _getDayProperties;
    /** Focuses the active date. */
    focusActiveDate(options?: FocusOptions): void;
    protected _renderDayWithProps(day: CalendarDay, props: DayProperties): TemplateResult;
    protected _renderHeaderWeekNumber(): TemplateResult<1>;
    protected _renderWeekNumber(start: CalendarDay, last: boolean): TemplateResult<1>;
    protected _renderHeaders(): TemplateResult<1>;
    protected _renderWeeks(): Generator<TemplateResult>;
    protected render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-days-view': IgcDaysViewComponent;
    }
}
export {};
