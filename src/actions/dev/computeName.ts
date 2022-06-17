import { splitWords } from '../../util/splitWords';
import { Actions } from './config';


export function computeName(obj: object): string {
	const name = obj?.constructor.name;
	return name && Actions.pretty ? splitWords(name) : name;
}
