import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private _authors = [
    'Samwell Tarly',
    'Jon Snow',
    'Arya Stark',
    'Tyrion Lannister',
    'Sandor Clegane'
  ];
  constructor() {}

  get authors() {
    return this._authors;
  }
}
