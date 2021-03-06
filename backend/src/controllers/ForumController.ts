import { mockPosts } from "../mock-objects/forumPosts";
import { ForumPost } from "../custom-types";

class ForumController {
  defaultMethod() {
    return {
      text: `You've reached the ${this.constructor.name} default method`,
    };
  }

  getAllPosts(): ForumPost[] {
    console.log("Forum Requested");
    return mockPosts;
  }
}

export = new ForumController();
