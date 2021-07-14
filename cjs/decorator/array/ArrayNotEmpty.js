"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayNotEmpty = exports.arrayNotEmpty = exports.ARRAY_NOT_EMPTY = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
exports.ARRAY_NOT_EMPTY = 'arrayNotEmpty';
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
function arrayNotEmpty(array) {
    return array instanceof Array && array.length > 0;
}
exports.arrayNotEmpty = arrayNotEmpty;
/**
 * Checks if given array is not empty.
 * If null or undefined is given then this function returns false.
 */
function ArrayNotEmpty(validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.ARRAY_NOT_EMPTY,
        validator: {
            validate: (value, args) => arrayNotEmpty(value),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property should not be empty'], validationOptions),
        },
    }, validationOptions);
}
exports.ArrayNotEmpty = ArrayNotEmpty;
//# sourceMappingURL=ArrayNotEmpty.js.map