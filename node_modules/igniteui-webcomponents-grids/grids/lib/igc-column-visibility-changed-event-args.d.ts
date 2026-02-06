
import { IgcBaseEventArgs } from './igc-base-event-args';




/** The event arguments after a column's visibility is changed. */

    export declare class IgcColumnVisibilityChangedEventArgs extends IgcBaseEventArgs
    {

        
    /** Represents the column the event originated from */
    public column: any;

        
    /**
     * The new hidden state that the column will have, if operation is successful.
     * Will be `true` when hiding and `false` when showing.
     */
    public newValue: boolean;

    }


        