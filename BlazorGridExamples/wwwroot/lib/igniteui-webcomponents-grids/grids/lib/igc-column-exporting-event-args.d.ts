
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcGridBaseDirective } from './igc-grid-base-directive';




/**
 * columnExporting event arguments
 * ```typescript
 * this.exporterService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
 * // set args properties here
 * });
 * ```
 */

    export declare class IgcColumnExportingEventArgs extends IgcBaseEventArgs
    {

        
    /**
     * Contains the exporting column header
     */
    public header: string;

        

    /**
     * Contains the exporting column field name
     */
    public field: string;

        

    /**
     * Contains the exporting column index
     */
    public columnIndex: number;

        

    /**
     * Skip the exporting column when set to true
     */
    public cancel: boolean;

        

    /**
     * Export the column's data without applying its formatter, when set to true
     */
    public skipFormatter: boolean;

        

    /**
     * A reference to the grid owner.
     */
    public grid?: IgcGridBaseDirective;

    }


        