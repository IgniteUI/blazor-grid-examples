
import { IgcSummaryOperand } from './igc-summary-operand';
import { IgcGroupByRecord } from './igc-group-by-record';
import { IgcSummaryResult } from './igc-summary-result';




/* blazorCSSuppress */
// @dynamic

    export declare class IgcDateSummaryOperand extends IgcSummaryOperand
    {

            
    /**
     * Returns the latest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.latest(data);
     * ```
     *
     * @memberof IgxDateSummaryOperand
     */
    public static latest(data: any[]): void;

            
    /**
     * Returns the earliest date value in the data records.
     * If filtering is applied, returns the latest date value in the filtered data records.
     * ```typescript
     * IgxDateSummaryOperand.earliest(data);
     * ```
     *
     * @memberof IgxDateSummaryOperand
     */
    public static earliest(data: any[]): void;

            
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
     * class CustomDateSummary extends IgxDateSummaryOperand {
     *   constructor() {
     *     super();
     *   }
     *   public operate(data: any[], allData: any[], fieldName: string, groupRecord: IGroupByRecord): IgxSummaryResult[] {
     *     const result = super.operate(data, allData, fieldName, groupRecord);
     *     result.push({
     *       key: "deadline",
     *       label: "Deadline Date",
     *       summaryResult: this.calculateDeadline(data);
     *     });
     *     return result;
     *   }
     * }
     * this.grid.getColumnByName('ColumnName').summaries = CustomDateSummary;
     * ```
     *
     * @memberof IgxDateSummaryOperand
     */
    public operate(data?: any[], allData?: any[], fieldName?: string, groupRecord?: IgcGroupByRecord): IgcSummaryResult[];

    }


        