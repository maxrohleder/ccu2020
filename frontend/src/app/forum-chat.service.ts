import { mockPosts } from './mock-objects/forumPosts';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GET_FORUM_MESSAGES_ROUTE } from '../environments/api';
import { Observable, of } from 'rxjs';

export type ForumPost = {
  text: string;
  upvote: number;
  voted: boolean;
  voted_up: boolean;
  voted_down: boolean;
  verified: boolean;
  creation: Date;
  replies: ForumPost[];
};

@Injectable({
  providedIn: 'root',
})
export class ForumChatService {
  constructor(private http: HttpClient) {}
  // load the mock data from mock-objects
  allPosts: ForumPost[] = mockPosts;

  updatePosts(newAllPosts: ForumPost[]): void {
    this.allPosts = newAllPosts;
  }

  getAllPosts(): Observable<ForumPost[]> {
    console.log('getPosts');
    //console.log(mockPosts);
    // Getting posts from backend
    /**
     * Uncomment this line to use the backend
     */
    // return this.http.get<ForumPost[]>(GET_FORUM_MESSAGES_ROUTE);

    // mocking posts for now TODO use posts from backend
    return of(mockPosts);
  }

  clearPosts(): ForumPost[] {
    this.allPosts = [];
    console.log('clear all_posts');
    return this.allPosts;
  }
}
