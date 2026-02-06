
import { ValidationStatus } from './validation-status';
import { IgcValidationErrors } from './igc-validation-errors';


/* jsonAPIPlainObject */


/**
 * Interface representing the validation state of a grid.
 * - status: The validation status ('VALID' or 'INVALID').
 * - errors: The validation errors if any.
 */

    export declare class IgcGridValidationState
    {

          
    public set status(value: ValidationStatus);
          public get status(): ValidationStatus;
  
          
    public errors?: IgcValidationErrors;
  
    }


        