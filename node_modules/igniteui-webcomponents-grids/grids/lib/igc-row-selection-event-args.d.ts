




/**
 * The event arguments when the selection state of a row is being changed
 * The event is cancelable
 */

    export declare class IgcRowSelectionEventArgs
    {

        
    /** Represents an array of rows, that have already been selected */
    public oldSelection: any[];

        
    /** Represents the newly selected rows */
    public newSelection: any[];

        
    /**
     * Represents an array of all added rows
     * Whenever a row has been selected, the array is "refreshed" with the selected rows
     */
    public added: any[];

        
    /**
     * Represents an array of all rows, removed from the selection
     * Whenever a row has been deselected, the array is "refreshed" with the rows,
     * that have been previously selected, but are no longer
     */
    public removed: any[];

        
    /** Indicates whether or not all rows of the grid have been selected */
    public allRowsSelected?: boolean;

        
    /**
     * Provides the ability to cancel the event.
     */
    public cancel: boolean;

        
    /**
     * Provides reference to the owner component.
     */
    public owner?: any;

    }


        