import type { LitElement, ReactiveControllerHost } from 'lit';
import type { FormValueType } from '../mixins/forms/types.js';
/** Configuration for the ElementInternalsController. */
type ElementInternalsConfig<T extends keyof ARIAMixin = keyof ARIAMixin> = {
    /** Initial ARIA attributes to set on the element internals. */
    initialARIA: Partial<Record<T, ARIAMixin[T]>>;
};
/**
 * A Lit ReactiveController to manage `ElementInternals` for a host element.
 * Provides methods to interact with custom element states and ARIA attributes..
 */
declare class ElementInternalsController {
    private readonly _host;
    private readonly _internals;
    /**
     * Gets the closest ancestor `<form>` element or `null`.
     *
     * @remarks
     * The host element must be form associated, that is, it should have
     * `static formAssociated = true` in order to return the parent form.
     */
    get form(): HTMLFormElement | null;
    /**
     * Returns a `ValidityState` object which represents the different validity states
     * the element can be in, with respect to constraint validation.
     *
     * @remarks
     * The host element must be form associated, that is, it should have
     * `static formAssociated = true`.
     */
    get validity(): ValidityState;
    /**
     * Returns a string containing the validation message of this element.
     *
     * @remarks
     * The host element must be form associated, that is, it should have
     * `static formAssociated = true`.
     */
    get validationMessage(): string;
    /**
     * Returns a boolean value which returns true if the element is a submittable element
     * which is a candidate for constraint validation.
     *
     * @remarks
     * The host element must be form associated, that is, it should have
     * `static formAssociated = true`.
     */
    get willValidate(): boolean;
    constructor(host: ReactiveControllerHost & LitElement, config?: ElementInternalsConfig);
    /** Sets ARIA attributes on the element's internals. */
    setARIA<T extends keyof ARIAMixin = keyof ARIAMixin>(state: Partial<Record<T, ARIAMixin[T]>>): void;
    /**
     * Adds or removes a custom state from the element's internals.
     * Custom states can be styled via `:state()` selector in CSS.
     */
    setState(state: string, value: boolean): void;
    /**
     * Sets both the state and submission value of internals's target element to value.
     *
     * If value is null, the element won't participate in form submission.
     *
     * @remarks
     * The host element must be form associated, that is, it should have
     * `static formAssociated = true`.
     */
    setFormValue(value: FormValueType, state?: FormValueType): void;
    /**
     * Sets the internal validity state of the host element as well as the validation
     * message.
     *
     * @remarks
     * The host element must be form associated, that is, it should have
     * `static formAssociated = true`.
     */
    setValidity(flags?: ValidityStateFlags, message?: string): void;
    /**
     * Checks the internal validity of the host element and fires an `invalid` event if
     * the host element fails validation constraints.
     *
     * @remarks
     * The host element must be form associated, that is, it should have
     * `static formAssociated = true`.
     */
    checkValidity(): boolean;
    /**
     * Checks the internal validity of the host element and fires an `invalid` event if
     * the host element fails validation constraints.
     *
     * @remarks
     * The host element must be form associated, that is, it should have
     * `static formAssociated = true`.
     */
    reportValidity(): boolean;
}
/** Creates and adds a {@link ElementInternalsController} to a LitElement host. */
export declare function addInternalsController(host: ReactiveControllerHost & LitElement, config?: ElementInternalsConfig): ElementInternalsController;
export type { ElementInternalsController };
