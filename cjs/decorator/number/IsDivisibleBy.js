"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsDivisibleBy = exports.isDivisibleBy = exports.IS_DIVISIBLE_BY = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isDivisibleBy_1 = __importDefault(require("validator/lib/isDivisibleBy"));
exports.IS_DIVISIBLE_BY = 'isDivisibleBy';
/**
 * Checks if value is a number that's divisible by another.
 */
function isDivisibleBy(value, num) {
    return typeof value === 'number' && typeof num === 'number' && isDivisibleBy_1.default(String(value), num);
}
exports.isDivisibleBy = isDivisibleBy;
/**
 * Checks if value is a number that's divisible by another.
 */
function IsDivisibleBy(num, validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_DIVISIBLE_BY,
        constraints: [num],
        validator: {
            validate: (value, args) => isDivisibleBy(value, args.constraints[0]),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be divisible by $constraint1'], validationOptions),
        },
    }, validationOptions);
}
exports.IsDivisibleBy = IsDivisibleBy;
//# sourceMappingURL=IsDivisibleBy.js.map