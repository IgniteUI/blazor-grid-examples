import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
import type { Theme, ThemeVariant } from '../../theming/types.js';
/**
 * A theme provider component that uses Lit context to provide theme information
 * to descendant components.
 *
 * This component allows you to scope a theme to a specific part of the page.
 * All library components within this provider will use the specified theme
 * instead of the global theme.
 *
 * @element igc-theme-provider
 *
 * @slot - Default slot for content that should receive the provided theme.
 *
 * @remarks
 * When using the theme provider, it must be registered **before** any descendant components
 * that will consume the theme context. This ensures the context provider is available
 * when descendant components attempt to consume it.
 *
 * ```typescript
 * import { defineComponents, IgcThemeProviderComponent, IgcButtonComponent } from 'igniteui-webcomponents';
 *
 * // Register theme provider first, then descendant components
 * defineComponents(IgcThemeProviderComponent, IgcButtonComponent);
 * ```
 *
 * @example
 * ```html
 * <!-- Scope material theme to a section -->
 * <igc-theme-provider theme="material" variant="dark">
 *   <igc-button>Material Dark Button</igc-button>
 *   <igc-input label="Material Dark Input"></igc-input>
 * </igc-theme-provider>
 *
 * <!-- Use different theme in another section -->
 * <igc-theme-provider theme="fluent" variant="light">
 *   <igc-button>Fluent Light Button</igc-button>
 * </igc-theme-provider>
 * ```
 */
export default class IgcThemeProviderComponent extends LitElement {
    static readonly tagName = "igc-theme-provider";
    static styles: import("lit").CSSResult;
    static register(): void;
    private readonly _provider;
    /**
     * The theme to provide to descendant components.
     *
     * @attr
     * @default 'bootstrap'
     */
    theme: Theme;
    /**
     * The theme variant to provide to descendant components.
     *
     * @attr
     * @default 'light'
     */
    variant: ThemeVariant;
    constructor();
    protected update(changedProperties: PropertyValues<this>): void;
    protected firstUpdated(): void;
    private _getContextValue;
    protected render(): TemplateResult;
}
