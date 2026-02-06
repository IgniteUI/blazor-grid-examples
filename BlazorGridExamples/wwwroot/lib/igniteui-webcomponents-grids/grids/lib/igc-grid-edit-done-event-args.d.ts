
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcColumnComponent } from './igc-column-component';
import { IgcGridBaseDirective } from './igc-grid-base-directive';




/** Represents event arguments related to grid editing completion. */

    export declare class IgcGridEditDoneEventArgs extends IgcBaseEventArgs
    {

        
    /**
     * @deprecated Use the `rowKey` property instead.
     */
    public rowID: any;

        
    /**
     * @deprecated Use the `rowKey` property instead.
     */
    public primaryKey: any;

        
    public rowKey: any;

        
    public cellID?: { rowID: any; columnID: any; rowIndex: number; };

        
    /**
     * `rowData` represents the updated/committed data of the row after the edit (newValue)
     * The only case rowData (of the current object) is used directly, is when there is no rowEditing or transactions enabled
     */
    public rowData: any;

        
    /**
     * Represents the previous (before editing) value of the edited cell.
     * It's used when the event has been stopped/exited.
     */
    public oldValue: any;

        
    /**
     * Optional
     * Represents the value, that is being entered in the edited cell
     * When there is no `newValue` and the event has ended, the value of the cell returns to the `oldValue`
     */
    public newValue?: any;

        
    /**
     * Optional
     * Represents the column information of the edited cell
     */
    public column?: IgcColumnComponent;

        
    /**
     * Optional
     * Represents the grid instance that owns the edit event.
     */
    public owner?: IgcGridBaseDirective;

        
    /**
     * Optional
     * Indicates if the editing consists of adding a new row
     */
    public isAddRow?: boolean;

        
    /**
     * Optional
     * Indicates if the new value would be valid.
     * It can be set to return the result of the methods for validation of the grid
     */
    public valid?: boolean;

    }


        