"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDate = exports.isDate = exports.IS_DATE = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
exports.IS_DATE = 'isDate';
/**
 * Checks if a given value is a date.
 */
function isDate(value) {
    return value instanceof Date && !isNaN(value.getTime());
}
exports.isDate = isDate;
/**
 * Checks if a value is a date.
 */
function IsDate(validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_DATE,
        validator: {
            validate: (value, args) => isDate(value),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be a Date instance'], validationOptions),
        },
    }, validationOptions);
}
exports.IsDate = IsDate;
//# sourceMappingURL=IsDate.js.map