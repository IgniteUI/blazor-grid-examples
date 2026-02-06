import { isElement } from '../components/common/util.js';
const LISTENER_OPTIONS = { once: true };
function getPrefersReducedMotion() {
    return globalThis?.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
class AnimationController {
    get _target() {
        if (isElement(this._ref)) {
            return this._ref;
        }
        return this._ref?.value ?? this._host;
    }
    constructor(host, ref) {
        this._host = host;
        this._ref = ref;
        this._host.addController(this);
    }
    _parseKeyframes(keyframes) {
        const target = this._target;
        return keyframes.map((frame) => {
            return frame.height === 'auto'
                ? { ...frame, height: `${target.scrollHeight}px` }
                : frame;
        });
    }
    hostConnected() { }
    async playExclusive(animation) {
        await this.cancelAll();
        const event = await this.play(animation);
        return event.type === 'finish';
    }
    async play(animation) {
        const { steps, options } = animation;
        const duration = getPrefersReducedMotion() ? 0 : (options?.duration ?? 0);
        if (!Number.isFinite(duration)) {
            throw new Error('Promise-based animations must be finite.');
        }
        return new Promise((resolve) => {
            const animation = this._target.animate(this._parseKeyframes(steps), {
                ...options,
                duration,
            });
            animation.addEventListener('cancel', resolve, LISTENER_OPTIONS);
            animation.addEventListener('finish', resolve, LISTENER_OPTIONS);
        });
    }
    cancelAll() {
        for (const animation of this._target.getAnimations()) {
            animation.cancel();
        }
        return Promise.resolve();
    }
}
export function addAnimationController(host, target) {
    return new AnimationController(host, target);
}
export function startViewTransition(callback) {
    if (getPrefersReducedMotion() || !document.startViewTransition) {
        callback?.();
        return {};
    }
    return { transition: document.startViewTransition(callback) };
}
//# sourceMappingURL=player.js.map