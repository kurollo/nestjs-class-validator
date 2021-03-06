"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotIn = exports.isNotIn = exports.IS_NOT_IN = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
exports.IS_NOT_IN = 'isNotIn';
/**
 * Checks if given value not in a array of allowed values.
 */
function isNotIn(value, possibleValues) {
    return !(possibleValues instanceof Array) || !possibleValues.some(possibleValue => possibleValue === value);
}
exports.isNotIn = isNotIn;
/**
 * Checks if given value not in a array of allowed values.
 */
function IsNotIn(values, validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_NOT_IN,
        constraints: [values],
        validator: {
            validate: (value, args) => isNotIn(value, args.constraints[0]),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property should not be one of the following values: $constraint1'], validationOptions),
        },
    }, validationOptions);
}
exports.IsNotIn = IsNotIn;
//# sourceMappingURL=IsNotIn.js.map