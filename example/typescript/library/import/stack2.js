"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _contents = [];
var isEmpty = function () { return _contents.length === 0; };
var last = function () { return isEmpty() ? new Error('Cannot get top of empty stack') : _contents.reverse()[0]; };
exports.last = last;
var pop = function () { return isEmpty() ? new Error('Cannot pop empty stack') : _contents.pop(); };
exports.pop = pop;
var push = function (e) {
    _contents.push(e);
    return e;
};
exports.push = push;
