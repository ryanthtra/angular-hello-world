import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  private _authors: string[];

  constructor(service: AuthorsService) {
    this._authors = service.authors;
  }

  ngOnInit() {}

  get authors() {
    return this._authors;
  }
}
