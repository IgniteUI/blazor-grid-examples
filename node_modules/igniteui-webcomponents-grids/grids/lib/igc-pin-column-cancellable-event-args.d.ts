
import { IgcColumnComponent } from './igc-column-component';




/**
 * The event arguments before a column's pin state is changed.
 * `insertAtIndex`specifies at which index in the pinned/unpinned area the column is inserted.
 * Can be changed in the `columnPin` event.
 * `isPinned` returns the actual pin state of the column. When pinning/unpinning is successful,
 * the value of `isPinned` will change accordingly when read in the "-ing" and "-ed" event.
 */

    export declare class IgcPinColumnCancellableEventArgs
    {

        
    public column: IgcColumnComponent;

        
    /**
     * If pinned, specifies at which index in the pinned area the column is inserted.
     * If unpinned, specifies at which index in the unpinned area the column is inserted.
     */
    public insertAtIndex: number;

        
    /**
     * Returns the actual pin state of the column.
     * If pinning/unpinning is successful, value of `isPinned` will change accordingly when read in the "-ing" and "-ed" event.
     */
    public isPinned: boolean;

        
    /**
     * Provides the ability to cancel the event.
     */
    public cancel: boolean;

    }


        