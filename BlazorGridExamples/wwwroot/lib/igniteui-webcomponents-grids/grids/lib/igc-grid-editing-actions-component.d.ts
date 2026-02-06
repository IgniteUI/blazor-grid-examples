
import { IgcGridActionsBaseDirective } from './igc-grid-actions-base-directive';





/* blazorElement */
/* wcElementTag: igc-grid-editing-actions */
/* blazorIndirectRender */
/* singleInstanceIdentifier */
/**
 * Grid Editing Actions for the Action Strip
 *
 * @igxParent IgxActionStripComponent
 */

    export declare class IgcGridEditingActionsComponent extends IgcGridActionsBaseDirective
    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          

    /**
     * An input to enable/disable action strip row adding button
     */
    public set addRow(value: boolean);
          public get addRow(): boolean;
  
          

    /**
     * An input to enable/disable action strip row editing button
     */
    public set editRow(value: boolean);
          public get editRow(): boolean;
  
          

    /**
    * An input to enable/disable action strip row deleting button
    */
    public set deleteRow(value: boolean);
          public get deleteRow(): boolean;
  
                

    public get hasChildren(): boolean;
        
          

    /**
     * An input to enable/disable action strip child row adding button
     */
    public set addChild(value: boolean);
          public get addChild(): boolean;
  
            

    /**
     * Enter row or cell edit mode depending the grid rowEditable option
     *
     * @example
     * ```typescript
     * this.gridEditingActions.startEdit();
     * ```
     */
    public startEdit(evt?: any): void;

    }


        