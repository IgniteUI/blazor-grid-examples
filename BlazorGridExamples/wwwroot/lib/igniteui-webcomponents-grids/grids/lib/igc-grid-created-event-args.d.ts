
import { IgcBaseEventArgs } from './igc-base-event-args';
import { IgcRowIslandComponent } from './igc-row-island-component';
import { IgcHierarchicalGridComponent } from './igc-hierarchical-grid-component';






    export declare class IgcGridCreatedEventArgs extends IgcBaseEventArgs
    {

        
    public owner: IgcRowIslandComponent;

        
    public parentID: any;

        
    public grid: IgcHierarchicalGridComponent;

        
    public parentRowData?: any;

    }


        