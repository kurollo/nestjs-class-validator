"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsObject = exports.isObject = exports.IS_OBJECT = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
exports.IS_OBJECT = 'isObject';
/**
 * Checks if the value is valid Object.
 * Returns false if the value is not an object.
 */
function isObject(value) {
    return value != null && (typeof value === 'object' || typeof value === 'function') && !Array.isArray(value);
}
exports.isObject = isObject;
/**
 * Checks if the value is valid Object.
 * Returns false if the value is not an object.
 */
function IsObject(validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_OBJECT,
        validator: {
            validate: (value, args) => isObject(value),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be an object'], validationOptions),
        },
    }, validationOptions);
}
exports.IsObject = IsObject;
//# sourceMappingURL=IsObject.js.map