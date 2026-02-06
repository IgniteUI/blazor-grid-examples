import { nothing, type TemplateResult } from 'lit';
import type { Constructor } from '../common/mixins/constructor.js';
import type { ContentOrientation } from '../types.js';
import { IgcCalendarBaseComponent } from './base.js';
import { CalendarDay } from './model.js';
import type { CalendarActiveView, CalendarHeaderOrientation, IgcCalendarComponentEventMap } from './types.js';
export declare const focusActiveDate: unique symbol;
declare const IgcCalendarComponent_base: Constructor<import("../common/mixins/event-emitter.js").EventEmitterInterface<IgcCalendarComponentEventMap>> & Constructor<IgcCalendarBaseComponent>;
/**
 * Represents a calendar that lets users
 * to select a date value in a variety of different ways.
 *
 * @element igc-calendar
 *
 * @slot - The default slot for the calendar.
 * @slot title - Renders the title of the calendar header.
 * @slot header-date - Renders content instead of the current date/range in the calendar header.
 *
 * @fires igcChange - Emitted when calendar changes its value.
 *
 * @csspart header - The header element of the calendar.
 * @csspart header-title - The header title element of the calendar.
 * @csspart header-date - The header date element of the calendar.
 * @csspart content - The content element which contains the views and navigation elements of the calendar.
 * @csspart content-vertical - The content element which contains the views and navigation elements of the calendar in vertical orientation.
 * @csspart navigation - The navigation container element of the calendar.
 * @csspart months-navigation - The months navigation button element of the calendar.
 * @csspart years-navigation - The years navigation button element of the calendar.
 * @csspart years-range - The years range element of the calendar.
 * @csspart navigation-buttons - The navigation buttons container of the calendar.
 * @csspart navigation-button - Previous/next navigation button of the calendar.
 * @csspart days-view-container - The days view container element of the calendar.
 * @csspart days-view - Days view element of the calendar.
 * @csspart months-view - The months view element of the calendar.
 * @csspart years-view - The years view element of the calendar.
 * @csspart days-row - Days row element of the calendar.
 * @csspart label - Week header label element of the calendar.
 * @csspart week-number - Week number element of the calendar.
 * @csspart week-number-inner - Week number inner element of the calendar.
 * @csspart date - Date element of the calendar.
 * @csspart date-inner - Date inner element of the calendar.
 * @csspart first - The first selected date element of the calendar in range selection.
 * @csspart last - The last selected date element of the calendar in range selection.
 * @csspart inactive - Inactive date element of the calendar.
 * @csspart hidden - Hidden date element of the calendar.
 * @csspart weekend - Weekend date element of the calendar.
 * @csspart range - Range selected element of the calendar.
 * @csspart special - Special date element of the calendar.
 * @csspart disabled - Disabled date element of the calendar.
 * @csspart single - Single selected date element of the calendar.
 * @csspart preview - Range selection preview date element of the calendar.
 * @csspart month - Month element of the calendar.
 * @csspart month-inner - Month inner element of the calendar.
 * @csspart year - Year element of the calendar.
 * @csspart year-inner - Year inner element of the calendar.
 * @csspart selected - Indicates selected state. Applies to date, month and year elements of the calendar.
 * @csspart current - Indicates current state. Applies to date, month and year elements of the calendar.
 */
export default class IgcCalendarComponent extends IgcCalendarComponent_base {
    static readonly tagName = "igc-calendar";
    static styles: import("lit").CSSResult;
    static register(): void;
    private readonly _contentRef;
    private get _isDayView();
    private get _isMonthView();
    private get _isYearView();
    private get _previousButtonLabel();
    private get _nextButtonLabel();
    private _activeDaysViewIndex;
    private readonly _daysViews;
    private readonly _monthsView;
    private readonly _yearsView;
    /**
     * Whether to show the dates that do not belong to the current active month.
     * @attr hide-outside-days
     * @default false
     */
    hideOutsideDays: boolean;
    /**
     * Whether to render the calendar header part.
     * When the calendar selection is set to `multiple` the header is always hidden.
     *
     * @attr hide-header
     * @default false
     */
    hideHeader: boolean;
    /**
     * The orientation of the calendar header.
     * @attr header-orientation
     * @default "horizontal"
     */
    headerOrientation: CalendarHeaderOrientation;
    /**
     * The orientation of the calendar months when more than one month
     * is being shown.
     * @attr orientation
     * @default "horizontal"
     */
    orientation: ContentOrientation;
    /**
     * The number of months displayed in the days view.
     * @attr visible-months
     * @default 1
     */
    visibleMonths: number;
    /**
     * The current active view of the component.
     * @attr active-view
     * @default "days"
     */
    activeView: CalendarActiveView;
    /** The options used to format the months and the weekdays in the calendar views. */
    formatOptions: Pick<Intl.DateTimeFormatOptions, 'month' | 'weekday'>;
    constructor();
    private _shouldSkipKeyboardEvent;
    private _handleArrowKey;
    private _handlePageKeys;
    private _handleShiftPageKeys;
    private _handleHomeKey;
    private _handleEndKey;
    private _handleMonthChange;
    private _handleYearChange;
    private _handleValueChange;
    private _handleActiveDateChange;
    private _handleRangePreviewChange;
    private _setActiveDaysView;
    private _navigate;
    private _navigatePrevious;
    private _navigateNext;
    private _navigateToMonthView;
    private _navigateToYearView;
    /** @private @hidden @internal */
    [focusActiveDate](options?: FocusOptions): Promise<void>;
    private _updateViewIndex;
    private _getActiveDates;
    private _getNextEnabledDate;
    protected _renderNavigationButtons(): TemplateResult<1>;
    protected _renderMonthButtonNavigation(active: CalendarDay, viewIndex: number): TemplateResult;
    protected _renderYearButtonNavigation(active: CalendarDay, viewIndex: number): TemplateResult;
    protected _renderYearRangeNavigation(active: CalendarDay): TemplateResult;
    protected _renderNavigation(date?: CalendarDay, showButtons?: boolean, viewIndex?: number): TemplateResult;
    protected _renderHeader(): typeof nothing | TemplateResult<1>;
    protected _renderHeaderDateSingle(): TemplateResult;
    protected _renderHeaderDateRange(): TemplateResult;
    protected _renderHeaderDate(): TemplateResult;
    protected _renderDaysView(): TemplateResult;
    protected _renderMonthView(): TemplateResult;
    protected _renderYearView(): TemplateResult;
    protected render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-calendar': IgcCalendarComponent;
    }
}
export {};
