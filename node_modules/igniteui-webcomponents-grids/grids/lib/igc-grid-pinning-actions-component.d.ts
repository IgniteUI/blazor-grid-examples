
import { IgcGridActionsBaseDirective } from './igc-grid-actions-base-directive';




/* blazorElement */
/* wcElementTag: igc-grid-pinning-actions */
/* blazorIndirectRender */
/* singleInstanceIdentifier */
/**
 * Grid Pinning Actions for the Action Strip
 *
 * @igxParent IgxActionStripComponent
 */

    export declare class IgcGridPinningActionsComponent extends IgcGridActionsBaseDirective
    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

            

    /**
     * Pin the row according to the context.
     *
     * @example
     * ```typescript
     * this.gridPinningActions.pin();
     * ```
     */
    public pin(evt?: any): void;

            

    /**
     * Unpin the row according to the context.
     *
     * @example
     * ```typescript
     * this.gridPinningActions.unpin();
     * ```
     */
    public unpin(evt?: any): void;

            

    public scrollToRow(evt: any): void;

    }


        