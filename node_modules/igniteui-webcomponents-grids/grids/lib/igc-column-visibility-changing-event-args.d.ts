




/**
 * The event arguments when a column's visibility is changed.
 * The event is cancelable
 * It contains information about the column and the it's visibility after the operation (will be `true` when hiding and `false` when showing)
 */

    export declare class IgcColumnVisibilityChangingEventArgs
    {

        
    /** Represents the column the event originated from */
    public column: any;

        
    /**
     * The new hidden state that the column will have, if operation is successful.
     * Will be `true` when hiding and `false` when showing.
     */
    public newValue: boolean;

        
    /**
     * Provides the ability to cancel the event.
     */
    public cancel: boolean;

    }


        