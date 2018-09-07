import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/catch'; // Old implementation
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: Http) {}

  getAll() {
    return this.http.get(this.url).pipe(
      map((response: Response) => response.json()),
      catchError((error: Response) => this.handleError(error))
    );
  }

  create(resource) {
    // return throwError(new AppError());
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map((response: Response) => response.json()),
      catchError((error: Response) => this.handleError(error))
    );
  }

  update(resource, updateObj?) {
    return this.http
      .patch(this.url + `/${resource.id}`, JSON.stringify(updateObj))
      .pipe(
        map((response: Response) => response.json()),
        catchError((error: Response) => this.handleError(error))
      );
    //return this.http.put(this.url + `/${resource.id}`, JSON.stringify(resource));
  }

  delete(id) {
    return this.http.delete(this.url + `/${id}`).pipe(
      map((response: Response) => response.json()),
      catchError((error: Response) => this.handleError(error))
    );
  }

  private handleError(error: Response) {
    console.log(error);
    if (error.status === 404) {
      return throwError(new NotFoundError());
    } else if (error.status === 400) {
      return throwError(new BadInput(error.json()));
    } else {
      return throwError(new AppError(error));
    }
  }
}
