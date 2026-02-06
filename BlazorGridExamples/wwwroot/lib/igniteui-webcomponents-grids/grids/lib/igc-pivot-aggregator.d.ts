
import { PivotAggregationType } from './pivot-aggregation-type';


/* jsonAPIPlainObject */


/* marshalByValue */
/**
* Interface describing a IPivotAggregator class.
* Used for specifying custom aggregator lists.
*/

    export declare class IgcPivotAggregator
    {

          
    /** Aggregation unique key. */
    public set key(value: string);
          public get key(): string;
  
          
    /** Aggregation label to show in the UI. */
    public set label(value: string);
          public get label(): string;
  
          
    /**
     * Aggregation name that will be used from a list of predefined aggregations.
     * If not set will use the specified aggregator function.
     */
    public aggregatorName?: PivotAggregationType;
  
          

    /* blazorAlternateType: AggregatorEventHandler */
    /* blazorOnlyScript */
    /**
     * Aggregator function can be a custom implementation of `PivotAggregation`, or
     * use predefined ones from `IgxPivotAggregate` and its variants.
     */
    public aggregator?: any;
  
    }


        