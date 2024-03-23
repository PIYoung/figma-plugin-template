import { curry } from '.';

type Predicate<T> = (val: T) => boolean;

/**
 * @example compact([0, 1, false, 2, "", 3, "a", Number("e") * 23, NaN, "s", 34]); // [ 1, 2, 3, 'a', 's', 34 ]
 */
export const compact = <T = any>(fn: Predicate<T>, arr: T[] = []) => arr.filter(fn);

/**
 * @example removeFalsy([0, false, '', 3, 'a', Number('e') * 23, NaN, null]); // [ 3, 'a' ]
 */
export const removeFalsy = curry(compact, 2)(Boolean);

/**
 * @example removeNull([0, false, '', 3, 'a', Number('e') * 23, NaN, null]);
 */
export const removeNull = curry(compact, 2)((v: any) => v !== null);
