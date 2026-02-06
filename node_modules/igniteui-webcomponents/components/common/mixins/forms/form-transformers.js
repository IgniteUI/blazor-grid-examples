import { convertToDate, convertToDateRange, getDateFormValue, } from '../../../calendar/helpers.js';
import { asNumber } from '../../util.js';
export const FormValueDefaultTransformers = {
    setValue: (value) => value || '',
    getValue: (value) => value,
    setDefaultValue: (value) => value || '',
    getDefaultValue: (value) => value,
    setFormValue: (value, _) => value || null,
};
export const FormValueBooleanTransformers = {
    setValue: Boolean,
    setDefaultValue: Boolean,
    setFormValue: (checked, host) => checked && 'value' in host ? host.value || 'on' : null,
};
export const FormValueNumberTransformers = {
    setValue: asNumber,
    setDefaultValue: asNumber,
    setFormValue: (value) => value.toString(),
};
export const FormValueDateTimeTransformers = {
    setValue: convertToDate,
    setDefaultValue: convertToDate,
    setFormValue: getDateFormValue,
};
export const FormValueDateRangeTransformers = {
    setValue: convertToDateRange,
    setDefaultValue: convertToDateRange,
    setFormValue: (value, host) => {
        if (!host.name) {
            return null;
        }
        const start = value?.start?.toISOString();
        const end = value?.end?.toISOString();
        const formData = new FormData();
        if (start) {
            formData.append(`${host.name}-start`, start);
        }
        if (end) {
            formData.append(`${host.name}-end`, end);
        }
        return formData;
    },
};
export const FormValueFileListTransformers = {
    setValue: (value) => value || null,
    getValue: (value) => value,
    setDefaultValue: (value) => value || null,
    getDefaultValue: (value) => value,
    setFormValue: (files, host) => {
        if (!(host.name && files)) {
            return null;
        }
        const formData = new FormData();
        for (const file of files) {
            formData.append(host.name, file);
        }
        return formData;
    },
};
export const FormValueSelectTransformers = {
    setValue: (value) => value || undefined,
    setDefaultValue: (value) => value || undefined,
};
//# sourceMappingURL=form-transformers.js.map