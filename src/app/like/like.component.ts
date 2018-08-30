import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isActive')
  isActive = false;
  @Input('likesCount')
  likesCount: number;
  @Output('likeSelected')
  likeSelected = new EventEmitter();

  constructor() {}

  onLikeSelected() {
    this.likeSelected.emit();
  }
}
