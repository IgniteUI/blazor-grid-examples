import { ContextConsumer } from '@lit/context';
import { adoptStyles, css, } from 'lit';
import { getTheme } from './config.js';
import { themeContext } from './context.js';
import { _themeChangedEmitter, CHANGED_THEME_EVENT } from './theming-event.js';
class ThemingController {
    get theme() {
        return this._theme;
    }
    constructor(host, themes, config) {
        this._theme = 'bootstrap';
        this._variant = 'light';
        this._themeSource = 'uninitialized';
        this._host = host;
        this._themes = themes;
        this._options = config;
        this._host.addController(this);
        this._contextConsumer = new ContextConsumer(this._host, {
            context: themeContext,
            callback: (value) => {
                if (value) {
                    this._applyContextTheme(value);
                }
            },
            subscribe: true,
        });
    }
    hostConnected() {
        const contextValue = this._contextConsumer.value;
        if (contextValue) {
            this._applyContextTheme(contextValue);
        }
        else {
            this._applyGlobalTheme();
        }
    }
    hostDisconnected() {
        if (this._themeSource === 'global') {
            _themeChangedEmitter.removeEventListener(CHANGED_THEME_EVENT, this);
        }
    }
    handleEvent() {
        if (this._themeSource === 'global') {
            this._applyGlobalTheme();
        }
    }
    _applyContextTheme(contextValue) {
        if (this._themeSource === 'global') {
            _themeChangedEmitter.removeEventListener(CHANGED_THEME_EVENT, this);
        }
        this._themeSource = 'context';
        this._theme = contextValue.theme;
        this._variant = contextValue.variant;
        this._adoptStyles();
        this._options?.themeChange?.call(this._host, this._theme);
        this._host.requestUpdate();
    }
    _applyGlobalTheme() {
        if (this._themeSource === 'uninitialized') {
            _themeChangedEmitter.addEventListener(CHANGED_THEME_EVENT, this);
        }
        this._themeSource = 'global';
        const { theme: currentTheme, themeVariant } = getTheme();
        this._theme = currentTheme;
        this._variant = themeVariant;
        this._adoptStyles();
        this._options?.themeChange?.call(this._host, this._theme);
        this._host.requestUpdate();
    }
    _getStyles() {
        const props = this._themes[this._variant];
        const styles = { shared: css ``, theme: css `` };
        for (const [name, sheet] of Object.entries(props)) {
            if (name === 'shared') {
                styles.shared = sheet;
            }
            if (name === this.theme) {
                styles.theme = sheet;
            }
        }
        return styles;
    }
    _adoptStyles() {
        const ctor = this._host.constructor;
        const { shared, theme } = this._getStyles();
        adoptStyles(this._host.shadowRoot, [...ctor.elementStyles, shared, theme]);
    }
}
export function addThemingController(host, themes, config) {
    return new ThemingController(host, themes, config);
}
//# sourceMappingURL=theming-controller.js.map