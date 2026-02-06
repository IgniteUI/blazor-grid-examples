
import { ValidationStatus } from './validation-status';
import { IgcGridBaseDirective } from './igc-grid-base-directive';




/**
 * Interface representing the event arguments for the grid validation status change event.
 * - status: The validation status ('VALID' or 'INVALID').
 * - owner: The grid instance that owns the validation state.
 */

    export declare class IgcGridValidationStatusEventArgs
    {

        
    public status: ValidationStatus;

        
    public owner: IgcGridBaseDirective;

    }


        