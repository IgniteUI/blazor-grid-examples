


/* jsonAPIPlainObject */



    export declare class IgcFieldPipeArgs
    {

          
    /** The date/time components that a date column will display, using predefined options or a custom format string. */
    public format?: string;
  
          
    /** A timezone offset (such as '+0430'), or a standard UTC/GMT or continental US timezone abbreviation. */
    public timezone?: string;
  
          
    /**
     * Decimal representation options, specified by a string in the following format:
     * `{minIntegerDigits}`.`{minFractionDigits}`-`{maxFractionDigits}`.
     * `minIntegerDigits`: The minimum number of integer digits before the decimal point. Default is 1.
     * `minFractionDigits`: The minimum number of digits after the decimal point. Default is 0.
     * `maxFractionDigits`: The maximum number of digits after the decimal point. Default is 3.
     */
    public digitsInfo?: string;
  
          
    /** The currency code of type string, default value undefined */
    public currencyCode?: string;
  
          
    /**
     * Allow us to display currency 'symbol' or 'code' or 'symbol-narrow' or our own string.
     * The value is of type string. By default is set to 'symbol'
     */
    public display?: string;
  
          

    /** The first week day to be displayed in calendar when filtering or editing a date column */
    public weekStart?: number;
  
    }


        