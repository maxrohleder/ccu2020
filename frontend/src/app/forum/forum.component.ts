import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass'],
})
export class ForumComponent implements OnInit {
  constructor() {}
  goToPost = false;

  all_posts = [];
  seenPost = null;

  newQuestion = new FormControl();

  ngOnInit(): void {
    var reply1 = {
      name: 'Would like to know that too',
      upvote: 31,
      voted: false,
      time: '16min',
    };
    var reply2 = {
      name: 'Good Question!',
      upvote: 5,
      voted: false,
      time: '6min',
    };
    var reply3 = {
      name: 'I think so ?!',
      upvote: 2,
      voted: false,
      time: '1min',
    };

    var post1 = {
      question: 'Can I still go to the beach during the curfew?',
      time: '15min',
      upvote: 150,
      voted: false,
      verified: true,
      reply: [],
    };

    var post2 = {
      question:
        'Can I prevent being in quarantine in Germany if I travel by transit through belgium? ',
      time: '16min',
      upvote: 50,
      voted: false,
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
  }

  seePost(post): void {
    if (post == 'back') {
      console.log('seePost');
      this.goToPost = false;
      this.seenPost = null;
    } else {
      console.log('seePost');
      this.goToPost = true;
      this.seenPost = post;
    }
  }
  vote(post, v): void {
    console.log(post, v);
    if (!post.voted) {
      post.upvote = v == 'up' ? post.upvote + 1 : post.upvote - 1;
      post.voted = true;
      console.log('voted' + v);
      //PUSH TO BACKEND ?
    } else {
      console.log('already voted');
    }
  }

  createPost(): void {
    console.log('seePost');
    var post = {
      question: this.newQuestion.value,
      time: '0min',
      upvote: 0,
      voted: false,
      verified: false,
      reply: [],
    };

    this.all_posts.unshift(post);
    //PUSH TO BACKEND ?
    this.newQuestion.reset();
  }
  createReply(): void {
    console.log('seePost');
    var reply1 = {
      name: this.newQuestion.value,
      upvote: 0,
      voted: false,
      time: '0min',
    };

    this.seenPost.reply.push(reply1);
    //PUSH TO BACKEND ?
    this.newQuestion.reset();
  }
}
