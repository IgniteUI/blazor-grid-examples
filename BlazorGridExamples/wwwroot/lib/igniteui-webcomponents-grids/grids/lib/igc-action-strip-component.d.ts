
import { IgcGridActionsBaseDirective } from './igc-grid-actions-base-directive';
import { IgcActionStripResourceStrings } from './igc-action-strip-resource-strings';




/* blazorElement */
/* jsonAPIManageItemInMarkup */
/* jsonAPIManageCollectionInMarkup */
/* wcElementTag: igc-action-strip */
/* blazorIndirectRender */
/* singleInstanceIdentifier */
/* contentParent: GridBaseDirective */
/* contentParent: RowIsland */
/* contentParent: HierarchicalGrid */
/**
 * Action Strip provides templatable area for one or more actions.
 *
 * @igxModule IgxActionStripModule
 *
 * @igxTheme igx-action-strip-theme
 *
 * @igxKeywords action, strip, actionStrip, pinning, editing
 *
 * @igxGroup Data Entry & Display
 *
 * @igxParent IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent, *
 *
 * @remarks
 * The Ignite UI Action Strip is a container, overlaying its parent container,
 * and displaying action buttons with action applicable to the parent component the strip is instantiated or shown for.
 *
 * @example
 * ```html
 * <igx-action-strip #actionStrip>
 *     <igx-icon (click)="doSomeAction()"></igx-icon>
 * </igx-action-strip>
 */

    export declare class IgcActionStripComponent extends HTMLElement
    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          


    /* blazorInclude */
    /* contentChildren */
    /* blazorTreatAsCollection */
    /* blazorCollectionName: GridActionsBaseDirectiveCollection */
    /**
     * ActionButton as ContentChildren inside the Action Strip
     *
     * @hidden
     * @internal
     */
    public set actionButtons(value: IgcGridActionsBaseDirective[]);
          public get actionButtons(): IgcGridActionsBaseDirective[];
  
          

    /**
     * Gets/Sets the visibility of the Action Strip.
     * Could be used to set if the Action Strip will be initially hidden.
     *
     * @example
     * ```html
     *  <igx-action-strip [hidden]="false">
     * ```
     */
    public set hidden(value: boolean);
          public get hidden(): boolean;
  
          


    /**
     * Gets/Sets the resource strings.
     *
     * @remarks
     * By default it uses EN resources.
     */
    public set resourceStrings(value: IgcActionStripResourceStrings);
          public get resourceStrings(): IgcActionStripResourceStrings;
  
            

    /**
     * Showing the Action Strip and appending it the specified context element.
     *
     * @param context
     * @example
     * ```typescript
     * this.actionStrip.show(row);
     * ```
     */
    public show(context?: any): void;

            

    /**
     * Hiding the Action Strip and removing it from its current context element.
     *
     * @example
     * ```typescript
     * this.actionStrip.hide();
     * ```
     */
    public hide(): void;

    }


        