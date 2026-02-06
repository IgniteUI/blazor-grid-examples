
import { IgcSortingExpression } from './igc-sorting-expression';
import { IgcGridBaseDirective } from './igc-grid-base-directive';


/* jsonAPIPlainObject */


/**
 * Represents a sorting strategy for the grid data
 * Contains a single method sort that sorts the provided data based on the given sorting expressions
 */

    export declare class IgcGridSortingStrategy
    {

            
    /* blazorCSSuppress */
    /**
    * `data`: The array of data to be sorted. Could be of any type.
    * `expressions`: An array of sorting expressions that define the sorting rules. The expression contains information like file name, whether the letter case should be taken into account, etc.
    * `grid`: (Optional) The instance of the grid where the sorting is applied.
    * Returns a new array with the data sorted according to the sorting expressions.
    */
    public sort(data: any[], expressions: IgcSortingExpression[], grid?: IgcGridBaseDirective): any[];

    }


        