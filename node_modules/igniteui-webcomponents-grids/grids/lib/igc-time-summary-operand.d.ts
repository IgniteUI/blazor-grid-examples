
import { IgcSummaryOperand } from './igc-summary-operand';
import { IgcGroupByRecord } from './igc-group-by-record';
import { IgcSummaryResult } from './igc-summary-result';




/* blazorCSSuppress */
// @dynamic

    export declare class IgcTimeSummaryOperand extends IgcSummaryOperand
    {

            
    /**
     * Returns the latest time value in the data records. Compare only the time part of the date.
     * If filtering is applied, returns the latest time value in the filtered data records.
     * ```typescript
     * IgxTimeSummaryOperand.latestTime(data);
     * ```
     *
     * @memberof IgxTimeSummaryOperand
     */
    public static latestTime(data: any[]): void;

            

    /**
     * Returns the earliest time value in the data records. Compare only the time part of the date.
     * If filtering is applied, returns the earliest time value in the filtered data records.
     * ```typescript
     * IgxTimeSummaryOperand.earliestTime(data);
     * ```
     *
     * @memberof IgxTimeSummaryOperand
     */
    public static earliestTime(data: any[]): void;

            
    /**
     * @memberof IgxTimeSummaryOperand
     */
    public operate(data?: any[], allData?: any[], fieldName?: string, groupRecord?: IgcGroupByRecord): IgcSummaryResult[];

    }


        