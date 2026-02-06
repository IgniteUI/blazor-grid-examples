
import { IgcPivotDimension } from './igc-pivot-dimension';
import { GridColumnDataType } from './grid-column-data-type';
import { IgcGridResourceStrings } from './igc-grid-resource-strings';
import { IgcPivotDateDimensionOptions } from './igc-pivot-date-dimension-options';




/* blazorAlternateBaseType: PivotDimension */
/* alternateBaseType: PivotDimension */
// Equals to pretty much this configuration:
// {
//     member: () => 'All Periods',
//     enabled: true,
//     fieldName: 'AllPeriods',
//     childLevel: {
//         fieldName: 'Years',
//         member: (rec) => {
//             const recordValue = rec['Date'];
//             return recordValue ? (new Date(recordValue)).getFullYear().toString() : rec['Years'];
//         },
//         enabled: true,
//         childLevel: {
//                 member: (rec) => {
//                     const recordValue = rec['Date'];
//                     return recordValue ? new Date(recordValue).toLocaleString('default', { month: 'long' }) : rec['Months'];
//                 },
//                 enabled: true,
//                 fieldName: 'Months',
//                 childLevel: {
//                         member: 'Date',
//                         fieldName:'Date',
//                         enabled: true
//                     }
//             }
//     }
// },

    export declare class IgcPivotDateDimension extends IgcPivotDimension
    {

          
    /** Enables/Disables a particular dimension from pivot structure. */
    public set enabled(value: boolean);
          public get enabled(): boolean;
  
          

    /**
     * Gets/Sets data type
     */
    public dataType?: GridColumnDataType;
  
          

    /**
     * Gets/Sets the resource strings.
     *
     * @remarks
     * By default it uses EN resources.
     */
    public set resourceStrings(value: IgcGridResourceStrings);
          public get resourceStrings(): IgcGridResourceStrings;
  
          

    /**
     * Gets/Sets the base dimension that is used by this class to determine the other dimensions and their values.
     * Having base dimension set is required in order for the Date Dimensions to show.
     */
    public set baseDimension(value: IgcPivotDimension);
          public get baseDimension(): IgcPivotDimension;
  
          

    /**
     * Gets/Sets the options for the predefined date dimensions whether to show quarter, years and etc.
     */
    public set options(value: IgcPivotDateDimensionOptions);
          public get options(): IgcPivotDateDimensionOptions;
  
          
    public displayName: string;
  
    constructor(inBaseDimension?: IgcPivotDimension, inOptions?: IgcPivotDateDimensionOptions);

    }


        