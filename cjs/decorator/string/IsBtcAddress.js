"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsBtcAddress = exports.isBtcAddress = exports.IS_BTC_ADDRESS = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isBtcAddress_1 = __importDefault(require("validator/lib/isBtcAddress"));
exports.IS_BTC_ADDRESS = 'isBtcAddress';
/**
 * Check if the string is a valid BTC address.
 * If given value is not a string, then it returns false.
 */
function isBtcAddress(value) {
    return typeof value === 'string' && isBtcAddress_1.default(value);
}
exports.isBtcAddress = isBtcAddress;
/**
 * Check if the string is a valid BTC address.
 * If given value is not a string, then it returns false.
 */
function IsBtcAddress(validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_BTC_ADDRESS,
        validator: {
            validate: (value, args) => isBtcAddress(value),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be a BTC address'], validationOptions),
        },
    }, validationOptions);
}
exports.IsBtcAddress = IsBtcAddress;
//# sourceMappingURL=IsBtcAddress.js.map