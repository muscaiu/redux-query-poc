import { requestAsync } from 'redux-query';
import {
    createFetchPostQuery,
    createFetchPostsQuery
} from '../queries/postsQueries';

export function fetchPost(itemId) {
    return requestAsync(
        createFetchPostQuery(itemId)
    );
}

export function fetchPosts() {
    return requestAsync(
        createFetchPostsQuery()
    );
}

