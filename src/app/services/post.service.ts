import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/catch'; // Old implementation
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = `http://jsonplaceholder.typicode.com/posts`;

  constructor(private http: Http) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post, updateObj?) {
    return this.http.patch(this.url + `/${post.id}`, JSON.stringify(updateObj));
    //return this.http.put(this.url + `/${post.id}`, JSON.stringify(post));
  }

  deletePost(id) {
    return this.http.delete(this.url + `/${id}`);
  }
}
