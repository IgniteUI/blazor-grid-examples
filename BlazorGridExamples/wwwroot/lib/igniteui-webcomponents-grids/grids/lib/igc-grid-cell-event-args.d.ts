
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcCellType } from './igc-cell-type';




/** Represents an event argument related to grid cell interactions. */

    export declare class IgcGridCellEventArgs extends IgcBaseEventArgs
    {

        
    /** Represents the grid cell that triggered the event. */
    public cell: IgcCellType;

        
    /* blazorCSSuppress */
    /**
     * Represents the original event that occurred
     * Examples of such events include: selecting, clicking, double clicking, etc.
     */
    public event: any;

    }


        