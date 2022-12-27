export interface Searchable<T> {

    findById(key:string):T|null;

}