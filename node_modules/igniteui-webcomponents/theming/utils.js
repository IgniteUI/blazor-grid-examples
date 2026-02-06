import { isServer } from 'lit';
function cssKeyToJsKey(key) {
    return key.replace(/^--|-./g, (match) => {
        return match.startsWith('--') ? '' : match.charAt(1).toUpperCase();
    });
}
function getCssVariables() {
    const rootStyles = getComputedStyle(document.documentElement);
    const result = {};
    for (const key of Array.from(rootStyles)) {
        if (key.startsWith('--')) {
            result[cssKeyToJsKey(key)] = rootStyles.getPropertyValue(key).trim();
        }
    }
    return result;
}
export function getAllCssVariables() {
    return isServer ? {} : getCssVariables();
}
//# sourceMappingURL=utils.js.map