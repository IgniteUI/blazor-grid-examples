import type { DateRangeValue } from '../../../date-range-picker/date-range-picker.js';
import type { FormValueType, IgcFormControl } from './types.js';
export type FormValueTransformers<T> = {
    setValue: (value: T) => T;
    getValue: (value: T) => T;
    setDefaultValue: (value: T) => T;
    getDefaultValue: (value: T) => T;
    setFormValue: (value: T, host: IgcFormControl) => FormValueType;
};
export type FormValueConfig<T> = {
    initialValue: T;
    initialDefaultValue?: T;
    transformers?: Partial<FormValueTransformers<T>>;
};
export declare const FormValueDefaultTransformers: FormValueTransformers<string>;
export declare const FormValueBooleanTransformers: Partial<FormValueTransformers<boolean>>;
export declare const FormValueNumberTransformers: Partial<FormValueTransformers<number>>;
export declare const FormValueDateTimeTransformers: Partial<FormValueTransformers<Date | null>>;
export declare const FormValueDateRangeTransformers: Partial<FormValueTransformers<DateRangeValue | null>>;
export declare const FormValueFileListTransformers: FormValueTransformers<FileList | null>;
export declare const FormValueSelectTransformers: Partial<FormValueTransformers<string | undefined>>;
