import { OperatorFunction } from 'rxjs';
import { Type } from '../model';
import { filter } from 'rxjs/operators';


export function ofType<A>(typeA: Type<A>): OperatorFunction<any, A>;
export function ofType<A, B>(typeA: Type<A>, typeB: Type<B>): OperatorFunction<any, A | B>;
export function ofType<A, B, C>(typeA: Type<A>, typeB: Type<B>, typeC: Type<C>): OperatorFunction<any, A | B | C>;
export function ofType<A, B, C, D>(typeA: Type<A>, typeB: Type<B>, typeC: Type<C>, typeD: Type<D>): OperatorFunction<any, A | B | C | D>;
export function ofType(...types: Type<any>[]) {
	return filter(instance => types.some(type => instance instanceof type));
}

export { ofType as ofTypes };
