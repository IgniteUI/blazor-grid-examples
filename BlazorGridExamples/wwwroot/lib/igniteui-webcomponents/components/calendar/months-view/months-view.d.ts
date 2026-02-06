import { LitElement, type TemplateResult } from 'lit';
import type { Constructor } from '../../common/mixins/constructor.js';
import { CalendarDay } from '../model.js';
import type { IgcCalendarComponentEventMap } from '../types.js';
declare const IgcMonthsViewComponent_base: Constructor<import("../../common/mixins/event-emitter.js").EventEmitterInterface<IgcCalendarComponentEventMap>> & Constructor<LitElement>;
/**
 * Instantiate a months view as a separate component in the calendar.
 *
 * @element igc-months-view
 *
 * @csspart months-row - The months row container.
 * @csspart month - The month container.
 * @csspart month-inner - The inner month container.
 */
export default class IgcMonthsViewComponent extends IgcMonthsViewComponent_base {
    static readonly tagName = "igc-months-view";
    static styles: import("lit").CSSResult;
    static register(): void;
    private _value;
    private _activeMonth?;
    /** Тhe current value of the calendar. */
    set value(value: Date);
    get value(): Date;
    /** Sets the locale used for formatting and displaying the dates. */
    locale: string;
    /** The format of the month. Defaults to long. */
    monthFormat: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    constructor();
    /** @internal */
    connectedCallback(): void;
    protected _handleInteraction(event: Event): void;
    /** Focuses the active date. */
    focusActiveDate(options?: FocusOptions): void;
    protected _renderMonth(month: CalendarDay, now: CalendarDay, ariaFormatter: Intl.DateTimeFormat, labelFormatter: Intl.DateTimeFormat): TemplateResult;
    protected render(): Generator<TemplateResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-months-view': IgcMonthsViewComponent;
    }
}
export {};
