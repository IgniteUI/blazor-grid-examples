
import { IgcBaseEventArgs } from './igc-base-event-args';
import { SortingDirection } from './sorting-direction';
import { IgcSortingStrategy } from './igc-sorting-strategy';


/* jsonAPIPlainObject */


/* marshalByValue */
/* tsPlainInterface */

    export declare class IgcSortingExpression extends IgcBaseEventArgs
    {

          
    public set fieldName(value: string);
          public get fieldName(): string;
  
          
    /* mustCoerceToInt */
    public set dir(value: SortingDirection);
          public get dir(): SortingDirection;
  
          
    public ignoreCase?: boolean;
  
          
    public strategy?: IgcSortingStrategy;
  
    }


        