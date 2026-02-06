
import { GridColumnDataType } from './grid-column-data-type';
import { ColumnPinningPosition } from './column-pinning-position';
import { IgcFilteringOperand } from './igc-filtering-operand';
import { IgcSortingStrategy } from './igc-sorting-strategy';
import { IgcSummaryTemplateContext } from './igc-summary-template-context';
import { IgcRenderFunction } from './common';
import { IgcCellTemplateContext } from './igc-cell-template-context';
import { IgcColumnTemplateContext } from './igc-column-template-context';
import { IgcColumnPipeArgs } from './igc-column-pipe-args';
import { IgcColumnEditorOptions } from './igc-column-editor-options';
import { IgcFilteringExpressionsTree } from './igc-filtering-expressions-tree';
import { EventEmitterMixin, LitElement, Constructor, AbstractConstructor } from './common';


/* jsonAPIManageCollectionInMarkup */


/* blazorElement */
/* contentParent: ColumnGroup */
/* wcElementTag: igc-column */
/* additionalIdentifier: Field */
/* blazorIndirectRender */
/**
 * **Ignite UI for Angular Column** -
 * [Documentation](https://www.infragistics.com/products/ignite-ui-angular/angular/components/grid/grid#columns-configuration)
 *
 * The Ignite UI Column is used within an `igx-grid` element to define what data the column will show. Features such as sorting,
 * filtering & editing are enabled at the column level.  You can also provide a template containing custom content inside
 * the column using `ng-template` which will be used for all cells within the column.
 *
 * @igxParent IgxGridComponent, IgxTreeGridComponent, IgxHierarchicalGridComponent, IgxPivotGridComponent, IgxRowIslandComponent, IgxColumnGroupComponent, IgxColumnLayoutComponent
 */

    export declare class IgcColumnComponent extends EventEmitterMixin<IgcColumnComponentEventMap, Constructor<LitElement>>(LitElement)

    {

    /* blazorSuppress */
    static readonly tagName: string;
    /* blazorSuppress */
    static register(): void;

          
    /**
     * Sets/gets the `field` value.
     * ```typescript
     * let columnField = this.column.field;
     * ```
     * ```html
     * <igx-column [field] = "'ID'"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set field(value: string);
          public get field(): string;
  
          

    /**
     * Sets/gets whether to merge cells in this column.
     * ```html
     * <igx-column [merge]="true"></igx-column>
     * ```
     *
     */
    public set merge(value: boolean);
          public get merge(): boolean;
  
          

    /**
     * Sets/gets the `header` value.
     * ```typescript
     * let columnHeader = this.column.header;
     * ```
     * ```html
     * <igx-column [header] = "'ID'"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set header(value: string);
          public get header(): string;
  
          
    /**
     * Sets/gets the `title` value.
     * ```typescript
     * let title = this.column.title;
     * ```
     * ```html
     * <igx-column [title] = "'Some column tooltip'"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set title(value: string);
          public get title(): string;
  
          
    /**
     * Sets/gets whether the column is sortable.
     * Default value is `false`.
     * ```typescript
     * let isSortable = this.column.sortable;
     * ```
     * ```html
     * <igx-column [sortable] = "true"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set sortable(value: boolean);
          public get sortable(): boolean;
  
          
    /**
     * Returns if the column is selectable.
     * ```typescript
     * let columnSelectable = this.column.selectable;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set selectable(value: boolean);
          public get selectable(): boolean;
  
          

    /**
     * Sets/gets whether the column is groupable.
     * Default value is `false`.
     * ```typescript
     * let isGroupable = this.column.groupable;
     * ```
     * ```html
     * <igx-column [groupable] = "true"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set groupable(value: boolean);
          public get groupable(): boolean;
  
          
    /**
     * Gets whether the column is editable.
     * Default value is `false`.
     * ```typescript
     * let isEditable = this.column.editable;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set editable(value: boolean);
          public get editable(): boolean;
  
          
    /**
     * Sets/gets whether the column is filterable.
     * Default value is `true`.
     * ```typescript
     * let isFilterable = this.column.filterable;
     * ```
     * ```html
     * <igx-column [filterable] = "false"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set filterable(value: boolean);
          public get filterable(): boolean;
  
          
    /**
     * Sets/gets whether the column is resizable.
     * Default value is `false`.
     * ```typescript
     * let isResizable = this.column.resizable;
     * ```
     * ```html
     * <igx-column [resizable] = "true"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set resizable(value: boolean);
          public get resizable(): boolean;
  
          

    /**
     * Sets/gets whether the column header is included in autosize logic.
     * Useful when template for a column header is sized based on parent, for example a default `div`.
     * Default value is `false`.
     * ```typescript
     * let isResizable = this.column.resizable;
     * ```
     * ```html
     * <igx-column [resizable] = "true"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set autosizeHeader(value: boolean);
          public get autosizeHeader(): boolean;
  
          

    /**
     * Gets a value indicating whether the summary for the column is enabled.
     * ```typescript
     * let hasSummary = this.column.hasSummary;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set hasSummary(value: boolean);
          public get hasSummary(): boolean;
  
          
    /**
     * Gets whether the column is hidden.
     * ```typescript
     * let isHidden = this.column.hidden;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set hidden(value: boolean);
          public get hidden(): boolean;
  
          

    /**
     * Returns if the column is selected.
     * ```typescript
     * let isSelected = this.column.selected;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set selected(value: boolean);
          public get selected(): boolean;
  
          

    /**
     * Gets whether the hiding is disabled.
     * ```typescript
     * let isHidingDisabled =  this.column.disableHiding;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set disableHiding(value: boolean);
          public get disableHiding(): boolean;
  
          
    /**
     * Gets whether the pinning is disabled.
     * ```typescript
     * let isPinningDisabled =  this.column.disablePinning;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set disablePinning(value: boolean);
          public get disablePinning(): boolean;
  
          

    /**
     * Gets the `width` of the column.
     * ```typescript
     * let columnWidth = this.column.width;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set width(value: string);
          public get width(): string;
  
          

    /**
     * Sets/gets the maximum `width` of the column.
     * ```typescript
     * let columnMaxWidth = this.column.width;
     * ```
     * ```html
     * <igx-column [maxWidth] = "'150px'"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set maxWidth(value: string);
          public get maxWidth(): string;
  
          
    /**
     * Sets/gets the class selector of the column header.
     * ```typescript
     * let columnHeaderClass = this.column.headerClasses;
     * ```
     * ```html
     * <igx-column [headerClasses] = "'column-header'"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set headerClasses(value: string);
          public get headerClasses(): string;
  
          

    /**
     * Sets conditional style properties on the column header.
     * Similar to `ngStyle` it accepts an object literal where the keys are
     * the style properties and the value is the expression to be evaluated.
     * ```typescript
     * styles = {
     *  background: 'royalblue',
     *  color: (column) => column.pinned ? 'red': 'inherit'
     * }
     * ```
     * ```html
     * <igx-column [headerStyles]="styles"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set headerStyles(value: any);
          public get headerStyles(): any;
  
          

    /**
     * Sets/gets the class selector of the column group header.
     * ```typescript
     * let columnHeaderClass = this.column.headerGroupClasses;
     * ```
     * ```html
     * <igx-column [headerGroupClasses] = "'column-group-header'"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set headerGroupClasses(value: string);
          public get headerGroupClasses(): string;
  
          

    /**
     * Sets conditional style properties on the column header group wrapper.
     * Similar to `ngStyle` it accepts an object literal where the keys are
     * the style properties and the value is the expression to be evaluated.
     * ```typescript
     * styles = {
     *  background: 'royalblue',
     *  color: (column) => column.pinned ? 'red': 'inherit'
     * }
     * ```
     * ```html
     * <igx-column [headerGroupStyles]="styles"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set headerGroupStyles(value: any);
          public get headerGroupStyles(): any;
  
          

    /* treatAsRef */
    /**
     * Sets a conditional class selector of the column cells.
     * Accepts an object literal, containing key-value pairs,
     * where the key is the name of the CSS class, while the
     * value is either a callback function that returns a boolean,
     * or boolean, like so:
     * ```typescript
     * callback = (rowData, columnKey, cellValue, rowIndex) => { return rowData[columnKey] > 6; }
     * cellClasses = { 'className' : this.callback };
     * ```
     * ```html
     * <igx-column [cellClasses] = "cellClasses"></igx-column>
     * <igx-column [cellClasses] = "{'class1' : true }"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set cellClasses(value: any);
          public get cellClasses(): any;
  
          

    /* treatAsRef */
    /**
     * Sets conditional style properties on the column cells.
     * Similar to `ngStyle` it accepts an object literal where the keys are
     * the style properties and the value is the expression to be evaluated.
     * As with `cellClasses` it accepts a callback function.
     * ```typescript
     * styles = {
     *  background: 'royalblue',
     *  color: (rowData, columnKey, cellValue, rowIndex) => value.startsWith('Important') ? 'red': 'inherit'
     * }
     * ```
     * ```html
     * <igx-column [cellStyles]="styles"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set cellStyles(value: any);
          public get cellStyles(): any;
  
          

    /* blazorAlternateType: CellValueFormatterEventHandler */
    /* blazorOnlyScript */
    /**
     * Applies display format to cell values in the column. Does not modify the underlying data.
     *
     * @remarks
     * Note: As the formatter is used in places like the Excel style filtering dialog, in certain
     * scenarios (remote filtering for example), the row data argument can be `undefined`.
     *
     *
     * In this example, we check to see if the column name is Salary, and then provide a method as the column formatter
     * to format the value into a currency string.
     *
     * @example
     * ```typescript
     * columnInit(column: IgxColumnComponent) {
     *   if (column.field == "Salary") {
     *     column.formatter = (salary => this.format(salary));
     *   }
     * }
     *
     * format(value: number) : string {
     *   return formatCurrency(value, "en-us", "$");
     * }
     * ```
     *
     * @example
     * ```typescript
     * const column = this.grid.getColumnByName('Address');
     * const addressFormatter = (address: string, rowData: any) => data.privacyEnabled ? 'unknown' : address;
     * column.formatter = addressFormatter;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set formatter(value: any);
          public get formatter(): any;
  
          

    /* blazorAlternateType: SummaryValueFormatterEventHandler */
    /* blazorOnlyScript */
    /* forceCastDelegate */
    /**
     * The summaryFormatter is used to format the display of the column summaries.
     *
     * In this example, we check to see if the column name is OrderDate, and then provide a method as the summaryFormatter
     * to change the locale for the dates to 'fr-FR'. The summaries with the count key are skipped so they are displayed as numbers.
     *
     * ```typescript
     * columnInit(column: IgxColumnComponent) {
     *   if (column.field == "OrderDate") {
     *     column.summaryFormatter = this.summaryFormat;
     *   }
     * }
     *
     * summaryFormat(summary: IgxSummaryResult, summaryOperand: IgxSummaryOperand): string {
     *   const result = summary.summaryResult;
     *   if(summaryResult.key !== 'count' && result !== null && result !== undefined) {
     *      const pipe = new DatePipe('fr-FR');
     *      return pipe.transform(result,'mediumDate');
     *   }
     *   return result;
     * }
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set summaryFormatter(value: any);
          public get summaryFormatter(): any;
  
          

    /**
     * Sets/gets whether the column filtering should be case sensitive.
     * Default value is `true`.
     * ```typescript
     * let filteringIgnoreCase = this.column.filteringIgnoreCase;
     * ```
     * ```html
     * <igx-column [filteringIgnoreCase] = "false"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set filteringIgnoreCase(value: boolean);
          public get filteringIgnoreCase(): boolean;
  
          
    /**
     * Sets/gets whether the column sorting should be case sensitive.
     * Default value is `true`.
     * ```typescript
     * let sortingIgnoreCase = this.column.sortingIgnoreCase;
     * ```
     * ```html
     * <igx-column [sortingIgnoreCase] = "false"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set sortingIgnoreCase(value: boolean);
          public get sortingIgnoreCase(): boolean;
  
          
    /**
     * Sets/gets whether the column is `searchable`.
     * Default value is `true`.
     * ```typescript
     * let isSearchable =  this.column.searchable';
     * ```
     * ```html
     *  <igx-column [searchable] = "false"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set searchable(value: boolean);
          public get searchable(): boolean;
  
          
    /**
     * Sets/gets the data type of the column values.
     * Default value is `string`.
     * ```typescript
     * let columnDataType = this.column.dataType;
     * ```
     * ```html
     * <igx-column [dataType] = "'number'"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set dataType(value: GridColumnDataType);
          public get dataType(): GridColumnDataType;
  
          

    /**
     * Row index where the current field should end.
     * The amount of rows between rowStart and rowEnd will determine the amount of spanning rows to that field
     * ```html
     * <igx-column-layout>
     *   <igx-column [rowEnd]="2" [rowStart]="1" [colStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set rowEnd(value: number);
          public get rowEnd(): number;
  
          

    /**
     * Column index where the current field should end.
     * The amount of columns between colStart and colEnd will determine the amount of spanning columns to that field
     * ```html
     * <igx-column-layout>
     *   <igx-column [colEnd]="3" [rowStart]="1" [colStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set colEnd(value: number);
          public get colEnd(): number;
  
          

    /**
     * Row index from which the field is starting.
     * ```html
     * <igx-column-layout>
     *   <igx-column [rowStart]="1" [colStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set rowStart(value: number);
          public get rowStart(): number;
  
          

    /**
     * Column index from which the field is starting.
     * ```html
     * <igx-column-layout>
     *   <igx-column [colStart]="1" [rowStart]="1"></igx-column>
     * </igx-column-layout>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set colStart(value: number);
          public get colStart(): number;
  
          

    /**
     * Sets/gets custom properties provided in additional template context.
     *
     * ```html
     * <igx-column [additionalTemplateContext]="contextObject">
     *   <ng-template igxCell let-cell="cell" let-props="additionalTemplateContext">
     *      {{ props }}
     *   </ng-template>
     * </igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set additionalTemplateContext(value: any);
          public get additionalTemplateContext(): any;
  
          


    /**
     * Sets/gets the minimum `width` of the column.
     * Default value is `88`;
     * ```typescript
     * let columnMinWidth = this.column.minWidth;
     * ```
     * ```html
     * <igx-column [minWidth] = "'100px'"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set minWidth(value: string);
          public get minWidth(): string;
  
                

    /**
     * Gets the column index.
     * ```typescript
     * let columnIndex = this.column.index;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public get index(): number;
        
          

    /* mustCoerceToInt */
    /**
     * Gets the pinning position of the column.
     * ```typescript
     * let pinningPosition = this.column.pinningPosition;
     */
    public set pinningPosition(value: ColumnPinningPosition);
          public get pinningPosition(): ColumnPinningPosition;
  
          

    /**
     * Gets whether the column is `pinned`.
     * ```typescript
     * let isPinned = this.column.pinned;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set pinned(value: boolean);
          public get pinned(): boolean;
  
          

    /* treatAsRef */
    /**
     * Gets the column `summaries`.
     * ```typescript
     * let columnSummaries = this.column.summaries;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set summaries(value: any);
          public get summaries(): any;
  
          

    /**
     * Sets/gets the summary operands to exclude from display.
     * Accepts an array of string keys representing the summary types to disable, such as 'Min', 'Max', 'Count' etc.
     * ```typescript
     * let disabledSummaries = this.column.disabledSummaries;
     * ```
     * ```html
     * <igx-column [disabledSummaries]="['min', 'max', 'average']"></igx-column>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set disabledSummaries(value: string[]);
          public get disabledSummaries(): string[];
  
          

    /**
     * Gets the column `filters`.
     * ```typescript
     * let columnFilters = this.column.filters'
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set filters(value: IgcFilteringOperand);
          public get filters(): IgcFilteringOperand;
  
          
    /**
     * Gets the column `sortStrategy`.
     * ```typescript
     * let sortStrategy = this.column.sortStrategy
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set sortStrategy(value: IgcSortingStrategy);
          public get sortStrategy(): IgcSortingStrategy;
  
          
    /**
     * Returns a reference to the `summaryTemplate`.
     * ```typescript
     * let summaryTemplate = this.column.summaryTemplate;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set summaryTemplate(value: IgcRenderFunction<IgcSummaryTemplateContext>);
          public get summaryTemplate(): IgcRenderFunction<IgcSummaryTemplateContext>;
  
          

    /**
     * Returns a reference to the `bodyTemplate`.
     * ```typescript
     * let bodyTemplate = this.column.bodyTemplate;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set bodyTemplate(value: IgcRenderFunction<IgcCellTemplateContext>);
          public get bodyTemplate(): IgcRenderFunction<IgcCellTemplateContext>;
  
          
    /**
     * Returns a reference to the header template.
     * ```typescript
     * let headerTemplate = this.column.headerTemplate;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set headerTemplate(value: IgcRenderFunction<IgcColumnTemplateContext>);
          public get headerTemplate(): IgcRenderFunction<IgcColumnTemplateContext>;
  
          
    /**
     * Returns a reference to the inline editor template.
     * ```typescript
     * let inlineEditorTemplate = this.column.inlineEditorTemplate;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set inlineEditorTemplate(value: IgcRenderFunction<IgcCellTemplateContext>);
          public get inlineEditorTemplate(): IgcRenderFunction<IgcCellTemplateContext>;
  
          

    /**
     * Returns a reference to the validation error template.
     * ```typescript
     * let errorTemplate = this.column.errorTemplate;
     * ```
     */
    public set errorTemplate(value: IgcRenderFunction<IgcCellTemplateContext>);
          public get errorTemplate(): IgcRenderFunction<IgcCellTemplateContext>;
  
          

    /**
     * Returns a reference to the `filterCellTemplate`.
     * ```typescript
     * let filterCellTemplate = this.column.filterCellTemplate;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set filterCellTemplate(value: IgcRenderFunction<IgcColumnTemplateContext>);
          public get filterCellTemplate(): IgcRenderFunction<IgcColumnTemplateContext>;
  
                

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
        
                

    /* blazorCSSuppress - Blazor doesn't carry over the ColumnType interface + should translate as static bool value */
    /**
     * Returns a boolean indicating if the column is a `ColumnGroup`.
     * ```typescript
     * let columnGroup =  this.column.columnGroup;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public get columnGroup(): boolean;
        
                

    /* blazorCSSuppress - Blazor doesn't carry over the ColumnType interface + should translate as static bool value */
    /**
     * Returns a boolean indicating if the column is a `ColumnLayout` for multi-row layout.
     * ```typescript
     * let columnGroup =  this.column.columnGroup;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public get columnLayout(): boolean;
        
                

    /**
     * Returns a boolean indicating if the column is a child of a `ColumnLayout` for multi-row layout.
     * ```typescript
     * let columnLayoutChild =  this.column.columnLayoutChild;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public get columnLayoutChild(): boolean;
        
                

    /**
     * A list containing all the child columns under this column (if any).
     * Empty without children or if this column is not Group or Layout.
     */
    public get childColumns(): IgcColumnComponent[];
        
                
    /**
     * Returns the level of the column in a column group.
     * Returns `0` if the column doesn't have a `parent`.
     * ```typescript
     * let columnLevel =  this.column.level;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public get level(): number;
        
          

    /**
     * Indicates whether the column will be visible when its parent is collapsed.
     * ```html
     * <igx-column-group>
     *   <igx-column [visibleWhenCollapsed]="true"></igx-column>
     * </igx-column-group>
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set visibleWhenCollapsed(value: boolean);
          public get visibleWhenCollapsed(): boolean;
  
          

    /* mustSetInCodePlatforms: WebComponents;Blazor;React */
    /**
     * @remarks
     * Pass optional parameters for DatePipe and/or DecimalPipe to format the display value for date and numeric columns.
     * Accepts an `IColumnPipeArgs` object with any of the `format`, `timezone` and `digitsInfo` properties.
     * For more details see https://angular.io/api/common/DatePipe and https://angular.io/api/common/DecimalPipe
     * @example
     * ```typescript
     * const pipeArgs: IColumnPipeArgs = {
     *      format: 'longDate',
     *      timezone: 'UTC',
     *      digitsInfo: '1.1-2'
     * }
     * ```
     * ```html
     * <igx-column dataType="date" [pipeArgs]="pipeArgs"></igx-column>
     * <igx-column dataType="number" [pipeArgs]="pipeArgs"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    public set pipeArgs(value: IgcColumnPipeArgs);
          public get pipeArgs(): IgcColumnPipeArgs;
  
          

    /**
     * Pass optional properties for the default column editors.
     * @remarks
     * Options may be applicable only to specific column type editors.
     * @example
     * ```typescript
     * const editorOptions: IColumnEditorOptions = {
     *      dateTimeFormat: 'MM/dd/YYYY',
     * }
     * ```
     * ```html
     * <igx-column dataType="date" [editorOptions]="editorOptions"></igx-column>
     * ```
     * @memberof IgxColumnComponent
     */
    public set editorOptions(value: IgcColumnEditorOptions);
          public get editorOptions(): IgcColumnEditorOptions;
  
                


    /**
     * Returns the filteringExpressionsTree of the column.
     * ```typescript
     * let tree =  this.column.filteringExpressionsTree;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public get filteringExpressionsTree(): IgcFilteringExpressionsTree;
        
          

    /* alternateName: parentColumn */
    /**
     * Sets/gets the parent column.
     * ```typescript
     * let parentColumn = this.column.parent;
     * ```
     * ```typescript
     * this.column.parent = higherLevelColumn;
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public set parent(value: any);
          public get parent(): any;
  
                

    /**
     * Returns a reference to the top level parent column.
     * ```typescript
     * let topLevelParent =  this.column.topLevelParent;
     * ```
     */
    public get topLevelParent(): IgcColumnComponent;
        
            

    /**
     * Pins the column in the specified position at the provided index in that pinned area.
     * Defaults to index `0` if not provided, or to the initial index in the pinned area.
     * Returns `true` if the column is successfully pinned. Returns `false` if the column cannot be pinned.
     * Column cannot be pinned if:
     * - Is already pinned
     * - index argument is out of range
     * ```typescript
     * let success = this.column.pin();
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public pin(index?: number, pinningPosition?: ColumnPinningPosition): boolean;

            
    /**
     * Unpins the column and place it at the provided index in the unpinned area.
     * Defaults to index `0` if not provided, or to the initial index in the unpinned area.
     * Returns `true` if the column is successfully unpinned. Returns `false` if the column cannot be unpinned.
     * Column cannot be unpinned if:
     * - Is already unpinned
     * - index argument is out of range
     * ```typescript
     * let success = this.column.unpin();
     * ```
     *
     * @memberof IgxColumnComponent
     */
    public unpin(index?: number): boolean;

            

    /**
     * Moves a column to the specified visible index.
     * If passed index is invalid, or if column would receive a different visible index after moving, moving is not performed.
     * If passed index would move the column to a different column group. moving is not performed.
     *
     * @example
     * ```typescript
     * column.move(index);
     * ```
     * @memberof IgxColumnComponent
     */
    public move(index: number): void;

            

    /**
     * Autosize the column to the longest currently visible cell value, including the header cell.
     * ```typescript
     * @ViewChild('grid') grid: IgxGridComponent;
     * let column = this.grid.columnList.filter(c => c.field === 'ID')[0];
     * column.autosize();
     * ```
     *
     * @memberof IgxColumnComponent
     * @param byHeaderOnly Set if column should be autosized based only on the header content.
     */
    public autosize(byHeaderOnly?: boolean): void;

    }

export declare interface IgcColumnComponentEventMap {
            
        		    /**
		     * Emitted when the column is hidden or shown.
		     *
		     * ```html
		     * <igx-column (hiddenChange)="hiddenChange($event)">
		     * </igx-column>
		     * ```
		     *
		     */
hiddenChange: CustomEvent<boolean>;

        		    /**
		     * Emitted when the column expanded or collapsed.
		     *
		     * ```html
		     * <igx-column (expandedChange)="expandedChange($event)">
		     * </igx-column>
		     * ```
		     *
		     */
expandedChange: CustomEvent<boolean>;

        		    /**
		     * Emitted when the column width changes.
		     *
		     * ```html
		     * <igx-column (widthChange)="widthChange($event)">
		     * </igx-column>
		     * ```
		     *
		     */
widthChange: CustomEvent<string>;

        		    /**
		     * Emitted when the column is pinned/unpinned.
		     *
		     * ```html
		     * <igx-column (pinnedChange)="pinnedChange($event)">
		     * </igx-column>
		     * ```
		     *
		     */
pinnedChange: CustomEvent<boolean>;

}
        