
import { IgcBaseEventArgs } from './igc-base-event-args';
import { GridKeydownTargetType } from './grid-keydown-target-type';




/**
 * Represents an event, emitted when keydown is triggered over element inside grid's body
 * This event is fired only if the key combination is supported in the grid.
 */

    export declare class IgcGridKeydownEventArgs extends IgcBaseEventArgs
    {

        
    /** The `targetType` represents the type of the targeted object. For example a cell or a row */
    public targetType: GridKeydownTargetType;

        
    /** Represents the information and details of the object itself */
    public target: any;

        
    /* blazorCSSuppress */
    /** Represents the original event, that occurred. */
    public event: any;

        
    /**
     * The event is cancelable
     * `cancel` returns whether the event has been intercepted and stopped
     * If the value becomes "true", it returns/exits from the method, instantiating the interface
     */
    public cancel: boolean;

    }


        