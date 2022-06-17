import { Reducer } from '../model';


export interface OnNeither<S> {
	reducer: Reducer<S, any>
}

export function onNeither<S>(reducer: Reducer<S, any>): OnNeither<S> {
	return {
		reducer
	};
}
