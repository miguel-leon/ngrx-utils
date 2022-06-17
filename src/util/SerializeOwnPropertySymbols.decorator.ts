export function defaultSymbolSerializer(sym: symbol): string {
	return `[${ (sym as any).description }]`;
}

export function SerializeOwnPropertySymbols(symbolSerializer = defaultSymbolSerializer): ClassDecorator {
	// tslint:disable-next-line:ban-types
	return <TFunction extends Function>(target: TFunction): TFunction => {
		const originalToJSON = target.prototype.toJSON;

		target.prototype.toJSON = function toJSON(...args: any[]) {
			let ret: any = {};
			Object.getOwnPropertySymbols(this)
				.forEach(sym => ret[symbolSerializer(sym)] = this[sym]);
			Object.getOwnPropertyNames(this)
				.forEach(key => ret[key] = this[key]);

			if (typeof originalToJSON === 'function') {
				ret = originalToJSON.apply(ret, args);
			}
			return ret;
		};

		return target;
	}
}
