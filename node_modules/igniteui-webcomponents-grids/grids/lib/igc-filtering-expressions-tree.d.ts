
import { IgcExpressionTree } from './igc-expression-tree';
import { IgcFilteringExpression } from './igc-filtering-expression';
                import { FilteringExpressionsTreeType } from './filtering-expressions-tree-type';
import { FilteringLogic } from './filtering-logic';


/* jsonAPIPlainObject */


/* alternateBaseType: ExpressionTree */
/* marshalByValue */

    export declare class IgcFilteringExpressionsTree extends IgcExpressionTree
    {

          
    public set filteringOperands(value: (IgcFilteringExpressionsTree | IgcFilteringExpression)[]);
          public get filteringOperands(): (IgcFilteringExpressionsTree | IgcFilteringExpression)[];
  
          
    /* alternateName: treeType */
    public type?: FilteringExpressionsTreeType;
  
          
    /**
     * Provides reference to the owner component.
     */
    public owner?: any;
  
          
    public set operator(value: FilteringLogic);
          public get operator(): FilteringLogic;
  
          
    public fieldName?: string;
  
          
    public entity?: string;
  
          
    public returnFields?: string[];
  
    }


        