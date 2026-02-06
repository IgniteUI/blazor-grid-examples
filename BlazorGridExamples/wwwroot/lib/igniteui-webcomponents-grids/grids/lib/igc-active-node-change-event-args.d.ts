
import { IgcBaseEventArgs } from './igc-base-event-args';
import { GridKeydownTargetType } from './grid-keydown-target-type';




/** Emitted when the active node is changed */

    export declare class IgcActiveNodeChangeEventArgs extends IgcBaseEventArgs
    {

        
    /** Represents the row index of the active node */
    public row: number;

        
    /** Represents the column index of the active node */
    public column: number;

        
    /**
     * Optional
     * Represents the hierarchical level of the active node
     */
    public level?: number;

        
    /**
     * Represents the type of the active node.
     * The GridKeydownTargetType is an enum or that specifies the possible target types
     */
    public tag: GridKeydownTargetType;

    }


        