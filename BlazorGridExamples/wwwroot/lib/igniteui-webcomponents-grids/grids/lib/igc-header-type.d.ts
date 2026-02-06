
import { IgcColumnComponent } from './igc-column-component';
import { SortingDirection } from './sorting-direction';


/* jsonAPIPlainObject */


/**
 * Interface representing a header cell in the grid. It is essentially the blueprint to a header cell object.
 * Contains definitions of properties, relevant to the header
 */

    export declare class IgcHeaderType
    {

          
    /** The column that the header cell represents. */
    public set column(value: IgcColumnComponent);
          public get column(): IgcColumnComponent;
  
          
    /** Indicates whether the column is currently sorted. */
    public set sorted(value: boolean);
          public get sorted(): boolean;
  
          
    /** Indicates whether the cell can be selected */
    public set selectable(value: boolean);
          public get selectable(): boolean;
  
          
    /** Indicates whether the cell is currently selected */
    public set selected(value: boolean);
          public get selected(): boolean;
  
          
    /** Indicates whether the column header is a title cell. */
    public set title(value: boolean);
          public get title(): boolean;
  
          
    /** Represents the sorting direction of the column (ascending, descending or none). */
    public set sortDirection(value: SortingDirection);
          public get sortDirection(): SortingDirection;
  
    }


        