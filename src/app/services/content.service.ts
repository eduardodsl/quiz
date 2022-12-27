import { Injectable } from '@angular/core';
import all_content from '../../assets/data/content.json';
import Content from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private content:Content;

  constructor() {
    this.content = new Content(all_content.content);
  }

  getData(key:string, locale:string = 'en'):string{
    return this.content.getData(key, locale);
  }

}
