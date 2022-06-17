import { prototypeChainIterator } from '../util/prototypeChainIterator';
import { ActionType, Reducer, Type } from '../model';
import { On } from './On';
import { OnNeither } from './OnNeither';


export function createReducer<State, T1 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>
): Reducer<State, ActionType<T1[number]>>;
export function createReducer<State, T1 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	onNeither: OnNeither<State>
): Reducer<State, any>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>
): Reducer<State, ActionType<T1[number] | T2[number]>>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	onNeither: OnNeither<State>
): Reducer<State, any>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>
): Reducer<State, ActionType<T1[number] | T2[number] | T3[number]>>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>,
	onNeither: OnNeither<State>
): Reducer<State, any>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[], T4 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>,
	on4: On<T4, State>
): Reducer<State, ActionType<T1[number] | T2[number] | T3[number] | T4[number]>>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[], T4 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>,
	on4: On<T4, State>,
	onNeither: OnNeither<State>
): Reducer<State, any>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[], T4 extends (Type<any> | symbol)[], T5 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>,
	on4: On<T4, State>,
	on5: On<T5, State>
): Reducer<State, ActionType<T1[number] | T2[number] | T3[number] | T4[number] | T5[number]>>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[], T4 extends (Type<any> | symbol)[], T5 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>,
	on4: On<T4, State>,
	on5: On<T5, State>,
	onNeither: OnNeither<State>
): Reducer<State, any>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[], T4 extends (Type<any> | symbol)[], T5 extends (Type<any> | symbol)[], T6 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>,
	on4: On<T4, State>,
	on5: On<T5, State>,
	on6: On<T6, State>
): Reducer<State, ActionType<T1[number] | T2[number] | T3[number] | T4[number] | T5[number] | T6[number]>>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[], T4 extends (Type<any> | symbol)[], T5 extends (Type<any> | symbol)[], T6 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>,
	on4: On<T4, State>,
	on5: On<T5, State>,
	on6: On<T6, State>,
	onNeither: OnNeither<State>
): Reducer<State, any>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[], T4 extends (Type<any> | symbol)[], T5 extends (Type<any> | symbol)[], T6 extends (Type<any> | symbol)[], T7 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>,
	on4: On<T4, State>,
	on5: On<T5, State>,
	on6: On<T6, State>,
	on7: On<T7, State>
): Reducer<State, ActionType<T1[number] | T2[number] | T3[number] | T4[number] | T5[number] | T6[number] | T7[number]>>;
export function createReducer<State, T1 extends (Type<any> | symbol)[], T2 extends (Type<any> | symbol)[], T3 extends (Type<any> | symbol)[], T4 extends (Type<any> | symbol)[], T5 extends (Type<any> | symbol)[], T6 extends (Type<any> | symbol)[], T7 extends (Type<any> | symbol)[]>(
	initialState: State,
	on1: On<T1, State>,
	on2: On<T2, State>,
	on3: On<T3, State>,
	on4: On<T4, State>,
	on5: On<T5, State>,
	on6: On<T6, State>,
	on7: On<T7, State>,
	onNeither: OnNeither<State>
): Reducer<State, any>;
export function createReducer<State>(initialState: State, ...ons: On<(Type<any> | symbol)[], State>[]): Reducer<State, ActionType<Type<any> | symbol>>;
export function createReducer<State>(initialState: State, ...ons: any[]): Reducer<State, any> {
	const onsMap = new Map<Type<any> | symbol, Reducer<State, ActionType<Type<any> | symbol>>>();

	const onNeither = ons.length && !ons[ons.length - 1].actionTypes && ons.pop().reducer;

	for (const on of ons) {
		for (const type of on.actionTypes) {
			const existingReducer = onsMap.get(type);
			const newReducer: Reducer<State, ActionType<Type<any> | symbol>> =
				existingReducer ? (state, action) => on.reducer(existingReducer(state, action), action) : on.reducer;
			onsMap.set(type, newReducer);
		}
	}

	return (state = initialState, action: ActionType<Type<any> | symbol>) => {
		const keys = Array.from(prototypeChainIterator(action))
			.map(proto => proto.constructor as any)
			.concat(Object.getOwnPropertySymbols(action));

		let match = false;
		for (const key of keys) {
			const reducer = onsMap.get(key);
			if (reducer) {
				state = reducer(state, action);
				if (match) continue;
				match = true;
			}
		}
		if (!match && onNeither) {
			state = onNeither(state, action);
		}

		return state;
	};
}
