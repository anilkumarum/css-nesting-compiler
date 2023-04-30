"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
class EventEmitter {
    constructor() { }
    on(event, cb) {
        this[event] = { cb };
    }
    once(event, cb) {
        this[event] = { cb, once: true };
    }
    emit(event, ...args) {
        this[event].cb(...args);
        this[event].once && delete this[event];
    }
}
exports.EventEmitter = EventEmitter;
