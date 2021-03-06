"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsLatitude = exports.isLatitude = exports.IS_LATITUDE = void 0;
const ValidateBy_1 = require("./ValidateBy");
const IsLatLong_1 = require("./IsLatLong");
exports.IS_LATITUDE = 'isLatitude';
/**
 * Checks if a given value is a latitude.
 */
function isLatitude(value) {
    return (typeof value === 'number' || typeof value === 'string') && IsLatLong_1.isLatLong(`${value},0`);
}
exports.isLatitude = isLatitude;
/**
 * Checks if a given value is a latitude.
 */
function IsLatitude(validationOptions) {
    const translate = require("../../i18n/"+validationOptions['language']+".json");
    return ValidateBy_1.ValidateBy({
        name: exports.IS_LATITUDE,
        validator: {
            validate: (value, args) => isLatitude(value),
            defaultMessage: ValidateBy_1.buildMessage(eachPrefix => eachPrefix + translate['$property must be a latitude string or number'], validationOptions),
        },
    }, validationOptions);
}
exports.IsLatitude = IsLatitude;
//# sourceMappingURL=IsLatitude.js.map