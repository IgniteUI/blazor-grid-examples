var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ContextProvider } from '@lit/context';
import { CarouselResourceStringsEN, } from 'igniteui-i18n-core';
import { html, LitElement, nothing } from 'lit';
import { property, queryAll, state } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';
import { addThemingController } from '../../theming/theming-controller.js';
import IgcButtonComponent from '../button/button.js';
import { carouselContext } from '../common/context.js';
import { addGesturesController, } from '../common/controllers/gestures.js';
import { addInternalsController } from '../common/controllers/internals.js';
import { addKeybindings, arrowLeft, arrowRight, endKey, homeKey, } from '../common/controllers/key-bindings.js';
import { createMutationController, } from '../common/controllers/mutation-observer.js';
import { addSlotController, setSlots, } from '../common/controllers/slot.js';
import { watch } from '../common/decorators/watch.js';
import { registerComponent } from '../common/definitions/register.js';
import { addI18nController } from '../common/i18n/i18n-controller.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { partMap } from '../common/part-map.js';
import { addSafeEventListener, asNumber, findElementFromEventPath, first, formatString, isEmpty, isLTR, last, wrap, } from '../common/util.js';
import IgcIconComponent from '../icon/icon.js';
import IgcCarouselIndicatorComponent from './carousel-indicator.js';
import IgcCarouselIndicatorContainerComponent from './carousel-indicator-container.js';
import IgcCarouselSlideComponent from './carousel-slide.js';
import { styles } from './themes/carousel.base.css.js';
import { all } from './themes/container.js';
import { styles as shared } from './themes/shared/carousel.common.css.js';
let nextId = 1;
const Slots = setSlots('indicator', 'previous-button', 'next-button');
export default class IgcCarouselComponent extends EventEmitterMixin(LitElement) {
    static { this.styles = [styles, shared]; }
    static { this.tagName = 'igc-carousel'; }
    static register() {
        registerComponent(IgcCarouselComponent, IgcCarouselIndicatorComponent, IgcCarouselIndicatorContainerComponent, IgcCarouselSlideComponent, IgcIconComponent, IgcButtonComponent);
    }
    get _hasProjectedIndicators() {
        return !isEmpty(this._projectedIndicators);
    }
    get _showIndicatorsLabel() {
        return this.total > this.maximumIndicatorsCount;
    }
    get _nextIndex() {
        return wrap(0, this.total - 1, this.current + 1);
    }
    get _previousIndex() {
        return wrap(0, this.total - 1, this.current - 1);
    }
    set indicatorsLabelFormat(value) {
        this._indicatorsLabelFormat = value;
    }
    get indicatorsLabelFormat() {
        return (this._indicatorsLabelFormat ??
            `${this.resourceStrings.carousel_slide} {0}`);
    }
    set slidesLabelFormat(value) {
        this._slidesLabelFormat = value;
    }
    get slidesLabelFormat() {
        return (this._slidesLabelFormat ?? `{0} ${this.resourceStrings.carousel_of} {1}`);
    }
    set locale(value) {
        this._i18nController.locale = value;
    }
    get locale() {
        return this._i18nController.locale;
    }
    set resourceStrings(value) {
        this._i18nController.resourceStrings = value;
    }
    get resourceStrings() {
        return this._i18nController.resourceStrings;
    }
    get slides() {
        return Array.from(this._slides);
    }
    get total() {
        return this._slides.length;
    }
    get current() {
        return Math.max(0, this._slides.indexOf(this._activeSlide));
    }
    get isPlaying() {
        return this._playing;
    }
    get isPaused() {
        return this._paused;
    }
    _contextChanged() {
        this._context.setValue(this, true);
    }
    _intervalChange() {
        if (!this.isPlaying) {
            this._playing = true;
        }
        this._restartInterval();
    }
    constructor() {
        super();
        this._carouselId = `igc-carousel-${nextId++}`;
        this._paused = false;
        this._hasKeyboardInteractionOnIndicators = false;
        this._hasPointerInteraction = false;
        this._hasInnerFocus = false;
        this._slides = [];
        this._projectedIndicators = [];
        this._playing = false;
        this._slots = addSlotController(this, {
            slots: Slots,
            onChange: this._handleSlotChange,
            initial: true,
        });
        this._i18nController = addI18nController(this, {
            defaultEN: CarouselResourceStringsEN,
        });
        this._context = new ContextProvider(this, {
            context: carouselContext,
            initialValue: this,
        });
        this._carouselSlidesContainerRef = createRef();
        this._indicatorsContainerRef = createRef();
        this._prevButtonRef = createRef();
        this._nextButtonRef = createRef();
        this.disableLoop = false;
        this.disablePauseOnInteraction = false;
        this.hideNavigation = false;
        this.hideIndicators = false;
        this.vertical = false;
        this.indicatorsOrientation = 'end';
        this.maximumIndicatorsCount = 10;
        this.animationType = 'slide';
        addInternalsController(this, {
            initialARIA: {
                role: 'region',
                ariaRoleDescription: 'carousel',
            },
        });
        addThemingController(this, all);
        addSafeEventListener(this, 'pointerenter', this._handlePointerInteraction);
        addSafeEventListener(this, 'pointerleave', this._handlePointerInteraction);
        addSafeEventListener(this, 'focusin', this._handleFocusInteraction);
        addSafeEventListener(this, 'focusout', this._handleFocusInteraction);
        addGesturesController(this, {
            ref: this._carouselSlidesContainerRef,
            touchOnly: true,
        })
            .set('swipe-left', this._handleHorizontalSwipe)
            .set('swipe-right', this._handleHorizontalSwipe)
            .set('swipe-up', this._handleVerticalSwipe)
            .set('swipe-down', this._handleVerticalSwipe);
        addKeybindings(this, {
            ref: this._indicatorsContainerRef,
        })
            .set(arrowLeft, this._handleArrowLeft)
            .set(arrowRight, this._handleArrowRight)
            .set(homeKey, this._handleHomeKey)
            .set(endKey, this._handleEndKey);
        addKeybindings(this, {
            ref: this._prevButtonRef,
        }).setActivateHandler(this._handleNavigationInteractionPrevious);
        addKeybindings(this, {
            ref: this._nextButtonRef,
        }).setActivateHandler(this._handleNavigationInteractionNext);
        createMutationController(this, {
            callback: this._observerCallback,
            filter: [IgcCarouselSlideComponent.tagName],
            config: {
                attributeFilter: ['active'],
                childList: true,
                subtree: true,
            },
        });
    }
    async firstUpdated() {
        await this.updateComplete;
        if (!isEmpty(this._slides)) {
            this._activateSlide(this._slides.findLast((slide) => slide.active) ?? first(this._slides));
        }
    }
    _observerCallback({ changes: { added, attributes }, }) {
        const activeSlides = this._slides.filter((slide) => slide.active);
        if (activeSlides.length <= 1) {
            return;
        }
        const idx = this._slides.indexOf(added.length ? last(added).node : last(attributes).node);
        for (const [i, slide] of this._slides.entries()) {
            if (slide.active && i !== idx) {
                slide.active = false;
            }
        }
        this._activateSlide(this._slides[idx]);
    }
    _handleSlotChange(params) {
        if (params.isDefault || params.isInitial) {
            this._slides = this._slots.getAssignedElements('[default]', {
                selector: IgcCarouselSlideComponent.tagName,
            });
        }
        if (params.slot === 'indicator') {
            this._projectedIndicators = this._slots.getAssignedElements('indicator', {
                selector: IgcCarouselIndicatorComponent.tagName,
            });
        }
    }
    _handlePointerInteraction(event) {
        this._hasPointerInteraction = event.type === 'pointerenter';
        if (!this._hasInnerFocus) {
            this._handlePauseOnInteraction();
        }
    }
    _handleFocusInteraction(event) {
        const node = event.relatedTarget;
        if (this.contains(node)) {
            return;
        }
        this._hasInnerFocus = event.type === 'focusin';
        if (!this._hasPointerInteraction) {
            this._handlePauseOnInteraction();
        }
    }
    async _handleIndicatorClick(event) {
        const indicator = findElementFromEventPath(IgcCarouselIndicatorComponent.tagName, event);
        const index = this._hasProjectedIndicators
            ? this._projectedIndicators.indexOf(indicator)
            : Array.from(this._defaultIndicators).indexOf(indicator);
        this._handleInteraction(() => this.select(this._slides[index], index > this.current ? 'next' : 'prev'));
    }
    async _handleArrowLeft() {
        this._hasKeyboardInteractionOnIndicators = true;
        this._handleInteraction(isLTR(this) ? this.prev : this.next);
    }
    async _handleArrowRight() {
        this._hasKeyboardInteractionOnIndicators = true;
        this._handleInteraction(isLTR(this) ? this.next : this.prev);
    }
    async _handleHomeKey() {
        this._hasKeyboardInteractionOnIndicators = true;
        this._handleInteraction(() => this.select(isLTR(this) ? first(this._slides) : last(this._slides)));
    }
    async _handleEndKey() {
        this._hasKeyboardInteractionOnIndicators = true;
        this._handleInteraction(() => this.select(isLTR(this) ? last(this._slides) : first(this._slides)));
    }
    _handleVerticalSwipe({ data: { direction } }) {
        if (this.vertical) {
            this._handleInteraction(direction === 'up' ? this.next : this.prev);
        }
    }
    _handleHorizontalSwipe({ data: { direction } }) {
        if (!this.vertical) {
            const callback = () => {
                if (isLTR(this)) {
                    return direction === 'left' ? this.next : this.prev;
                }
                return direction === 'left' ? this.prev : this.next;
            };
            this._handleInteraction(callback());
        }
    }
    _handleNavigationInteractionNext() {
        this._handleInteraction(this.next);
    }
    _handleNavigationInteractionPrevious() {
        this._handleInteraction(this.prev);
    }
    async _handleInteraction(callback) {
        if (this.interval) {
            this._resetInterval();
        }
        if (await callback.call(this)) {
            this.emitEvent('igcSlideChanged', { detail: this.current });
        }
        if (this.interval) {
            this._restartInterval();
        }
    }
    _handlePauseOnInteraction() {
        if (!this.interval || this.disablePauseOnInteraction)
            return;
        if (this.isPlaying) {
            this.pause();
            this.emitEvent('igcPaused');
        }
        else {
            this.play();
            this.emitEvent('igcPlaying');
        }
    }
    _activateSlide(slide) {
        if (this._activeSlide) {
            this._activeSlide.active = false;
        }
        this._activeSlide = slide;
        this._activeSlide.active = true;
        if (this._hasKeyboardInteractionOnIndicators) {
            this._hasProjectedIndicators
                ? this._projectedIndicators[this.current].focus()
                : this._defaultIndicators[this.current].focus();
            this._hasKeyboardInteractionOnIndicators = false;
        }
    }
    _updateProjectedIndicators() {
        for (const [idx, slide] of this._slides.entries()) {
            const indicator = this._projectedIndicators[idx];
            indicator.active = slide.active;
            indicator.index = idx;
        }
        if (this._activeSlide) {
            this.setAttribute('aria-controls', this._activeSlide.id);
        }
    }
    _resetInterval() {
        if (this._lastInterval) {
            clearInterval(this._lastInterval);
            this._lastInterval = null;
        }
    }
    _restartInterval() {
        this._resetInterval();
        if (asNumber(this.interval) > 0) {
            this._lastInterval = setInterval(() => {
                if (this.isPlaying &&
                    this.total &&
                    !(this.disableLoop && this._nextIndex === 0)) {
                    this.select(this.slides[this._nextIndex], 'next');
                    this.emitEvent('igcSlideChanged', { detail: this.current });
                }
                else {
                    this.pause();
                }
            }, this.interval);
        }
    }
    async _animateSlides(nextSlide, currentSlide, dir) {
        if (dir === 'next') {
            currentSlide.previous = true;
            currentSlide.toggleAnimation('out');
            this._activateSlide(nextSlide);
            await nextSlide.toggleAnimation('in');
            currentSlide.previous = false;
        }
        else {
            currentSlide.previous = true;
            currentSlide.toggleAnimation('in', 'reverse');
            this._activateSlide(nextSlide);
            await nextSlide.toggleAnimation('out', 'reverse');
            currentSlide.previous = false;
        }
    }
    play() {
        if (!this.isPlaying) {
            this._paused = false;
            this._playing = true;
            this._restartInterval();
        }
    }
    pause() {
        if (this.isPlaying) {
            this._playing = false;
            this._paused = true;
            this._resetInterval();
        }
    }
    async next() {
        if (this.disableLoop && this._nextIndex === 0) {
            this.pause();
            return false;
        }
        return await this.select(this._slides[this._nextIndex], 'next');
    }
    async prev() {
        if (this.disableLoop && this._previousIndex === this.total - 1) {
            this.pause();
            return false;
        }
        return await this.select(this._slides[this._previousIndex], 'prev');
    }
    async select(slideOrIndex, animationDirection) {
        let index;
        let slide;
        if (typeof slideOrIndex === 'number') {
            index = slideOrIndex;
            slide = this._slides.at(index);
        }
        else {
            slide = slideOrIndex;
            index = this._slides.indexOf(slide);
        }
        if (index === this.current || index === -1 || !slide) {
            return false;
        }
        const dir = animationDirection ?? (index > this.current ? 'next' : 'prev');
        await this._animateSlides(slide, this._activeSlide, dir);
        return true;
    }
    _renderNavigation() {
        return html `
      <igc-button
        ${ref(this._prevButtonRef)}
        type="button"
        part="navigation previous"
        aria-label=${this.resourceStrings.carousel_previous_slide ??
            'previous slide'}
        aria-controls=${this._carouselId}
        ?disabled=${this.disableLoop && this.current === 0}
        @click=${this._handleNavigationInteractionPrevious}
      >
        <slot name="previous-button">
          <igc-icon
            name="carousel_prev"
            collection="default"
            aria-hidden="true"
          ></igc-icon>
        </slot>
      </igc-button>

      <igc-button
        ${ref(this._nextButtonRef)}
        type="button"
        part="navigation next"
        aria-label=${this.resourceStrings.carousel_next_slide ?? 'next slide'}
        aria-controls=${this._carouselId}
        ?disabled=${this.disableLoop && this.current === this.total - 1}
        @click=${this._handleNavigationInteractionNext}
      >
        <slot name="next-button">
          <igc-icon
            name="carousel_next"
            collection="default"
            aria-hidden="true"
          ></igc-icon>
        </slot>
      </igc-button>
    `;
    }
    *_renderIndicators() {
        for (const [i, slide] of this._slides.entries()) {
            const forward = slide.active ? 'visible' : 'hidden';
            const backward = slide.active ? 'hidden' : 'visible';
            yield html `
        <igc-carousel-indicator
          exportparts="indicator, active, inactive"
          .active=${slide.active}
          .index=${i}
        >
          <div
            part="dot"
            style=${styleMap({ visibility: backward, zIndex: 1 })}
          ></div>
          <div
            part="dot active"
            slot="active"
            style=${styleMap({ visibility: forward })}
          ></div>
        </igc-carousel-indicator>
      `;
        }
    }
    _renderIndicatorContainer() {
        const parts = {
            indicators: true,
            start: this.indicatorsOrientation === 'start',
        };
        return html `
      <igc-carousel-indicator-container>
        <div
          ${ref(this._indicatorsContainerRef)}
          role="tablist"
          part=${partMap(parts)}
        >
          <slot name="indicator" @click=${this._handleIndicatorClick}>
            ${cache(this._hasProjectedIndicators
            ? this._updateProjectedIndicators()
            : this._renderIndicators())}
          </slot>
        </div>
      </igc-carousel-indicator-container>
    `;
    }
    _renderLabel() {
        const parts = {
            label: true,
            indicators: true,
            start: this.indicatorsOrientation === 'start',
        };
        const value = formatString(this.slidesLabelFormat, this.current + 1, this.total);
        return html `
      <div part=${partMap(parts)}>
        <span>${value}</span>
      </div>
    `;
    }
    render() {
        const hasNoIndicators = this.hideIndicators || this._showIndicatorsLabel;
        const hasLabel = !this.hideIndicators && this._showIndicatorsLabel;
        return html `
      <section>
        ${cache(this.hideNavigation ? nothing : this._renderNavigation())}
        ${hasNoIndicators ? nothing : this._renderIndicatorContainer()}
        ${hasLabel ? this._renderLabel() : nothing}
        <div
          ${ref(this._carouselSlidesContainerRef)}
          id=${this._carouselId}
          aria-live=${this.interval && this._playing ? 'off' : 'polite'}
        >
          <slot></slot>
        </div>
      </section>
    `;
    }
}
__decorate([
    state()
], IgcCarouselComponent.prototype, "_activeSlide", void 0);
__decorate([
    state()
], IgcCarouselComponent.prototype, "_playing", void 0);
__decorate([
    queryAll(IgcCarouselIndicatorComponent.tagName)
], IgcCarouselComponent.prototype, "_defaultIndicators", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'disable-loop' })
], IgcCarouselComponent.prototype, "disableLoop", void 0);
__decorate([
    property({
        type: Boolean,
        reflect: true,
        attribute: 'disable-pause-on-interaction',
    })
], IgcCarouselComponent.prototype, "disablePauseOnInteraction", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'hide-navigation' })
], IgcCarouselComponent.prototype, "hideNavigation", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'hide-indicators' })
], IgcCarouselComponent.prototype, "hideIndicators", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcCarouselComponent.prototype, "vertical", void 0);
__decorate([
    property({ attribute: 'indicators-orientation' })
], IgcCarouselComponent.prototype, "indicatorsOrientation", void 0);
__decorate([
    property({ attribute: 'indicators-label-format' })
], IgcCarouselComponent.prototype, "indicatorsLabelFormat", null);
__decorate([
    property({ attribute: 'slides-label-format' })
], IgcCarouselComponent.prototype, "slidesLabelFormat", null);
__decorate([
    property({ type: Number })
], IgcCarouselComponent.prototype, "interval", void 0);
__decorate([
    property({ type: Number, attribute: 'maximum-indicators-count' })
], IgcCarouselComponent.prototype, "maximumIndicatorsCount", void 0);
__decorate([
    property({ attribute: 'animation-type' })
], IgcCarouselComponent.prototype, "animationType", void 0);
__decorate([
    property()
], IgcCarouselComponent.prototype, "locale", null);
__decorate([
    property({ attribute: false })
], IgcCarouselComponent.prototype, "resourceStrings", null);
__decorate([
    watch('animationType'),
    watch('slidesLabelFormat'),
    watch('indicatorsLabelFormat')
], IgcCarouselComponent.prototype, "_contextChanged", null);
__decorate([
    watch('interval')
], IgcCarouselComponent.prototype, "_intervalChange", null);
//# sourceMappingURL=carousel.js.map