
import { IgcBaseEventArgs } from './igc-base-event-args';



/**
 * rowExporting event arguments
 * this.exporterService.rowExporting.subscribe((args: IRowExportingEventArgs) => {
 * // set args properties here
 * })
 */

    export declare class IgcRowExportingEventArgs extends IgcBaseEventArgs
    {

        
    /**
     * Contains the exporting row data
     */
    public rowData: any;

        

    /**
     * Contains the exporting row index
     */
    public rowIndex: number;

        

    /**
     * Skip the exporting row when set to true
     */
    public cancel: boolean;

    }


        