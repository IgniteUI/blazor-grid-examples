
import { IgcPageCancellableEventArgs } from './igc-page-cancellable-event-args';
import { IgcPageEventArgs } from './igc-page-event-args';
import { IgcOverlaySettings } from './igc-overlay-settings';
import { IgcPaginatorResourceStrings } from './igc-paginator-resource-strings';
import { EventEmitterMixin, LitElement, Constructor, AbstractConstructor } from './common';




/* blazorElement */
/* mustUseNGParentAnchor */
/* wcElementTag: igc-paginator */
/* blazorIndirectRender */
/* singleInstanceIdentifier */
/* contentParent: GridBaseDirective */
/* contentParent: RowIsland */
/* contentParent: HierarchicalGrid */
/* jsonAPIManageCollectionInMarkup */
/**
 * Paginator component description
 * @igxParent IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent, IgxPivotGridComponent, *
 */

    export declare class IgcPaginatorComponent extends EventEmitterMixin<IgcPaginatorComponentEventMap, Constructor<LitElement>>(LitElement)

    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          

    /**
     * Total pages calculated from totalRecords and perPage
     */
    public set totalPages(value: number);
          public get totalPages(): number;
  
          

    /**
     * Gets/Sets the current page of the paginator.
     * The default is 0.
     * ```typescript
     * let page = this.paginator.page;
     * ```
     *
     * @memberof IgxPaginatorComponent
     */
    public set page(value: number);
          public get page(): number;
  
          

    /**
     * Gets/Sets the number of visible items per page in the paginator.
     * The default is 15.
     * ```typescript
     * let itemsPerPage = this.paginator.perPage;
     * ```
     *
     * @memberof IgxPaginatorComponent
     */
    public set perPage(value: number);
          public get perPage(): number;
  
          

    /**
     * Sets the total records.
     * ```typescript
     * let totalRecords = this.paginator.totalRecords;
     * ```
     *
     * @memberof IgxPaginatorComponent
     */
    public set totalRecords(value: number);
          public get totalRecords(): number;
  
          

    /**
     * Sets custom options in the select of the paginator
     * ```typescript
     * let options = this.paginator.selectOptions;
     * ```
     *
     * @memberof IgxPaginatorComponent
     */
    public set selectOptions(value: number[]);
          public get selectOptions(): number[];
  
          

    /**
     * Sets custom OverlaySettings.
     * ```html
     * <igx-paginator [overlaySettings] = "customOverlaySettings"></igx-paginator>
     * ```
     */
    public set overlaySettings(value: IgcOverlaySettings);
          public get overlaySettings(): IgcOverlaySettings;
  
          

    /* mustSetInCodePlatforms: WebComponents;Blazor;React */
    /**
     * An accessor that sets the resource strings.
     * By default it uses EN resources.
     */
    public set resourceStrings(value: IgcPaginatorResourceStrings);
          public get resourceStrings(): IgcPaginatorResourceStrings;
  
                

    /**
     * Returns if the current page is the last page.
     * ```typescript
     * const lastPage = this.paginator.isLastPage;
     * ```
     */
    public get isLastPage(): boolean;
        
                

    /**
     * Returns if the current page is the first page.
     * ```typescript
     * const lastPage = this.paginator.isFirstPage;
     * ```
     */
    public get isFirstPage(): boolean;
        
            

    /**
     * Goes to the next page of the `IgxPaginatorComponent`, if the paginator is not already at the last page.
     * ```typescript
     * this.paginator.nextPage();
     * ```
     *
     * @memberof IgxPaginatorComponent
     */
    public nextPage(): void;

            
    /**
     * Goes to the previous page of the `IgxPaginatorComponent`, if the paginator is not already at the first page.
     * ```typescript
     * this.paginator.previousPage();
     * ```
     *
     * @memberof IgxPaginatorComponent
     */
    public previousPage(): void;

            
    /**
     * Goes to the desired page index.
     * ```typescript
     * this.paginator.paginate(1);
     * ```
     *
     * @param val
     * @memberof IgxPaginatorComponent
     */
    public paginate(val: number): void;

    }

export declare interface IgcPaginatorComponentEventMap {
            
        		    /**
		     * Emitted when `perPage` property value of the paginator is changed.
		     *
		     * @example
		     * ```html
		     * <igx-paginator (perPageChange)="onPerPageChange($event)"></igx-paginator>
		     * ```
		     * ```typescript
		     * public onPerPageChange(perPage: number) {
		     *   this.perPage = perPage;
		     * }
		     * ```
		     */
perPageChange: CustomEvent<number>;

        		    /**
		     * Emitted after the current page is changed.
		     *
		     * @example
		     * ```html
		     * <igx-paginator (pageChange)="onPageChange($event)"></igx-paginator>
		     * ```
		     * ```typescript
		     * public onPageChange(page: number) {
		     *   this.currentPage = page;
		     * }
		     * ```
		     */
pageChange: CustomEvent<number>;

        		    /**
		     * Emitted before paging is performed.
		     *
		     * @remarks
		     * Returns an object consisting of the current and next pages.
		     * @example
		     * ```html
		     * <igx-paginator (paging)="pagingHandler($event)"></igx-paginator>
		     * ```
		     */
paging: CustomEvent<IgcPageCancellableEventArgs>;

        		    /**
		     * Emitted after paging is performed.
		     *
		     * @remarks
		     * Returns an object consisting of the previous and current pages.
		     * @example
		     * ```html
		     * <igx-paginator (pagingDone)="pagingDone($event)"></igx-paginator>
		     * ```
		     */
pagingDone: CustomEvent<IgcPageEventArgs>;

}
        