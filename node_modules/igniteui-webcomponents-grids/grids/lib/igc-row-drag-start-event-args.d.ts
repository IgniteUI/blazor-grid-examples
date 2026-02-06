
import { IgcRowType } from './igc-row-type';




/**
 * Emitted when a dragging operation is starting (when the row is "picked")
 * The event is cancelable
 */

    export declare class IgcRowDragStartEventArgs
    {

        
    /** Represents the drag directive or information associated with the drag operation */
    public dragDirective: any;

        
    /** Represents the information of the row that is being dragged. */
    public dragData: IgcRowType;

        
    /**
     * Provides the ability to cancel the event.
     */
    public cancel: boolean;

        
    /**
     * Provides reference to the owner component.
     */
    public owner?: any;

    }


        