
import { IgcFilteringExpressionsTree } from './igc-filtering-expressions-tree';
import { IgcGridBaseDirective } from './igc-grid-base-directive';
import { IgcColumnComponent } from './igc-column-component';
import { IgcFilterItem } from './igc-filter-item';


/* jsonAPIPlainObject */




    export declare class IgcFilteringStrategy
    {

            
    public filter(data: any[], expressionsTree: IgcFilteringExpressionsTree, advancedExpressionsTree?: IgcFilteringExpressionsTree, grid?: IgcGridBaseDirective): any[];

            
    /* csSuppress */
    public getFilterItems(column: IgcColumnComponent, tree: IgcFilteringExpressionsTree): Promise<IgcFilterItem[]>;

    }


        