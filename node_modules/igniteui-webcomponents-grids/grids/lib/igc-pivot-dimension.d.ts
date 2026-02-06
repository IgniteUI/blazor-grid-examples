
import { IgcFilteringExpressionsTree } from './igc-filtering-expressions-tree';
import { SortingDirection } from './sorting-direction';
import { GridColumnDataType } from './grid-column-data-type';


/* jsonAPIPlainObject */


/* blazorElement */
/* marshalByValue */
/**
* Configuration of a pivot dimension.
*/

    export declare class IgcPivotDimension
    {

          
    /** Allows defining a hierarchy when multiple sub groups need to be extracted from single member. */
    public childLevel?: IgcPivotDimension;
  
          
    /** Unique member to extract related data field value or the result of the memberFunction. */
    public set memberName(value: string);
          public get memberName(): string;
  
          

    /* csTreatAsEvent: MemberFunctionHandler */
    /* blazorOnlyScript */
    /** Function that extracts the value */
    public memberFunction?: any;
  
          
    /** Display name to show instead of the field name of this value. **/
    public displayName?: string;
  
          
    /** Enables/Disables a particular dimension from pivot structure. */
    public set enabled(value: boolean);
          public get enabled(): boolean;
  
          
    /**
     * A predefined or defined via the `igxPivotSelector` filter expression tree for the current dimension to be applied in the filter pipe.
     * */
    public filter?: IgcFilteringExpressionsTree;
  
          
    /** Enable/disable sorting for a particular dimension. True by default. */
    public sortable?: boolean;
  
          
    /**
     * The sorting direction of the current dimension. Determines the order in which the values will appear in the related dimension.
     */
    public sortDirection?: SortingDirection;
  
          
    /**
     * The dataType of the related data field.
     */
    public dataType?: GridColumnDataType;
  
          
    /** The width of the dimension cells to be rendered.Can be pixel, % or "auto". */
    public width?: string;
  
          
    /** Level of the dimension. */
    public level?: number;
  
          
    public horizontalSummary?: boolean;
  
    }


        