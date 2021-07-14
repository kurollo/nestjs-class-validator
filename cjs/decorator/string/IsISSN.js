"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsISSN = exports.isISSN = exports.IS_ISSN = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isISSN_1 = __importDefault(require("validator/lib/isISSN"));
exports.IS_ISSN = 'isISSN';
/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
function isISSN(value, options) {
    return typeof value === 'string' && isISSN_1.default(value, options);
}
exports.isISSN = isISSN;
/**
 * Checks if the string is a ISSN.
 * If given value is not a string, then it returns false.
 */
function IsISSN(options, validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_ISSN,
        constraints: [options],
        validator: {
            validate: (value, args) => isISSN(value, args.constraints[0]),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be a ISSN'], validationOptions),
        },
    }, validationOptions);
}
exports.IsISSN = IsISSN;
//# sourceMappingURL=IsISSN.js.map