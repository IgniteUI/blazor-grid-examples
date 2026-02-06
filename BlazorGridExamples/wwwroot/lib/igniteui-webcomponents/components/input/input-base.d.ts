import { LitElement, nothing, type TemplateResult } from 'lit';
import type { ThemingController } from '../../theming/theming-controller.js';
import type { SlotController } from '../common/controllers/slot.js';
import type { Constructor } from '../common/mixins/constructor.js';
export interface IgcInputComponentEventMap {
    igcInput: CustomEvent<string>;
    igcChange: CustomEvent<string>;
    focus: FocusEvent;
    blur: FocusEvent;
}
declare const IgcInputBaseComponent_base: Constructor<import("../common/mixins/forms/types.js").FormRequiredInterface & import("../common/mixins/forms/types.js").FormAssociatedElementInterface> & Constructor<import("../common/mixins/event-emitter.js").EventEmitterInterface<IgcInputComponentEventMap>> & Constructor<LitElement>;
export declare abstract class IgcInputBaseComponent extends IgcInputBaseComponent_base {
    protected abstract readonly _themes: ThemingController;
    protected abstract readonly _slots: SlotController<any>;
    protected readonly _inputId: string;
    protected readonly _input?: HTMLInputElement;
    /** The value attribute of the control.
     * Type varies based on the input type and can be string, Date or null.
     */
    abstract value: string | Date | null;
    /**
     * Whether the control will have outlined appearance.
     *
     * @attr
     * @default false
     */
    outlined: boolean;
    /**
     * The placeholder attribute of the control.
     * @attr
     */
    placeholder: string;
    /**
     * The label for the control.
     * @attr
     */
    label: string;
    /**
     * Resolves the part names for the container based on the current state.
     * Used to apply conditional styling via CSS parts.
     */
    protected _resolvePartNames(base: string): {
        [x: string]: boolean;
        prefixed: boolean;
        suffixed: boolean;
        filled: boolean;
    };
    /** Selects all the text inside the input. */
    select(): void;
    /** Sets focus on the control. */
    focus(options?: FocusOptions): void;
    /** Removes focus from the control. */
    blur(): void;
    protected abstract _renderInput(): TemplateResult;
    protected _renderFileParts(): TemplateResult | typeof nothing;
    private _renderValidatorContainer;
    private _renderPrefix;
    private _renderSuffix;
    private _renderLabel;
    private _renderMaterial;
    private _renderStandard;
    protected render(): import("lit-html/directive.js").DirectiveResult<typeof import("lit-html/directives/cache.js").CacheDirective>;
}
export {};
