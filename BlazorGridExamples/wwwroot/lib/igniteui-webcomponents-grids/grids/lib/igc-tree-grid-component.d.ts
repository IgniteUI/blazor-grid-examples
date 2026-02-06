
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
import { IgcTreeGridRecord } from './igc-tree-grid-record';
import { IgcRenderFunction } from './common';
import { IgcCellType } from './igc-cell-type';
import { IgcRowType } from './igc-row-type';
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
 * **Ignite UI for Angular Tree Grid** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid)
 *
 * The Ignite UI Tree Grid displays and manipulates hierarchical data with consistent schema formatted as a table and
 * provides features such as sorting, filtering, editing, column pinning, paging, column moving and hiding.
 *
 * Example:
 * ```html
 * <igx-tree-grid [data]="employeeData" primaryKey="employeeID" foreignKey="PID" [autoGenerate]="false">
 *   <igx-column field="first" header="First Name"></igx-column>
 *   <igx-column field="last" header="Last Name"></igx-column>
 *   <igx-column field="role" header="Role"></igx-column>
 * </igx-tree-grid>
 * ```
 */

    export declare class IgcTreeGridComponent extends IgcGridBaseDirective
    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          
    /**
     * Sets the child data key of the `IgxTreeGridComponent`.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [childDataKey]="'employees'" [autoGenerate]="true"></igx-tree-grid>
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set childDataKey(value: string);
          public get childDataKey(): string;
  
          

    /**
     * Sets the foreign key of the `IgxTreeGridComponent`.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" [autoGenerate]="true">
     * </igx-tree-grid>
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set foreignKey(value: string);
          public get foreignKey(): string;
  
          

    /**
     * Sets the key indicating whether a row has children.
     * This property is only used for load on demand scenarios.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'"
     *                [loadChildrenOnDemand]="loadChildren"
     *                [hasChildrenKey]="'hasEmployees'">
     * </igx-tree-grid>
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set hasChildrenKey(value: string);
          public get hasChildrenKey(): string;
  
          

    /**
     * Sets whether child records should be deleted when their parent gets deleted.
     * By default it is set to true and deletes all children along with the parent.
     * ```html
     * <igx-tree-grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" cascadeOnDelete="false">
     * </igx-tree-grid>
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set cascadeOnDelete(value: boolean);
          public get cascadeOnDelete(): boolean;
  
          

    /* csSuppress */
    /**
     * Sets a callback for loading child rows on demand.
     * ```html
     * <igx-tree-grid [data]="employeeData" [primaryKey]="'employeeID'" [foreignKey]="'parentID'" [loadChildrenOnDemand]="loadChildren">
     * </igx-tree-grid>
     * ```
     * ```typescript
     * public loadChildren = (parentID: any, done: (children: any[]) => void) => {
     *     this.dataService.getData(parentID, children => done(children));
     * }
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set loadChildrenOnDemand(value: any);
          public get loadChildrenOnDemand(): any;
  
          

    /**
     * Sets the value of the `id` attribute. If not provided it will be automatically generated.
     * ```html
     * <igx-tree-grid [id]="'igx-tree-grid-1'"></igx-tree-grid>
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set id(value: string);
          public get id(): string;
  
          

    /**
     * Returns an array of the root level `ITreeGridRecord`s.
     * ```typescript
     * // gets the root record with index=2
     * const states = this.grid.rootRecords[2];
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set rootRecords(value: IgcTreeGridRecord[]);
          public get rootRecords(): IgcTreeGridRecord[];
  
          

    /**
     * Returns an array of processed (filtered and sorted) root `ITreeGridRecord`s.
     * ```typescript
     * // gets the processed root record with index=2
     * const states = this.grid.processedRootRecords[2];
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set processedRootRecords(value: IgcTreeGridRecord[]);
          public get processedRootRecords(): IgcTreeGridRecord[];
  
          

     /* treatAsRef */
    /**
     * Gets/Sets the array of data that populates the component.
     * ```html
     * <igx-tree-grid [data]="Data" [autoGenerate]="true"></igx-tree-grid>
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set data(value: any[]);
          public get data(): any[];
  
          

    /**
     * Sets the count of levels to be expanded in the `IgxTreeGridComponent`. By default it is
     * set to `Infinity` which means all levels would be expanded.
     * ```html
     * <igx-tree-grid #grid [data]="employeeData" [childDataKey]="'employees'" expansionDepth="1" [autoGenerate]="true"></igx-tree-grid>
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set expansionDepth(value: number);
          public get expansionDepth(): number;
  
          

    /**
     * Template for the row loading indicator when load on demand is enabled.
     * ```html
     * <ng-template #rowLoadingTemplate>
     *     <igx-icon>loop</igx-icon>
     * </ng-template>
     *
     * <igx-tree-grid #grid [data]="employeeData" [primaryKey]="'ID'" [foreignKey]="'parentID'"
     *                [loadChildrenOnDemand]="loadChildren"
     *                [rowLoadingIndicatorTemplate]="rowLoadingTemplate">
     * </igx-tree-grid>
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public set rowLoadingIndicatorTemplate(value: IgcRenderFunction<void>);
          public get rowLoadingIndicatorTemplate(): IgcRenderFunction<void>;
  
                

    /**
     * Returns an array of the selected `IgxGridCell`s.
     *
     * @example
     * ```typescript
     * const selectedCells = this.grid.selectedCells;
     * ```
     */
    public get selectedCells(): IgcCellType[];
        
            

    public getDefaultExpandState(record: IgcTreeGridRecord): void;

            

    /**
     * Expands all rows.
     * ```typescript
     * this.grid.expandAll();
     * ```
     *
     * @memberof IgxTreeGridComponent
     */
    public expandAll(): void;

            

    /**
     * Collapses all rows.
     *
     * ```typescript
     * this.grid.collapseAll();
     *  ```
     *
     * @memberof IgxTreeGridComponent
     */
    public collapseAll(): void;

            

    /* blazorCSSuppress */
    /**
     * Creates a new `IgxTreeGridRowComponent` with the given data. If a parentRowID is not specified, the newly created
     * row would be added at the root level. Otherwise, it would be added as a child of the row whose primaryKey matches
     * the specified parentRowID. If the parentRowID does not exist, an error would be thrown.
     * ```typescript
     * const record = {
     *     ID: this.grid.data[this.grid1.data.length - 1].ID + 1,
     *     Name: this.newRecord
     * };
     * this.grid.addRow(record, 1); // Adds a new child row to the row with ID=1.
     * ```
     *
     * @param data
     * @param parentRowID
     * @memberof IgxTreeGridComponent
     */
    // TODO: remove evt emission
    public addRow(data: any, parentRowID?: any): void;

            

    /**
     * Enters add mode by spawning the UI with the context of the specified row by index.
     *
     * @remarks
     * Accepted values for index are integers from 0 to this.grid.dataView.length
     * @remarks
     * When adding the row as a child, the parent row is the specified row.
     * @remarks
     * To spawn the UI on top, call the function with index = null or a negative number.
     * In this case trying to add this row as a child will result in error.
     * @example
     * ```typescript
     * this.grid.beginAddRowByIndex(10);
     * this.grid.beginAddRowByIndex(10, true);
     * this.grid.beginAddRowByIndex(null);
     * ```
     * @param index - The index to spawn the UI at. Accepts integers from 0 to this.grid.dataView.length
     * @param asChild - Whether the record should be added as a child. Only applicable to igxTreeGrid.
     */
    public beginAddRowByIndex(index: number, asChild?: boolean): void;

            

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
     * Returns the `IgxTreeGridRow` by index.
     *
     * @example
     * ```typescript
     * const myRow = treeGrid.getRowByIndex(1);
     * ```
     * @param index
     */
    public getRowByIndex(index: number): IgcRowType;

            

    /**
     * Returns the `RowType` object by the specified primary key.
     *
     * @example
     * ```typescript
     * const myRow = this.treeGrid.getRowByIndex(1);
     * ```
     * @param index
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

export type IgcTreeGridComponentEventMap = IgcGridBaseDirectiveEventMap
        