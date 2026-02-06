
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcColumnComponent } from './igc-column-component';




/** Represents event arguments related to the start of a column moving operation in a grid. */

    export declare class IgcColumnMovingStartEventArgs extends IgcBaseEventArgs
    {

        
    /**
     * Represents the column that is being moved.
     * The `ColumnType` contains the information (the grid it belongs to, css data, settings, etc.) of the column in its properties
     */
    public source: IgcColumnComponent;

    }


        