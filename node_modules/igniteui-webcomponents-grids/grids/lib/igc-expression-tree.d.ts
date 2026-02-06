
import { IgcFilteringExpression } from './igc-filtering-expression';
                import { FilteringLogic } from './filtering-logic';


/* jsonAPIPlainObject */


/* marshalByValue */

    export declare class IgcExpressionTree
    {

          
    public set filteringOperands(value: (IgcExpressionTree | IgcFilteringExpression)[]);
          public get filteringOperands(): (IgcExpressionTree | IgcFilteringExpression)[];
  
          
    public set operator(value: FilteringLogic);
          public get operator(): FilteringLogic;
  
          
    public fieldName?: string;
  
          
    public entity?: string;
  
          
    public returnFields?: string[];
  
    }


        