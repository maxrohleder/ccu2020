import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ForumChatService {
  constructor() {}
  all_posts = [];

  updatePosts(all_posts_ts): void {
    this.all_posts = all_posts_ts;
  }

  //TODO FROM BACK-END
  getAllPosts(): any[] {
    console.log('getPosts');

    //TODO FROM BACK-END

    var reply1 = {
      name: 'Would like to know that too',
      upvote: 31,
      voted: false,
      voted_up: false,
      voted_down: false,
      time: '16min',
    };
    var reply2 = {
      name: 'Good Question!',
      upvote: 5,
      voted: false,
      voted_up: false,
      voted_down: false,
      time: '6min',
    };
    var reply3 = {
      name: 'I think so ?!',
      upvote: 2,
      voted: false,
      voted_up: false,
      voted_down: false,
      time: '1min',
    };

    var post1 = {
      question: 'Can I still go to the beach during the curfew?',
      time: '15min',
      upvote: 150,
      voted: false,
      voted_up: false,
      voted_down: false,
      verified: true,
      reply: [],
    };

    var post2 = {
      question:
        'Can I prevent being in quarantine in Germany if I travel by transit through belgium? ',
      time: '16min',
      upvote: 50,
      voted: false,
      voted_up: false,
      voted_down: false,
      verified: false,
      reply: [],
    };

    post1.reply.push(reply1);
    post1.reply.push(reply2);
    post1.reply.push(reply3);
    post2.reply.push(reply1);
    post2.reply.push(reply2);
    this.all_posts.push(post1);
    this.all_posts.push(post2);

    return this.all_posts;
  }

  clearPosts(): any[] {
    this.all_posts = [];
    console.log('clear all_posts');
    return this.all_posts;
  }
}
