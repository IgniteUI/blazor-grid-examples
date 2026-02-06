import { type ReactiveController, type ReactiveControllerHost, type ReactiveElement } from 'lit';
import type { Theme, Themes, ThemingControllerConfig } from './types.js';
declare class ThemingController implements ReactiveController {
    private readonly _host;
    private readonly _themes;
    private readonly _options?;
    private readonly _contextConsumer;
    private _theme;
    private _variant;
    private _themeSource;
    get theme(): Theme;
    constructor(host: ReactiveControllerHost & ReactiveElement, themes: Themes, config?: ThemingControllerConfig);
    /** @internal */
    hostConnected(): void;
    /** @internal */
    hostDisconnected(): void;
    /** @internal */
    handleEvent(): void;
    private _applyContextTheme;
    private _applyGlobalTheme;
    private _getStyles;
    protected _adoptStyles(): void;
}
/**
 * Adds theming controller to the host component.
 */
export declare function addThemingController(host: ReactiveControllerHost & ReactiveElement, themes: Themes, config?: ThemingControllerConfig): ThemingController;
export type { ThemingController };
