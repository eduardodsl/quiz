import { Injectable } from '@angular/core';
import Character from '../models/character';
import Question from '../models/question';
import { GameStatus } from '../support/enums';
import { RankResult, Stats } from '../support/types';
import { Utils } from '../support/utils';
import { CharacterService } from './character.service';
import { QuestionService } from './question.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private currentQuestion:number = 0;
  public currentLocale:string = 'en';
  public score:Stats = this.makeStats();
  public rankedCharacters:RankResult[] = [];

  makeStats():Stats{
    return {
      bravery: 0,
      cowardly: 0,
      dreadful: 0,
      friendly: 0,
      rational: 0,
    };
  }

  get characters():Character[]{
    return this.characterService.characters;
  }
  get questions():Question[]{
    return this.questionService.questions;
  }

  gameStatus:GameStatus = GameStatus.introduction;

  calculateScore():Stats{
    const absoluteScore = this.makeStats();
    const totalQuestions = this.questionService.questions.length;
    for(let i = 0; i < totalQuestions; i++){
      const questionStats = this.questionService.questions[i].currentAlternative!.stats;
      absoluteScore.bravery += questionStats.bravery;
      absoluteScore.cowardly += questionStats.cowardly;
      absoluteScore.dreadful += questionStats.dreadful;
      absoluteScore.friendly += questionStats.friendly;
      absoluteScore.rational += questionStats.rational;
    }
    this.score.bravery = Utils.getPercentOf(absoluteScore.bravery, totalQuestions);
    this.score.cowardly = Utils.getPercentOf(absoluteScore.cowardly, totalQuestions);
    this.score.dreadful = Utils.getPercentOf(absoluteScore.dreadful, totalQuestions);
    this.score.friendly = Utils.getPercentOf(absoluteScore.friendly, totalQuestions);
    this.score.rational = Utils.getPercentOf(absoluteScore.rational, totalQuestions);
    return this.score;
  }

  rankResults(): RankResult[] {
    const characters = this.characterService.characters;
    const score:any = { ...this.score }
    for(let i = 0; i < characters.length; i++){
      let diff = 0;
      const character = characters[i];
      const stats:any = { ...character.stats }
      for(let key in stats){
        diff += Math.abs(stats[key] - score[key]);
      }
      this.rankedCharacters.push({
        character: character,
        difference: diff,
      });
    }
    this.rankedCharacters.sort((a, b) => a.difference - b.difference);
    return this.rankedCharacters;
  }

  restart(){
    this.setToQuestion(0);
    this.gameStatus = GameStatus.introduction;
    this.rankedCharacters = [];
    this.score = this.makeStats();
  }

  getCurrentQuestion(): Question {
    return this.questionService.questions[this.currentQuestion];
  }

  hasPreviousQuestion(): boolean {
    return this.currentQuestion > 0;
  }

  hasNextQuestion(): boolean {
    return this.currentQuestion < this.questionService.questions.length - 1;
  }

  setNextQuestion(): Question {
    return this.setToQuestion(++this.currentQuestion);
  }

  setPreviousQuestion(): Question {
    return this.setToQuestion(--this.currentQuestion);
  }

  /**
   * Sets [currentQuestion] to the given [index]
   * 
   * It will always return a question index between 0 and the limit of questions
   * @param index 
   * @returns 
   */
  setToQuestion(index:number): Question {
    this.currentQuestion = index;
    if(!this.hasNextQuestion())
      this.currentQuestion = this.questionService.questions.length - 1;
    if(!this.hasPreviousQuestion())
      this.currentQuestion = 0;
    return this.getCurrentQuestion();
  }
  
  isLastQuestion(): boolean {
    return (this.questions.length -1) === this.currentQuestion;
  }

  constructor(
    private readonly characterService:CharacterService,
    private readonly questionService:QuestionService,
  ) {}
}
