export default class LocaleFieldError extends Error {
    constructor(message:string){
        super(message);
        this.name = this.constructor.name;
    }
}