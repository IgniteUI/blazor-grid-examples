
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcColumnComponent } from './igc-column-component';





/** The event arguments when a column is being resized */

    export declare class IgcColumnResizeEventArgs extends IgcBaseEventArgs
    {

        
    /** Represents the information of the column that is being resized */
    public column: IgcColumnComponent;

        
    /** Represents the old width of the column before the resizing */
    public prevWidth: string;

        
    /** Represents the new width, the column is being resized to */
    public newWidth: string;

    }


        