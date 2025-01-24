declare module './module/index' {
    type strUtilType = (value: string) => string;
    export const strReverse: strUtilType;
    export const strToLower: strUtilType;
    export const strToUpper: strUtilType;
    export const strRandomize: strUtilType;
    export const strInvertCase: strUtilType;
}