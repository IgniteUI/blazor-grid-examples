
import { IgcCellType } from './igc-cell-type';
import { IgcRowType } from './igc-row-type';




/** Represents an event argument for the grid contextMenu output */

    export declare class IgcGridContextMenuEventArgs
    {

        
    /** Represents the grid cell that triggered the event. */
    public cell: IgcCellType;

        
    /* blazorCSSuppress */
    /**
     * Represents the original event that occurred
     * Examples of such events include: selecting, clicking, double clicking, etc.
     */
    public event: any;

        
    /** Represents the grid row that triggered the event. */
    public row: IgcRowType;

    }


        