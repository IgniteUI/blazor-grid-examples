
import { IgcBaseEventArgs } from './igc-base-event-args';




/**
 * Represents event arguments related to events, that can occur for rows in a grid
 * Example for events: adding, deleting, selection, transaction, etc.
 */

    export declare class IgcRowDataEventArgs extends IgcBaseEventArgs
    {

        
    /**
     * @deprecated Use the `rowData` property instead.
     */
    public data: any;

        
    public rowData: any;

        
    /**
     * Represents the unique key, the row can be associated with.
     * Available if `primaryKey` exists
     * @deprecated Use the `rowKey` property instead.
     */
    public primaryKey: any;

        
    public rowKey: any;

    }


        