


/* jsonAPIPlainObject */


/**
 * An interface describing settings for clipboard options
 */

    export declare class IgcClipboardOptions
    {

          
    /**
     * Enables/disables the copy behavior
     */
    public set enabled(value: boolean);
          public get enabled(): boolean;
  
          
    /**
     * Include the columns headers in the clipboard output.
     */
    public set copyHeaders(value: boolean);
          public get copyHeaders(): boolean;
  
          
    /**
     * Apply the columns formatters (if any) on the data in the clipboard output.
     */
    public set copyFormatters(value: boolean);
          public get copyFormatters(): boolean;
  
          
    /**
     * The separator used for formatting the copy output. Defaults to `\t`.
     */
    public set separator(value: string);
          public get separator(): string;
  
    }


        