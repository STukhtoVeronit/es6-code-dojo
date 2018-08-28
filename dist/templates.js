'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
    console.log(('hello ' + name).toUpperCase());
}
greet('bill');

function createEmail(to, from, subject, message) {
    console.log('\n        To: ' + to + '\n        from: ' + from + '\n        subject: ' + subject + '\n        message: ' + message + '\n    ');
}

createEmail('to', 'from', 'subject', 'message');

var name = 'bill';
console.log(upperName(_templateObject, name));

function upperName(literals) {
    return literals[0] + value.toUpperCase();
}