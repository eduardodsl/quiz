import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Alternative from 'src/app/models/alternative';

@Component({
  selector: 'app-alternative',
  templateUrl: './alternative.component.html',
  styleUrls: ['./alternative.component.css'],
})
export class AlternativeComponent implements OnInit {

  @Output()
  pick = new EventEmitter<Alternative>();

  @Input()
  alternative!: Alternative;

  @Input()
  locale:string = 'en';

  get text(): string {
    return this.alternative.getText(this.locale);
  }

  emitPickEvent(){
    this.pick.emit(this.alternative);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
