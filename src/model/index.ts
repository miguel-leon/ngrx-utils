export type Type<A> = new(...args: any) => A;

export type Reducer<S, A> = <T extends A>(state: S, action: T) => S;

export type ActionType<T extends Type<any> | symbol> =
	T extends Type<infer R> ? R : T extends symbol ? { [s in T]: any } : never;
