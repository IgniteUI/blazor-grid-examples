var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { FileInputResourceStringsEN, } from 'igniteui-i18n-core';
import { html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { addThemingController } from '../../theming/theming-controller.js';
import IgcButtonComponent from '../button/button.js';
import { addSlotController, setSlots } from '../common/controllers/slot.js';
import { registerComponent } from '../common/definitions/register.js';
import { addI18nController } from '../common/i18n/i18n-controller.js';
import { EventEmitterMixin } from '../common/mixins/event-emitter.js';
import { FormValueFileListTransformers } from '../common/mixins/forms/form-transformers.js';
import { createFormValueState } from '../common/mixins/forms/form-value.js';
import { partMap } from '../common/part-map.js';
import { bindIf, hasFiles } from '../common/util.js';
import { IgcInputBaseComponent, } from '../input/input-base.js';
import { styles as baseStyle } from '../input/themes/input.base.css.js';
import { styles as shared } from '../input/themes/shared/input.common.css.js';
import IgcValidationContainerComponent from '../validation-container/validation-container.js';
import { styles } from './themes/file-input.base.css.js';
import { all } from './themes/themes.js';
import { fileValidators } from './validators.js';
const Slots = setSlots('prefix', 'suffix', 'helper-text', 'file-selector-text', 'file-missing-text', 'value-missing', 'custom-error', 'invalid');
export default class IgcFileInputComponent extends EventEmitterMixin(IgcInputBaseComponent) {
    constructor() {
        super(...arguments);
        this._themes = addThemingController(this, all);
        this._slots = addSlotController(this, {
            slots: Slots,
        });
        this._formValue = createFormValueState(this, {
            initialValue: null,
            transformers: FormValueFileListTransformers,
        });
        this._i18nController = addI18nController(this, {
            defaultEN: FileInputResourceStringsEN,
        });
        this._filePickerActive = false;
        this.multiple = false;
        this.accept = '';
    }
    static { this.tagName = 'igc-file-input'; }
    static { this.styles = [baseStyle, shared, styles]; }
    static register() {
        registerComponent(IgcFileInputComponent, IgcValidationContainerComponent, IgcButtonComponent);
    }
    get __validators() {
        return fileValidators;
    }
    get _fileNames() {
        if (!hasFiles(this)) {
            return null;
        }
        return Array.from(this.files)
            .map((file) => file.name || 'unnamed')
            .join(', ');
    }
    set value(value) {
        if (value === '' && this._input) {
            this._input.value = value;
        }
    }
    get value() {
        return this._input?.value ?? '';
    }
    set resourceStrings(value) {
        this._i18nController.resourceStrings = value;
    }
    get resourceStrings() {
        return this._i18nController.resourceStrings;
    }
    set locale(value) {
        this._i18nController.locale = value;
    }
    get locale() {
        return this._i18nController.locale;
    }
    get files() {
        return this._input?.files ?? new DataTransfer().files;
    }
    _restoreDefaultValue() {
        if (this._input) {
            this._input.value = '';
        }
        super._restoreDefaultValue();
    }
    _handleChange() {
        this._filePickerActive = false;
        this._setTouchedState();
        this._formValue.setValueAndFormState(this.files);
        this.requestUpdate();
        this.emitEvent('igcChange', { detail: this.files });
    }
    _handleCancel() {
        this._filePickerActive = false;
        this._setTouchedState();
        this._validate();
        this.emitEvent('igcCancel', { detail: this.files });
    }
    _handleBlur() {
        this._filePickerActive ? this._validate() : super._handleBlur();
    }
    _handleClick() {
        this._filePickerActive = true;
    }
    _renderFileParts() {
        const emptyText = this.placeholder ?? this.resourceStrings.file_input_placeholder;
        return html `
      <div part="file-parts">
        <div part="file-selector-button">
          <igc-button variant="flat" ?disabled=${this.disabled} tabindex="-1">
            <slot name="file-selector-text"
              >${this.resourceStrings.file_input_upload_button}</slot
            >
          </igc-button>
        </div>
        <div part="file-names">
          <span>
            ${this._fileNames ??
            html `<slot name="file-missing-text">${emptyText}</slot>`}
          </span>
        </div>
      </div>
    `;
    }
    _renderInput() {
        const hasNegativeTabIndex = this.getAttribute('tabindex') === '-1';
        const hasHelperText = this._slots.hasAssignedElements('helper-text');
        return html `
      <input
        id=${this._inputId}
        part=${partMap(this._resolvePartNames('input'))}
        type="file"
        ?disabled=${this.disabled}
        ?required=${this.required}
        ?autofocus=${this.autofocus}
        ?multiple=${this.multiple}
        tabindex=${bindIf(hasNegativeTabIndex, -1)}
        accept=${bindIf(this.accept, this.accept)}
        aria-describedby=${bindIf(hasHelperText, 'helper-text')}
        @click=${this._handleClick}
        @change=${this._handleChange}
        @cancel=${this._handleCancel}
        @blur=${this._handleBlur}
      />
    `;
    }
}
__decorate([
    state()
], IgcFileInputComponent.prototype, "_filePickerActive", void 0);
__decorate([
    property()
], IgcFileInputComponent.prototype, "value", null);
__decorate([
    property({ attribute: false })
], IgcFileInputComponent.prototype, "resourceStrings", null);
__decorate([
    property()
], IgcFileInputComponent.prototype, "locale", null);
__decorate([
    property({ type: Boolean, reflect: true })
], IgcFileInputComponent.prototype, "multiple", void 0);
__decorate([
    property()
], IgcFileInputComponent.prototype, "accept", void 0);
__decorate([
    property({ type: Boolean })
], IgcFileInputComponent.prototype, "autofocus", void 0);
//# sourceMappingURL=file-input.js.map