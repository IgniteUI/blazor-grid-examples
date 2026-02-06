
import { IgcPivotDimension } from './igc-pivot-dimension';


/* jsonAPIPlainObject */



    export declare class IgcPivotGridRecord
    {

          
    /** List of original data records associated with the current pivoted data. **/
    public records?: any[];
  
          
     /** Record level**/
    public level?: number;
  
          
    /** List of dimensions associated with the record.**/
    public set dimensions(value: IgcPivotDimension[]);
          public get dimensions(): IgcPivotDimension[];
  
          
    /** If set, it specifies the name of the dimension, that has total record enabled. */
    public totalRecordDimensionName?: string;
  
          
    /** The index of the record in the total view */
    public dataIndex?: number;
  
    }


        