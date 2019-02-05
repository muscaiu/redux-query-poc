import React from "react";

import createPost from "../hocs/createPost";

const Post = ({ post }) => (
  <li>
    {post && (
      <div>
        <div>
          <a href={post.url} target="_blank">
            {post.title}
          </a>
        </div>
        <div>
          {post.score} points by{" "}
          <a
            href={`https://news.ycombinator.com/user?id=${post.by}`}
            target="_blank"
          >
            {post.by}
          </a>
        </div>
      </div>
    )}
  </li>
);

export default createPost(Post);
