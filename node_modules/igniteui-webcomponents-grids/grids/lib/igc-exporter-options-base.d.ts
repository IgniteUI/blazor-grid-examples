



    export declare abstract class IgcExporterOptionsBase
    {

          
    /**
     * Specifies whether hidden columns should be exported.
     * ```typescript
     * let ignoreColumnsVisibility = this.exportOptions.ignoreColumnsVisibility;
     * this.exportOptions.ignoreColumnsVisibility = true;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
    public set ignoreColumnsVisibility(value: boolean);
          public get ignoreColumnsVisibility(): boolean;
  
          

    /**
     * Specifies whether filtered out rows should be exported.
     * ```typescript
     * let ignoreFiltering = this.exportOptions.ignoreFiltering;
     * this.exportOptions.ignoreFiltering = true;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
    public set ignoreFiltering(value: boolean);
          public get ignoreFiltering(): boolean;
  
          

    /**
     * Specifies if the exporter should ignore the current column order in the IgxGrid.
     * ```typescript
     * let ignoreColumnsOrder = this.exportOptions.ignoreColumnsOrder;
     * this.exportOptions.ignoreColumnsOrder = true;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
    public set ignoreColumnsOrder(value: boolean);
          public get ignoreColumnsOrder(): boolean;
  
          

    /**
     * Specifies whether the exported data should be sorted as in the provided IgxGrid.
     * When you export grouped data, setting ignoreSorting to true will cause
     * the grouping to fail because it relies on the sorting of the records.
     * ```typescript
     * let ignoreSorting = this.exportOptions.ignoreSorting;
     * this.exportOptions.ignoreSorting = true;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
    public set ignoreSorting(value: boolean);
          public get ignoreSorting(): boolean;
  
          

    /**
     * Specifies whether the exported data should be grouped as in the provided IgxGrid.
     * ```typescript
     * let ignoreGrouping = this.exportOptions.ignoreGrouping;
     * this.exportOptions.ignoreGrouping = true;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
    public set ignoreGrouping(value: boolean);
          public get ignoreGrouping(): boolean;
  
          

    /**
     * Specifies whether the exported data should include multi column headers as in the provided IgxGrid.
     * ```typescript
     * let ignoreMultiColumnHeaders = this.exportOptions.ignoreMultiColumnHeaders;
     * this.exportOptions.ignoreMultiColumnHeaders = true;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
    public set ignoreMultiColumnHeaders(value: boolean);
          public get ignoreMultiColumnHeaders(): boolean;
  
          

    /**
     * Specifies whether the exported data should include column summaries.
     * ```typescript
     * let exportSummaries = this.exportOptions.exportSummaries;
     * this.exportOptions.exportSummaries = true;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
    public set exportSummaries(value: boolean);
          public get exportSummaries(): boolean;
  
          

    /**
     * Specifies whether the exported data should have frozen headers.
     * ```typescript
     * let freezeHeaders = this.exportOptions.freezeHeaders;
     * this.exportOptions.freezeHeaders = true;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
    public set freezeHeaders(value: boolean);
          public get freezeHeaders(): boolean;
  
          

    /**
     * Specifies whether the headers should be exported if there is no data.
     * ```typescript
     * let alwaysExportHeaders = this.exportOptions.alwaysExportHeaders;
     * this.exportOptions.alwaysExportHeaders = false;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
     public set alwaysExportHeaders(value: boolean);
          public get alwaysExportHeaders(): boolean;
  
          

    /**
     * Gets the file name which will be used for the exporting operation.
     * ```typescript
     * let fileName = this.exportOptions.fileName;
     * ```
     *
     * @memberof IgxExporterOptionsBase
     */
    public set fileName(value: string);
          public get fileName(): string;
  
    constructor(fileName: string, _fileExtension: string);

    }


        