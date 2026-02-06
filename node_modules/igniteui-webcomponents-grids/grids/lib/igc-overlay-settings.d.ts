
import { Point } from './common';
                import { IgcPositionStrategy } from './igc-position-strategy';
import { IgcScrollStrategy } from './igc-scroll-strategy';


/* jsonAPIPlainObject */



    export declare class IgcOverlaySettings
    {

          
    /** Attaching target for the component to show */
    public target?: HTMLElement | Point;
  
          
    /** Position strategy to use with these settings */
    public positionStrategy?: IgcPositionStrategy;
  
          
    /** Scroll strategy to use with these settings */
    public scrollStrategy?: IgcScrollStrategy;
  
          
    /** Set if the overlay should be in modal mode */
    public modal?: boolean;
  
          
    /** Set if the overlay should close on outside click */
    public closeOnOutsideClick?: boolean;
  
          
    /** Set if the overlay should close when `Esc` key is pressed */
    public closeOnEscape?: boolean;
  
    }


        