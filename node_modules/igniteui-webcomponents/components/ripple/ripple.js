import { LitElement, nothing } from 'lit';
import { registerComponent } from '../common/definitions/register.js';
import { addSafeEventListener, getScaleFactor, setStyles, } from '../common/util.js';
import { styles } from './ripple.material.css.js';
const rippleFrames = [
    { opacity: 0.5, transform: 'scale(.3)' },
    { opacity: 0, transform: 'scale(2)' },
];
const rippleAnimation = {
    duration: 600,
    fill: 'forwards',
    easing: 'linear',
};
let rippleElement;
function getRippleElement() {
    if (!rippleElement) {
        rippleElement = document.createElement('span');
    }
    return rippleElement.cloneNode();
}
export default class IgcRippleComponent extends LitElement {
    static { this.tagName = 'igc-ripple'; }
    static { this.styles = styles; }
    static register() {
        registerComponent(IgcRippleComponent);
    }
    constructor() {
        super();
        addSafeEventListener(this, 'pointerdown', this._handler);
    }
    async _handler(event) {
        if (event.button !== 0) {
            return;
        }
        const element = getRippleElement();
        const { radius, top, left } = this._getDimensions(event.clientX, event.clientY);
        const styles = {
            position: 'absolute',
            display: 'block',
            pointerEvents: 'none',
            transformOrigin: 'center',
            transform: 'translate3d(0, 0, 0) scale(0)',
            willChange: 'opacity, transform',
            margin: '0',
            border: 'none',
            width: `${radius}px`,
            height: `${radius}px`,
            borderRadius: '50%',
            top: `${top}px`,
            left: `${left}px`,
            background: 'var(--color, var(--ig-gray-800))',
        };
        setStyles(element, styles);
        this.renderRoot.appendChild(element);
        await element.animate(rippleFrames, rippleAnimation).finished;
        element.remove();
    }
    _getDimensions(x, y) {
        const rect = this.getBoundingClientRect();
        const factor = getScaleFactor(this);
        const radius = Math.max(rect.width, rect.height);
        const halfRadius = radius / 2;
        return {
            radius,
            top: Math.round((y - rect.top) * factor.y - halfRadius),
            left: Math.round((x - rect.left) * factor.x - halfRadius),
        };
    }
    render() {
        return nothing;
    }
}
//# sourceMappingURL=ripple.js.map