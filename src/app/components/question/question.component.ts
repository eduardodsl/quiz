import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Alternative from 'src/app/models/alternative';
import Question from 'src/app/models/question';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()
  question!:Question;

  @Input()
  title!:String;

  @Input()
  locale:string = 'en';

  @Output()
  alternativePick = new EventEmitter<Alternative>();

  get text(): string {
    return this.question.getText(this.locale);
  }

  get alternatives(): Alternative[] {
    return this.question.alternatives;
  }

  alternativePickEvent(alternative:Alternative){
    this.alternativePick.emit(alternative);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
