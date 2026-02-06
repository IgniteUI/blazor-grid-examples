
import { IgcFilteringOperation } from './igc-filtering-operation';
import { IgcExpressionTree } from './igc-expression-tree';


/* jsonAPIPlainObject */


/* marshalByValue */
/**
 * Represents filtering expressions.
 */

    export declare class IgcFilteringExpression
    {

          
    public set fieldName(value: string);
          public get fieldName(): string;
  
          
    public condition?: IgcFilteringOperation;
  
          
    public conditionName?: string;
  
          
    public searchVal?: any;
  
          
    public searchTree?: IgcExpressionTree;
  
          
    public ignoreCase?: boolean;
  
    }


        