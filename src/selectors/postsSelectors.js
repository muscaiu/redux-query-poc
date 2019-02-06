import { denormalize } from 'normalizr';

import { posts as postsSchema } from '../schemas/postSchema';
import Post from '../models/Post';

const selectPosts = ({ entities }) => {
    if (entities.posts) {
        const data = denormalize(Object.keys(entities.posts), postsSchema, entities);
        if (data) return data.map(post => new Post(post));
    }
    return null;
}

// const selectPosts = state => {
//     return state.entities.posts || [];
// };


const selectPost = (state, props) => {
    return (state.entities.postsById || {})[props.postId];
};

export { selectPost, selectPosts };
