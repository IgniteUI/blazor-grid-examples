
import { IgcGridSortingStrategy } from './igc-grid-sorting-strategy';
import { IgcGroupingState } from './igc-grouping-state';
import { IgcGroupByResult } from './igc-group-by-result';


/* jsonAPIPlainObject */


/**
 * Represents a grouping strategy for the grid data, extending the Sorting Strategy interface (contains a sorting method).
 */

    export declare class IgcGridGroupingStrategy extends IgcGridSortingStrategy
    {

            
    /* blazorCSSuppress */
    /**
     * The method groups the provided data based on the given grouping state and returns the result.
     * `data`: The array of data to be grouped. Could be of any type.
     * `state`: The grouping state that defines the grouping settings and expressions.
     * `grid`: (Optional) The instance of the grid where the grouping is applied.
     * `groupsRecords`: (Optional) An array that holds the records for each group.
     * `fullResult`: (Optional) The complete result of grouping including groups and summary data.
     * Returns an object containing the result of the grouping operation.
     */
    public groupBy(data: any[], state: IgcGroupingState, grid?: any, groupsRecords?: any[], fullResult?: IgcGroupByResult): IgcGroupByResult;

    }


        