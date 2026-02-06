
import { IgcGridBaseDirective } from './igc-grid-base-directive';


/* jsonAPIPlainObject */


/**
 * Merge strategy interface.
 */

    export declare class IgcGridMergeStrategy
    {

            
    /* blazorCSSuppress */
    /**
     * Function that processes merging of the whole data per merged field.
     * Returns collection where object has reference to the original record and map of the cell merge metadata per field.
     */
    public merge(data: any[], field: string, comparer: any, result: any[], activeRowIndexes: number[], isDate?: boolean, isTime?: boolean, grid?: IgcGridBaseDirective): any[];

            
    /**
     * Function that compares values for merging. Returns true if same, false if different.
     */
    public comparer(prevRecord: any, record: any, field: string): boolean;

    }


        