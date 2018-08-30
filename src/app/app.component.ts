import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed to:', eventArgs);
  }

  onLikeSelected() {
    console.log('Change likes!');
    this.tweet.isLiked = !this.tweet.isLiked;
    this.tweet.likesCount += this.tweet.isLiked === true ? 1 : -1;
  }
}
