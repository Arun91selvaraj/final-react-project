export interface Manager<T> {
    add(obj: T): boolean;
    update(id: number, obj: T): boolean;
    remove(id: number): boolean;
    get(id: number): T | undefined;
    getAll(): T[];
}