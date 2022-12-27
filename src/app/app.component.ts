import { Component } from '@angular/core';
import Alternative from './models/alternative';
import Question from './models/question';
import { ContentService } from './services/content.service';
import { GameService } from './services/game.service';
import { GameStatus } from './support/enums';
import { RankResult, Stats } from './support/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz';

  get currentQuestion(): Question {
    return this.gameService.getCurrentQuestion();
  }

  private counter:number = 1;
  get questionTitle(): String {
    return this.getContent('question') + ' ' + this.counter;
  }

  get showIntroduction(): boolean {
    return this.gameService.gameStatus === GameStatus.introduction;
  }

  get showQuestions(): boolean {
    return this.gameService.gameStatus === GameStatus.questions;
  }

  get showResults(): boolean {
    return this.gameService.gameStatus === GameStatus.results;
  }

  get resultScore(): Stats {
    return this.gameService.score;
  }

  get rankedCharacters(): RankResult[] {
    return this.gameService.rankedCharacters;
  }

  startGame(){
    this.gameService.gameStatus = GameStatus.questions;
  }

  restartGame(){
    this.gameService.restart();
  }

  languageChange(event:any){
    this.gameService.currentLocale = event.target.value;
  }

  get locale():string{
    return this.gameService.currentLocale;
  }

  private finishGame(){
    this.gameService.calculateScore();
    this.gameService.rankResults();
    this.counter = 1;
    this.gameService.gameStatus = GameStatus.results;
  }

  alternativeClick(alternative: Alternative){
    this.currentQuestion.currentAlternative = alternative;
    if(this.gameService.isLastQuestion()){
      this.finishGame();
      return;
    }
    this.counter++;
    this.gameService.setNextQuestion();
  }

  getContent(key: string){
    return this.contentService.getData(key, this.gameService.currentLocale);
  }

  constructor(
    private gameService:GameService,
    private readonly contentService:ContentService
  ) { }
}
