"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPassportNumber = exports.isPassportNumber = exports.IS_PASSPORT_NUMBER = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isPassportNumber_1 = __importDefault(require("validator/lib/isPassportNumber"));
exports.IS_PASSPORT_NUMBER = 'isPassportNumber';
/**
 * Check if the string is a valid passport number relative to a specific country code.
 * If given value is not a string, then it returns false.
 */
function isPassportNumber(value, countryCode) {
    return typeof value === 'string' && isPassportNumber_1.default(value, countryCode);
}
exports.isPassportNumber = isPassportNumber;
/**
 * Check if the string is a valid passport number relative to a specific country code.
 * If given value is not a string, then it returns false.
 */
function IsPassportNumber(countryCode, validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_PASSPORT_NUMBER,
        constraints: [countryCode],
        validator: {
            validate: (value, args) => isPassportNumber(value, args.constraints[0]),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be valid passport number'], validationOptions),
        },
    }, validationOptions);
}
exports.IsPassportNumber = IsPassportNumber;
//# sourceMappingURL=IsPassportNumber.js.map