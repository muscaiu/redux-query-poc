const itemRequest = itemId => {
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

export { itemRequest };
