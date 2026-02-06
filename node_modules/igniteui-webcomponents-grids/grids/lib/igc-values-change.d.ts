
import { IgcPivotValue } from './igc-pivot-value';


/* jsonAPIPlainObject */


/**
* Event emitted when values list is changed.
*/

    export declare class IgcValuesChange
    {

          
    /** The new list of values. */
    public set values(value: IgcPivotValue[]);
          public get values(): IgcPivotValue[];
  
    }


        