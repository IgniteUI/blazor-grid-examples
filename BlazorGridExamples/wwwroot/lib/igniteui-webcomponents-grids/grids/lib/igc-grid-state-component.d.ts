
import { IgcGridStateBaseDirective } from './igc-grid-state-base-directive';
import { IgcGridStateInfo } from './igc-grid-state-info';
import { EventEmitterMixin, LitElement, Constructor, AbstractConstructor } from './common';




/* blazorElement */
/* wcElementTag: igc-grid-state */
/* blazorIndirectRender */
/* singleInstanceIdentifier */
/* contentParent: GridBaseDirective */
/* contentParent: HierarchicalGrid */
/* jsonAPIManageCollectionInMarkup */
/**
 * State component allows saving and restoring the state of the grid features.
 * @igxParent IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent, IgxPivotGridComponent, *
 */

    export declare class IgcGridStateComponent extends EventEmitterMixin<IgcGridStateComponentEventMap, Constructor<IgcGridStateBaseDirective>>(IgcGridStateBaseDirective)

    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

            

    /**
     * Restores grid features' state based on the IGridStateInfo object passed as an argument.
     * @param state object to restore state from.
     * @param feature string or array of strings determining the features to be added in the state. If skipped, all features are added.
     */
    public applyState(state: IgcGridStateInfo, features?: string[]): void;

            

    /**
     * Restores grid features' state based on the serialized IGridState object passed as an argument.
     * @param state string to restore state from.
     * @param feature string or array of strings determining the features to be added in the state. If skipped, all features are added.
     */
    public applyStateFromString(state: string, features?: string[]): void;

            

    /**
     * Gets the state of a feature or states of all grid features, unless a certain feature is disabled through the `options` property.
     *
     * @param feature string or array of strings determining the features to be added in the state. If skipped, all features are added.
     * @returns The state object.
     */
    public getState(features?: string[]): IgcGridStateInfo;

            

    /**
     * Gets the state of a feature or states of all grid features, unless a certain feature is disabled through the `options` property.
     *
     * @param feature array of strings determining the features to be added in the state. If skipped, all features are added.
     * @returns Returns the serialized to JSON string IGridStateInfo object.
     */
    public getStateAsString(features?: string[]): string;

    }

export declare interface IgcGridStateComponentEventMap {
            
        		    /**
		     *  Event emitted when set state is called with a string.
		     * Returns the parsed state object so that it can be further modified before applying to the grid.
		     */
stateParsed: CustomEvent<IgcGridStateInfo>;

}
        