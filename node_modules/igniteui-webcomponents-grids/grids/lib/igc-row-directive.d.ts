
import { IgcCellType } from './igc-cell-type';


/* jsonAPIManageCollectionInMarkup */



    export declare class IgcRowDirective
    {

          

    /**
     *  The data passed to the row component.
     *
     * ```typescript
     * // get the row data for the first selected row
     * let selectedRowData = this.grid.selectedRows[0].data;
     * ```
     */
    public set data(value: any);
          public get data(): any;
  
          
    /**
     * The index of the row.
     *
     * ```typescript
     * // get the index of the second selected row
     * let selectedRowIndex = this.grid.selectedRows[1].index;
     * ```
     */
    public set index(value: number);
          public get index(): number;
  
          

    /**
     * Sets whether this specific row has disabled functionality for editing and row selection.
     * Default value is `false`.
     * ```typescript
     * this.grid.selectedRows[0].pinned = true;
     * ```
     */
    public set disabled(value: boolean);
          public get disabled(): boolean;
  
          

    /**
     * Sets whether the row is pinned.
     * Default value is `false`.
     * ```typescript
     * this.grid.selectedRows[0].pinned = true;
     * ```
     */
    public set pinned(value: boolean);
          public get pinned(): boolean;
  
                

    public get hasMergedCells(): boolean;
        
          

    /**
     * Gets the expanded state of the row.
     * ```typescript
     * let isExpanded = row.expanded;
     * ```
     */
    public set expanded(value: boolean);
          public get expanded(): boolean;
  
                

    public get addRowUI(): any;
        
                

    public get rowHeight(): number;
        
                

    /**
     * Gets the rendered cells in the row component.
     *
     * ```typescript
     * // get the cells of the third selected row
     * let selectedRowCells = this.grid.selectedRows[2].cells;
     * ```
     */
    public get cells(): IgcCellType[];
        
                

    public get dataRowIndex(): number;
        
                

    // TODO: Refactor
    public get inEditMode(): boolean;
        
                

    /**
     * Gets the ID of the row.
     * A row in the grid is identified either by:
     * - primaryKey data value,
     * - the whole data, if the primaryKey is omitted.
     *
     * ```typescript
     * let rowID = this.grid.selectedRows[2].key;
     * ```
     */
    public get key(): any;
        
            

    /**
     * Updates the specified row object and the data source record with the passed value.
     *
     * ```typescript
     * // update the second selected row's value
     * let newValue = "Apple";
     * this.grid.selectedRows[1].update(newValue);
     * ```
     */
    public update(value: any): void;

            

    /**
     * Removes the specified row from the grid's data source.
     * This method emits `rowDeleted` event.
     *
     * ```typescript
     * // delete the third selected row from the grid
     * this.grid.selectedRows[2].delete();
     * ```
     */
    public delete(): void;

            

    public isCellActive(visibleColumnIndex: any): void;

            

    /**
     * Pins the specified row.
     * This method emits `rowPinning`\`rowPinned` event.
     *
     * ```typescript
     * // pin the selected row from the grid
     * this.grid.selectedRows[0].pin();
     * ```
     */
    public pin(): void;

            

    /**
     * Unpins the specified row.
     * This method emits `rowPinning`\`rowPinned` event.
     *
     * ```typescript
     * // unpin the selected row from the grid
     * this.grid.selectedRows[0].unpin();
     * ```
     */
    public unpin(): void;

            

    /**
     * Spawns the add row UI for the specific row.
     *
     * @example
     * ```typescript
     * const row = this.grid1.getRowByIndex(1);
     * row.beginAddRow();
     * ```
     */
    public beginAddRow(): void;

    }


        