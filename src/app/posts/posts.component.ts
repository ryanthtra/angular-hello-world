import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
// import 'rxjs/add/operator/catch'; // Old implementation
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  ngOnInit() {
    this.service.getPosts().subscribe(
      (response) => {
        this.posts = response.json();
      },
      (error) => {
        alert('Get posts: an unexpected error occurred.');
        console.log(error); // Would store it in a log file on server.
      }
    );
  }
  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post).subscribe(
      (response) => {
        post['id'] = response.json().id;
        this.posts.splice(0, 0, post);
      },
      (error: Response) => {
        if (error.status === 400) {
          //this.form.setErrors(error.json());
        } else {
          alert('Create post: an unexpected error occurred.');
          console.log(error);
        }
      }
    );
  }

  updatePost(post) {
    // If back-end supported, PATCH used to update only the properties that we want updated.
    this.service.updatePost(post, { isRead: true }).subscribe(
      (response) => {
        console.log(response.json());
      },
      (error) => {
        alert('Update post: an unexpected error occurred.');
        console.log(error);
      }
    );
    // PUT also updates, but must pass the entire object whose properties we want updated as request payload.
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    this.service.deletePost(post.id).subscribe(
      (response) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert('This post has already been deleted!');
        } else {
          alert('Delete post: an unexpected error occurred.');
          console.log(error);
        }
      }
    );
  }
}
