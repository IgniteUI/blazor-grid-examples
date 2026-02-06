
import { IgcSummaryOperand } from './igc-summary-operand';
import { IgcGroupByRecord } from './igc-group-by-record';
import { IgcSummaryResult } from './igc-summary-result';




/* blazorCSSuppress */
// @dynamic

    export declare class IgcNumberSummaryOperand extends IgcSummaryOperand
    {

            
    /**
     * Returns the minimum numeric value in the provided data records.
     * If filtering is applied, returns the minimum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.min(data);
     * ```
     *
     * @memberof IgxNumberSummaryOperand
     */
    public static min(data: any[]): number;

            
    /**
     * Returns the maximum numeric value in the provided data records.
     * If filtering is applied, returns the maximum value in the filtered data records.
     * ```typescript
     * IgxNumberSummaryOperand.max(data);
     * ```
     *
     * @memberof IgxNumberSummaryOperand
     */
    public static max(data: any[]): number;

            
    /**
     * Returns the sum of the numeric values in the provided data records.
     * If filtering is applied, returns the sum of the numeric values in the data records.
     * ```typescript
     * IgxNumberSummaryOperand.sum(data);
     * ```
     *
     * @memberof IgxNumberSummaryOperand
     */
    public static sum(data: any[]): number;

            
    /**
     * Returns the average numeric value in the data provided data records.
     * If filtering is applied, returns the average numeric value in the filtered data records.
     * ```typescript
     * IgxSummaryOperand.average(data);
     * ```
     *
     * @memberof IgxNumberSummaryOperand
     */
    public static average(data: any[]): number;

            
    /**
     * Executes the static methods and returns `IgxSummaryResult[]`.
     * ```typescript
     * interface IgxSummaryResult {
     *   key: string;
     *   label: string;
     *   summaryResult: any;
     * }
     * ```
     * Can be overridden in the inherited classes to provide customization for the `summary`.
     * ```typescript
     * class CustomNumberSummary extends IgxNumberSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data: any[], allData: any[], fieldName: string, groupRecord: IGroupByRecord): IgxSummaryResult[] {
     *     const result = super.operate(data, allData, fieldName, groupRecord);
     *     result.push({
     *       key: "avg",
     *       label: "Avg",
     *       summaryResult: IgxNumberSummaryOperand.average(data)
     *     });
     *     result.push({
     *       key: 'mdn',
     *       label: 'Median',
     *       summaryResult: this.findMedian(data)
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomNumberSummary;
     * ```
     *
     * @memberof IgxNumberSummaryOperand
     */
    public operate(data?: any[], allData?: any[], fieldName?: string, groupRecord?: IgcGroupByRecord): IgcSummaryResult[];

    }


        