
import { IgcBaseEventArgs } from './igc-base-event-args';




/** Represents event arguments related to the row's expansion state being changed in a grid */

    export declare class IgcRowToggleEventArgs extends IgcBaseEventArgs
    {

        
    /**
     * Represents the ID of the row that emitted the event (which state is changed)
     * @deprecated Use the `rowKey` property instead.
     */
    public rowID: any;

        
    public rowKey: any;

        
    /**
     * Returns the state of the row after the operation has ended
     * Indicating whether the row is being expanded (true) or collapsed (false)
     */
    public expanded: boolean;

        
    /**
     * The event is cancelable
     * `cancel` returns whether the event has been intercepted and stopped
     * If the value becomes "true", it returns/exits from the method, instantiating the interface
     */
    public cancel: boolean;

    }


        