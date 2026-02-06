import type { IResourceStrings } from 'igniteui-i18n-core';
import type { IgcCalendarResourceStrings } from './EN/calendar.resources.js';
import type { IgcDateRangePickerResourceStrings } from './EN/date-range-picker.resources.js';
export declare const calendarResourcesMap: Map<keyof IgcCalendarResourceStrings, string | undefined>;
export declare const dateRangePickerResourcesMap: Map<keyof IgcDateRangePickerResourceStrings, string | undefined>;
export declare function convertToIgcResource<T extends object>(resource: IResourceStrings): T;
export declare function convertToCoreResource<T>(resource: T): IResourceStrings;
