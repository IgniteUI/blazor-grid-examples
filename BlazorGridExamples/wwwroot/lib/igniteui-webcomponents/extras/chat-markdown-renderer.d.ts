import { Marked } from 'marked';
import type { IgcChatMessage } from '../components/chat/types.js';
/**
 * Configuration options for setting up the markdown parser and highlighter.
 * This provides more granular control over the markdown processing pipeline.
 */
export interface MarkdownRendererOptions {
    /**
     * If true, disables syntax highlighting entirely.
     */
    noHighlighter?: boolean;
    /**
     * List of programming languages to support in syntax highlighting.
     * @default ['javascript', 'typescript', 'html', 'css']
     */
    languages?: string[];
    /**
     * The theme(s) used by the syntax highlighter.
     * Can be a single theme name or separate themes for light and dark modes.
     * @default { light: 'github-light', dark: 'github-dark' }
     */
    theme?: string | {
        light?: string;
        dark?: string;
    };
    /**
     * A custom HTML sanitization function.
     * @default DOMPurify.sanitize
     */
    sanitizer?: (html: string) => string;
    /**
     * Custom color replacements for syntax highlighting.
     * Maps hex colors to CSS variable names.
     */
    colorReplacements?: Record<string, string>;
}
/**
 * Represents a markdown renderer instance that can process markdown text.
 */
export interface MarkdownRenderer {
    /**
     * Parses markdown text and returns rendered HTML.
     * @param text - The markdown text to parse
     * @returns The sanitized HTML string
     */
    parse(text: string): Promise<string>;
    /**
     * The underlying marked instance for advanced usage.
     */
    readonly marked: Marked;
}
/**
 * Sets up a markdown renderer with syntax highlighting and sanitization.
 * This is the core setup function that can be used in any framework.
 *
 * @param options - Configuration options for the markdown renderer
 * @returns A MarkdownRenderer instance
 *
 * @example
 * ```typescript
 * // Basic usage
 * const renderer = await setupMarkdownRenderer();
 * const html = await renderer.parse('# Hello **World**');
 *
 * // With custom options
 * const renderer = await setupMarkdownRenderer({
 *   languages: ['javascript', 'python', 'rust'],
 *   theme: 'monokai',
 *   noHighlighter: false
 * });
 *
 * // With custom sanitizer
 * const renderer = await setupMarkdownRenderer({
 *   sanitizer: (html) => myCustomSanitizer(html)
 * });
 * ```
 */
export declare function setupMarkdownRenderer(options?: MarkdownRendererOptions): Promise<MarkdownRenderer>;
/**
 * Creates a markdown renderer specifically for igc-chat messages.
 * This function wraps the renderer to work with IgcChatMessage objects
 * and returns Lit's unsafeHTML directive for rendering.
 *
 * @param options - Configuration options for the markdown renderer
 * @returns A function that takes an IgcChatMessage and returns a Lit template result
 *
 * @example
 * ```typescript
 * const renderer = await createMarkdownRenderer();
 * const message = { text: '# Hello **World**' };
 * const template = await renderer(message);
 * ```
 */
export declare function createMarkdownRenderer(options?: MarkdownRendererOptions): Promise<(message: IgcChatMessage) => Promise<unknown>>;
