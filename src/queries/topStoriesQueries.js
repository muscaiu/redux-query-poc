const topStoriesRequest = () => {
  return {
    url: `https://hacker-news.firebaseio.com/v0/topstories.json`,
    transform: body => ({
      // The server responds with an array of IDs
      topStoryIds: body
    }),
    update: {
      topStoryIds: (prev, next) => {
        // Discard previous `response` value (we don't need it anymore).
        return next;
      }
    }
  };
};
export { topStoriesRequest };
