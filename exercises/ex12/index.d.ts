declare module 'stats' {
    type getValueType<T> = (value: T) => number;
    type comparatorType<T> = (value1: T, value2: T) => number;
    export function getMaxIndex<T>(input: T[], comparator: comparatorType<T>): number;
    export function getMaxElement<T>(input: T[], comparator: comparatorType<T>): null | T;
    export function getMinIndex<T>(input: T[], comparator: comparatorType<T>): number;
    export function getMinElement<T>(input: T[], comparator: comparatorType<T>): null | T;
    export function getMedianIndex<T>(input: T[], comparator: comparatorType<T>): number;
    export function getMedianElement<T>(input: T[], comparator: comparatorType<T>): null | T;
    export function getAverageValue<T>(input: T[], getValue: getValueType<T>): null | number;
}