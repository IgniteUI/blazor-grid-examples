
import { IgcPivotDimension } from './igc-pivot-dimension';
import { IgcPivotValue } from './igc-pivot-value';
import { IgcDataCloneStrategy } from './igc-data-clone-strategy';
import { IgcPivotKeys } from './igc-pivot-keys';


/* jsonAPIPlainObject */


/**
* Interface describing Pivot data processing for dimensions.
* Should contain a process method and return records hierarchy based on the provided dimensions.
*/

    export declare class IgcPivotDimensionStrategy
    {

            
    /* blazorCSSuppress */
    public process(collection: any, dimensions: IgcPivotDimension[], values: IgcPivotValue[], cloneStrategy: IgcDataCloneStrategy, pivotKeys?: IgcPivotKeys): any[];

    }


        