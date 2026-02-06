
import { IgcPivotGridComponent } from './igc-pivot-grid-component';
                import { EventEmitterMixin, LitElement, Constructor, AbstractConstructor } from './common';




/* blazorIndirectRender
   blazorComponent */
/* wcElementTag: igc-pivot-data-selector */
/**
 * Pivot Data Selector provides means to configure the pivot state of the Pivot Grid via a vertical panel UI
 *
 * @igxModule IgxPivotGridModule
 * @igxGroup Grids & Lists
 * @igxKeywords data selector, pivot, grid
 * @igxTheme pivot-data-selector-theme
 * @remarks
 * The Ignite UI Data Selector has a searchable list with the grid data columns,
 * there are also four expandable areas underneath for filters, rows, columns, and values
 * is used for grouping and aggregating simple flat data into a pivot table.
 * @example
 * ```html
 * <igx-pivot-grid #grid1 [data]="data" [pivotConfiguration]="configuration">
 * </igx-pivot-grid>
 * <igx-pivot-data-selector [grid]="grid1"></igx-pivot-data-selector>
 * ```
 */

    export declare class IgcPivotDataSelectorComponent extends EventEmitterMixin<IgcPivotDataSelectorComponentEventMap, Constructor<LitElement>>(LitElement)

    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          

    /**
     * Gets/sets whether the columns panel is expanded
     * Get
     * ```typescript
     *  const columnsPanelState: boolean = this.dataSelector.columnsExpanded;
     * ```
     * Set
     * ```html
     * <igx-pivot-data-selector [grid]="grid1" [columnsExpanded]="columnsPanelState"></igx-pivot-data-selector>
     * ```
     *
     * Two-way data binding:
     * ```html
     * <igx-pivot-data-selector [grid]="grid1" [(columnsExpanded)]="columnsPanelState"></igx-pivot-data-selector>
     * ```
     */
    public set columnsExpanded(value: boolean);
          public get columnsExpanded(): boolean;
  
          

    /**
     * Gets/sets whether the rows panel is expanded
     * Get
     * ```typescript
     *  const rowsPanelState: boolean = this.dataSelector.rowsExpanded;
     * ```
     * Set
     * ```html
     * <igx-pivot-data-selector [grid]="grid1" [rowsExpanded]="rowsPanelState"></igx-pivot-data-selector>
     * ```
     *
     * Two-way data binding:
     * ```html
     * <igx-pivot-data-selector [grid]="grid1" [(rowsExpanded)]="rowsPanelState"></igx-pivot-data-selector>
     * ```
     */
    public set rowsExpanded(value: boolean);
          public get rowsExpanded(): boolean;
  
          

    /**
     * Gets/sets whether the filters panel is expanded
     * Get
     * ```typescript
     *  const filtersPanelState: boolean = this.dataSelector.filtersExpanded;
     * ```
     * Set
     * ```html
     * <igx-pivot-data-selector [grid]="grid1" [filtersExpanded]="filtersPanelState"></igx-pivot-data-selector>
     * ```
     *
     * Two-way data binding:
     * ```html
     * <igx-pivot-data-selector [grid]="grid1" [(filtersExpanded)]="filtersPanelState"></igx-pivot-data-selector>
     * ```
     */
    public set filtersExpanded(value: boolean);
          public get filtersExpanded(): boolean;
  
          

    /**
     * Gets/sets whether the values panel is expanded
     * Get
     * ```typescript
     *  const valuesPanelState: boolean = this.dataSelector.valuesExpanded;
     * ```
     * Set
     * ```html
     * <igx-pivot-data-selector [grid]="grid1" [valuesExpanded]="valuesPanelState"></igx-pivot-data-selector>
     * ```
     *
     * Two-way data binding:
     * ```html
     * <igx-pivot-data-selector [grid]="grid1" [(valuesExpanded)]="valuesPanelState"></igx-pivot-data-selector>
     * ```
     */
    public set valuesExpanded(value: boolean);
          public get valuesExpanded(): boolean;
  
          


    /* treatAsRef */
    /**
     * Sets the grid.
     */
    public set grid(value: IgcPivotGridComponent);
          public get grid(): IgcPivotGridComponent;
  
    }

export declare interface IgcPivotDataSelectorComponentEventMap {
            
        		    /**
		     * Emitted when the columns panel is expanded or collapsed.
		     *
		     * @example
		     * ```html
		     * <igx-pivot-data-selector #grid [data]="localData" [height]="'305px'"
		     *              (columnsExpandedChange)="columnsExpandedChange($event)"></igx-pivot-data-selector>
		     * ```
		    */
columnsExpandedChange: CustomEvent<boolean>;

        		    /**
		     * Emitted when the rows panel is expanded or collapsed.
		     *
		     * @example
		     * ```html
		     * <igx-pivot-data-selector #grid [data]="localData" [height]="'305px'"
		     *              (rowsExpandedChange)="rowsExpandedChange($event)"></igx-pivot-data-selector>
		     * ```
		    */
rowsExpandedChange: CustomEvent<boolean>;

        		    /**
		     * Emitted when the filters panel is expanded or collapsed.
		     *
		     * @example
		     * ```html
		     * <igx-pivot-data-selector #grid [data]="localData" [height]="'305px'"
		     *              (filtersExpandedChange)="filtersExpandedChange($event)"></igx-pivot-data-selector>
		     * ```
		    */
filtersExpandedChange: CustomEvent<boolean>;

        		    /**
		     * Emitted when the values panel is expanded or collapsed.
		     *
		     * @example
		     * ```html
		     * <igx-pivot-data-selector #grid [data]="localData" [height]="'305px'"
		     *              (valuesExpandedChange)="valuesExpandedChange($event)"></igx-pivot-data-selector>
		     * ```
		    */
valuesExpandedChange: CustomEvent<boolean>;

}
        