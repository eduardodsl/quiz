import { Injectable } from '@angular/core';
import all_characters from '../../assets/data/characters.json';
import ItemNotFoundError from '../errors/ItemNotFoundError';
import Character from '../models/character';
import { Searchable } from '../support/ifaces';

@Injectable({
  providedIn: 'root'
})
export class CharacterService implements Searchable<Character> {

  readonly characters:Character[];

  findById(id:string): Character {
    for(let i:number = 0; i < this.characters.length; i++){
      if(this.characters[i].id === id) return this.characters[i];
    }
    throw new ItemNotFoundError(`Character of id ${id} not found!`);
  }

  constructor() {
    this.characters = all_characters.characters.map<Character>(Character.make);
  }
}
