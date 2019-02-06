const createFetchItemQuery = itemId => {
  return {
    url: `https://hacker-news.firebaseio.com/v0/item/${itemId}.json`,
    transform: body => ({
      // The server responds with the metadata for that item
      itemsById: {
        [itemId]: body
      }
    }),
    update: {
      itemsById: (prev, next) => {
        return {
          ...prev,
          ...next
        };
      }
    }
  };
};

const createFetchTopStoriesQuery = () => {
  return {
    url: `https://hacker-news.firebaseio.com/v0/topstories.json`,
    transform: body => {
      return ({
        topStoryIds: body
      })
    },
    update: {
      topStoryIds: (prev, next) => {
        // Discard previous `response` value (we don't need it anymore).
        return next;
      }
    }
  };
};

export { createFetchItemQuery, createFetchTopStoriesQuery };
