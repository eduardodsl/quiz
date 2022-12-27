import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { AlternativeComponent } from './components/alternative/alternative.component';
import { CharacterSpriteComponent } from './components/character-sprite/character-sprite.component';
import { StatsComponent } from './components/stats/stats.component';
import { ResultsComponent } from './components/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AlternativeComponent,
    CharacterSpriteComponent,
    StatsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
