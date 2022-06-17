export function* prototypeChainIterator(instance: object) {
	// tslint:disable-next-line:no-conditional-assignment
	while ((instance = Object.getPrototypeOf(instance)) != null) {
		yield instance;
	}
}
