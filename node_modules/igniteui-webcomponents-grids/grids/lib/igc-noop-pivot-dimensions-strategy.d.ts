
import { IgcPivotDimension } from './igc-pivot-dimension';
import { IgcPivotValue } from './igc-pivot-value';




/* csSuppress */

    export declare class IgcNoopPivotDimensionsStrategy
    {

            

    public static instance(): IgcNoopPivotDimensionsStrategy;

            

    public process(collection: any[], _: IgcPivotDimension[], __: IgcPivotValue[]): any[];

    }


        