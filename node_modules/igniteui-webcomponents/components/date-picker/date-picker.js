var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IgcDatePickerComponent_1;
import { html, nothing } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { addThemingController } from '../../theming/theming-controller.js';
import IgcCalendarComponent, { focusActiveDate } from '../calendar/calendar.js';
import { convertToDate, createDateConstraints } from '../calendar/helpers.js';
import { addKeybindings, altKey, arrowDown, arrowUp, escapeKey, } from '../common/controllers/key-bindings.js';
import { addRootClickController } from '../common/controllers/root-click.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { blazorAdditionalDependencies } from '../common/decorators/blazorAdditionalDependencies.js';
import { shadowOptions } from '../common/decorators/shadow-options.js';
import { watch } from '../common/decorators/watch.js';
import { registerComponent } from '../common/definitions/register.js';
import { IgcCalendarResourceStringEN, } from '../common/i18n/EN/calendar.resources.js';
import { addI18nController } from '../common/i18n/i18n-controller.js';
import { IgcBaseComboBoxLikeComponent } from '../common/mixins/combo-box.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { FormAssociatedRequiredMixin } from '../common/mixins/forms/associated-required.js';
import { FormValueDateTimeTransformers } from '../common/mixins/forms/form-transformers.js';
import { createFormValueState } from '../common/mixins/forms/form-value.js';
import { addSafeEventListener, bindIf, equal, findElementFromEventPath, } from '../common/util.js';
import IgcDateTimeInputComponent from '../date-time-input/date-time-input.js';
import { DateTimeUtil } from '../date-time-input/date-util.js';
import IgcDialogComponent from '../dialog/dialog.js';
import IgcFocusTrapComponent from '../focus-trap/focus-trap.js';
import IgcIconComponent from '../icon/icon.js';
import IgcPopoverComponent from '../popover/popover.js';
import IgcValidationContainerComponent from '../validation-container/validation-container.js';
import { styles } from './themes/date-picker.base.css.js';
import { styles as shared } from './themes/shared/date-picker.common.css.js';
import { all } from './themes/themes.js';
import { datePickerValidators } from './validators.js';
let nextId = 1;
const Slots = setSlots('prefix', 'suffix', 'helper-text', 'bad-input', 'value-missing', 'range-overflow', 'range-underflow', 'custom-error', 'invalid', 'title', 'header-date', 'clear-icon', 'calendar-icon', 'calendar-icon-open', 'actions');
let IgcDatePickerComponent = class IgcDatePickerComponent extends FormAssociatedRequiredMixin(EventEmitterMixin(IgcBaseComboBoxLikeComponent)) {
    static { IgcDatePickerComponent_1 = this; }
    static { this.tagName = 'igc-date-picker'; }
    static { this.styles = [styles, shared]; }
    static register() {
        registerComponent(IgcDatePickerComponent_1, IgcCalendarComponent, IgcDateTimeInputComponent, IgcFocusTrapComponent, IgcIconComponent, IgcPopoverComponent, IgcDialogComponent, IgcValidationContainerComponent);
    }
    get __validators() {
        return datePickerValidators;
    }
    get _isDropDown() {
        return this.mode === 'dropdown';
    }
    get _isMaterial() {
        return this._themes.theme === 'material';
    }
    set value(value) {
        this._formValue.setValueAndFormState(value);
    }
    get value() {
        return this._formValue.value;
    }
    set activeDate(value) {
        this._activeDate = convertToDate(value);
    }
    get activeDate() {
        return this._activeDate ?? this._calendar?.activeDate;
    }
    set min(value) {
        this._min = convertToDate(value);
        this._setDateConstraints();
        this._validate();
    }
    get min() {
        return this._min;
    }
    set max(value) {
        this._max = convertToDate(value);
        this._setDateConstraints();
        this._validate();
    }
    get max() {
        return this._max;
    }
    set disabledDates(dates) {
        this._disabledDates = dates;
        this._setDateConstraints();
        this._validate();
    }
    get disabledDates() {
        return this._disabledDates;
    }
    set displayFormat(value) {
        this._displayFormat = value;
    }
    get displayFormat() {
        return this._displayFormat ?? this._input?.displayFormat;
    }
    set inputFormat(value) {
        this._inputFormat = value;
    }
    get inputFormat() {
        return this._inputFormat ?? this._input?.inputFormat;
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
    _openChange() {
        this._rootClickController.update();
        if (this.open) {
            this._oldValue = this.value;
        }
    }
    constructor() {
        super();
        this._inputId = `date-picker-${nextId++}`;
        this._themes = addThemingController(this, all);
        this._slots = addSlotController(this, { slots: Slots });
        this._i18nController = addI18nController(this, {
            defaultEN: IgcCalendarResourceStringEN,
        });
        this._oldValue = null;
        this._activeDate = null;
        this._min = null;
        this._max = null;
        this._formValue = createFormValueState(this, {
            initialValue: null,
            transformers: FormValueDateTimeTransformers,
        });
        this._rootClickController = addRootClickController(this, {
            onHide: this._handleClosing,
        });
        this.open = false;
        this.mode = 'dropdown';
        this.nonEditable = false;
        this.readOnly = false;
        this.headerOrientation = 'horizontal';
        this.orientation = 'horizontal';
        this.hideHeader = false;
        this.hideOutsideDays = false;
        this.outlined = false;
        this.visibleMonths = 1;
        this.showWeekNumbers = false;
        this.prompt = '_';
        this.weekStart = 'sunday';
        addSafeEventListener(this, 'focusout', this._handleFocusOut);
        addKeybindings(this, {
            skip: () => this.disabled || this.readOnly,
        })
            .set([altKey, arrowDown], this.handleAnchorClick)
            .set([altKey, arrowUp], this._onEscapeKey)
            .set(escapeKey, this._onEscapeKey);
    }
    _setDateConstraints() {
        this._dateConstraints = createDateConstraints(this.min, this.max, this.disabledDates);
    }
    async _shouldCloseCalendarDropdown() {
        if (!this.keepOpenOnSelect && (await this._hide(true))) {
            this._input.focus();
            this._input.select();
        }
    }
    async _onEscapeKey() {
        if (await this._hide(true)) {
            this._input.focus();
        }
    }
    _handleFocusOut({ relatedTarget }) {
        if (!this.contains(relatedTarget)) {
            this._handleBlur();
            const readOnly = !this._isDropDown || this.readOnly || this.nonEditable;
            if (readOnly && !equal(this.value, this._oldValue)) {
                this.emitEvent('igcChange', { detail: this.value });
                this._oldValue = this.value;
            }
        }
    }
    _handlerCalendarIconSlotPointerDown(event) {
        event.preventDefault();
    }
    _handleInputClick(event) {
        if (findElementFromEventPath('input', event)) {
            this.handleAnchorClick();
        }
    }
    async handleAnchorClick() {
        this._calendar.activeDate = this.value ?? this._calendar.activeDate;
        super.handleAnchorClick();
        await this.updateComplete;
        this._calendar[focusActiveDate]({ preventScroll: true });
    }
    _handleInputChangeEvent(event) {
        event.stopPropagation();
        this._setTouchedState();
        this.value = event.target.value;
        this.emitEvent('igcChange', { detail: this.value });
    }
    async _handleCalendarChangeEvent(event) {
        event.stopPropagation();
        this._setTouchedState();
        if (this.readOnly) {
            await this._calendar.updateComplete;
            this._calendar.value = this.value;
            return;
        }
        this.value = event.target.value;
        this.emitEvent('igcChange', { detail: this.value });
        this._shouldCloseCalendarDropdown();
    }
    _handleInputEvent(event) {
        event.stopPropagation();
        this._setTouchedState();
        if (this.nonEditable) {
            event.preventDefault();
            return;
        }
        this.value = event.target.value;
        this._calendar.activeDate = this.value ?? this._calendar.activeDate;
        this.emitEvent('igcInput', { detail: this.value });
    }
    _handleClosing() {
        this._hide(true);
    }
    _handleDialogClosing(event) {
        event.stopPropagation();
        this._oldValue = this.value;
        this._hide(true);
    }
    _handleDialogClosed(event) {
        event.stopPropagation();
    }
    clear() {
        this._oldValue = this.value;
        this.value = null;
        this._input?.clear();
    }
    stepUp(datePart, delta) {
        this._input.stepUp(datePart, delta);
    }
    stepDown(datePart, delta) {
        this._input.stepDown(datePart, delta);
    }
    select() {
        this._input.select();
    }
    setSelectionRange(start, end, direction) {
        this._input.setSelectionRange(start, end, direction);
    }
    setRangeText(replacement, start, end, mode) {
        this._input.setRangeText(replacement, start, end, mode);
        this.value = this._input.value;
    }
    _renderClearIcon() {
        return this.value
            ? html `
          <span
            slot="suffix"
            part="clear-icon"
            @click=${bindIf(!this.readOnly, this.clear)}
          >
            <slot name="clear-icon">
              <igc-icon
                name="input_clear"
                collection="default"
                aria-hidden="true"
              ></igc-icon>
            </slot>
          </span>
        `
            : nothing;
    }
    _renderCalendarIcon() {
        const defaultIcon = html `
      <igc-icon name="today" collection="default" aria-hidden="true"></igc-icon>
    `;
        const state = this.open ? 'calendar-icon-open' : 'calendar-icon';
        return html `
      <span
        slot="prefix"
        part=${state}
        @pointerdown=${this._handlerCalendarIconSlotPointerDown}
        @click=${bindIf(!this.readOnly, this.handleAnchorClick)}
      >
        <slot name=${state}>${defaultIcon}</slot>
      </span>
    `;
    }
    _renderCalendarSlots() {
        if (this._isDropDown) {
            return nothing;
        }
        const hasHeaderDate = this._slots.hasAssignedElements('header-date');
        return html `
      <slot name="title" slot="title">
        ${this.resourceStrings.selectDate}
      </slot>
      <slot
        name="header-date"
        slot=${bindIf(hasHeaderDate, 'header-date')}
      ></slot>
    `;
    }
    _renderCalendar(id) {
        const hideHeader = this._isDropDown ? true : this.hideHeader;
        const isInert = !this.open || this.disabled;
        return html `
      <igc-calendar
        aria-labelledby=${id}
        role="dialog"
        .inert=${isInert}
        ?show-week-numbers=${this.showWeekNumbers}
        ?hide-outside-days=${this.hideOutsideDays}
        ?hide-header=${hideHeader}
        .activeDate=${this.activeDate ?? this.value}
        .value=${this.value}
        .headerOrientation=${this.headerOrientation}
        .orientation=${this.orientation}
        .visibleMonths=${this.visibleMonths}
        .locale=${this.locale}
        .disabledDates=${this._dateConstraints}
        .specialDates=${this.specialDates}
        .weekStart=${this.weekStart}
        @igcChange=${this._handleCalendarChangeEvent}
        exportparts="header, header-title, header-date, content: calendar-content, navigation, months-navigation,
        years-navigation, years-range, navigation-buttons, navigation-button, days-view-container,
        days-view, months-view, years-view, days-row, label: calendar-label, week-number, week-number-inner, date,
        date-inner, first, last, inactive, hidden, weekend, range, special, disabled, single, preview,
        month, month-inner, year, year-inner, selected, current"
      >
        ${this._renderCalendarSlots()}
      </igc-calendar>
    `;
    }
    _renderActions() {
        const hasActions = this._slots.hasAssignedElements('actions');
        return html `
      <div
        part="actions"
        ?hidden=${!hasActions}
        slot=${bindIf(!this._isDropDown && hasActions, 'footer')}
      >
        <slot name="actions"></slot>
      </div>
    `;
    }
    _renderPicker(id) {
        const isDisabled = !this.open || this.disabled;
        return this._isDropDown
            ? html `
          <igc-popover ?open=${this.open} anchor=${id} flip shift>
            <igc-focus-trap ?disabled=${isDisabled}>
              ${this._renderCalendar(id)}${this._renderActions()}
            </igc-focus-trap>
          </igc-popover>
        `
            : html `
          <igc-dialog
            aria-label=${ifDefined(this.resourceStrings.selectDate)}
            role="dialog"
            ?open=${this.open}
            ?close-on-outside-click=${!this.keepOpenOnOutsideClick}
            hide-default-action
            @igcClosing=${this._handleDialogClosing}
            @igcClosed=${this._handleDialogClosed}
            exportparts="base: dialog-base, title, footer, overlay"
          >
            ${this._renderCalendar(id)}${this._renderActions()}
          </igc-dialog>
        `;
    }
    _renderLabel(id) {
        const isDisabled = this._isDropDown || this.readOnly;
        return this.label
            ? html `
          <label
            part="label"
            for=${id}
            @click=${bindIf(!isDisabled, this.handleAnchorClick)}
          >
            ${this.label}
          </label>
        `
            : nothing;
    }
    _renderHelperText() {
        return IgcValidationContainerComponent.create(this);
    }
    _renderInput(id) {
        const format = DateTimeUtil.predefinedToDateDisplayFormat(this._displayFormat);
        const readOnly = !this._isDropDown || this.readOnly || this.nonEditable;
        const hasPrefix = this._slots.hasAssignedElements('prefix');
        const hasSuffix = this._slots.hasAssignedElements('suffix');
        const hasClickHandler = !(this._isDropDown || this.readOnly);
        return html `
      <igc-date-time-input
        id=${id}
        aria-haspopup="dialog"
        label=${bindIf(this._isMaterial, this.label)}
        input-format=${ifDefined(this._inputFormat)}
        display-format=${ifDefined(format)}
        ?disabled=${this.disabled}
        ?readonly=${readOnly}
        ?required=${this.required}
        .value=${this.value}
        .locale=${this.locale}
        .prompt=${this.prompt}
        .outlined=${this.outlined}
        .placeholder=${this.placeholder}
        .min=${this.min}
        .max=${this.max}
        .invalid=${this.invalid}
        @igcChange=${this._handleInputChangeEvent}
        @igcInput=${this._handleInputEvent}
        @click=${bindIf(hasClickHandler, this._handleInputClick)}
        exportparts="input, label, prefix, suffix"
      >
        ${this._renderCalendarIcon()}
        <slot name="prefix" slot=${bindIf(hasPrefix, 'prefix')}></slot>
        ${this._renderClearIcon()}
        <slot name="suffix" slot=${bindIf(hasSuffix, 'suffix')}></slot>
      </igc-date-time-input>
    `;
    }
    render() {
        const id = this.id || this._inputId;
        return html `
      ${this._isMaterial ? nothing : this._renderLabel(id)}
      ${this._renderInput(id)} ${this._renderPicker(id)}
      ${this._renderHelperText()}
    `;
    }
};
__decorate([
    query(IgcDateTimeInputComponent.tagName)
], IgcDatePickerComponent.prototype, "_input", void 0);
__decorate([
    query(IgcCalendarComponent.tagName)
], IgcDatePickerComponent.prototype, "_calendar", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcDatePickerComponent.prototype, "open", void 0);
__decorate([
    property()
], IgcDatePickerComponent.prototype, "label", void 0);
__decorate([
    property()
], IgcDatePickerComponent.prototype, "mode", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'non-editable' })
], IgcDatePickerComponent.prototype, "nonEditable", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'readonly' })
], IgcDatePickerComponent.prototype, "readOnly", void 0);
__decorate([
    property({ converter: convertToDate })
], IgcDatePickerComponent.prototype, "value", null);
__decorate([
    property({ attribute: 'active-date', converter: convertToDate })
], IgcDatePickerComponent.prototype, "activeDate", null);
__decorate([
    property({ converter: convertToDate })
], IgcDatePickerComponent.prototype, "min", null);
__decorate([
    property({ converter: convertToDate })
], IgcDatePickerComponent.prototype, "max", null);
__decorate([
    property({ attribute: 'header-orientation', reflect: true })
], IgcDatePickerComponent.prototype, "headerOrientation", void 0);
__decorate([
    property()
], IgcDatePickerComponent.prototype, "orientation", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'hide-header' })
], IgcDatePickerComponent.prototype, "hideHeader", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'hide-outside-days' })
], IgcDatePickerComponent.prototype, "hideOutsideDays", void 0);
__decorate([
    property({ attribute: false })
], IgcDatePickerComponent.prototype, "disabledDates", null);
__decorate([
    property({ attribute: false })
], IgcDatePickerComponent.prototype, "specialDates", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], IgcDatePickerComponent.prototype, "outlined", void 0);
__decorate([
    property()
], IgcDatePickerComponent.prototype, "placeholder", void 0);
__decorate([
    property({ type: Number, attribute: 'visible-months' })
], IgcDatePickerComponent.prototype, "visibleMonths", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'show-week-numbers' })
], IgcDatePickerComponent.prototype, "showWeekNumbers", void 0);
__decorate([
    property({ attribute: 'display-format' })
], IgcDatePickerComponent.prototype, "displayFormat", null);
__decorate([
    property({ attribute: 'input-format' })
], IgcDatePickerComponent.prototype, "inputFormat", null);
__decorate([
    property()
], IgcDatePickerComponent.prototype, "prompt", void 0);
__decorate([
    property()
], IgcDatePickerComponent.prototype, "locale", null);
__decorate([
    property({ attribute: false })
], IgcDatePickerComponent.prototype, "resourceStrings", null);
__decorate([
    property({ attribute: 'week-start' })
], IgcDatePickerComponent.prototype, "weekStart", void 0);
__decorate([
    watch('open')
], IgcDatePickerComponent.prototype, "_openChange", null);
IgcDatePickerComponent = IgcDatePickerComponent_1 = __decorate([
    blazorAdditionalDependencies('IgcCalendarComponent, IgcDateTimeInputComponent, IgcDialogComponent, IgcIconComponent'),
    shadowOptions({ delegatesFocus: true })
], IgcDatePickerComponent);
export default IgcDatePickerComponent;
//# sourceMappingURL=date-picker.js.map