var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { addKeybindings, altKey, arrowDown, arrowUp, endKey, homeKey, shiftKey, } from '../common/controllers/key-bindings.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { addSafeEventListener, first, last } from '../common/util.js';
import IgcExpansionPanelComponent from '../expansion-panel/expansion-panel.js';
import { styles } from './themes/accordion.base.css.js';
export default class IgcAccordionComponent extends LitElement {
    static { this.tagName = 'igc-accordion'; }
    static { this.styles = styles; }
    static register() {
        registerComponent(IgcAccordionComponent, IgcExpansionPanelComponent);
    }
    get _interactivePanels() {
        return this._panels.filter((panel) => !panel.disabled);
    }
    get panels() {
        return Array.from(this._panels);
    }
    constructor() {
        super();
        this._panels = [];
        this._slots = addSlotController(this, {
            slots: setSlots(),
            onChange: this._handleSlotChange,
            initial: true,
        });
        this.singleExpand = false;
        addSafeEventListener(this, 'igcOpening', this._handlePanelOpening);
        addKeybindings(this, { skip: this._skipKeybinding })
            .set(homeKey, this._navigateToFirst)
            .set(endKey, this._navigateToLast)
            .set(arrowUp, this._navigateToPrevious)
            .set(arrowDown, this._navigateToNext)
            .set([shiftKey, altKey, arrowDown], this._expandAll)
            .set([shiftKey, altKey, arrowUp], this._collapseAll);
    }
    _handleSlotChange() {
        this._panels = this._slots.getAssignedElements('[default]', {
            selector: IgcExpansionPanelComponent.tagName,
        });
    }
    async _handlePanelOpening(event) {
        const current = event.target;
        if (!(this.singleExpand && this.panels.includes(current))) {
            return;
        }
        await Promise.all(this._interactivePanels
            .filter((panel) => panel.open && panel !== current)
            .map((panel) => this._closePanel(panel)));
    }
    _skipKeybinding(target) {
        return !(target instanceof IgcExpansionPanelComponent &&
            this._interactivePanels.includes(target));
    }
    _navigateToFirst() {
        this._getPanelHeader(first(this._interactivePanels))?.focus();
    }
    _navigateToLast() {
        this._getPanelHeader(last(this._interactivePanels))?.focus();
    }
    _navigateToPrevious(event) {
        const current = event.target;
        const next = this._getNextPanel(current, -1);
        if (next !== current) {
            this._getPanelHeader(next)?.focus();
        }
    }
    _navigateToNext(event) {
        const current = event.target;
        const next = this._getNextPanel(current, 1);
        if (next !== current) {
            this._getPanelHeader(next)?.focus();
        }
    }
    async _collapseAll() {
        await Promise.all(this._interactivePanels.map((panel) => this._closePanel(panel)));
    }
    async _expandAll(event) {
        const current = event.target;
        if (this.singleExpand) {
            const closePromises = this._interactivePanels
                .filter((panel) => panel.open && panel !== current)
                .map((panel) => this._closePanel(panel));
            await Promise.all(closePromises);
            await this._openPanel(current);
        }
        else {
            await Promise.all(this._interactivePanels.map((panel) => this._openPanel(panel)));
        }
    }
    _getPanelHeader(panel) {
        return panel['_headerRef'].value;
    }
    _getNextPanel(panel, dir = 1) {
        const panels = this._interactivePanels;
        const idx = panels.indexOf(panel);
        return panels[idx + dir] || panel;
    }
    async _closePanel(p) {
        const args = { detail: p };
        if (!(p.open && p.emitEvent('igcClosing', { cancelable: true, ...args }))) {
            return;
        }
        if (await p.hide()) {
            p.emitEvent('igcClosed', args);
        }
    }
    async _openPanel(p) {
        const args = { detail: p };
        if (p.open || !p.emitEvent('igcOpening', { cancelable: true, ...args })) {
            return;
        }
        if (await p.show()) {
            p.emitEvent('igcOpened', args);
        }
    }
    async hideAll() {
        await Promise.all(this.panels.map((panel) => panel.hide()));
    }
    async showAll() {
        await Promise.all(this.panels.map((panel) => panel.show()));
    }
    render() {
        return html `<slot></slot>`;
    }
}
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'single-expand' })
], IgcAccordionComponent.prototype, "singleExpand", void 0);
//# sourceMappingURL=accordion.js.map