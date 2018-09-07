import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  ngOnInit() {
    this.service.getAll().subscribe((posts) => (this.posts = posts));
  }
  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';
    this.service.create(post).subscribe(
      (newPost) => {
        post['id'] = newPost.id;
      },
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    // If back-end supported, PATCH used to update only the properties that we want updated.
    this.service.update(post, { isRead: true }).subscribe((updatedPost) => {
      console.log(updatedPost);
    });
    // PUT also updates, but must pass the entire object whose properties we want updated as request payload.
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(
      () => {
        // let index = this.posts.indexOf(post);
        // this.posts.splice(index, 1);
      },
      (error: AppError) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError) {
          alert('Post has already been deleted!');
        } else {
          throw error;
        }
      }
    );
  }
}
