
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcRowType } from './igc-row-type';




/** Emitted when a dragging operation is finished (when the row is dropped) */

    export declare class IgcRowDragEndEventArgs extends IgcBaseEventArgs
    {

        
    /** Represents the drag directive or information associated with the drag operation */
    public dragDirective: any;

        
    /** Represents the information of the row that is being dragged. */
    public dragData: IgcRowType;

        
    /** `animation` returns whether the event is animated */
    public animation: boolean;

    }


        