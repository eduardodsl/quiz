import { LocaleText } from "./types";

export class LocaleContent{

    constructor(
        public readonly text:LocaleText,
        private readonly fallback:string = 'en'
    ) {}

    getText(locale:string = 'en'): string {
        const obj:any = { ...this.text };
        return obj[locale] ?? obj[this.fallback];
    }

}