import { ValidationResourceStringsEN } from 'igniteui-i18n-core';
import { requiredValidator } from '../common/validators.js';
export const maskValidators = [
    requiredValidator,
    {
        key: 'badInput',
        message: ValidationResourceStringsEN.mask_validation_error,
        isValid: (host) => host.isValidMaskPattern(),
    },
];
//# sourceMappingURL=validators.js.map