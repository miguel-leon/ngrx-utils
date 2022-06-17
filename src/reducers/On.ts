import { ActionType, Reducer, Type } from '../model';


export interface On<A extends (Type<any> | symbol)[], S> {
	actionTypes: { [K in keyof A]: A[K] }
	reducer: Reducer<S, ActionType<A[number]>>
}

export function on<A1 extends Type<any> | symbol, S>(
	actionType1: A1,
	reducer: Reducer<S, ActionType<A1>>
): On<[A1], S>;
export function on<A1 extends Type<any> | symbol, A2 extends Type<any> | symbol, S>(
	actionType1: A1,
	actionType2: A2,
	reducer: Reducer<S, ActionType<A1> | ActionType<A2>>
): On<[A1, A2], S>;
export function on<A1 extends Type<any> | symbol, A2 extends Type<any> | symbol, A3 extends Type<any> | symbol, S>(
	actionType1: A1,
	actionType2: A2,
	actionType3: A3,
	reducer: Reducer<S, ActionType<A1> | ActionType<A2> | ActionType<A3>>
): On<[A1, A2, A3], S>;
export function on(...args: any[]) {
	const reducer = args.pop();
	return {
		actionTypes: args,
		reducer
	};
}
