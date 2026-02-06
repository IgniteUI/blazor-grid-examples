
import { IgcRowType } from './igc-row-type';




/**
 * Event emitted when a row's pin state changes.
 * The event is cancelable
 */

    export declare class IgcPinRowEventArgs
    {

        
    /**
     * The ID of the row, that was pinned/unpinned.
     * ID is either the primaryKey value or the data record instance.
     * @deprecated Use the `rowKey` property instead.
     */
    public rowID: any;

        
    public rowKey: any;

        
    public row?: IgcRowType;

        
    /** The index at which to pin the row in the pinned rows collection. */
    public insertAtIndex?: number;

        
    /** Whether or not the row is pinned or unpinned. */
    public isPinned: boolean;

        
    /**
     * Provides reference to the owner component.
     */
    public owner?: any;

        
    /**
     * Provides the ability to cancel the event.
     */
    public cancel: boolean;

    }


        