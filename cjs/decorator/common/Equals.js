"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equals = exports.equals = exports.EQUALS = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
exports.EQUALS = 'equals';
/**
 * Checks if value matches ("===") the comparison.
 */
function equals(value, comparison) {
    return value === comparison;
}
exports.equals = equals;
/**
 * Checks if value matches ("===") the comparison.
 */
function Equals(comparison, validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.EQUALS,
        constraints: [comparison],
        validator: {
            validate: (value, args) => equals(value, args.constraints[0]),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be equal to $constraint1'], validationOptions),
        },
    }, validationOptions);
}
exports.Equals = Equals;
//# sourceMappingURL=Equals.js.map