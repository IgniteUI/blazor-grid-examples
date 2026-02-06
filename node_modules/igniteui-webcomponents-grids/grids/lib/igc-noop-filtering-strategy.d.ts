
import { IgcBaseFilteringStrategy } from './igc-base-filtering-strategy';
import { IgcFilteringExpressionsTree } from './igc-filtering-expressions-tree';




/* csSuppress */

    export declare class IgcNoopFilteringStrategy extends IgcBaseFilteringStrategy
    {

            

    public static instance(): void;

            

    public filter(data: any[], _: IgcFilteringExpressionsTree, __?: IgcFilteringExpressionsTree): any[];

    }


        