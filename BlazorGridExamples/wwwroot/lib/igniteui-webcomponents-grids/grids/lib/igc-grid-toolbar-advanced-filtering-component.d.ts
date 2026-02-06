
import { IgcOverlaySettings } from './igc-overlay-settings';




/* blazorElement */
/* wcElementTag: igc-grid-toolbar-advanced-filtering */
/* blazorIndirectRender */
/* blazorAlternateBaseType: GridToolbarBaseAction */
/* jsonAPIManageItemInMarkup */
/* singleInstanceIdentifier */
/**
 * Provides a pre-configured button to open the advanced filtering dialog of the grid.
 *
 *
 * @igxModule IgxGridToolbarModule
 * @igxParent IgxGridToolbarComponent, IgxGridToolbarActionsComponent
 *
 * @example
 * ```html
 * <igx-grid-toolbar-advanced-filtering></igx-grid-toolbar-advanced-filtering>
 * <igx-grid-toolbar-advanced-filtering>Custom text</igx-grid-toolbar-advanced-filtering>
 * ```
 */

    export declare class IgcGridToolbarAdvancedFilteringComponent extends HTMLElement
    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          

    public set overlaySettings(value: IgcOverlaySettings);
          public get overlaySettings(): IgcOverlaySettings;
  
    }


        