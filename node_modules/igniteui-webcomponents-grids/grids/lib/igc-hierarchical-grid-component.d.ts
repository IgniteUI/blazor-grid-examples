
import { IgcHierarchicalGridBaseDirective } from './igc-hierarchical-grid-base-directive';
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
import { IgcRowIslandComponent } from './igc-row-island-component';
import { IgcFilteringExpressionsTree } from './igc-filtering-expressions-tree';
import { IgcCellType } from './igc-cell-type';
import { IgcRowType } from './igc-row-type';
import { IgcHierarchicalGridBaseDirectiveEventMap } from './igc-hierarchical-grid-base-directive';





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
/* blazorAdditionalDependency: RowIsland */
/* blazorIndirectRender */
/**
 * Hierarchical grid
 *
 * @igxModule IgxHierarchicalGridModule
 *
 */

    export declare class IgcHierarchicalGridComponent extends IgcHierarchicalGridBaseDirective
    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          

    /* contentChildren */
    /* blazorInclude */
    /* blazorTreatAsCollection */
    /* blazorCollectionName: RowIslandCollection */
    /* ngQueryListName: childLayoutList */
    /**
     * @hidden
     */
    public set childLayoutList(value: IgcRowIslandComponent[]);
          public get childLayoutList(): IgcRowIslandComponent[];
  
          

    public set advancedFilteringExpressionsTree(value: IgcFilteringExpressionsTree);
          public get advancedFilteringExpressionsTree(): IgcFilteringExpressionsTree;
  
          

    /**
     * Gets/Sets the value of the `id` attribute.
     *
     * @remarks
     * If not provided it will be automatically generated.
     * @example
     * ```html
     * <igx-hierarchical-grid [id]="'igx-hgrid-1'" [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
     * ```
     */
    public set id(value: string);
          public get id(): string;
  
          

    /* treatAsRef */
    /**
     * Gets/Sets the array of data that populates the component.
     * ```html
     * <igx-hierarchical-grid [data]="Data" [autoGenerate]="true"></igx-hierarchical-grid>
     * ```
     *
     * @memberof IgxHierarchicalGridComponent
     */
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
  
          

    /**
     * Sets if all immediate children of the `IgxHierarchicalGridComponent` should be expanded/collapsed.
     * Default value is false.
     * ```html
     * <igx-hierarchical-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true" [expandChildren]="true"></igx-hierarchical-grid>
     * ```
     *
     * @memberof IgxHierarchicalGridComponent
     */
    public set expandChildren(value: boolean);
          public get expandChildren(): boolean;
  
                

    /**
     * Gets the unique identifier of the parent row. It may be a `string` or `number` if `primaryKey` of the
     * parent grid is set or an object reference of the parent record otherwise.
     * ```typescript
     * const foreignKey = this.grid.foreignKey;
     * ```
     *
     * @memberof IgxHierarchicalGridComponent
     */
    public get foreignKey(): any;
        
                

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
     * Returns the `RowType` by index.
     *
     * @example
     * ```typescript
     * const myRow = this.grid1.getRowByIndex(1);
     * ```
     * @param index
     */
    public getRowByIndex(index: number): IgcRowType;

            

    /**
     * Returns the `RowType` by key.
     *
     * @example
     * ```typescript
     * const myRow = this.grid1.getRowByKey(1);
     * ```
     * @param key
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

            

    public getDefaultExpandState(record: any): void;

    }

export type IgcHierarchicalGridComponentEventMap = IgcHierarchicalGridBaseDirectiveEventMap
        