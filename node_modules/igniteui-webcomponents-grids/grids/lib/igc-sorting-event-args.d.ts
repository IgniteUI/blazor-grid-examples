
import { IgcSortingExpression } from './igc-sorting-expression';
import { IgcGroupingExpression } from './igc-grouping-expression';




/**
 * Represents event arguments related to sorting and grouping operations
 * The event is cancelable
 */

    export declare class IgcSortingEventArgs
    {

        
    /**
     * Optional
     * Represents the sorting expressions applied to the grid.
     * It can be a single sorting expression or an array of them
     * The expression contains information like file name, whether the letter case should be taken into account, etc.
     */
    public sortingExpressions?: IgcSortingExpression[];

        
    /**
     * Optional
     * Represents the grouping expressions applied to the grid.
     * It can be a single grouping expression or an array of them
     * The expression contains information like the sorting expression and criteria by which the elements will be grouped
     */
    public groupingExpressions?: IgcGroupingExpression[];

        
    /**
     * Provides reference to the owner component.
     */
    public owner?: any;

        
    /**
     * Provides the ability to cancel the event.
     */
    public cancel: boolean;

    }


        