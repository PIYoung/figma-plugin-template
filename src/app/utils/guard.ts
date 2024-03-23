export const isString = (value: any): value is string => typeof value === 'string';

export const isNumber = (value: any): value is number => typeof value === 'number';

export const isBoolean = (value: any): value is boolean => typeof value === 'boolean';

export const isObject = (value: any): value is object => typeof value === 'object';

export const isUndefined = (value: any): value is undefined => typeof value === 'undefined';

export const isNull = (value: any): value is null => value === null;
