import LocaleFieldError from '../errors/LocaleFieldError';
import { LocaleContent } from '../support/locale-content';
import { LocaleText, Stats } from '../support/types';

export default class Content {

    constructor(
        private readonly data:any
    ){}

    getData(key:string, locale:string = 'en'): string {
        if(this.data[key]){
            const localeText:LocaleText = this.data[key];
            const localeContent = new LocaleContent(localeText);
            return localeContent.getText(locale);
        }
        throw new LocaleFieldError(`field [${key}] was not found in content`);
    }

}