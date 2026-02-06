
import { IgcGridBaseDirective } from './igc-grid-base-directive';
import { IgcColumnComponent } from './igc-column-component';
import { IgcColumnGroupComponent } from './igc-column-group-component';
import { IgcColumnLayoutComponent } from './igc-column-layout-component';
import { IgcGridToolbarComponent } from './igc-grid-toolbar-component';
import { IgcGridToolbarActionsComponent } from './igc-grid-toolbar-actions-component';
import { IgcGridToolbarTitleComponent } from './igc-grid-toolbar-title-component';
import { IgcGridToolbarAdvancedFilteringComponent } from './igc-grid-toolbar-advanced-filtering-component';
import { IgcGridToolbarExporterComponent } from './igc-grid-toolbar-exporter-component';
import { IgcGridToolbarHidingComponent } from './igc-grid-toolbar-hiding-component';
import { IgcGridToolbarPinningComponent } from './igc-grid-toolbar-pinning-component';
import { IgcActionStripComponent } from './igc-action-strip-component';
import { IgcGridEditingActionsComponent } from './igc-grid-editing-actions-component';
import { IgcGridPinningActionsComponent } from './igc-grid-pinning-actions-component';
import { IgcDimensionsChange } from './igc-dimensions-change';
import { IgcPivotConfigurationChangedEventArgs } from './igc-pivot-configuration-changed-event-args';
import { IgcPivotDimension } from './igc-pivot-dimension';
import { IgcPivotValue } from './igc-pivot-value';
import { IgcSortingExpression } from './igc-sorting-expression';
import { IgcValuesChange } from './igc-values-change';
import { IgcPivotGridValueTemplateContext } from './igc-pivot-grid-value-template-context';
import { IgcRenderFunction } from './common';
import { IgcColumnTemplateContext } from './igc-column-template-context';
import { IgcPivotConfiguration } from './igc-pivot-configuration';
import { IgcPivotUISettings } from './igc-pivot-ui-settings';
import { PivotDimensionType } from './pivot-dimension-type';
import { SortingDirection } from './sorting-direction';
import { IgcFilteringExpressionsTree } from './igc-filtering-expressions-tree';
                import { IgcFilteringOperation } from './igc-filtering-operation';
                import { EventEmitterMixin, LitElement, Constructor, AbstractConstructor } from './common';
import { IgcGridBaseDirectiveEventMap } from './igc-grid-base-directive';




/* blazorAdditionalDependency: Column */
/* blazorAdditionalDependency: ColumnGroup */
/* blazorAdditionalDependency: ColumnLayout */
/* blazorAdditionalDependency: GridToolbar */
/* blazorAdditionalDependency: GridToolbarActions */
/* blazorAdditionalDependency: GridToolbarTitle */
/* blazorAdditionalDependency: GridToolbarAdvancedFiltering */
/* blazorAdditionalDependency: GridToolbarExporter */
/* blazorAdditionalDependency: GridToolbarHiding */
/* blazorAdditionalDependency: GridToolbarPinning */
/* blazorAdditionalDependency: ActionStrip */
/* blazorAdditionalDependency: GridActionsBaseDirective */
/* blazorAdditionalDependency: GridEditingActions */
/* blazorAdditionalDependency: GridPinningActions */
/* blazorAdditionalDependency: PivotDateDimension */
/* blazorIndirectRender */
/**
 * Pivot Grid provides a way to present and manipulate data in a pivot table view.
 *
 * @igxModule IgxPivotGridModule
 * @igxGroup Grids & Lists
 * @igxKeywords pivot, grid, table
 * @igxTheme igx-grid-theme
 * @remarks
 * The Ignite UI Pivot Grid is used for grouping and aggregating simple flat data into a pivot table.  Once data
 * has been bound and the dimensions and values configured it can be manipulated via sorting and filtering.
 * @example
 * ```html
 * <igx-pivot-grid [data]="data" [pivotConfiguration]="configuration">
 * </igx-pivot-grid>
 * ```
 */

    export declare class IgcPivotGridComponent extends EventEmitterMixin<IgcPivotGridComponentEventMap, AbstractConstructor<IgcGridBaseDirective>>(IgcGridBaseDirective)

    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

                


    /**
     * Gets the sorting expressions generated for the dimensions.
     *
     * @example
     * ```typescript
     * const expressions = this.grid.dimensionsSortingExpressions;
     * ```
     */
    public get dimensionsSortingExpressions(): IgcSortingExpression[];
        
          

    /**
     * Gets/Sets a custom template for the value chips.
     *
     * @example
     * ```html
     * <igx-pivot-grid [valueChipTemplate]="myTemplate"><igx-pivot-grid>
     * ```
     */
    public set valueChipTemplate(value: IgcRenderFunction<IgcPivotGridValueTemplateContext>);
          public get valueChipTemplate(): IgcRenderFunction<IgcPivotGridValueTemplateContext>;
  
          

    public set rowDimensionHeaderTemplate(value: IgcRenderFunction<IgcColumnTemplateContext>);
          public get rowDimensionHeaderTemplate(): IgcRenderFunction<IgcColumnTemplateContext>;
  
          

    /* mustSetInCodePlatforms: WebComponents;Blazor;React */
    /* @tsTwoWayProperty (true, "PivotConfigurationChange", "Detail.PivotConfiguration", false) */
    /**
     * Gets/Sets the pivot configuration with all related dimensions and values.
     *
     * @example
     * ```html
     * <igx-pivot-grid [pivotConfiguration]="config"></igx-pivot-grid>
     * ```
     */
    /* @tsTwoWayProperty (true, "PivotConfigurationChange", "Detail.PivotConfiguration", false) */
        /* @blazorSynthesizeTwoWayBind */
public set pivotConfiguration(value: IgcPivotConfiguration);
          public get pivotConfiguration(): IgcPivotConfiguration;
  
          

    /**
     * Gets/Sets whether to auto-generate the pivot configuration based on the provided data.
     *
     * @remarks
     * The default value is false. When set to true, it will override all dimensions and values in the pivotConfiguration.
     * @example
     * ```html
     * <igx-pivot-grid [data]="Data" [autoGenerateConfig]="true"></igx-pivot-grid>
     * ```
     */
    public set autoGenerateConfig(value: boolean);
          public get autoGenerateConfig(): boolean;
  
          

    public set pivotUI(value: IgcPivotUISettings);
          public get pivotUI(): IgcPivotUISettings;
  
          

    /**
     * Enables a super compact theme for the component.
     * @remarks
     * Overrides the grid size option if one is set.
     * @example
     * ```html
     * <igx-pivot-grid [superCompactMode]="true"></igx-pivot-grid>
     * ```
     */
    public set superCompactMode(value: boolean);
          public get superCompactMode(): boolean;
  
          

    /**
    * Gets/Sets the default expand state for all rows.
    */
    public set defaultExpandState(value: boolean);
          public get defaultExpandState(): boolean;
  
                

    /* csSuppress */
    public get selectedRows(): any[];
        
                

    /**
     * Gets the full list of dimensions.
     *
     * @example
     * ```typescript
     * const dimensions = this.grid.allDimensions;
     * ```
     */
    public get allDimensions(): IgcPivotDimension[];
        
          

    /* treatAsRef */
    /* blazorAlternateType: object */
    /**
     * Gets/Sets the array of data that populates the component.
     * ```html
     * <igx-pivot-grid [data]="Data"></igx-pivot-grid>
     * ```
     */
    public set data(value: any[]);
          public get data(): any[];
  
          

    /**
     * Gets/Sets a custom template when pivot grid is empty.
     *
     * @example
     * ```html
     * <igx-pivot-grid [emptyPivotGridTemplate]="myTemplate"><igx-pivot-grid>
     * ```
     */
    public set emptyPivotGridTemplate(value: IgcRenderFunction<void>);
          public get emptyPivotGridTemplate(): IgcRenderFunction<void>;
  
            

    /**
     * Notifies for dimension change.
     */
    public notifyDimensionChange(regenerateColumns?: boolean): void;

            

    public toggleColumn(col: IgcColumnComponent): void;

            

    public getColumnGroupExpandState(col: IgcColumnComponent): void;

            

    public toggleRowGroup(col: IgcColumnComponent, newState: boolean): void;

            

    /**
     * Auto-sizes row dimension cells.
     *
     * @remarks
     * Only sizes based on the dimension cells in view.
     * @example
     * ```typescript
     * this.grid.autoSizeRowDimension(dimension);
     * ```
     * @param dimension The row dimension to size.
     */
    public autoSizeRowDimension(dimension: IgcPivotDimension): void;

            

    /**
     * Inserts dimension in target collection by type at specified index or at the collection's end.
     *
     * @example
     * ```typescript
     * this.grid.insertDimensionAt(dimension, PivotDimensionType.Row, 1);
     * ```
     * @param dimension The dimension that will be added.
     * @param targetCollectionType The target collection type to add to. Can be Row, Column or Filter.
     * @param index The index in the collection at which to add.
     * This parameter is optional. If not set it will add it to the end of the collection.
     */
    public insertDimensionAt(dimension: IgcPivotDimension, targetCollectionType: PivotDimensionType, index?: number): void;

            

    /**
     * Move dimension from its currently collection to the specified target collection by type at specified index or at the collection's end.
     *
     * @example
     * ```typescript
     * this.grid.moveDimension(dimension, PivotDimensionType.Row, 1);
     * ```
     * @param dimension The dimension that will be moved.
     * @param targetCollectionType The target collection type to move it to. Can be Row, Column or Filter.
     * @param index The index in the collection at which to add.
     * This parameter is optional. If not set it will add it to the end of the collection.
     */
    public moveDimension(dimension: IgcPivotDimension, targetCollectionType: PivotDimensionType, index?: number): void;

            

    /**
     * Removes dimension from its currently collection.
     * @remarks
     * This is different than toggleDimension that enabled/disables the dimension.
     * This completely removes the specified dimension from the collection.
     * @example
     * ```typescript
     * this.grid.removeDimension(dimension);
     * ```
     * @param dimension The dimension to be removed.
     */
    public removeDimension(dimension: IgcPivotDimension): void;

            

    /**
     * Toggles the dimension's enabled state on or off.
     * @remarks
     * The dimension remains in its current collection. This just changes its enabled state.
     * @example
     * ```typescript
     * this.grid.toggleDimension(dimension);
     * ```
     * @param dimension The dimension to be toggled.
     */
    public toggleDimension(dimension: IgcPivotDimension): void;

            

    /**
     * Inserts value at specified index or at the end.
     *
     * @example
     * ```typescript
     * this.grid.insertValueAt(value, 1);
     * ```
     * @param value The value definition that will be added.
     * @param index The index in the collection at which to add.
     * This parameter is optional. If not set it will add it to the end of the collection.
     */
    public insertValueAt(value: IgcPivotValue, index?: number): void;

            

    /**
     * Move value from its currently at specified index or at the end.
     *
     * @example
     * ```typescript
     * this.grid.moveValue(value, 1);
     * ```
     * @param value The value that will be moved.
     * @param index The index in the collection at which to add.
     * This parameter is optional. If not set it will add it to the end of the collection.
     */
    public moveValue(value: IgcPivotValue, index?: number): void;

            

    /**
     * Removes value from collection.
     * @remarks
     * This is different than toggleValue that enabled/disables the value.
     * This completely removes the specified value from the collection.
     * @example
     * ```typescript
     * this.grid.removeValue(dimension);
     * ```
     * @param value The value to be removed.
     */
    public removeValue(value: IgcPivotValue): void;

            

    /**
     * Toggles the value's enabled state on or off.
     * @remarks
     * The value remains in its current collection. This just changes its enabled state.
     * @example
     * ```typescript
     * this.grid.toggleValue(value);
     * ```
     * @param value The value to be toggled.
     */
    public toggleValue(value: IgcPivotValue): void;

            

    /**
     * Sort the dimension and its children in the provided direction.
     * @example
     * ```typescript
     * this.grid.sortDimension(dimension, SortingDirection.Asc);
     * ```
     * @param value The value to be toggled.
     */
    public sortDimension(dimension: IgcPivotDimension, sortDirection: SortingDirection): void;

            

    /**
     * Filters a single `IPivotDimension`.
     *
     * @example
     * ```typescript
     * public filter() {
     *      const set = new Set();
     *      set.add('Value 1');
     *      set.add('Value 2');
     *      this.grid1.filterDimension(this.pivotConfigHierarchy.rows[0], set, IgxStringFilteringOperand.instance().condition('in'));
     * }
     * ```
     */
    public filterDimension(dimension: IgcPivotDimension, value: any, conditionOrExpressionTree?: IgcFilteringExpressionsTree | IgcFilteringOperation): void;

    }

export declare interface IgcPivotGridComponentEventMap extends IgcGridBaseDirectiveEventMap {
            
        		    /**
		     * Emitted when the dimension collection is changed via the grid chip area.
		     *
		     * @remarks
		     * Returns the new dimension collection and its type:
		     * @example
		     * ```html
		     * <igx-pivot-grid #grid [data]="localData" [height]="'305px'"
		     *              (dimensionsChange)="dimensionsChange($event)"></igx-grid>
		     * ```
		     */
dimensionsChange: CustomEvent<IgcDimensionsChange>;

        		    /**
		     * Emitted when any of the pivotConfiguration properties is changed via the grid chip area.
		     *
		     * @example
		     * ```html
		     * <igx-pivot-grid #grid [data]="localData" [height]="'305px'"
		     *              (pivotConfigurationChanged)="configurationChanged($event)"></igx-grid>
		     * ```
		     */
pivotConfigurationChange: CustomEvent<IgcPivotConfigurationChangedEventArgs>;

        		    /**
		     * Emitted when the dimension is initialized.
		     * @remarks
		     * Emits the dimension that is about to be initialized.
		     * @example
		     * ```html
		     * <igx-pivot-grid #grid [data]="localData" [height]="'305px'"
		     *              (dimensionInit)="dimensionInit($event)"></igx-pivot-grid>
		     * ```
		     */
dimensionInit: CustomEvent<IgcPivotDimension>;

        		    /**
		     * Emitted when the value is initialized.
		     * @remarks
		     * Emits the value that is about to be initialized.
		     * @example
		     * ```html
		     * <igx-pivot-grid #grid [data]="localData" [height]="'305px'"
		     *              (valueInit)="valueInit($event)"></igx-pivot-grid>
		     * ```
		     */
valueInit: CustomEvent<IgcPivotValue>;

        		    /**
		     * Emitted when a dimension is sorted.
		     *
		     * @example
		     * ```html
		     * <igx-pivot-grid #grid [data]="localData" [height]="'305px'"
		     *              (dimensionsSortingExpressionsChange)="dimensionsSortingExpressionsChange($event)"></igx-pivot-grid>
		     * ```
		     */
dimensionsSortingExpressionsChange: CustomEvent<IgcSortingExpression[]>;

        		    /**
		     * Emitted when the values collection is changed via the grid chip area.
		     *
		     * @remarks
		     * Returns the new dimension
		     * @example
		     * ```html
		     * <igx-pivot-grid #grid [data]="localData" [height]="'305px'"
		     *              (valuesChange)="valuesChange($event)"></igx-grid>
		     * ```
		    */
valuesChange: CustomEvent<IgcValuesChange>;

}
        