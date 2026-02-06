/**
 * Retrieves all CSS custom properties from the document root element.
 * Property names are converted from kebab-case to camelCase.
 *
 * @returns An object mapping camelCase property names to their values.
 * Returns an empty object in SSR environments.
 * @example
 * // CSS: --my-primary-color: #ff0000;
 * // Returns: { myPrimaryColor: '#ff0000' }
 */
export declare function getAllCssVariables(): Record<string, string>;
