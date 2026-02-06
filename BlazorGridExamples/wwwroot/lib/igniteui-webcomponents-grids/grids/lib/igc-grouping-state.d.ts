
import { IgcGroupingExpression } from './igc-grouping-expression';
import { IgcGroupByExpandState } from './igc-group-by-expand-state';


/* jsonAPIPlainObject */


/* marshalByValue */
/* tsPlainInterface */

    export declare class IgcGroupingState
    {

          
    public set expressions(value: IgcGroupingExpression[]);
          public get expressions(): IgcGroupingExpression[];
  
          
    public set expansion(value: IgcGroupByExpandState[]);
          public get expansion(): IgcGroupByExpandState[];
  
          
    public set defaultExpanded(value: boolean);
          public get defaultExpanded(): boolean;
  
    }


        