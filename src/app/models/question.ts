import Alternative from "./alternative";
import { LocaleText } from "../support/types";
import { LocaleContent } from "../support/locale-content";

export default class Question {

    private textData:LocaleContent;
    public readonly alternatives:Alternative[] = [];
    currentAlternative?:Alternative|null = null;

    constructor(
        text:LocaleText,
        alternatives:any[]
    ) {
        this.textData = new LocaleContent(text);
        for(let i = 0; i < alternatives.length; i++){
            const { text, stats } = alternatives[i];
            const alternative = new Alternative(text, stats);
            this.alternatives.push(alternative);
        }
    }

    getText(locale:string = 'en'):string{
        return this.textData.getText(locale);
    }

    static make(data:any){
        return new Question(data.text, data.alternatives);
    }

}