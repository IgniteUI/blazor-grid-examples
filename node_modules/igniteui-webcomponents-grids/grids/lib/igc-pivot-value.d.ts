
import { IgcPivotAggregator } from './igc-pivot-aggregator';
import { GridColumnDataType } from './grid-column-data-type';


/* jsonAPIPlainObject */


/* marshalByValue */
/**
* Configuration of a pivot value aggregation.
*/

    export declare class IgcPivotValue
    {

          
    /** Unique member to extract related data field value for aggregations. */
    public set member(value: string);
          public get member(): string;
  
          
    /** Display name to show instead of member for the column header of this value. **/
    public displayName?: string;
  
          
    /**
     * Active aggregator definition with key, label and aggregator.
     */
    public set aggregate(value: IgcPivotAggregator);
          public get aggregate(): IgcPivotAggregator;
  
          
    /**
     * List of aggregates to show in aggregate drop-down.
     */
    public aggregateList?: IgcPivotAggregator[];
  
          
    /** Enables/Disables a particular value from pivot aggregation. */
    public set enabled(value: boolean);
          public get enabled(): boolean;
  
          
    /**  Allow conditionally styling of the IgxPivotGrid cells. */
    public styles?: any;
  
          
    /** Enables a data type specific template of the cells */
    public dataType?: GridColumnDataType;
  
          

    /* csTreatAsEvent: PivotValueFormatterEventHandler */
    /* blazorOnlyScript */
    /** Applies display format to cell values. */
    public formatter?: any;
  
    }


        