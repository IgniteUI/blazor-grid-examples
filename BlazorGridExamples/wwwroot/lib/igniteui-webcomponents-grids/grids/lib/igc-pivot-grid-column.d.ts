
import { IgcPivotDimension } from './igc-pivot-dimension';
import { IgcPivotValue } from './igc-pivot-value';


/* jsonAPIPlainObject */


/** Interface describing the Pivot column data.
*  Contains information on the related column dimensions and their values.
*/

    export declare class IgcPivotGridColumn
    {

          
        public set field(value: string);
          public get field(): string;
  
          
        /** List of dimensions associated with the column.**/
        public set dimensions(value: IgcPivotDimension[]);
          public get dimensions(): IgcPivotDimension[];
  
          
        public set value(value: IgcPivotValue);
          public get value(): IgcPivotValue;
  
    }


        