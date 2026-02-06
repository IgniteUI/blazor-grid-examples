
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcRowExportingEventArgs } from './igc-row-exporting-event-args';
import { IgcColumnExportingEventArgs } from './igc-column-exporting-event-args';
import { IgcExporterOptionsBase } from './igc-exporter-options-base';
import { EventEmitterMixin, LitElement, Constructor, AbstractConstructor } from './common';





    export declare abstract class IgcBaseExporter extends EventEmitterMixin<IgcBaseExporterEventMap, Constructor<LitElement>>(LitElement)

    {

            

    /* alternateName: exportGrid */
    /**
     * Method for exporting IgxGrid component's data.
     * ```typescript
     * this.exporterService.export(this.igxGridForExport, this.exportOptions);
     * ```
     *
     * @memberof IgxBaseExporter
     */
    public export(grid: any, options: IgcExporterOptionsBase): void;

            

    /**
     * Method for exporting any kind of array data.
     * ```typescript
     * this.exporterService.exportData(this.arrayForExport, this.exportOptions);
     * ```
     *
     * @memberof IgxBaseExporter
     */
    public exportData(data: any[], options: IgcExporterOptionsBase): void;

    }

export declare interface IgcBaseExporterEventMap {
            
        exportEnded: CustomEvent<IgcBaseEventArgs>;

        		    /**
		     * This event is emitted when a row is exported.
		     * ```typescript
		     * this.exporterService.rowExporting.subscribe((args: IRowExportingEventArgs) => {
		     * // put event handler code here
		     * });
		     * ```
		     *
		     * @memberof IgxBaseExporter
		     */
rowExporting: CustomEvent<IgcRowExportingEventArgs>;

        		    /**
		     * This event is emitted when a column is exported.
		     * ```typescript
		     * this.exporterService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
		     * // put event handler code here
		     * });
		     * ```
		     *
		     * @memberof IgxBaseExporter
		     */
columnExporting: CustomEvent<IgcColumnExportingEventArgs>;

}
        