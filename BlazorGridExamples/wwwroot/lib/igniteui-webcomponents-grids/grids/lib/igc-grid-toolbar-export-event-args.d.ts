
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcGridBaseDirective } from './igc-grid-base-directive';
import { IgcBaseExporter } from './igc-base-exporter';
import { IgcExporterOptionsBase } from './igc-exporter-options-base';




/* jsonAPIPlainObject */
/*  tsPlainInterface */
/**
 * Represents the arguments for the grid toolbar export event.
 * It provides information about the grid instance, exporter service, export options,
 * and allows the event to be canceled.
 */

    export declare class IgcGridToolbarExportEventArgs extends IgcBaseEventArgs
    {

        
    /** `grid` represents a reference to the instance of the grid te event originated from */
    public grid: IgcGridBaseDirective;

        
    /**
     * The `exporter` is a base service.
     * The type (an abstract class `IgxBaseExporter`) has it's own properties and methods
     * It is used to define the format and options of the export, the exported element
     * and methods for preparing the data from the elements for exporting
     */
    public exporter: IgcBaseExporter;

        
    /**
     * Represents the different settings, that can be given to an export
     * The type (an abstract class `IgxExporterOptionsBase`) has properties for column settings
     * (whether they should be ignored) as well as method for generating a file name
     */
    public options: IgcExporterOptionsBase;

        
    /**
     * `cancel` returns whether the event has been intercepted and stopped
     * If the value becomes "true", it returns/exits from the method, instantiating the interface
     */
    public cancel: boolean;

    }


        