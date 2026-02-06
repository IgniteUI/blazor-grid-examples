


/* jsonAPIPlainObject */


/* tsPlainInterface */
/* marshalByValue */
/**
 * Represents a range selection between certain rows and columns of the grid.
 * Range selection can be made either through drag selection or through keyboard selection.
 */

    export declare class IgcGridSelectionRange
    {

          
    /** The index of the starting row of the selection range. */
    public set rowStart(value: number);
          public get rowStart(): number;
  
          
     /** The index of the ending row of the selection range. */
    public set rowEnd(value: number);
          public get rowEnd(): number;
  
          
    /* blazorAlternateType: double */
    /**
     * The identifier or index of the starting column of the selection range.
     * It can be either a string representing the column's field name or a numeric index.
     */
    public set columnStart(value: string);
          public get columnStart(): string;
  
          
    /* blazorAlternateType: double */
    /**
     * The identifier or index of the ending column of the selection range.
     * It can be either a string representing the column's field name or a numeric index.
     */
    public set columnEnd(value: string);
          public get columnEnd(): string;
  
    }


        