import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../models/posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  url: string = 'http://localhost:3000/posts';
  constructor(private http: HttpClient) {}

  addPost(posts: Posts): Observable<Posts> {
    return this.http.post<Posts>(`${this.url}`, posts);
  }
}
