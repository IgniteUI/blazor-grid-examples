
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcColumnComponent } from './igc-column-component';




/** Represents event arguments related to the end of a column moving operation in a grid */

    export declare class IgcColumnMovingEndEventArgs extends IgcBaseEventArgs
    {

        
    /**
     * The source of the event represents the column that is being moved.
     * The `ColumnType` contains the information (the grid it belongs to, css data, settings, etc.) of the column in its properties
     */
    public source: IgcColumnComponent;

        
    /**
     * The target of the event represents the column, the source is being moved to.
     * The `ColumnType` contains the information (the grid it belongs to, css data, settings, etc.) of the column in its properties
     */
    public target: IgcColumnComponent;

        
    /**
     * `cancel` returns whether the event has been intercepted and stopped
     * If the value becomes "true", it returns/exits from the method, instantiating the interface
     */
    public cancel: boolean;

    }


        