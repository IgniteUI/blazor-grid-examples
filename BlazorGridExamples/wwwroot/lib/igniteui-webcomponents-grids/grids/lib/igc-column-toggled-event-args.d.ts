
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcColumnComponent } from './igc-column-component';




/**
 * Event emitted when a checkbox in the checkbox
 * list of an IgxColumnActions component is clicked.
 */

    export declare class IgcColumnToggledEventArgs extends IgcBaseEventArgs
    {

        
    /** The column that is toggled. */
    public column: IgcColumnComponent;

        
    /** The checked state after the action. */
    public checked: boolean;

    }


        