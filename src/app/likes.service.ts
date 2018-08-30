import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private _likes = 5;

  constructor() {}

  public get likes() {
    return this._likes;
  }

  public incrementLikes(delta_likes) {
    delta_likes = delta_likes < 0 ? -1 : 1;
    this._likes += delta_likes;
  }
}
