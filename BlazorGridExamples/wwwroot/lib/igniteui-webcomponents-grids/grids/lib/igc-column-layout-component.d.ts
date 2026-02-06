
import { IgcColumnGroupComponent } from './igc-column-group-component';
import { IgcColumnComponentEventMap } from './igc-column-component';




/* blazorIndirectRender */
/* blazorElement */
/* omitModule */
/* wcElementTag: igc-column-layout */
/* additionalIdentifier: Children.Field */
/* jsonAPIManageCollectionInMarkup */
/**
 * Column layout for declaration of Multi-row Layout
 *
 * @igxParent IgxGridComponent
 */

    export declare class IgcColumnLayoutComponent extends IgcColumnGroupComponent
    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

                
    /**
     * Gets the width of the column layout.
     * ```typescript
     * let columnGroupWidth = this.columnGroup.width;
     * ```
     *
     * @memberof IgxColumnGroupComponent
     */
    public get width(): any;
        
                

    /**
     * Gets the column visible index.
     * If the column is not visible, returns `-1`.
     * ```typescript
     * let visibleColumnIndex =  this.column.visibleIndex;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public get visibleIndex(): number;
        
    }

export type IgcColumnLayoutComponentEventMap = IgcColumnComponentEventMap
        