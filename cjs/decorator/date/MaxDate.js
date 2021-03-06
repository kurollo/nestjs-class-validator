"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaxDate = exports.maxDate = exports.MAX_DATE = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
exports.MAX_DATE = 'maxDate';
/**
 * Checks if the value is a date that's before the specified date.
 */
function maxDate(date, maxDate) {
    return date instanceof Date && date.getTime() <= maxDate.getTime();
}
exports.maxDate = maxDate;
/**
 * Checks if the value is a date that's after the specified date.
 */
function MaxDate(date, validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.MAX_DATE,
        constraints: [date],
        validator: {
            validate: (value, args) => maxDate(value, args.constraints[0]),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => translate['maximal allowed date for '] + eachPrefix + translate['$property is $constraint1'], validationOptions),
        },
    }, validationOptions);
}
exports.MaxDate = MaxDate;
//# sourceMappingURL=MaxDate.js.map