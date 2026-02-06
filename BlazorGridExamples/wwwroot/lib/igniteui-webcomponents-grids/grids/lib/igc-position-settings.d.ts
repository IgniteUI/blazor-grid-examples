
import { HorizontalAlignment } from './horizontal-alignment';
import { VerticalAlignment } from './vertical-alignment';
import { IgcSize } from './igc-size';


/* jsonAPIPlainObject */



    export declare class IgcPositionSettings
    {

          
    /** Direction in which the component should show */
    public horizontalDirection?: HorizontalAlignment;
  
          
    /** Direction in which the component should show */
    public verticalDirection?: VerticalAlignment;
  
          
    /** Target's starting point */
    public horizontalStartPoint?: HorizontalAlignment;
  
          
    /** Target's starting point */
    public verticalStartPoint?: VerticalAlignment;
  
          
    /** The size up to which element may shrink when shown in elastic position strategy */
    public minSize?: IgcSize;
  
          
    /** The offset of the element from the target in pixels */
    public offset?: number;
  
    }


        