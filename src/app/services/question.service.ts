import { Injectable } from '@angular/core';
import all_questions from '../../assets/data/questions.json';
import Question from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  readonly questions:Question[];

  constructor() {
    this.questions = all_questions.questions.map<Question>(Question.make);
  }
}
