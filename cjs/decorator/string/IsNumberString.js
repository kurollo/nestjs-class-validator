"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNumberString = exports.isNumberString = exports.IS_NUMBER_STRING = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isNumeric_1 = __importDefault(require("validator/lib/isNumeric"));
exports.IS_NUMBER_STRING = 'isNumberString';
/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
function isNumberString(value, options) {
    return typeof value === 'string' && isNumeric_1.default(value, options);
}
exports.isNumberString = isNumberString;
/**
 * Checks if the string is numeric.
 * If given value is not a string, then it returns false.
 */
function IsNumberString(options, validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_NUMBER_STRING,
        constraints: [options],
        validator: {
            validate: (value, args) => isNumberString(value, args.constraints[0]),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be a number string'], validationOptions),
        },
    }, validationOptions);
}
exports.IsNumberString = IsNumberString;
//# sourceMappingURL=IsNumberString.js.map