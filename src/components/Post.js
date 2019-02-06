import React from "react";

const Post = ({ post }) => (
  post && (
    <li>
      {post.title}
    </li>
  )
);

export default Post;
