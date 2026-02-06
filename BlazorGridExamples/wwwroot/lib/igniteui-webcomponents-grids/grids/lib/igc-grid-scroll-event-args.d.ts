
import { IgcBaseEventArgs } from './igc-base-event-args';




/**
 * Event emitted when a grid is scrolled.
 */

    export declare class IgcGridScrollEventArgs extends IgcBaseEventArgs
    {

        
    /** The scroll direction - vertical or horizontal. */
    public direction: string;

        
    /* blazorCSSuppress */
    /** The original browser scroll event. */
    public event: any;

        
    /** The new scroll position */
    public scrollPosition: number;

    }


        