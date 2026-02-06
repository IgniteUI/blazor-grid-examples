


/* jsonAPIPlainObject */


/** The event is triggered when getting the current position of a certain cell */

    export declare class IgcCellPosition
    {

          
    /* doNotStringify */
    /** It returns the position (index) of the row, the cell is in */
    public set rowIndex(value: number);
          public get rowIndex(): number;
  
          
    /* doNotStringify */
    /**
     * It returns the position (index) of the column, the cell is in
     * Counts only the visible (non hidden) columns
     */
    public set visibleColumnIndex(value: number);
          public get visibleColumnIndex(): number;
  
    }


        