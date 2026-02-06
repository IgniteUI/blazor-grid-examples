
import { IgcGridBaseDirective } from './igc-grid-base-directive';





    export declare class IgcDefaultMergeStrategy
    {

            

    public static instance(): IgcDefaultMergeStrategy;

            

    /* blazorCSSuppress */
    public merge(data: any[], field: string, comparer: any, result: any[], activeRowIndexes: number[], isDate?: boolean, isTime?: boolean, grid?: IgcGridBaseDirective): void;

            

    /* blazorCSSuppress */
    public comparer(prevRecord: any, record: any, field: string, isDate?: boolean, isTime?: boolean): boolean;

    }


        