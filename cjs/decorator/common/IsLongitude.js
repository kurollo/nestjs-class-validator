"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsLongitude = exports.isLongitude = exports.IS_LONGITUDE = void 0;
const ValidateBy_1 = require("./ValidateBy");
const IsLatLong_1 = require("./IsLatLong");
exports.IS_LONGITUDE = 'isLongitude';
/**
 * Checks if a given value is a longitude.
 */
function isLongitude(value) {
    return (typeof value === 'number' || typeof value === 'string') && IsLatLong_1.isLatLong(`0,${value}`);
}
exports.isLongitude = isLongitude;
/**
 * Checks if a given value is a longitude.
 */
function IsLongitude(validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_LONGITUDE,
        validator: {
            validate: (value, args) => isLongitude(value),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be a longitude string or number'], validationOptions),
        },
    }, validationOptions);
}
exports.IsLongitude = IsLongitude;
//# sourceMappingURL=IsLongitude.js.map