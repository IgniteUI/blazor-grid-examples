import { ValidationResourceStringsEN } from 'igniteui-i18n-core';
import { getGroup } from './utils.js';
export const radioValidators = [
    {
        key: 'valueMissing',
        message: ValidationResourceStringsEN.required_validation_error,
        isValid: (host) => {
            const { radios, checked } = getGroup(host);
            return radios.some((radio) => radio.required) ? checked.length > 0 : true;
        },
    },
];
//# sourceMappingURL=validators.js.map