"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsMACAddress = exports.isMACAddress = exports.IS_MAC_ADDRESS = void 0;
const ValidationOptions_1 = require("../ValidationOptions");
const ValidateBy_1 = require("../common/ValidateBy");
const isMACAddress_1 = __importDefault(require("validator/lib/isMACAddress"));
exports.IS_MAC_ADDRESS = 'isMacAddress';
/**
 * Check if the string is a MAC address.
 * If given value is not a string, then it returns false.
 */
function isMACAddress(value, options) {
    return typeof value === 'string' && isMACAddress_1.default(value, options);
}
exports.isMACAddress = isMACAddress;
function IsMACAddress(optionsOrValidationOptionsArg, validationOptionsArg) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    const options = !ValidationOptions_1.isValidationOptions(optionsOrValidationOptionsArg) ? optionsOrValidationOptionsArg : undefined;
    const validationOptions = ValidationOptions_1.isValidationOptions(optionsOrValidationOptionsArg)
        ? optionsOrValidationOptionsArg
        : validationOptionsArg;
    return ValidateBy_1.ValidateBy({
        name: exports.IS_MAC_ADDRESS,
        constraints: [options],
        validator: {
            validate: (value, args) => isMACAddress(value, options),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be a MAC Address'], validationOptions),
        },
    }, validationOptions);
}
exports.IsMACAddress = IsMACAddress;
//# sourceMappingURL=IsMacAddress.js.map