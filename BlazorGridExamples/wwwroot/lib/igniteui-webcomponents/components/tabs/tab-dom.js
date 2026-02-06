import { getScaleFactor, isLTR, setStyles } from '../common/util.js';
class TabsHelpers {
    static { this.SCROLL_AMOUNT = 180; }
    get container() {
        return this._container.value;
    }
    get indicator() {
        return this._indicator.value;
    }
    get styleProperties() {
        return this._styleProperties;
    }
    get hasScrollButtons() {
        return this._hasScrollButtons;
    }
    get scrollButtonsDisabled() {
        return this._scrollButtonsDisabled;
    }
    get isLeftToRightChanged() {
        const isLeftToRight = isLTR(this._host);
        if (this._isLeftToRight !== isLeftToRight) {
            this._isLeftToRight = isLeftToRight;
            return true;
        }
        return false;
    }
    constructor(host, container, indicator) {
        this._styleProperties = {
            '--_tabs-count': '',
            '--_ig-tabs-width': '',
        };
        this._hasScrollButtons = false;
        this._scrollButtonsDisabled = { start: true, end: false };
        this._isLeftToRight = false;
        this._host = host;
        this._container = container;
        this._indicator = indicator;
    }
    setStyleProperties() {
        this._styleProperties = {
            '--_tabs-count': this._host.tabs.length.toString(),
            '--_ig-tabs-width': this.container
                ? `${this.container.getBoundingClientRect().width}px`
                : '',
        };
        this._host.requestUpdate();
    }
    setScrollSnap(type) {
        if (this.container) {
            this.container.style.setProperty('--_ig-tab-snap', type || 'unset');
        }
    }
    scrollTabs(direction) {
        if (!this.container) {
            return;
        }
        const factor = isLTR(this._host) ? 1 : -1;
        const amount = direction === 'start'
            ? -TabsHelpers.SCROLL_AMOUNT
            : TabsHelpers.SCROLL_AMOUNT;
        this.setScrollSnap(direction);
        this.container.scrollBy({ left: factor * amount, behavior: 'smooth' });
    }
    setScrollButtonState() {
        if (!this.container) {
            return;
        }
        const { scrollLeft, scrollWidth, clientWidth } = this.container;
        this._hasScrollButtons = scrollWidth > clientWidth;
        this._scrollButtonsDisabled = {
            start: scrollLeft === 0,
            end: Math.abs(Math.abs(scrollLeft) + clientWidth - scrollWidth) <= 1,
        };
        this._host.requestUpdate();
    }
    async setIndicator(active) {
        if (!(this.container && this.indicator)) {
            return;
        }
        const styles = {
            visibility: active ? 'visible' : 'hidden',
        };
        await this._host.updateComplete;
        if (active) {
            const header = getTabHeader(active);
            const { offsetLeft: containerLeft, offsetWidth: containerWidth } = this.container;
            const scaledWidth = header.getBoundingClientRect().width * getScaleFactor(header).x;
            const offset = this._isLeftToRight
                ? header.offsetLeft - containerLeft
                : header.offsetLeft + scaledWidth - containerWidth;
            Object.assign(styles, {
                width: `${scaledWidth}px`,
                transform: `translateX(${offset}px)`,
            });
        }
        setStyles(this.indicator, styles);
    }
}
export function createTabHelpers(host, container, indicator) {
    return new TabsHelpers(host, container, indicator);
}
export function getTabHeader(tab) {
    return tab.renderRoot.querySelector('[part~="tab-header"]');
}
//# sourceMappingURL=tab-dom.js.map