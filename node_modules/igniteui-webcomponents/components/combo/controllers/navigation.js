import { addKeybindings, altKey, arrowDown, arrowUp, endKey, enterKey, escapeKey, homeKey, shiftKey, spaceBar, tabKey, } from '../../common/controllers/key-bindings.js';
export class ComboNavigationController {
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
        this.combo.requestUpdate();
    }
    get input() {
        return this._config.input.value;
    }
    get searchInput() {
        return this._config.search.value;
    }
    get list() {
        return this._config.list.value;
    }
    get _firstItem() {
        return this.state.dataState.findIndex((rec) => !rec.header);
    }
    get _lastItem() {
        return this.state.dataState.length - 1;
    }
    async _hide() {
        return await this.combo._hide(true);
    }
    async _show() {
        return await this.combo._show(true);
    }
    _toggleSelection(index) {
        this.combo.toggleSelect(index);
    }
    _select(index) {
        this.combo.selectByIndex(index);
    }
    _scrollToActive(behavior) {
        this.list.element(this.active)?.scrollIntoView({
            block: 'center',
            behavior: behavior ?? 'auto',
        });
        this.list.requestUpdate();
    }
    _getNearestItem(start, delta) {
        let index = start;
        const items = this.state.dataState;
        while (items[index + delta]?.header) {
            index += delta;
        }
        index += delta;
        return index >= 0 && index < items.length ? index : -1;
    }
    _getNextItem(delta) {
        const next = this._getNearestItem(this._active, delta);
        if (next === -1 && this.active === this._firstItem) {
            this.searchInput.checkVisibility()
                ? this.searchInput.focus()
                : this._onEscape();
        }
        this.active = next;
    }
    constructor(combo, state, config) {
        this.combo = combo;
        this.state = state;
        this._active = -1;
        this._onSpace = () => {
            if (this._active === -1) {
                return;
            }
            const item = this.state.dataState[this._active];
            if (!item.header) {
                this._toggleSelection(this._active);
            }
        };
        this._onEnter = async () => {
            if (this._active === -1) {
                return;
            }
            const item = this.state.dataState[this._active];
            if (!item.header && this.combo.singleSelect) {
                this._select(this.active);
            }
            if (await this._hide()) {
                this.input.select();
                this.combo.focus();
            }
        };
        this._onTab = async ({ shiftKey }) => {
            if (this.combo.open) {
                if (shiftKey) {
                    this.combo.focus();
                }
                await this._hide();
            }
        };
        this._onEscape = async () => {
            if (!this.combo.open) {
                this.combo.clearSelection();
            }
            if (await this._hide()) {
                this.input.focus();
            }
        };
        this._onMainInputArrowDown = async () => {
            if (!this.combo.open && !(await this._show())) {
                return;
            }
            if (this.combo.singleSelect) {
                this._onSearchArrowDown();
            }
        };
        this._onSearchArrowDown = () => {
            this.list.focus();
            this._onArrowDown();
        };
        this._onHome = () => {
            this.active = this._firstItem;
            this._scrollToActive();
        };
        this._onEnd = () => {
            this.active = this._lastItem;
            this._scrollToActive();
        };
        this._onArrowUp = () => {
            this._getNextItem(-1);
            this._scrollToActive();
        };
        this._onArrowDown = () => {
            this._getNextItem(1);
            this._scrollToActive();
        };
        this.combo.addController(this);
        this._config = config;
        const bindingDefaults = {
            triggers: ['keydownRepeat'],
        };
        const skip = () => this.combo.disabled;
        addKeybindings(this.combo, { skip, bindingDefaults })
            .set(tabKey, this._onTab, { preventDefault: false })
            .set([shiftKey, tabKey], this._onTab, {
            preventDefault: false,
        })
            .set(escapeKey, this._onEscape);
        addKeybindings(this.combo, {
            skip,
            ref: this._config.input,
            bindingDefaults,
        })
            .set(arrowUp, async () => await this._hide())
            .set([altKey, arrowDown], this._onMainInputArrowDown)
            .set(arrowDown, this._onMainInputArrowDown)
            .set(enterKey, this._onEnter);
        addKeybindings(this.combo, {
            skip,
            ref: this._config.search,
            bindingDefaults,
        })
            .set(arrowUp, this._onEscape)
            .set(arrowDown, this._onSearchArrowDown);
        addKeybindings(this.combo, {
            skip,
            ref: this._config.list,
            bindingDefaults,
        })
            .set(arrowUp, this._onArrowUp)
            .set(arrowDown, this._onArrowDown)
            .set(homeKey, this._onHome)
            .set(endKey, this._onEnd)
            .set(spaceBar, this._onSpace)
            .set(enterKey, this._onEnter);
    }
    hostDisconnected() {
        this._active = -1;
    }
}
//# sourceMappingURL=navigation.js.map