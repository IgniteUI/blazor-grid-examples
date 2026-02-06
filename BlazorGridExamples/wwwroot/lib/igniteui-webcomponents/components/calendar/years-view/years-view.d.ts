import { LitElement, type TemplateResult } from 'lit';
import type { Constructor } from '../../common/mixins/constructor.js';
import { CalendarDay } from '../model.js';
import type { IgcCalendarComponentEventMap } from '../types.js';
declare const IgcYearsViewComponent_base: Constructor<import("../../common/mixins/event-emitter.js").EventEmitterInterface<IgcCalendarComponentEventMap>> & Constructor<LitElement>;
/**
 * Instantiate a years view as a separate component in the calendar.
 *
 * @element igc-years-view
 *
 * @csspart years-row - The years row container.
 * @csspart year - The year container.
 * @csspart year-inner - The inner year container.
 */
export default class IgcYearsViewComponent extends IgcYearsViewComponent_base {
    static readonly tagName = "igc-years-view";
    static styles: import("lit").CSSResult;
    static register(): void;
    private _value;
    private _activeYear?;
    /** Тhe current value of the calendar. */
    set value(value: Date);
    get value(): Date;
    /**
     * Sets how many years are displayed on a single page.
     * @attr years-per-page
     */
    yearsPerPage: number;
    constructor();
    connectedCallback(): void;
    protected _handleInteraction(event: Event): void;
    /** Focuses the active year element. */
    focusActiveDate(options?: FocusOptions): void;
    protected _renderYear(year: number, now: CalendarDay): TemplateResult;
    protected render(): Generator<TemplateResult>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-years-view': IgcYearsViewComponent;
    }
}
export {};
