"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUppercase = exports.isUppercase = exports.IS_UPPERCASE = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isUppercase_1 = __importDefault(require("validator/lib/isUppercase"));
exports.IS_UPPERCASE = 'isUppercase';
/**
 * Checks if the string is uppercase.
 * If given value is not a string, then it returns false.
 */
function isUppercase(value) {
    return typeof value === 'string' && isUppercase_1.default(value);
}
exports.isUppercase = isUppercase;
/**
 * Checks if the string is uppercase.
 * If given value is not a string, then it returns false.
 */
function IsUppercase(validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_UPPERCASE,
        validator: {
            validate: (value, args) => isUppercase(value),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be uppercase'], validationOptions),
        },
    }, validationOptions);
}
exports.IsUppercase = IsUppercase;
//# sourceMappingURL=IsUppercase.js.map