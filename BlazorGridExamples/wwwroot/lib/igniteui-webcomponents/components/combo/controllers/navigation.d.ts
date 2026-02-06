import type { Ref } from 'lit/directives/ref.js';
import type IgcInputComponent from '../../input/input.js';
import type IgcComboListComponent from '../combo-list.js';
import type { ComboHost } from '../types.js';
import type { DataController } from './data.js';
type ComboNavigationConfig = {
    /** The primary input of the combo component. */
    input: Ref<IgcInputComponent>;
    /** The search input of the combo component. */
    search: Ref<IgcInputComponent>;
    /** The combo virtualized dropdown list. */
    list: Ref<IgcComboListComponent>;
};
export declare class ComboNavigationController<T extends object> {
    protected combo: ComboHost<T>;
    protected state: DataController<T>;
    private _active;
    private _config;
    get active(): number;
    set active(value: number);
    get input(): IgcInputComponent;
    get searchInput(): IgcInputComponent;
    get list(): IgcComboListComponent;
    protected get _firstItem(): number;
    protected get _lastItem(): number;
    protected _hide(): Promise<boolean>;
    protected _show(): Promise<boolean>;
    protected _toggleSelection(index: number): void;
    protected _select(index: number): void;
    private _onSpace;
    private _onEnter;
    private _onTab;
    private _onEscape;
    private _onMainInputArrowDown;
    private _onSearchArrowDown;
    private _onHome;
    private _onEnd;
    private _onArrowUp;
    private _onArrowDown;
    private _scrollToActive;
    private _getNearestItem;
    private _getNextItem;
    constructor(combo: ComboHost<T>, state: DataController<T>, config: ComboNavigationConfig);
    hostDisconnected(): void;
}
export {};
