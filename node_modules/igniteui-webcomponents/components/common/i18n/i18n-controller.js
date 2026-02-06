import { getCurrentI18n, getDisplayNamesFormatter, getI18nManager, } from 'igniteui-i18n-core';
import { calendarResourcesMap, convertToCoreResource, dateRangePickerResourcesMap, } from './utils.js';
class I18nController {
    set locale(value) {
        if (this._locale !== value) {
            this._locale = value;
            this._defaultResourceStrings = this._getCurrentResourceStrings();
            this._host.requestUpdate();
        }
    }
    get locale() {
        return this._locale ?? getCurrentI18n();
    }
    set resourceStrings(value) {
        if (this._resourceStrings !== value) {
            this._resourceStrings = value;
            this._host.requestUpdate();
        }
    }
    get resourceStrings() {
        return this._resourceStrings ?? this._defaultResourceStrings;
    }
    constructor(host, config) {
        this._host = host;
        this._defaultEN = config.defaultEN;
        this._resourceChangeCallback = config.onResourceChange;
        this._defaultResourceStrings = this._getCurrentResourceStrings();
        this._registerResources(this._defaultEN);
        this._host.addController(this);
    }
    hostConnected() {
        getI18nManager().addEventListener('onResourceChange', this);
    }
    hostDisconnected() {
        getI18nManager().removeEventListener('onResourceChange', this);
    }
    handleEvent(event) {
        this._defaultResourceStrings = this._getCurrentResourceStrings();
        this._resourceChangeCallback?.(event);
        this._host.requestUpdate();
    }
    _registerResources(resource) {
        const convertedResource = convertToCoreResource(resource);
        const manager = getI18nManager();
        manager.registerI18n(convertedResource, manager.defaultLocale);
    }
    _getResourceMapForComponent() {
        const keys = Object.keys(this._defaultEN);
        if (keys.includes('last7Days')) {
            return dateRangePickerResourcesMap;
        }
        if (keys.includes('selectMonth')) {
            return calendarResourcesMap;
        }
        return undefined;
    }
    _getCurrentResourceStrings() {
        const coreResourceStrings = getI18nManager().getCurrentResourceStrings(this.locale);
        const resourceMap = this._getResourceMapForComponent();
        const normalizedResourceStrings = {};
        const defaultComponentKeys = Object.keys(this._defaultEN);
        for (const igcKey of defaultComponentKeys) {
            const coreKey = resourceMap?.get(igcKey);
            let resolvedValue = this._defaultEN[igcKey];
            if (coreKey) {
                if (coreKey.includes('getWeekLabel')) {
                    resolvedValue = getDisplayNamesFormatter().getWeekLabel(this.locale, {
                        style: 'short',
                    });
                }
                else if (coreKey in coreResourceStrings) {
                    resolvedValue = coreResourceStrings[coreKey];
                }
            }
            else if (igcKey in coreResourceStrings) {
                resolvedValue = coreResourceStrings[igcKey];
            }
            normalizedResourceStrings[igcKey] = resolvedValue;
        }
        return normalizedResourceStrings;
    }
}
export function addI18nController(host, config) {
    return new I18nController(host, config);
}
//# sourceMappingURL=i18n-controller.js.map