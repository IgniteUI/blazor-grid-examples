
import { IgcBaseExporter } from './igc-base-exporter';
import { IgcExporterOptionsBase } from './igc-exporter-options-base';
import { IgcGridBaseDirective } from './igc-grid-base-directive';




/* jsonAPIComplexObject */
/* wcAlternateName: ExporterEventArgs */

    export declare class IgcExporterEventArgs
    {

          
    public set exporter(value: IgcBaseExporter);
          public get exporter(): IgcBaseExporter;
  
          
    /* alternateType: ExporterOptionsBase */
    public set options(value: IgcExporterOptionsBase);
          public get options(): IgcExporterOptionsBase;
  
          
    public set grid(value: IgcGridBaseDirective);
          public get grid(): IgcGridBaseDirective;
  
          
    public set cancel(value: boolean);
          public get cancel(): boolean;
  
    }


        