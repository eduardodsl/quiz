import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { RankResult, Stats } from 'src/app/support/types';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input()
  locale:string = 'en';

  @Input()
  score!:Stats;

  getContent(key:string):string{
    return this.contentService.getData(key, this.locale);
  }

  constructor(private readonly contentService:ContentService) { }

  ngOnInit(): void {
  }

}
