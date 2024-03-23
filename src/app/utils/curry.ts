type Arguments = any[];
type CallbackFunction = (...args: Arguments) => any;
type Curry = (fn: CallbackFunction, arity: number, ...args: any[]) => any;

// curry is composite function (in math).
// arity is the number of arguments a function takes.
export const curry: Curry = (fn, arity = fn.length, ...args) => {
  return arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
};
