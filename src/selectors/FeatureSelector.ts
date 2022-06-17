import { createSelector, MemoizedSelector } from '@ngrx/store';


export function selectFeature<T, K extends keyof T = keyof T>(state: T, featureName: K): T[K] {
	return state[featureName]
}

/**
 * This selector factory differs from the ngrx createFeatureSelector in that the resulting selector is type safe if T is specified.
 * T being the argument (State) type for the selector, contrary to the built-in selector in which T is the resulting state slice type.
 */
export function createFeatureSelector<T = any, infer K = keyof T>(
	featureName: K,
): MemoizedSelector<T, T[K]> {
	return createSelector<T, T[K], T[K]>(
		state => selectFeature(state, featureName),
		featureState => featureState,
	);
}


export function selectFeatureGuarded<T, K extends keyof T = keyof T>(state: T, featureName: K): T[K] | undefined {
	try {
		return state[featureName];
	} catch (e) {
		return void 0;
	}
}

/**
 * This selector guards against errors while accessing the feature i.e. object field in case the object is null or undefined.
 */
export function createGuardedFeatureSelector<T = any, K extends keyof T = keyof T>(
	featureName: K,
): MemoizedSelector<T, T[K] | undefined> {
	return createSelector<T, T[K] | undefined, T[K] | undefined>(
		state => selectFeatureGuarded(state, featureName),
		featureState => featureState,
	);
}
