import { LocaleContent } from '../support/locale-content';
import { LocaleText, Stats } from '../support/types';

export default class Character {

    nameData:LocaleContent;
    descData:LocaleContent;

    constructor(
        public readonly id:string,
        name:LocaleText,
        desc:LocaleText,
        public readonly stats:Stats
    ){
        this.nameData = new LocaleContent(name);
        this.descData = new LocaleContent(desc);
    }

    getName(locale:string = 'en'): string {
        return this.nameData.getText(locale);
    }

    getDesc(locale:string = 'en'): string {
        return this.descData.getText(locale);
    }

    static make(data:any){
        return new Character(data.id, data.name, data.description, data.stats);
    }

}