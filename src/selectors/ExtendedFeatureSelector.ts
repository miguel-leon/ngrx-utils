import { compose, Selector } from '@ngrx/store';

import { createGuardedFeatureSelector } from './FeatureSelector';


const ExtenderSelectors = Symbol('ExtenderSelectors');


export type RecursiveSelectors = { [k: string]: Selector<any, any> | ExtendedSelector<any, any> };

export type ExtendedSelector<T, S extends RecursiveSelectors> =
	Selector<T, any>
	& { [ExtenderSelectors]: S }
	& { [a in keyof S]: S[a] extends ExtendedSelector<any, any> ? ExtendedSelector<T, S[a]> : Selector<T, ReturnType<S[a]>> };


function extendSelectorRecursively(selector: any, subSelectors: any) {
	const extendedSelectors = selector[ExtenderSelectors] = subSelectors[ExtenderSelectors] || subSelectors;

	Object.keys(extendedSelectors).forEach(key => {
		const value = extendedSelectors[key];
		const composed = selector[key] = compose(value, selector);
		if (value[ExtenderSelectors]) {
			extendSelectorRecursively(composed, value);
		}
	});
}


export function createExtendedFeatureSelector<T, S extends RecursiveSelectors>(featureName: keyof T, subSelectors: S): ExtendedSelector<T, S> {
	const featureSelector = createGuardedFeatureSelector<T, keyof T>(featureName);

	extendSelectorRecursively(featureSelector, subSelectors);

	return featureSelector as any;
}
