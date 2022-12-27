import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { RankResult, Stats } from 'src/app/support/types';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input()
  characters!:RankResult[];
  @Input()
  locale:string = 'en';
  @Input()
  score!:Stats

  compareIndex:number = 0;
  get compare():RankResult{
    return this.characters[this.compareIndex];
  }

  getContent(key:string):string{
    return this.contentService.getData(key, this.locale);
  }

  compareChar(rank:number){
    this.compareIndex = rank;
    if(window.innerWidth < 1024){
      window.scrollTo(0, 0);
    }
  }

  constructor(private readonly contentService:ContentService) { }

  ngOnInit(): void {
  }

}
