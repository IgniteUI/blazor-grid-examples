
import { IgcColumnState } from './igc-column-state';
import { IgcFilteringExpressionsTree } from './igc-filtering-expressions-tree';
import { IgcPagingState } from './igc-paging-state';
import { IgcSortingExpression } from './igc-sorting-expression';
import { IgcGroupingState } from './igc-grouping-state';
import { IgcGridSelectionRange } from './igc-grid-selection-range';
import { IgcPinningConfig } from './igc-pinning-config';
import { IgcGridStateCollection } from './igc-grid-state-collection';
import { IgcPivotConfiguration } from './igc-pivot-configuration';


/* jsonAPIPlainObject */


/* tsPlainInterface */
/* marshalByValue */

    export declare class IgcGridStateInfo
    {

          
    public columns?: IgcColumnState[];
  
          
    public filtering?: IgcFilteringExpressionsTree;
  
          
    public advancedFiltering?: IgcFilteringExpressionsTree;
  
          
    public paging?: IgcPagingState;
  
          
    public moving?: boolean;
  
          
    public sorting?: IgcSortingExpression[];
  
          
    public groupBy?: IgcGroupingState;
  
          
    public cellSelection?: IgcGridSelectionRange[];
  
          
    /* blazorPrimitiveValue */
    public rowSelection?: any[];
  
          
    public columnSelection?: string[];
  
          
    /* blazorPrimitiveValue */
    public rowPinning?: any[];
  
          
    public pinningConfig?: IgcPinningConfig;
  
          
    /* blazorPrimitiveValue */
    public expansion?: any[];
  
          
    public rowIslands?: IgcGridStateCollection[];
  
          
    public id?: string;
  
          
    public pivotConfiguration?: IgcPivotConfiguration;
  
    }


        