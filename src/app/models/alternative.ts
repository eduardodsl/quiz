import { LocaleContent } from '../support/locale-content';
import { LocaleText, Stats } from  '../support/types';

export default class Alternative {
    
    private textData:LocaleContent;

    constructor(
        text:LocaleText,
        public readonly stats:Stats
    ) {
        this.textData = new LocaleContent(text);
    }

    getText(locale:string = 'en'): string {
        return this.textData.getText(locale);
    }

}