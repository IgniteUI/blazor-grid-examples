
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcRowType } from './igc-row-type';




/** Represents an event argument related to grid row interactions. */

    export declare class IgcGridRowEventArgs extends IgcBaseEventArgs
    {

        
    /** Represents the grid row that triggered the event. */
    public row: IgcRowType;

        
    /**
     * Represents the original event that occurred
     * Examples of such events include: selecting, clicking, double clicking, etc.
     */
    public event: any;

    }


        