import { createAbortHandle } from '../abort-handler.js';
import { findElementFromEventPath, isEmpty } from '../util.js';
let ROOT_CLICK_LISTENER_ACTIVE = false;
const SHARED_ABORT_HANDLER = createAbortHandle();
const POINTER_DOWN_HOSTS = new Set();
const HOST_CONFIGURATIONS = new WeakMap();
const ACTIVE_HOSTS = new Set();
function getHostTargets(host, config) {
    return new Set(config?.target ? [host, config.target] : [host]);
}
function handlePointerDown(event) {
    POINTER_DOWN_HOSTS.clear();
    for (const host of ACTIVE_HOSTS) {
        const config = HOST_CONFIGURATIONS.get(host);
        const targets = getHostTargets(host, config);
        if (findElementFromEventPath((node) => targets.has(node), event)) {
            POINTER_DOWN_HOSTS.add(host);
        }
    }
}
function handleRootClick(event) {
    for (const host of [...ACTIVE_HOSTS]) {
        if (host.keepOpenOnOutsideClick || POINTER_DOWN_HOSTS.has(host)) {
            continue;
        }
        const config = HOST_CONFIGURATIONS.get(host);
        const targets = getHostTargets(host, config);
        if (!findElementFromEventPath((node) => targets.has(node), event)) {
            config?.onHide ? config.onHide.call(host) : host.hide();
        }
    }
    POINTER_DOWN_HOSTS.clear();
}
class RootClickController {
    constructor(host, config) {
        this._host = host;
        this._config = config;
        this._host.addController(this);
        if (this._config) {
            HOST_CONFIGURATIONS.set(this._host, this._config);
        }
    }
    _addActiveHost() {
        ACTIVE_HOSTS.add(this._host);
        if (this._config) {
            HOST_CONFIGURATIONS.set(this._host, this._config);
        }
        if (!ROOT_CLICK_LISTENER_ACTIVE) {
            const options = {
                capture: true,
                signal: SHARED_ABORT_HANDLER.signal,
            };
            document.addEventListener('pointerdown', handlePointerDown, {
                ...options,
                passive: true,
            });
            document.addEventListener('click', handleRootClick, options);
            ROOT_CLICK_LISTENER_ACTIVE = true;
        }
    }
    _removeActiveHost() {
        ACTIVE_HOSTS.delete(this._host);
        HOST_CONFIGURATIONS.delete(this._host);
        POINTER_DOWN_HOSTS.delete(this._host);
        if (isEmpty(ACTIVE_HOSTS) && ROOT_CLICK_LISTENER_ACTIVE) {
            SHARED_ABORT_HANDLER.abort();
            ROOT_CLICK_LISTENER_ACTIVE = false;
        }
    }
    _configureListeners() {
        this._host.open && !this._host.keepOpenOnOutsideClick
            ? this._addActiveHost()
            : this._removeActiveHost();
    }
    update(config) {
        if (config) {
            this._config = { ...this._config, ...config };
            HOST_CONFIGURATIONS.set(this._host, this._config);
        }
        this._configureListeners();
    }
    hostConnected() {
        this._configureListeners();
    }
    hostDisconnected() {
        this._removeActiveHost();
    }
}
export function addRootClickController(host, config) {
    return new RootClickController(host, config);
}
//# sourceMappingURL=root-click.js.map