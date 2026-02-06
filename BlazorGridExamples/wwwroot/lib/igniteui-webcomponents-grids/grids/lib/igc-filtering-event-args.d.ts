
import { IgcFilteringExpressionsTree } from './igc-filtering-expressions-tree';




/**
 * Represents event arguments related to filtering operations
 * The event is cancelable
 */

    export declare class IgcFilteringEventArgs
    {

        
    /**
     * Represents the filtering expressions applied to the grid.
     * The expression contains information like filtering operands and operator, an expression or condition, etc.
     */
    public filteringExpressions: IgcFilteringExpressionsTree;

        
    /**
     * Provides reference to the owner component.
     */
    public owner?: any;

        
    /**
     * Provides the ability to cancel the event.
     */
    public cancel: boolean;

    }


        