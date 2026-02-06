
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcColumnComponent } from './igc-column-component';




/**
 * The event arguments after a column's pin state is changed.
 * `insertAtIndex`specifies at which index in the pinned/unpinned area the column was inserted.
 * `isPinned` returns the actual pin state of the column after the operation completed.
 */

    export declare class IgcPinColumnEventArgs extends IgcBaseEventArgs
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

    }


        