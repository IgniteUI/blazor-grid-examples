
import { IgcGridBaseDirective } from './igc-grid-base-directive';





    export declare class IgcRowDataCancelableEventArgs
    {

        
    /**
     * @deprecated 
     */
    public cellID?: { rowID: any; columnID: any; rowIndex: number; };

        
    /**
     * @deprecated 
     */
    public oldValue: any;

        
    /**
     * @deprecated 
     */
    public newValue?: any;

        
    /**
     * @deprecated 
     */
    public isAddRow?: boolean;

        
    public owner: IgcGridBaseDirective;

        
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


        