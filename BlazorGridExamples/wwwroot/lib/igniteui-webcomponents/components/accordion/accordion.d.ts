import { LitElement } from 'lit';
import IgcExpansionPanelComponent from '../expansion-panel/expansion-panel.js';
/**
 * The Accordion is a container-based component that can house multiple expansion panels
 * and offers keyboard navigation.
 *
 * @element igc-accordion
 *
 * @slot - Renders the expansion panels inside default slot.
 */
export default class IgcAccordionComponent extends LitElement {
    static readonly tagName = "igc-accordion";
    static styles: import("lit").CSSResult;
    static register(): void;
    private _panels;
    private readonly _slots;
    private get _interactivePanels();
    /**
     * Allows only one panel to be expanded at a time.
     * @attr single-expand
     * @default false
     */
    singleExpand: boolean;
    /** Returns all of the accordions's direct igc-expansion-panel children. */
    get panels(): IgcExpansionPanelComponent[];
    constructor();
    private _handleSlotChange;
    private _handlePanelOpening;
    private _skipKeybinding;
    private _navigateToFirst;
    private _navigateToLast;
    private _navigateToPrevious;
    private _navigateToNext;
    private _collapseAll;
    private _expandAll;
    private _getPanelHeader;
    private _getNextPanel;
    private _closePanel;
    private _openPanel;
    /** Hides all of the child expansion panels' contents. */
    hideAll(): Promise<void>;
    /** Shows all of the child expansion panels' contents. */
    showAll(): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'igc-accordion': IgcAccordionComponent;
    }
}
