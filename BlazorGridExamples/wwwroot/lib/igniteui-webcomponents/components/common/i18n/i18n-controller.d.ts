import { type IResourceChangeEventArgs } from 'igniteui-i18n-core';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
/**
 * Defines the structure for the host element that will use this controller.
 * The host must be a Lit element (ReactiveControllerHost) and an HTMLElement.
 */
interface I18nControllerHost extends ReactiveControllerHost, HTMLElement {
    resourceStrings?: unknown;
    locale?: string;
}
type ResourceChangeCallback = (event: CustomEvent<IResourceChangeEventArgs>) => unknown;
/** Configuration object for the I18nController. */
type I18nControllerConfig<T extends object> = {
    /** The full default English resource strings object for the component. */
    defaultEN: T;
    /** An optional callback to execute when the global locale changes. */
    onResourceChange?: ResourceChangeCallback;
};
/**
 * Manages localization (i18n) for a Lit web component.
 * It handles the current locale, component-specific resource overrides,
 * and updates when the global localization state changes.
 */
declare class I18nController<T extends object> implements ReactiveController {
    private readonly _host;
    private readonly _defaultEN;
    private _resourceChangeCallback?;
    private _defaultResourceStrings;
    private _locale?;
    private _resourceStrings?;
    /**
     * Sets a custom locale that overrides the global one for this host component instance.
     * Setting a new locale triggers an update of the resource strings.
     */
    set locale(value: string | undefined);
    /**
     * Gets the resolved locale for the host component.
     * This is the component's custom locale if set, otherwise it falls back to the
     * global locale.
     */
    get locale(): string;
    /**
     * Sets custom resource string for component with this controller.
     * Gets the resolved resource string for component.
     */
    set resourceStrings(value: T | undefined);
    /** Get resolved resource strings for component */
    get resourceStrings(): T;
    constructor(host: I18nControllerHost, config: I18nControllerConfig<T>);
    /** @internal */
    hostConnected(): void;
    /** @internal */
    hostDisconnected(): void;
    /** @internal */
    handleEvent(event: CustomEvent<IResourceChangeEventArgs>): void;
    /** Registers the default English resources with the global i18n manager. */
    private _registerResources;
    /**
     * Helper to find the correct resource map based on the component's default resources (`#defaultEN`).
     * This relies on structural checking (the component's key names).
     */
    private _getResourceMapForComponent;
    /**
     * Gets the current, locale-specific resource strings for the component.
     * The logic maps component keys (from defaultEN) to core library keys
     * and retrieves the localized string from the i18n manager.
     *
     * Result is truncated, containing only relevant locale strings.
     */
    private _getCurrentResourceStrings;
}
/** Factory function to create and attach the I18nController to a host. */
export declare function addI18nController<T extends object>(host: I18nControllerHost, config: I18nControllerConfig<T>): I18nController<T>;
export type { I18nController };
