
import { IgcGridBaseDirective } from './igc-grid-base-directive';


/* jsonAPIManageCollectionInMarkup */


/* blazorElement */
/* mustUseNGParentAnchor */
/* wcElementTag: igc-grid-toolbar */
/* blazorIndirectRender */
/* singleInstanceIdentifier */
/* contentParent: GridBaseDirective */
/* contentParent: RowIsland */
/* contentParent: HierarchicalGrid */
/* jsonAPIManageItemInMarkup */
/**
 * Provides a context-aware container component for UI operations for the grid components.
 *
 * @igxModule IgxGridToolbarModule
 * @igxParent IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent, IgxPivotGridComponent
 *
 */

    export declare class IgcGridToolbarComponent extends HTMLElement
    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          

    /**
     * When enabled, shows the indeterminate progress bar.
     *
     * @remarks
     * By default this will be toggled, when the default exporter component is present
     * and an exporting is in progress.
     */
    public set showProgress(value: boolean);
          public get showProgress(): boolean;
  
          

    /**
     * Gets/sets the grid component for the toolbar component.
     *
     * @deprecated No longer required to be set for the Hierarchical Grid child grid template
     *
     * @remarks
     * Usually you should not set this property in the context of the default grid/tree grid.
     * The only grids that demands this to be set are the hierarchical child grids. For additional
     * information check the toolbar topic.
     */
    public set grid(value: IgcGridBaseDirective);
          public get grid(): IgcGridBaseDirective;
  
    }


        