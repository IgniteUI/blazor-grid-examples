
import { IgcSortingExpression } from './igc-sorting-expression';
import { IgcColumnComponent } from './igc-column-component';




/* jsonAPIComplexObject */

    export declare class IgcGroupByRecord
    {

          
    public set expression(value: IgcSortingExpression);
          public get expression(): IgcSortingExpression;
  
          
    public set level(value: number);
          public get level(): number;
  
          
    /* wcAlternateType: any[] */
    public set records(value: any[]);
          public get records(): any[];
  
          
    public set value(value: any);
          public get value(): any;
  
          
    public set groupParent(value: IgcGroupByRecord);
          public get groupParent(): IgcGroupByRecord;
  
          
    public groups?: IgcGroupByRecord[];
  
          
    public set height(value: number);
          public get height(): number;
  
          
    public column?: IgcColumnComponent;
  
    }


        