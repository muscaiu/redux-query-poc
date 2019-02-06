import React from "react";

import Post from "../components/Post";
import createPostList from "../hocs/createPostList";

const PostList = ({ posts }) => {
    return (
        <ol>
            {posts && posts.slice(0, 5).map(post => (
                <Post key={post.id} post={post} />
            ))}
        </ol>

    );
}

export default createPostList(PostList);
