
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcColumnComponent } from './igc-column-component';




/** Represents event arguments related to a column moving operation in a grid */

    export declare class IgcColumnMovingEventArgs extends IgcBaseEventArgs
    {

        
    /**
     * Represents the column that is being moved.
     * The `ColumnType` contains the information (the grid it belongs to, css data, settings, etc.) of the column in its properties
     */
    public source: IgcColumnComponent;

        
    /**
     * `cancel` returns whether the event has been intercepted and stopped
     * If the value becomes "true", it returns/exits from the method, instantiating the interface
     */
    public cancel: boolean;

    }


        