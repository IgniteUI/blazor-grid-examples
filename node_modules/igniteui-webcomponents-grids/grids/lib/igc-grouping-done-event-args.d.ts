
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcSortingExpression } from './igc-sorting-expression';
import { IgcColumnComponent } from './igc-column-component';





    export declare class IgcGroupingDoneEventArgs extends IgcBaseEventArgs
    {

        
    public expressions: IgcSortingExpression[];

        
    public groupedColumns: IgcColumnComponent[];

        
    public ungroupedColumns: IgcColumnComponent[];

    }


        