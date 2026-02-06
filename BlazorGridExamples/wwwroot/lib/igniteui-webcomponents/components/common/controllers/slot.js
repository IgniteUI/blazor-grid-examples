import { isEmpty } from '../util.js';
const DefaultSlot = '[default]';
class SlotController {
    constructor(host, options) {
        this._initialized = false;
        this._host = host;
        this._host.addController(this);
        this._options = { ...options };
        this._slots = options?.slots ? new Set(options.slots) : undefined;
    }
    _getSlot(slotName) {
        if (slotName === DefaultSlot) {
            return this._host.renderRoot.querySelector('slot:not([name])');
        }
        return this._host.renderRoot.querySelector(`slot[name=${slotName}]`);
    }
    getAssignedNodes(slot, flatten = false) {
        return this._getSlot(slot)?.assignedNodes({ flatten }) ?? [];
    }
    getAssignedElements(slot, options) {
        const elements = this._getSlot(slot)?.assignedElements({
            flatten: options?.flatten,
        }) ?? [];
        return options?.selector
            ? elements.filter((e) => e.matches(options.selector))
            : elements;
    }
    hasAssignedNodes(slot, flatten = false) {
        return !isEmpty(this.getAssignedNodes(slot, flatten));
    }
    hasAssignedElements(slot, options) {
        return !isEmpty(this.getAssignedElements(slot, options));
    }
    handleEvent(event) {
        const slot = event.target;
        const name = slot.name;
        const isDefault = name === '';
        if (!this._slots ||
            this._slots.has(isDefault ? DefaultSlot : slot.name)) {
            this._options.onChange?.call(this._host, {
                slot: name,
                isDefault,
                isInitial: false,
            });
            this._host.requestUpdate();
        }
    }
    hostConnected() {
        this._host.renderRoot.addEventListener('slotchange', this);
    }
    hostDisconnected() {
        this._host.renderRoot.removeEventListener('slotchange', this);
    }
    hostUpdated() {
        if (!this._initialized && this._options.initial) {
            this._initialized = true;
            this._options.onChange?.call(this._host, {
                slot: '<initial>',
                isDefault: false,
                isInitial: true,
            });
        }
    }
}
function addSlotController(host, options) {
    return new SlotController(host, {
        ...options,
        slots: options?.slots,
    });
}
function setSlots(...slots) {
    return [DefaultSlot, ...slots];
}
export { addSlotController, DefaultSlot, setSlots };
//# sourceMappingURL=slot.js.map