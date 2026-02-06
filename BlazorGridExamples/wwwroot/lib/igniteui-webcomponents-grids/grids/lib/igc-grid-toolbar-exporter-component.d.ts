
import { IgcBaseToolbarDirective } from './igc-base-toolbar-directive';
import { IgcExporterEventArgs } from './igc-exporter-event-args';
import { GridToolbarExporterType } from './grid-toolbar-exporter-type';
import { EventEmitterMixin, LitElement, Constructor, AbstractConstructor } from './common';
import { IgcBaseToolbarDirectiveEventMap } from './igc-base-toolbar-directive';





/* blazorElement */
/* wcElementTag: igc-grid-toolbar-exporter */
/* blazorIndirectRender */
/* jsonAPIManageItemInMarkup */
/* singleInstanceIdentifier */
/**
 * Provides a pre-configured exporter component for the grid.
 *
 * @remarks
 * This component still needs the actual exporter service(s) provided in the DI chain
 * in order to export something.
 *
 * @igxModule IgxGridToolbarModule
 * @igxParent IgxGridToolbarComponent, IgxGridToolbarActionsComponent
 *
 */

    export declare class IgcGridToolbarExporterComponent extends EventEmitterMixin<IgcGridToolbarExporterComponentEventMap, AbstractConstructor<IgcBaseToolbarDirective>>(IgcBaseToolbarDirective)

    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          

    /**
     * Show entry for CSV export.
     */
    public set exportCSV(value: boolean);
          public get exportCSV(): boolean;
  
          

    /**
     * Show entry for Excel export.
     */
    public set exportExcel(value: boolean);
          public get exportExcel(): boolean;
  
          

    /**
     * The name for the exported file.
     */
    public set filename(value: string);
          public get filename(): string;
  
            

    /* alternateName: exportGrid */
    /**
     * Export the grid's data
     * @param type File type to export
     */
    public export(type: GridToolbarExporterType): void;

    }

export declare interface IgcGridToolbarExporterComponentEventMap extends IgcBaseToolbarDirectiveEventMap {
            
        		    /**
		     * Emitted when starting an export operation. Re-emitted additionally
		     * by the grid itself.
		     */
exportStarted: CustomEvent<IgcExporterEventArgs>;

        		    /**
		     * Emitted on successful ending of an export operation.
		     */
exportEnded: CustomEvent<void>;

}
        