declare module 'stats' {
    type getValueType<T> = (value: T) => number;
    type comparatorType<T> = (value1: T, value2: T) => number;
    type nullOrSomethingFunctionType = <T>(input: T[], comparator: comparatorType<T>) => null | T;
    type numberFunctionType = <T>(input: T[], comparator: comparatorType<T>) => number;
    // tried type numberFunctionType<T> but then when using it I should have put a proper type to numberFunctionType
    // could use any but the task to avoid it.

    export const getMaxIndex: numberFunctionType;
    export const getMaxElement: nullOrSomethingFunctionType;
    export const getMinIndex: numberFunctionType;
    export const getMinElement: nullOrSomethingFunctionType;
    export const getMedianIndex: numberFunctionType;
    export const getMedianElement: nullOrSomethingFunctionType;
    export function getAverageValue<T>(input: T[], getValue: getValueType<T>): null | number;
}