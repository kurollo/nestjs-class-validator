"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDecimal = exports.isDecimal = exports.IS_DECIMAL = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isDecimal_1 = __importDefault(require("validator/lib/isDecimal"));
exports.IS_DECIMAL = 'isDecimal';
/**
 * Checks if the string is a valid decimal.
 * If given value is not a string, then it returns false.
 */
function isDecimal(value, options) {
    return typeof value === 'string' && isDecimal_1.default(value, options);
}
exports.isDecimal = isDecimal;
/**
 * Checks if the string contains only letters and numbers.
 * If given value is not a string, then it returns false.
 */
function IsDecimal(options, validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_DECIMAL,
        constraints: [options],
        validator: {
            validate: (value, args) => isDecimal(value, args.constraints[0]),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property is not a valid decimal number.'], validationOptions),
        },
    }, validationOptions);
}
exports.IsDecimal = IsDecimal;
//# sourceMappingURL=IsDecimal.js.map