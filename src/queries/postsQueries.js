import { normalize } from 'normalizr';

import {
    posts as postsSchema
} from '../schemas/postSchema';

const createFetchPostQuery = postId => {
    return {
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        transform: body => ({
            // The server responds with the metadata for that post
            postsById: {
                [postId]: body
            }
        }),
        update: {
            postsById: (prev, next) => {
                return { ...prev, ...next };
            }
        }
    };
};

const createFetchPostsQuery = () => {
    return {
        // url: `https://hacker-news.firebaseio.com/v0/topstories.json`,
        url: `https://jsonplaceholder.typicode.com/posts`,
        transform: (response) => {
            const normalized = normalize(response, postsSchema);
            return normalized.entities;
        },
        update: {
            // topStoryIds: (prev, next) => {
            //   // Discard previous `response` value (we don't need it anymore).
            //   return next;
            // }
            posts:  (prev, next) => ({ ...prev, ...next })
            // postsIds: (prev, next) => {
            //     console.log(prev);
            //     console.log(next);
            //     return (next)
            // }
        }
    };
};

export { createFetchPostQuery, createFetchPostsQuery };
