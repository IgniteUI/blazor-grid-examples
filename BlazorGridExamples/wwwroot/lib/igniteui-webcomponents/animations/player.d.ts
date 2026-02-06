import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type { Ref } from 'lit/directives/ref.js';
import type { AnimationReferenceMetadata } from './types.js';
/**
 * Defines the result of an optional View Transition start.
 */
type ViewTransitionResult = {
    transition?: ViewTransition;
};
/**
 * A ReactiveController for managing Web Animation API (WAAPI) playback
 * on a host element or a specified target element.
 *
 * It provides methods to play, stop, and coordinate animations, including
 * support for 'height: auto' transitions and reduced motion preference.
 */
declare class AnimationController implements ReactiveController {
    private readonly _host;
    private readonly _ref?;
    /**
     * The actual HTMLElement target for the animations.
     * Prioritizes a passed-in Ref value, then a direct HTMLElement, falling back to the host.
     */
    protected get _target(): HTMLElement;
    constructor(host: ReactiveControllerHost & HTMLElement, ref?: Ref<HTMLElement> | HTMLElement);
    /** Pre-processes keyframes, specifically resolving 'auto' height to the element's scrollHeight. */
    private _parseKeyframes;
    /** @internal */
    hostConnected(): void;
    /** Plays a sequence of keyframes, first cancelling all existing animations on the target. */
    playExclusive(animation: AnimationReferenceMetadata): Promise<boolean>;
    /**
     * Plays a sequence of keyframes using WAAPI.
     * Automatically sets duration to 0 if 'prefers-reduced-motion' is set.
     */
    play(animation: AnimationReferenceMetadata): Promise<AnimationPlaybackEvent>;
    /** Cancels all active animations on the target element. */
    cancelAll(): Promise<void>;
}
/**
 * Creates and attaches an animation player instance to the passed in `host` element.
 * The player will run animations on the passed in `target`, or if `target` is undefined,
 * the host element itself.
 */
export declare function addAnimationController(host: ReactiveControllerHost & HTMLElement, target?: Ref<HTMLElement> | HTMLElement): AnimationController;
/**
 * Initiates a View Transition if supported by the browser and not suppressed by
 * the 'prefers-reduced-motion' setting.
 */
export declare function startViewTransition(callback?: ViewTransitionUpdateCallback): ViewTransitionResult;
export type { AnimationController };
