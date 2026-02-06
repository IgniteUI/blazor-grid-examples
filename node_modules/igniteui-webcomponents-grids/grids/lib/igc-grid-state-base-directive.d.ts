
import { IgcGridStateOptions } from './igc-grid-state-options';




/* blazorElement */
/* wcElementTag: igc-grid-state-base-directive */
/* blazorIndirectRender */

    export declare class IgcGridStateBaseDirective extends HTMLElement
    {

          

    /**
     *  An object with options determining if a certain feature state should be saved.
     * ```html
     * <igx-grid [igxGridState]="options"></igx-grid>
     * ```
     * ```typescript
     * public options = {selection: false, advancedFiltering: false};
     * ```
     */
    public set options(value: IgcGridStateOptions);
          public get options(): IgcGridStateOptions;
  
    }


        