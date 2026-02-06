import { isObject, isString } from '../util.js';
export const calendarResourcesMap = new Map([
    ['selectMonth', 'calendar_select_month'],
    ['selectYear', 'calendar_select_year'],
    ['selectDate', 'calendar_select_date'],
    ['selectRange', 'calendar_range_placeholder'],
    ['selectedDate', undefined],
    ['startDate', 'calendar_range_label_start'],
    ['endDate', 'calendar_range_label_end'],
    ['previousMonth', 'calendar_previous_month'],
    ['nextMonth', 'calendar_next_month'],
    ['previousYear', 'calendar_previous_year'],
    ['nextYear', 'calendar_next_year'],
    ['previousYears', 'calendar_previous_years'],
    ['nextYears', 'calendar_next_years'],
    ['weekLabel', 'i18n/getWeekLabel'],
]);
export const dateRangePickerResourcesMap = new Map([
    ['separator', 'date_range_picker_date_separator'],
    ['done', 'date_range_picker_done_button'],
    ['cancel', 'date_range_picker_cancel_button'],
    ['last7Days', 'date_range_picker_last7Days'],
    ['last30Days', 'date_range_picker_last30Days'],
    ['currentMonth', 'date_range_picker_currentMonth'],
    ['yearToDate', 'date_range_picker_yearToDate'],
    ...calendarResourcesMap.entries(),
]);
function isCalendarResource(resource) {
    return (isObject(resource) &&
        'selectMonth' in resource &&
        !isDateRangePickerResource(resource));
}
function isDateRangePickerResource(resource) {
    return isObject(resource) && 'last7Days' in resource;
}
function getResourceMap(resource) {
    if (isCalendarResource(resource)) {
        return calendarResourcesMap;
    }
    if (isDateRangePickerResource(resource)) {
        return dateRangePickerResourcesMap;
    }
    return undefined;
}
function getResourceMapForCore(resource) {
    if ('date_range_picker_last7Days' in resource) {
        return dateRangePickerResourcesMap;
    }
    if ('calendar_select_month' in resource) {
        return calendarResourcesMap;
    }
    return undefined;
}
export function convertToIgcResource(resource) {
    const result = {};
    const resourceMap = getResourceMapForCore(resource);
    if (!resourceMap) {
        return resource;
    }
    for (const [componentKey, coreKey] of resourceMap) {
        if (coreKey && coreKey in resource) {
            const coreValue = resource[coreKey];
            if (isString(coreValue)) {
                result[componentKey] = coreValue;
            }
        }
    }
    return result;
}
export function convertToCoreResource(resource) {
    const result = {};
    const resourceMap = getResourceMap(resource);
    if (resourceMap) {
        for (const [key, coreKey] of resourceMap) {
            if (coreKey) {
                const value = resource[key];
                if (isString(value)) {
                    result[coreKey] = value;
                }
            }
        }
    }
    else {
        return resource;
    }
    return result;
}
//# sourceMappingURL=utils.js.map