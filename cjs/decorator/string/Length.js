"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Length = exports.length = exports.IS_LENGTH = void 0;
const ValidateBy_1 = require("../common/ValidateBy");
const isLength_1 = __importDefault(require("validator/lib/isLength"));
exports.IS_LENGTH = 'isLength';
var fs = require('fs');
var path = require('path');
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function length(value, min, max) {
    return typeof value === 'string' && isLength_1.default(value, { min, max });
}
exports.length = length;
/**
 * Checks if the string's length falls in a range. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
function Length(min, max, validationOptions) {
    // const lang = JSON.parse('../../../i18n/ru.json');
    // var readStream = JSON.parse(path.join(__dirname, './../../i18n/ru.json'));
    // readStream.on('language', function(chunk) {
    //     // buf += chunk.toString(); // when data is read, stash it in a string buffer
    //     // process(buf); // process the buffer
    //     console.log(chunk)
    //
    // });
    const readStream = require("../../i18n/ru.json");

    console.log(readStream)

    // const lang = JSON.parse('/../../i18n/ru.json').toString();
    // validationOptions['language']['$property must be shorter than or equal to $constraint2 characters']
    return ValidateBy_1.ValidateBy({
        name: exports.IS_LENGTH,
        constraints: [min, max],
        validator: {
            validate: (value, args) => length(value, args.constraints[0], args.constraints[1]),
            defaultMessage: ValidateBy_1.buildMessage((eachPrefix, args) => {
                const isMinLength = args.constraints[0] !== null && args.constraints[0] !== undefined;
                const isMaxLength = args.constraints[1] !== null && args.constraints[1] !== undefined;
                if (isMinLength && (!args.value || args.value.length < args.constraints[0])) {
                    return eachPrefix + '$property must be longer than or equal to $constraint1 characters hhhhhhhh';
                }
                else if (isMaxLength && args.value.length > args.constraints[1]) {
                    return eachPrefix + '$property must be shorter than or equal to $constraint2 characters hhhhhhhhhhhhhhh';
                }
                return (eachPrefix +
                    '$property must be longer than or equal to $constraint1 and shorter than or equal to $constraint2 characters hhhhhhhhhhhhhhhhh');
            }, validationOptions),
        },
    }, validationOptions);
}
exports.Length = Length;
//# sourceMappingURL=Length.js.map