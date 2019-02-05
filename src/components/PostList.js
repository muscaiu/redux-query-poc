import React from "react";

import Post from "../components/Post";
import createPostList from "../hocs/createPostList";

const PostList = ({ isLoading, postsIds }) => (
    <ol>
        {isLoading && "LOADING..."}
        {postsIds.slice(0, 5).map(postId => (
            <Post key={postId} postId={postId} />
        ))}
    </ol>
);
export default createPostList(PostList);
