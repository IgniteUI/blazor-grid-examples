
import { IgcToggleViewCancelableEventArgs } from './igc-toggle-view-cancelable-event-args';
import { IgcToggleViewEventArgs } from './igc-toggle-view-event-args';
import { IgcColumnToggledEventArgs } from './igc-column-toggled-event-args';
import { IgcOverlaySettings } from './igc-overlay-settings';
import { EventEmitterMixin, LitElement, Constructor, AbstractConstructor } from './common';




/* blazorInclude */
/* blazorElement */
/* blazorIndirectRender */
/* blazorAlternateBaseType: GridToolbarBaseAction */
/**
 * Base class for the pinning/hiding column and exporter actions.
 *
 * @hidden @internal
 */

    export declare abstract class IgcBaseToolbarDirective extends EventEmitterMixin<IgcBaseToolbarDirectiveEventMap, Constructor<LitElement>>(LitElement)

    {

          
    /**
     * Sets the height of the column list in the dropdown.
     */
    public set columnListHeight(value: string);
          public get columnListHeight(): string;
  
          

    /**
     * Title text for the column action component
     */
    public set title(value: string);
          public get title(): string;
  
          

    /**
     * The placeholder text for the search input.
     */
    public set prompt(value: string);
          public get prompt(): string;
  
          

    /**
     * Sets overlay settings
     */
    public set overlaySettings(value: IgcOverlaySettings);
          public get overlaySettings(): IgcOverlaySettings;
  
    }

export declare interface IgcBaseToolbarDirectiveEventMap {
            
        		    /**
		     * Emits an event before the toggle container is opened.
		     */
opening: CustomEvent<IgcToggleViewCancelableEventArgs>;

        		    /**
		     * Emits an event after the toggle container is opened.
		     */
opened: CustomEvent<IgcToggleViewEventArgs>;

        		    /**
		     * Emits an event before the toggle container is closed.
		     */
closing: CustomEvent<IgcToggleViewEventArgs>;

        		    /**
		     * Emits an event after the toggle container is closed.
		     */
closed: CustomEvent<IgcToggleViewEventArgs>;

        		    /**
		     * Emits when after a column's checked state is changed
		     */
columnToggle: CustomEvent<IgcColumnToggledEventArgs>;

}
        