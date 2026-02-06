
import { IgcGroupByRecord } from './igc-group-by-record';
import { IgcGridValidationState } from './igc-grid-validation-state';
import { IgcCellType } from './igc-cell-type';
                import { IgcTreeGridRecord } from './igc-tree-grid-record';
import { IgcGridBaseDirective } from './igc-grid-base-directive';




/* jsonAPIComplexObject */
/* marshalByValue */
/**
 * Interface representing a row in the grid. It is essentially the blueprint to a row object.
 * Contains definitions of properties and methods, relevant to a row
 */

    export declare class IgcRowType
    {

          
    /** The index of the row within the grid */
    public set index(value: number);
          public get index(): number;
  
          
    public set viewIndex(value: number);
          public get viewIndex(): number;
  
          
    /** Indicates whether the row is grouped. */
    public isGroupByRow?: boolean;
  
          
    public isSummaryRow?: boolean;
  
          
    public groupRow?: IgcGroupByRecord;
  
          
    public key?: any;
  
          
    public validation?: IgcGridValidationState;
  
          
    public data?: any;
  
          
    /**
     * Optional
     * A list or an array of cells, that belong to the row
     */
    public cells?: IgcCellType[];
  
          
    /**
     * Optional
     * Indicates whether the current row is disabled
     */
    public disabled?: boolean;
  
          
    /**
     * Optional
     * Indicates whether the current row is pinned.
     */
    public pinned?: boolean;
  
          
    /**
     * Optional
     * Indicates whether the current row is selected
     */
    public selected?: boolean;
  
          
    /**
     * Optional
     * Indicates whether the current row is expanded.
     * The value is true, if the row is expanded and false, if it is collapsed
     */
    public expanded?: boolean;
  
          
    /**
     * Optional
     * Indicates whether the row is marked for deletion.
     */
    public deleted?: boolean;
  
          
     /**
     * Optional
     * Indicates whether the row is currently being edited.
     */
    public inEditMode?: boolean;
  
          
    /**
     * Optional
     * Contains the child rows of the current row, if there are any.
     */
    public children?: IgcRowType[];
  
          
    /* blazorAlternateName: RowParent */
    /**
     * Optional
     * Contains the parent row of the current row, if it has one.
     * If the parent row exist, it means that the current row is a child row
     */
    public parent?: IgcRowType;
  
          
    /**
     * Optional
     * Indicates whether the current row has any child rows
     */
    public hasChildren?: boolean;
  
          
    /**
     * Optional
     * Represents the hierarchical record associated with the row (for tree grids).
     * It is of type ITreeGridRecord, which contains the data, children, the hierarchical level, etc.
     */
    public treeRow?: IgcTreeGridRecord;
  
          
    public addRowUI?: boolean;
  
          
    /**
     * Optional
     * Indicates whether the row is currently focused.
     */
    public focused?: boolean;
  
          
    /** Represent the grid instance, the row belongs to */
    public set grid(value: IgcGridBaseDirective);
          public get grid(): IgcGridBaseDirective;
  
            
    /**
     * Optional
     * A method to handle changing the value of elements of the row
     * It takes the new value as an argument
     */
    public update?(value: any): void;

            
    /**
     * Optional
     * A method to handle deleting rows
     */
    public delete?(): any;

            
    /**
     * Optional
     * A method to handle pinning a row
     */
    public pin?(): void;

            
    /**
     * Optional
     * A method to handle unpinning a row, that has been pinned
     */
    public unpin?(): void;

    }


        