
import { IgcPivotDimension } from './igc-pivot-dimension';
import { PivotDimensionType } from './pivot-dimension-type';


/* jsonAPIPlainObject */


/**
 * Event emitted when dimension collection for rows, columns of filters is changed.
 */

    export declare class IgcDimensionsChange
    {

          
    /** The new list of dimensions. */
    public set dimensions(value: IgcPivotDimension[]);
          public get dimensions(): IgcPivotDimension[];
  
          
    /** The dimension list type - Row, Column or Filter. */
    public set dimensionCollectionType(value: PivotDimensionType);
          public get dimensionCollectionType(): PivotDimensionType;
  
    }


        