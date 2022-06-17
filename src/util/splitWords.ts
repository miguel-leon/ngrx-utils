export function splitWords(str: string) {
	return str.replace(/([a-z]|[A-Z]+)([A-Z]+$|[A-Z])/g, '$1 $2');
}
