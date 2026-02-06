
import { IgcColumnComponent } from './igc-column-component';
import { IgcColumnTemplateContext } from './igc-column-template-context';
import { IgcRenderFunction } from './common';
import { IgcColumnComponentEventMap } from './igc-column-component';




/* blazorElement */
/* omitModule */
/* wcElementTag: igc-column-group */
/* additionalIdentifier: Children.Field */
/* jsonAPIManageCollectionInMarkup */
/* blazorIndirectRender */
/**
 * **Ignite UI for Angular Column Group**
 *
 * @igxParent IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent, IgxColumnGroupComponent, IgxRowIslandComponent
 */

    export declare class IgcColumnGroupComponent extends IgcColumnComponent
    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          

    /* blazorInclude */
    /* contentChildren */
    /* blazorTreatAsCollection */
    /* blazorCollectionName: ColumnCollection */
    /* blazorCollectionItemName: Column */
    /* alternateType: HTMLCollection */
    /**
     * @deprecated Use the `childColumns` property instead.
     */
    public set children(value: HTMLCollection);
          public get children(): HTMLCollection;
  
          

    /**
     * Set if the column group is collapsible.
     * Default value is `false`
     * ```html
     *  <igx-column-group [collapsible] = "true"></igx-column-group>
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public set collapsible(value: boolean);
          public get collapsible(): boolean;
  
          

    /**
     * Set whether the group is expanded or collapsed initially.
     * Applied only if the collapsible property is set to `true`
     * Default value is `true`
     * ```html
     *  const state = false
     *  <igx-column-group [(expand)] = "state"></igx-column-group>
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public set expanded(value: boolean);
          public get expanded(): boolean;
  
                

    /**
     * Gets the column group `summaries`.
     * ```typescript
     * let columnGroupSummaries = this.columnGroup.summaries;
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public get summaries(): any;
        
                
    /**
     * Gets the column group `filters`.
     * ```typescript
     * let columnGroupFilters = this.columnGroup.filters;
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public get filters(): any;
        
                

    /**
     * Returns if the column group is selectable
     * ```typescript
     * let columnGroupSelectable = this.columnGroup.selectable;
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public get selectable(): boolean;
        
          

    /**
     * Allows you to define a custom template for expand/collapse indicator
     *
     * @memberof IgxColumnGroupComponent
     */
    public set collapsibleIndicatorTemplate(value: IgcRenderFunction<IgcColumnTemplateContext>);
          public get collapsibleIndicatorTemplate(): IgcRenderFunction<IgcColumnTemplateContext>;
  
                
    /**
     * Gets whether the column group is hidden.
     * ```typescript
     * let isHidden = this.columnGroup.hidden;
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public get hidden(): boolean;
        
                

    /**
     * Returns if the column group is selected.
     * ```typescript
     * let isSelected = this.columnGroup.selected;
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public get selected(): boolean;
        
                

    /**
     * A list containing all the child columns under this column (if any).
     * Empty without children or if this column is not Group or Layout.
     */
    public get childColumns(): IgcColumnComponent[];
        
                
    /**
     * Returns a boolean indicating if the column is a `ColumnGroup`.
     * ```typescript
     * let isColumnGroup =  this.columnGroup.columnGroup
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public get columnGroup(): boolean;
        
                
    /**
     * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
     * ```typescript
     * let columnGroup =  this.column.columnGroup;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public get columnLayout(): boolean;
        
                
    /**
     * Gets the width of the column group.
     * ```typescript
     * let columnGroupWidth = this.columnGroup.width;
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public get width(): string;
        
    }

export type IgcColumnGroupComponentEventMap = IgcColumnComponentEventMap
        