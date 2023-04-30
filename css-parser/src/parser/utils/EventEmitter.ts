export class EventEmitter {
	constructor() {}
	on(event: string, cb: Function) {
		this[event] = { cb };
	}

	once(event: string, cb: Function) {
		this[event] = { cb, once: true };
	}

	emit(event: string, ...args) {
		this[event].cb(...args);
		this[event].once && delete this[event];
	}
}
