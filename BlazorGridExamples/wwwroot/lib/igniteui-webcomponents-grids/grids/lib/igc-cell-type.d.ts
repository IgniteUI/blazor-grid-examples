
import { IgcColumnComponent } from './igc-column-component';
import { IgcRowType } from './igc-row-type';
import { IgcGridBaseDirective } from './igc-grid-base-directive';
import { IgcGridValidationState } from './igc-grid-validation-state';


/* jsonAPIManageCollectionInMarkup */


/* marshalByValue */
/* jsonAPIComplexObject */
/**
 * Interface representing a cell in the grid. It is essentially the blueprint to a cell object.
 * Contains definitions of properties and methods, relevant to a cell
 */

    export declare class IgcCellType
    {

          
    /** The current value of the cell. */
    public set value(value: any);
          public get value(): any;
  
          
    /** The value to display when the cell is in edit mode. */
    public set editValue(value: any);
          public get editValue(): any;
  
          
    /** Indicates whether the cell is currently selected. It is false, if the sell is not selected, and true, if it is. */
    public set selected(value: boolean);
          public get selected(): boolean;
  
          
    /** Indicates whether the cell is currently active (focused). */
    public set active(value: boolean);
          public get active(): boolean;
  
          
    /** Indicates whether the cell can be edited. */
    public set editable(value: boolean);
          public get editable(): boolean;
  
          
    /** Indicates whether the cell is currently in edit mode. */
    public set editMode(value: boolean);
          public get editMode(): boolean;
  
          
    /** Represents the column that the cell belongs to. */
    public set column(value: IgcColumnComponent);
          public get column(): IgcColumnComponent;
  
          
    /* blazorCSSuppress */
    /** Represents the row that the cell belongs to */
    public set row(value: IgcRowType);
          public get row(): IgcRowType;
  
          
    /** Represents the grid instance containing the cell */
    public set grid(value: IgcGridBaseDirective);
          public get grid(): IgcGridBaseDirective;
  
          
    /** Optional; An object identifying the cell. It contains rowID, columnID, and rowIndex of the cell. */
    public id?: { rowID: any; columnID: number; rowIndex: number; };
  
          
    /** Optional; The `cellID` is the unique key, used to identify the cell */
    public cellID?: any;
  
          
    /**
     * Optional; An object representing the validation state of the cell.
     * Whether it's valid or invalid, and if it has errors
     */
    public validation?: IgcGridValidationState;
  
          
    public readonly?: boolean;
  
          
    /** An optional title to display for the cell */
    public title?: any;
  
          
    /** The CSS width of the cell as a string. */
    public set width(value: string);
          public get width(): string;
  
          
    /** The index of the column that the cell belongs to. It counts only the visible (not hidden) columns */
    public visibleColumnIndex?: number;
  
            
    /** A method definition to update the value of the cell. */
    public update(value: any): void;

            
    /** A method definition to start or end the edit mode of the cell. It takes a boolean value as an argument*/
    public setEditMode?(value: boolean): void;

            
    /**
     * Optional;
     * A method definition to calculate the size of the cell to fit the content
     * The method can be used to calculate the size of the cell with the longest content and resize all cells to that size
     */
    public calculateSizeToFit?(range: any): number;

    }


        