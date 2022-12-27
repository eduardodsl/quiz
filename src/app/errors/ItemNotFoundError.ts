export default class ItemNotFoundError extends Error {
    constructor(message:string){
        super(message);
        this.name = this.constructor.name;
    }
}