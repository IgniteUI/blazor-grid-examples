




/**
 * The event arguments when the selection state of a column is being changed
 * The event is cancelable
 */

    export declare class IgcColumnSelectionEventArgs
    {

        
    /** Represents an array of columns, that have already been selected */
    public oldSelection: string[];

        
    /** Represents the newly selected columns */
    public newSelection: string[];

        
    /**
     * Represents an array of all added columns
     * Whenever a column has been selected, the array is "refreshed" with the selected columns
     */
    public added: string[];

        
    /**
     * Represents an array of all columns, removed from the selection
     * Whenever a column has been deselected, the array is "refreshed" with the columns, that have been previously selected, but are no longer
     */
    public removed: string[];

        
    /**
     * Provides the ability to cancel the event.
     */
    public cancel: boolean;

        
    /**
     * Provides reference to the owner component.
     */
    public owner?: any;

    }


        