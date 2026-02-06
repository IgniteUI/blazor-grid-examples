


/* jsonAPIPlainObject */


/** The event arguments when data from a grid is being copied. */

    export declare class IgcGridClipboardEvent
    {

          
    /** `data` can be of any type and refers to the data that is being copied/stored to the clipboard */
    public set data(value: any[]);
          public get data(): any[];
  
          
    /**
     * `cancel` returns whether an external event has intercepted the copying
     * If the value becomes "true", it returns/exits from the method, instantiating the interface
     */
    public set cancel(value: boolean);
          public get cancel(): boolean;
  
    }


        