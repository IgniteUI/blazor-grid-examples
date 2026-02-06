import { IgcInputBaseComponent } from '../input/input-base.js';
import type { RangeTextSelectMode, SelectionRangeDirection } from '../types.js';
import { MaskParser } from './mask-parser.js';
export type MaskSelection = {
    start: number;
    end: number;
};
export declare abstract class IgcMaskInputBaseComponent extends IgcInputBaseComponent {
    protected readonly _parser: MaskParser;
    protected _maskSelection: MaskSelection;
    protected _compositionStart: number;
    protected _focused: boolean;
    protected _maskedValue: string;
    protected get _inputSelection(): MaskSelection;
    /**
     * Makes the control a readonly field.
     *
     * @attr readonly
     * @default false
     */
    readOnly: boolean;
    /**
     * The masked pattern of the component.
     *
     * @attr
     * @default 'CCCCCCCCCC'
     */
    set mask(value: string);
    get mask(): string;
    /**
     * The prompt symbol to use for unfilled parts of the mask pattern.
     *
     * @attr
     * @default '_'
     */
    set prompt(value: string);
    get prompt(): string;
    protected _handleInput({ inputType, isComposing, }: InputEvent): Promise<void>;
    protected _setMaskSelection(): void;
    protected _handleCompositionStart(): void;
    protected _handleCompositionEnd({ data }: CompositionEvent): void;
    protected _handleClick(): void;
    protected abstract _updateSetRangeTextValue(): void;
    protected abstract _updateInput(text: string, range: MaskSelection): void;
    /** Sets the text selection range of the control */
    setSelectionRange(start?: number, end?: number, direction?: SelectionRangeDirection): void;
    /** Replaces the selected text in the control and re-applies the mask */
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: RangeTextSelectMode): void;
}
