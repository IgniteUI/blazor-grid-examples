
import { IgcFilteringOperation } from './igc-filtering-operation';


/**
 * Provides base filtering operations
 * Implementations should be Singleton
 *
 * @export
 */

    export declare class IgcFilteringOperand
    {

          
    public set operations(value: IgcFilteringOperation[]);
          public get operations(): IgcFilteringOperation[];
  
            

    public static instance(): IgcFilteringOperand;

            

    /**
     * Returns an array of names of the conditions which are visible in the filtering UI
     */
    public conditionList(): string[];

            

    /**
     * Returns an instance of the condition with the specified name.
     *
     * @param name The name of the condition.
     */
    public condition(name: string): IgcFilteringOperation;

            

    /**
     * Adds a new condition to the filtering operations.
     *
     * @param operation The filtering operation.
     */
    public append(operation: IgcFilteringOperation): void;

    constructor();

    }


        