
import { IgcGroupByRecord } from './igc-group-by-record';
import { IgcSummaryResult } from './igc-summary-result';




/* blazorCSSuppress */

    export declare class IgcSummaryOperand
    {

            
    /**
     * Counts all the records in the data source.
     * If filtering is applied, counts only the filtered records.
     * ```typescript
     * IgxSummaryOperand.count(dataSource);
     * ```
     *
     * @memberof IgxSummaryOperand
     */
    public static count(data: any[]): number;

            
    /**
     * Executes the static `count` method and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomSummary extends IgxSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data: any[], allData: any[], fieldName: string, groupRecord: IGroupByRecord): IgxSummaryResult[] {
     *     const result = [];
     *     result.push({
     *       key: "test",
     *       label: "Test",
     *       summaryResult: IgxSummaryOperand.count(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomSummary;
     * ```
     *
     * @memberof IgxSummaryOperand
     */
    public operate(data?: any[], _allData?: any[], _fieldName?: string, _groupRecord?: IgcGroupByRecord): IgcSummaryResult[];

    }


        