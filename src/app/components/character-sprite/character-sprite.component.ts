import { Component, Input, OnInit } from '@angular/core';
import { SpriteType } from 'src/app/support/enums';

@Component({
  selector: 'app-character-sprite',
  templateUrl: './character-sprite.component.html',
  styleUrls: ['./character-sprite.component.css']
})
export class CharacterSpriteComponent implements OnInit {

  @Input()
  name:string = "";

  @Input()
  type:string = SpriteType.fullBody;

  get imgPath(): string {
    return `./assets/img/chars/${this.name}.png`;
  }

  get classData(): string {
    return `character-sprite ${this.name} ${this.type}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
