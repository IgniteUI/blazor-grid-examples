
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
import { IgcForOfState } from './igc-for-of-state';
import { IgcGroupingExpression } from './igc-grouping-expression';
import { IgcGroupByExpandState } from './igc-group-by-expand-state';
import { IgcGroupingDoneEventArgs } from './igc-grouping-done-event-args';
import { IgcRenderFunction } from './common';
import { IgcGridMasterDetailContext } from './igc-grid-master-detail-context';
import { IgcGroupByRecord } from './igc-group-by-record';
import { IgcGridGroupingStrategy } from './igc-grid-grouping-strategy';
import { IgcGroupByRowSelectorTemplateContext } from './igc-group-by-row-selector-template-context';
import { IgcGroupByRowTemplateContext } from './igc-group-by-row-template-context';
import { IgcCellType } from './igc-cell-type';
import { IgcRowType } from './igc-row-type';
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
/* blazorIndirectRender */
/**
 * Grid provides a way to present and manipulate tabular data.
 *
 * @igxModule IgxGridModule
 * @igxGroup Grids & Lists
 * @igxKeywords grid, table
 * @igxTheme igx-grid-theme
 * @remarks
 * The Ignite UI Grid is used for presenting and manipulating tabular data in the simplest way possible.  Once data
 * has been bound, it can be manipulated through filtering, sorting & editing operations.
 * @example
 * ```html
 * <igx-grid [data]="employeeData" [autoGenerate]="false">
 *   <igx-column field="first" header="First Name"></igx-column>
 *   <igx-column field="last" header="Last Name"></igx-column>
 *   <igx-column field="role" header="Role"></igx-column>
 * </igx-grid>
 * ```
 */

    export declare class IgcGridComponent extends EventEmitterMixin<IgcGridComponentEventMap, AbstractConstructor<IgcGridBaseDirective>>(IgcGridBaseDirective)

    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          

    /**
     * Gets/Sets whether created groups are rendered expanded or collapsed.
     *
     * @remarks
     * The default rendered state is expanded.
     * @example
     * ```html
     * <igx-grid #grid [data]="Data" [groupsExpanded]="false" [autoGenerate]="true"></igx-grid>
     * ```
     */
    public set groupsExpanded(value: boolean);
          public get groupsExpanded(): boolean;
  
          

    /**
     * Gets/Sets the template that will be rendered as a GroupBy drop area.
     *
     * @remarks
     * The grid needs to have at least one groupable column in order the GroupBy area to be displayed.
     * @example
     * ```html
     * <igx-grid [dropAreaTemplate]="dropAreaRef">
     * </igx-grid>
     * <ng-template #myDropArea>
     *      <span> Custom drop area! </span>
     * </ng-template>
     * ```
     */
    public set dropAreaTemplate(value: IgcRenderFunction<void>);
          public get dropAreaTemplate(): IgcRenderFunction<void>;
  
          


    /**
     * Returns a reference to the master-detail template.
     * ```typescript
     * let detailTemplate = this.grid.detailTemplate;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set detailTemplate(value: IgcRenderFunction<IgcGridMasterDetailContext>);
          public get detailTemplate(): IgcRenderFunction<IgcGridMasterDetailContext>;
  
          

    /**
     * Gets/Sets the value of the `id` attribute.
     *
     * @remarks
     * If not provided it will be automatically generated.
     * @example
     * ```html
     * <igx-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true"></igx-grid>
     * ```
     */
    public set id(value: string);
          public get id(): string;
  
                
    /**
     * Gets the hierarchical representation of the group by records.
     *
     * @example
     * ```typescript
     * let groupRecords = this.grid.groupsRecords;
     * ```
     */
    public get groupsRecords(): IgcGroupByRecord[];
        
          

    /**
     * Gets/Sets the array of data that populates the component.
     *
     * @example
     * ```html
     * <igx-grid [data]="Data" [autoGenerate]="true"></igx-grid>
     * ```
     */
    /* treatAsRef */
    public set data(value: any[]);
          public get data(): any[];
  
          

    /**
     * Gets/Sets the total number of records in the data source.
     *
     * @remarks
     * This property is required for remote grid virtualization to function when it is bound to remote data.
     * @example
     * ```typescript
     * const itemCount = this.grid1.totalItemCount;
     * this.grid1.totalItemCount = 55;
     * ```
     */
    public set totalItemCount(value: number);
          public get totalItemCount(): number;
  
          

    /* mustSetInCodePlatforms: WebComponents;Blazor;React */
    /**
     * Gets/Sets the group by state.
     *
     * @example
     * ```typescript
     * let groupByState = this.grid.groupingExpressions;
     * this.grid.groupingExpressions = [...];
     * ```
     * @remarks
     * Supports two-way data binding.
     * @example
     * ```html
     * <igx-grid #grid [data]="Data" [autoGenerate]="true" [(groupingExpressions)]="model.groupingExpressions"></igx-grid>
     * ```
     */
    public set groupingExpressions(value: IgcGroupingExpression[]);
          public get groupingExpressions(): IgcGroupingExpression[];
  
          

    /**
     * Gets/Sets a list of expansion states for group rows.
     *
     * @remarks
     * Includes only states that differ from the default one (controlled through groupsExpanded and states that the user has changed.
     * Contains the expansion state (expanded: boolean) and the unique identifier for the group row (Array).
     * Supports two-way data binding.
     * @example
     * ```html
     * <igx-grid #grid [data]="Data" [autoGenerate]="true" [(groupingExpansionState)]="model.groupingExpansionState"></igx-grid>
     * ```
     */
    public set groupingExpansionState(value: IgcGroupByExpandState[]);
          public get groupingExpansionState(): IgcGroupByExpandState[];
  
          

    /**
     * Gets/Sets whether the grouped columns should be hidden.
     *
     * @remarks
     * The default value is "false"
     * @example
     * ```html
     * <igx-grid #grid [data]="localData" [hideGroupedColumns]="true" [autoGenerate]="true"></igx-grid>
     * ```
     */
    public set hideGroupedColumns(value: boolean);
          public get hideGroupedColumns(): boolean;
  
          

    /**
     * Gets/Sets the grouping strategy of the grid.
     *
     * @remarks The default IgxGrouping extends from IgxSorting and a custom one can be used as a `sortStrategy` as well.
     *
     * @example
     * ```html
     *  <igx-grid #grid [data]="localData" [groupStrategy]="groupStrategy"></igx-grid>
     * ```
     */
    public set groupStrategy(value: IgcGridGroupingStrategy);
          public get groupStrategy(): IgcGridGroupingStrategy;
  
          

    /**
     * Gets/Sets the message displayed inside the GroupBy drop area where columns can be dragged on.
     *
     * @remarks
     * The grid needs to have at least one groupable column in order the GroupBy area to be displayed.
     * @example
     * ```html
     * <igx-grid dropAreaMessage="Drop here to group!">
     *      <igx-column [groupable]="true" field="ID"></igx-column>
     * </igx-grid>
     * ```
     */
    public set dropAreaMessage(value: string);
          public get dropAreaMessage(): string;
  
          

    /**
     * Gets the group by row selector template.
     */
    public set groupByRowSelectorTemplate(value: IgcRenderFunction<IgcGroupByRowSelectorTemplateContext>);
          public get groupByRowSelectorTemplate(): IgcRenderFunction<IgcGroupByRowSelectorTemplateContext>;
  
          

    /**
     * Gets/Sets the template reference for the group row.
     *
     * @example
     * ```
     * const groupRowTemplate = this.grid.groupRowTemplate;
     * this.grid.groupRowTemplate = myRowTemplate;
     * ```
     */
    public set groupRowTemplate(value: IgcRenderFunction<IgcGroupByRowTemplateContext>);
          public get groupRowTemplate(): IgcRenderFunction<IgcGroupByRowTemplateContext>;
  
          

    /**
     * Returns whether the `IgxGridComponent` has group area.
     *
     * @example
     * ```typescript
     * let isGroupAreaVisible = this.grid.showGroupArea;
     * ```
     *
     * @example
     * ```html
     * <igx-grid #grid [data]="Data" [showGroupArea]="false"></igx-grid>
     * ```
     */
    public set showGroupArea(value: boolean);
          public get showGroupArea(): boolean;
  
                

    /**
     * Returns an array of the selected `IgxGridCell`s.
     *
     * @example
     * ```typescript
     * const selectedCells = this.grid.selectedCells;
     * ```
     */
    public get selectedCells(): IgcCellType[];
        
            

    /**
     * Groups by a new `IgxColumnComponent` based on the provided expression, or modifies an existing one.
     *
     * @remarks
     * Also allows for multiple columns to be grouped at once if an array of `ISortingExpression` is passed.
     * The `groupingDone` event would get raised only **once** if this method gets called multiple times with the same arguments.
     * @example
     * ```typescript
     * this.grid.groupBy({ fieldName: name, dir: SortingDirection.Asc, ignoreCase: false });
     * this.grid.groupBy([
     *     { fieldName: name1, dir: SortingDirection.Asc, ignoreCase: false },
     *     { fieldName: name2, dir: SortingDirection.Desc, ignoreCase: true },
     *     { fieldName: name3, dir: SortingDirection.Desc, ignoreCase: false }
     * ]);
     * ```
     */
    public groupBy(expression: IgcGroupingExpression[]): void;

            

    /**
     * Clears grouping for particular column, array of columns or all columns.
     *
     * @remarks
     * Clears all grouping in the grid, if no parameter is passed.
     * If a parameter is provided, clears grouping for a particular column or an array of columns.
     * @example
     * ```typescript
     * this.grid.clearGrouping(); //clears all grouping
     * this.grid.clearGrouping("ID"); //ungroups a single column
     * this.grid.clearGrouping(["ID", "Column1", "Column2"]); //ungroups multiple columns
     * ```
     * @param name Name of column or array of column names to be ungrouped.
     */
    public clearGrouping(name?: string): void;

            

    /**
     * Returns if a group is expanded or not.
     *
     * @param group The group record.
     * @example
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const expandedGroup = this.grid.isExpandedGroup(this.groupRow);
     * ```
     */
    public isExpandedGroup(group: IgcGroupByRecord): boolean;

            

    /**
     * Toggles the expansion state of a group.
     *
     * @param groupRow The group record to toggle.
     * @example
     * ```typescript
     * public groupRow: IGroupByRecord;
     * const toggleExpGroup = this.grid.toggleGroup(this.groupRow);
     * ```
     */
    public toggleGroup(groupRow: IgcGroupByRecord): void;

            

    /**
     * Select all rows within a group.
     *
     * @param groupRow: The group record which rows would be selected.
     * @param clearCurrentSelection if true clears the current selection
     * @example
     * ```typescript
     * this.grid.selectRowsInGroup(this.groupRow, true);
     * ```
     */
    public selectRowsInGroup(groupRow: IgcGroupByRecord, clearPrevSelection?: boolean): void;

            

    /**
     * Deselect all rows within a group.
     *
     * @param groupRow The group record which rows would be deselected.
     * @example
     * ```typescript
     * public groupRow: IGroupByRecord;
     * this.grid.deselectRowsInGroup(this.groupRow);
     * ```
     */
    public deselectRowsInGroup(groupRow: IgcGroupByRecord): void;

            

    /**
     * Expands the specified group and all of its parent groups.
     *
     * @param groupRow The group record to fully expand.
     * @example
     * ```typescript
     * public groupRow: IGroupByRecord;
     * this.grid.fullyExpandGroup(this.groupRow);
     * ```
     */
    public fullyExpandGroup(groupRow: IgcGroupByRecord): void;

            

    /**
     * Toggles the expansion state of all group rows recursively.
     *
     * @example
     * ```typescript
     * this.grid.toggleAllGroupRows;
     * ```
     */
    public toggleAllGroupRows(): void;

            

    /**
     *
     * Returns an array of the current cell selection in the form of `[{ column.field: cell.value }, ...]`.
     *
     * @remarks
     * If `formatters` is enabled, the cell value will be formatted by its respective column formatter (if any).
     * If `headers` is enabled, it will use the column header (if any) instead of the column field.
     */
    public getSelectedData(formatters?: boolean, headers?: boolean): any[];

            

    /**
     * Returns the `IgxGridRow` by index.
     *
     * @example
     * ```typescript
     * const myRow = grid.getRowByIndex(1);
     * ```
     * @param index
     */
    public getRowByIndex(index: number): IgcRowType;

            

    /**
     * Returns `IgxGridRow` object by the specified primary key.
     *
     * @remarks
     * Requires that the `primaryKey` property is set.
     * @example
     * ```typescript
     * const myRow = this.grid1.getRowByKey("cell5");
     * ```
     * @param keyValue
     */
    public getRowByKey(key: any): IgcRowType;

            

    /**
     * Returns a `CellType` object that matches the conditions.
     *
     * @example
     * ```typescript
     * const myCell = this.grid1.getCellByColumn(2, "UnitPrice");
     * ```
     * @param rowIndex
     * @param columnField
     */
    public getCellByColumn(rowIndex: number, columnField: string): IgcCellType;

            

    /**
     * Returns a `CellType` object that matches the conditions.
     *
     * @remarks
     * Requires that the primaryKey property is set.
     * @example
     * ```typescript
     * grid.getCellByKey(1, 'index');
     * ```
     * @param rowSelector match any rowID
     * @param columnField
     */
    public getCellByKey(rowSelector: any, columnField: string): IgcCellType;

            

    public pinRow(rowID: any, index?: number): boolean;

            

    public unpinRow(rowID: any): boolean;

    }

export declare interface IgcGridComponentEventMap extends IgcGridBaseDirectiveEventMap {
            
        		    /**
		     * Emitted when a new chunk of data is loaded from virtualization.
		     *
		     * @example
		     * ```typescript
		     *  <igx-grid #grid [data]="localData" [autoGenerate]="true" (dataPreLoad)='handleDataPreloadEvent()'></igx-grid>
		     * ```
		     */
dataPreLoad: CustomEvent<IgcForOfState>;

        		    /**
		     * Emitted when grouping is performed.
		     *
		     * @example
		     * ```html
		     * <igx-grid #grid [data]="localData" [autoGenerate]="true" (groupingExpressionsChange)="groupingExpressionsChange($event)"></igx-grid>
		     * ```
		     */
groupingExpressionsChange: CustomEvent<IgcGroupingExpression[]>;

        		    /**
		     * Emitted when groups are expanded/collapsed.
		     *
		     * @example
		     * ```html
		     * <igx-grid #grid [data]="localData" [autoGenerate]="true" (groupingExpansionStateChange)="groupingExpansionStateChange($event)"></igx-grid>
		     * ```
		     */
groupingExpansionStateChange: CustomEvent<IgcGroupByExpandState[]>;

        		    /**
		     * Emitted when columns are grouped/ungrouped.
		     *
		     * @remarks
		     * The `groupingDone` event would be raised only once if several columns get grouped at once by calling
		     * the `groupBy()` or `clearGrouping()` API methods and passing an array as an argument.
		     * The event arguments provide the `expressions`, `groupedColumns` and `ungroupedColumns` properties, which contain
		     * the `ISortingExpression` and the `IgxColumnComponent` related to the grouping/ungrouping operation.
		     * Please note that `groupedColumns` and `ungroupedColumns` show only the **newly** changed columns (affected by the **last**
		     * grouping/ungrouping operation), not all columns which are currently grouped/ungrouped.
		     * columns.
		     * @example
		     * ```html
		     * <igx-grid #grid [data]="localData" (groupingDone)="groupingDone($event)" [autoGenerate]="true"></igx-grid>
		     * ```
		     */
groupingDone: CustomEvent<IgcGroupingDoneEventArgs>;

}
        