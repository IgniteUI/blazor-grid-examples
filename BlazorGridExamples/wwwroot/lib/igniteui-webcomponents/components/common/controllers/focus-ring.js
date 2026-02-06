import { createAbortHandle } from '../abort-handler.js';
class KeyboardFocusRingController {
    static { this._events = ['keyup', 'focusout', 'pointerup']; }
    get focused() {
        return this._isKeyboardFocused;
    }
    constructor(host) {
        this._abortHandle = createAbortHandle();
        this._isKeyboardFocused = false;
        this._host = host;
        host.addController(this);
    }
    hostConnected() {
        const { signal } = this._abortHandle;
        for (const event of KeyboardFocusRingController._events) {
            this._host.addEventListener(event, this, { passive: true, signal });
        }
    }
    hostDisconnected() {
        this._abortHandle.abort();
    }
    handleEvent(event) {
        this._isKeyboardFocused = event.type === 'keyup';
        this._host.requestUpdate();
    }
}
export function addKeyboardFocusRing(host) {
    return new KeyboardFocusRingController(host);
}
//# sourceMappingURL=focus-ring.js.map