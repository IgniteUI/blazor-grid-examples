


/* jsonAPIPlainObject */


/* marshalByValue */
/** Interface describing the Pivot data keys used for data generation.
*  Can be used for custom remote scenarios where the data is pre-populated.
*/

    export declare class IgcPivotKeys
    {

          
    /** Field that stores children for hierarchy building. */
    public set children(value: string);
          public get children(): string;
  
          
    /** Field that stores reference to the original data records. */
    public set records(value: string);
          public get records(): string;
  
          
    /** Field that stores aggregation values. */
    public set aggregations(value: string);
          public get aggregations(): string;
  
          
    /** Field that stores dimension level based on its hierarchy. */
    public set level(value: string);
          public get level(): string;
  
          
    /** Separator used when generating the unique column field values. */
    public set columnDimensionSeparator(value: string);
          public get columnDimensionSeparator(): string;
  
          
    /** Separator used when generating the unique row field values. */
    public set rowDimensionSeparator(value: string);
          public get rowDimensionSeparator(): string;
  
    }


        