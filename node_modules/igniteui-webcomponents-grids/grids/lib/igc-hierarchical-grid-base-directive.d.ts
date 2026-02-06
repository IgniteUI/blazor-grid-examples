
import { IgcGridBaseDirective } from './igc-grid-base-directive';
import { IgcForOfState } from './igc-for-of-state';
import { EventEmitterMixin, LitElement, Constructor, AbstractConstructor } from './common';
import { IgcGridBaseDirectiveEventMap } from './igc-grid-base-directive';


/* wcSkipComponentSuffix */


/* blazorIndirectRender
   blazorComponent
   omitModule
   wcSkipComponentSuffix */

    export declare abstract class IgcHierarchicalGridBaseDirective extends EventEmitterMixin<IgcHierarchicalGridBaseDirectiveEventMap, AbstractConstructor<IgcGridBaseDirective>>(IgcGridBaseDirective)

    {

          
    /**
     * Gets/Sets the key indicating whether a row has children. If row has no children it does not render an expand indicator.
     *
     * @example
     * ```html
     * <igx-hierarchical-grid #grid [data]="localData" [hasChildrenKey]="'hasEmployees'">
     * </igx-hierarchical-grid>
     * ```
     */
    public set hasChildrenKey(value: string);
          public get hasChildrenKey(): string;
  
          

    /**
     * Gets/Sets whether the expand/collapse all button in the header should be rendered.
     *
     * @remarks
     * The default value is false.
     * @example
     * ```html
     * <igx-hierarchical-grid #grid [data]="localData" [showExpandAll]="true">
     * </igx-hierarchical-grid>
     * ```
     */
    public set showExpandAll(value: boolean);
          public get showExpandAll(): boolean;
  
          
    public set rootGrid(value: IgcGridBaseDirective);
          public get rootGrid(): IgcGridBaseDirective;
  
    }

export declare interface IgcHierarchicalGridBaseDirectiveEventMap extends IgcGridBaseDirectiveEventMap {
            
        		    /**
		     * Emitted when a new chunk of data is loaded from virtualization.
		     *
		     * @example
		     * ```typescript
		     *  <igx-hierarchical-grid [id]="'igx-grid-1'" [data]="Data" [autoGenerate]="true" (dataPreLoad)="handleEvent()">
		     *  </igx-hierarchical-grid>
		     * ```
		     */
dataPreLoad: CustomEvent<IgcForOfState>;

}
        