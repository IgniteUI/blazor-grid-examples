
import { IgcFilteringExpression } from './igc-filtering-expression';
import { IgcGridBaseDirective } from './igc-grid-base-directive';
import { IgcFilteringExpressionsTree } from './igc-filtering-expressions-tree';
                import { IgcColumnComponent } from './igc-column-component';
import { IgcFilterItem } from './igc-filter-item';




/* csSuppress */

    export declare abstract class IgcBaseFilteringStrategy
    {

            
    // protected
    public findMatchByExpression(rec: any, expr: IgcFilteringExpression, isDate?: boolean, isTime?: boolean, grid?: IgcGridBaseDirective): boolean;

            

    // protected
    public matchRecord(rec: any, expressions: IgcFilteringExpressionsTree | IgcFilteringExpression, grid?: IgcGridBaseDirective, entity?: string): boolean;

            

    public getFilterItems(column: IgcColumnComponent, tree: IgcFilteringExpressionsTree): Promise<IgcFilterItem[]>;

            

    public filter(data: any[], expressionsTree: IgcFilteringExpressionsTree, advancedExpressionsTree?: IgcFilteringExpressionsTree, grid?: IgcGridBaseDirective): any[];

    }


        