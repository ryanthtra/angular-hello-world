import { Component, OnInit } from '@angular/core';
import { FollowerService } from '../services/follower.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  title = 'My Followers';
  followers: any[];

  constructor(private service: FollowerService) {}

  ngOnInit() {
    this.service
      .getAll()
      .subscribe((followers) => (this.followers = followers));
  }
}
