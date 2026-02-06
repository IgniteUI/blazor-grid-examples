import type { LitElement, ReactiveController, ReactiveControllerHost } from 'lit';
type InferSlotNames<T> = T extends readonly (infer U)[] ? U : never;
/**
 * Additional query options for the slot controller methods.
 */
type SlotQueryOptions = {
    /**
     * If set to `true`, it returns a sequence of both the elements assigned to the queried slot,
     * as well as elements assigned to any other slots that are descendants of this slot. If no
     * assigned elements are found, it returns the slot's fallback content.
     *
     * Defaults to `false`.
     */
    flatten?: boolean;
    /**
     * CSS selector used to filter the elements returned.
     */
    selector?: string;
};
type SlotChangeCallback<T> = (parameters: SlotChangeCallbackParameters<T>) => void;
type SlotChangeCallbackParameters<T> = {
    /** The slot name that has its assigned nodes changed. */
    slot: T;
    /** `true` if the slot is the default slot. */
    isDefault: boolean;
    /** `true` if the callback handler is called for the initial host update. */
    isInitial: boolean;
};
type SlotControllerOptions<T> = {
    /** An iterable collection of slot names to observe. */
    slots?: Iterable<T>;
    /** Callback function which is invoked a slot's assigned nodes change. */
    onChange?: SlotChangeCallback<T>;
    /** If set to `true`, the `onChange` callback is invoked once after the host is updated for the first time. */
    initial?: boolean;
};
declare const DefaultSlot = "[default]";
declare class SlotController<T> implements ReactiveController {
    private readonly _host;
    private readonly _options;
    private readonly _slots?;
    private _initialized;
    constructor(host: ReactiveControllerHost & LitElement, options?: SlotControllerOptions<T>);
    private _getSlot;
    /**
     * Returns an array of the assigned nodes for `slot`.
     *
     * If `flatten` is set to `true`, it returns a sequence of both the nodes assigned to the queried slot,
     * as well as nodes assigned to any other slots that are descendants of this slot. If no
     * assigned nodes are found, it returns the slot's fallback content.
     */
    getAssignedNodes(slot: T, flatten?: boolean): Node[];
    /**
     * Returns an array of the assigned elements for `slot` with additional `options`.
     *
     * See {@link SlotQueryOptions.flatten} and {@link SlotQueryOptions.selector} for more information.
     */
    getAssignedElements<U extends Element>(slot: T, options?: SlotQueryOptions): U[];
    /**
     * Return whether `slot` has assigned nodes.
     *
     * If `flatten` is set to `true`, it returns a sequence of both the nodes assigned to the queried slot,
     * as well as nodes assigned to any other slots that are descendants of this slot. If no
     * assigned nodes are found, it returns the slot's fallback content.
     */
    hasAssignedNodes(slot: T, flatten?: boolean): boolean;
    /**
     * Return whether `slot` has assigned elements accepting additional `options`.
     *
     * See {@link SlotQueryOptions.flatten} and {@link SlotQueryOptions.selector} for more information.
     */
    hasAssignedElements(slot: T, options?: SlotQueryOptions): boolean;
    /** @internal */
    handleEvent(event: Event): void;
    /** @internal */
    hostConnected(): void;
    /** @internal */
    hostDisconnected(): void;
    /** @internal */
    hostUpdated(): void;
}
declare function addSlotController<K extends readonly string[]>(host: ReactiveControllerHost, options?: SlotControllerOptions<InferSlotNames<K>> & {
    slots?: K;
}): SlotController<InferSlotNames<K>>;
declare function setSlots<const T extends readonly string[]>(...slots: T): readonly ["[default]", ...T];
export { addSlotController, DefaultSlot, setSlots };
export type { InferSlotNames, SlotController, SlotQueryOptions, SlotChangeCallback, SlotChangeCallbackParameters, SlotControllerOptions, };
