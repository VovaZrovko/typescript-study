/* link: https://typescript-exercises.github.io/#exercise=15&file=%2Findex.ts
Exercise:

    Here is a library which helps manipulating objects.
    We tried to write type annotations and we failed.
    Please help!

*/

export class ObjectManipulator {

    constructor(protected obj: {[key in string | number ]: any}) {}

    public set<K extends string | number, V>(key: K, value: V) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get<K extends string | number>(key: K) {
        return this.obj[key];
    }

    public delete<K extends string | number>(key: K) {
        const newObj = {...this.obj};
        delete newObj[key as string | number];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}