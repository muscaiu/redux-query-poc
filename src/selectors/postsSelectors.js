const selectPostsIds = state => {
    return state.entities.posts || [];
};

const selectPost = (state, props) => {
    return (state.entities.postsById || {})[props.postId];
};

export { selectPostsIds, selectPost };
  