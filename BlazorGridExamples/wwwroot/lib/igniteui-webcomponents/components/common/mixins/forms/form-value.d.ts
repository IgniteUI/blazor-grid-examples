import type { LitElement } from 'lit';
import { type FormValueConfig } from './form-transformers.js';
import type { IgcFormControl } from './types.js';
export declare class FormValue<T> {
    private static readonly setFormValueKey;
    private readonly _host;
    private readonly _transformers;
    private readonly _setFormValue;
    private _value;
    private _defaultValue;
    constructor(host: IgcFormControl, config: FormValueConfig<T>);
    setValueAndFormState(value: T): void;
    set defaultValue(value: T);
    get defaultValue(): T;
    set value(value: T);
    get value(): T;
}
export declare function createFormValueState<T>(host: LitElement, config: FormValueConfig<T>): FormValue<T>;
