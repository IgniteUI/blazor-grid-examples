import { ValidationResourceStringsEN } from 'igniteui-i18n-core';
export const comboValidators = [
    {
        key: 'valueMissing',
        message: ValidationResourceStringsEN.required_validation_error,
        isValid: ({ required, value }) => required ? Array.isArray(value) && value.length > 0 : true,
    },
];
//# sourceMappingURL=validators.js.map