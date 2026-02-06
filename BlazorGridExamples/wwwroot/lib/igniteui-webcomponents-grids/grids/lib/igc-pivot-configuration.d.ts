
import { IgcPivotDimensionStrategy } from './igc-pivot-dimension-strategy';
import { IgcPivotDimension } from './igc-pivot-dimension';
import { IgcPivotValue } from './igc-pivot-value';
import { IgcPivotKeys } from './igc-pivot-keys';


/* jsonAPIPlainObject */


/* marshalByValue */
/**
* Configuration of the pivot grid.
*/

    export declare class IgcPivotConfiguration
    {

          
    /** A strategy to transform the rows. */
    public rowStrategy?: IgcPivotDimensionStrategy;
  
          
    /** A strategy to transform the columns. */
    public columnStrategy?: IgcPivotDimensionStrategy;
  
          
    /** A list of the rows. */
    public set rows(value: IgcPivotDimension[]);
          public get rows(): IgcPivotDimension[];
  
          
    /** A list of the columns. */
    public set columns(value: IgcPivotDimension[]);
          public get columns(): IgcPivotDimension[];
  
          
    /** A list of the values. */
    public set values(value: IgcPivotValue[]);
          public get values(): IgcPivotValue[];
  
          
    /** Dimensions to be displayed in the filter area. */
    public filters?: IgcPivotDimension[];
  
          
    /** Pivot data keys used for data generation. Can be used for custom remote scenarios where the data is pre-populated. */
    public pivotKeys?: IgcPivotKeys;
  
    }


        