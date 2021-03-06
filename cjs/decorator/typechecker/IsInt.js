"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsInt = exports.isInt = exports.IS_INT = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
exports.IS_INT = 'isInt';
/**
 * Checks if value is an integer.
 */
function isInt(val) {
    return typeof val === 'number' && Number.isInteger(val);
}
exports.isInt = isInt;
/**
 * Checks if value is an integer.
 */
function IsInt(validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_INT,
        validator: {
            validate: (value, args) => isInt(value),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be an integer number'], validationOptions),
        },
    }, validationOptions);
}
exports.IsInt = IsInt;
//# sourceMappingURL=IsInt.js.map