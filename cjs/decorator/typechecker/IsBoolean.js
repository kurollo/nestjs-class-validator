"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsBoolean = exports.isBoolean = exports.IS_BOOLEAN = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
exports.IS_BOOLEAN = 'isBoolean';
/**
 * Checks if a given value is a boolean.
 */
function isBoolean(value) {
    return value instanceof Boolean || typeof value === 'boolean';
}
exports.isBoolean = isBoolean;
/**
 * Checks if a value is a boolean.
 */
function IsBoolean(validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_BOOLEAN,
        validator: {
            validate: (value, args) => isBoolean(value),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be a boolean value'], validationOptions),
        },
    }, validationOptions);
}
exports.IsBoolean = IsBoolean;
//# sourceMappingURL=IsBoolean.js.map