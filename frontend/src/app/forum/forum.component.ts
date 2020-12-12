import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ForumChatService } from '../forum-chat.service';

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
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.sass'],
})
export class ForumComponent implements OnInit {
  constructor(private ForumChatService: ForumChatService) {}
  goToPost = false;

  all_posts = [];
  seenPost = null;

  newQuestion = new FormControl();

  ngOnInit(): void {
    this.ForumChatService.getAllPosts().subscribe((posts: ForumPost[]) => {
      console.log(posts, 'IN FOURM COMP');
      this.all_posts = posts;
    });
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
      v == 'up' ? (post.voted_up = true) : (post.voted_down = true);
      post.voted = true;
      console.log('voted' + v);
      //PUSH TO BACKEND ?
    } else {
      console.log('already voted');
    }

    this.ForumChatService.updatePosts(this.all_posts);
  }

  createPost(): void {
    console.log('seePost');
    if (this.newQuestion.value != null || this.newQuestion.value != undefined) {
      var post = {
        question: this.newQuestion.value,
        time: '0min',
        upvote: 0,
        voted: false,
        voted_up: false,
        voted_down: false,
        verified: false,
        reply: [],
      };

      this.all_posts.unshift(post);
      this.newQuestion.reset();

      //PUSH TO BACKEND ?
      this.ForumChatService.updatePosts(this.all_posts);
    } else {
      alert('You need to wirte someting down!');
    }
  }

  createReply(): void {
    console.log('seePost');
    if (this.newQuestion.value != null || this.newQuestion.value != undefined) {
      var reply1 = {
        name: this.newQuestion.value,
        upvote: 0,
        voted: false,
        voted_up: false,
        voted_down: false,
        time: '0min',
      };

      this.seenPost.reply.push(reply1);
      this.newQuestion.reset();

      //PUSH TO BACKEND ?
      this.ForumChatService.updatePosts(this.all_posts);
    } else {
      alert('You need to wirte someting down!');
    }
  }
}
