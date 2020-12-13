import { ForumPost } from './../forum-chat.service';

const reply1: ForumPost = {
  text: 'Would like to know that too',
  upvote: 31,
  voted: false,
  voted_up: false,
  voted_down: false,
  verified: false,
  creation: '13.12.2020',
  replies: [],
};
const reply2: ForumPost = {
  text: 'Good Question!',
  upvote: 5,
  voted: false,
  voted_up: false,
  voted_down: false,
  verified: false,
  creation: '13.12.2020',
  replies: [],
};
const reply3: ForumPost = {
  text: 'I think so ?!',
  upvote: 2,
  voted: false,
  voted_up: false,
  voted_down: false,
  verified: false,
  creation: '13.12.2020',
  replies: [],
};

const post1: ForumPost = {
  text: 'Can I still go to the beach during the curfew?',
  upvote: 150,
  voted: false,
  voted_up: false,
  voted_down: false,
  verified: false,
  creation: '13.12.2020',
  replies: [],
};

const post2: ForumPost = {
  text:
    'Can I prevent being in quarantine in Germany if I travel by transit through belgium? ',
  upvote: 50,
  voted: false,
  voted_up: false,
  voted_down: false,
  verified: false,
  creation: '13.12.2020',
  replies: [],
};
const post3: ForumPost = {
  text: 'Can I prevent being in quarantine in Portugal if I travel by boat? ',
  upvote: 5,
  voted: false,
  voted_up: false,
  voted_down: false,
  verified: false,
  creation: '13.12.2020',
  replies: [],
};
const post4: ForumPost = {
  text: 'Where can i get a COVID test ASAP? ',
  upvote: 32,
  voted: false,
  voted_up: false,
  voted_down: false,
  verified: false,
  creation: '13.12.2020',
  replies: [],
};

const post5: ForumPost = {
  text: 'This lockdown sucks, do you guys know what i can do right now?',
  upvote: 7,
  voted: false,
  voted_up: false,
  voted_down: false,
  verified: false,
  creation: '13.12.2020',
  replies: [],
};

post1.replies.push(reply1);
post1.replies.push(reply2);
post1.replies.push(reply3);

post2.replies.push(reply1);
post2.replies.push(reply2);

post3.replies.push(reply1);
post3.replies.push(reply2);
post3.replies.push(reply3);

post4.replies.push(reply1);
post4.replies.push(reply2);

post5.replies.push(reply1);
post5.replies.push(reply2);
post5.replies.push(reply3);

export const mockPosts: ForumPost[] = [];
mockPosts.push(post1);
mockPosts.push(post2);
mockPosts.push(post3);
mockPosts.push(post4);
mockPosts.push(post5);
