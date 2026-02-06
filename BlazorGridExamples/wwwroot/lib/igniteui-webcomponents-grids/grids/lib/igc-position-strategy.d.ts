
import { IgcPositionSettings } from './igc-position-settings';


/* jsonAPIPlainObject */


/**
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/overlay-position)
 * Position strategies determine where to display the component in the provided IgxOverlayService.
 */

    export declare class IgcPositionStrategy
    {

          
    /**
     * PositionSettings to use when position the component in the overlay
     */
    public set settings(value: IgcPositionSettings);
          public get settings(): IgcPositionSettings;
  
            

    /**
     * Clone the strategy instance.
     * ```typescript
     * settings.positionStrategy.clone();
     * ```
     */
     public clone(): IgcPositionStrategy;

    }


        