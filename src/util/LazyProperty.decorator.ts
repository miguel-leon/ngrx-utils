export function LazyProperty({ setPrototype = false, valueConfigurable = false, valueEnumerable = false } = {}): MethodDecorator {
	return (target: any, key: PropertyKey, descriptor: PropertyDescriptor): void => {
		if (!descriptor.get) {
			throw new TypeError('Getter for lazy property must be defined');
		}
		const originalGetter = descriptor.get;

		descriptor.get = function () {
			const isStatic = target === this;

			const value = originalGetter.call(this);

			const newDescriptor: PropertyDescriptor = {
				configurable: valueConfigurable,
				enumerable: valueEnumerable,
				value
			};

			if (isStatic && !setPrototype) {
				Object.defineProperty(target, key, newDescriptor);
			} else if (setPrototype && !isStatic) {
				Object.defineProperty(this.constructor.prototype, key, newDescriptor);
			} else {
				Object.defineProperty(this, key, newDescriptor);
			}

			return value;
		};
	};
}
