import { requestAsync } from 'redux-query';
import { createFetchTopStoriesQuery } from '../queries/storiesQueries';
import { createFetchItemQuery } from '../queries/storiesQueries';

export function fetchStories() {
    return requestAsync(
        createFetchTopStoriesQuery()
    );
}

export function fetchItem(itemId) {
    return requestAsync(
        createFetchItemQuery(itemId)
    );
}
