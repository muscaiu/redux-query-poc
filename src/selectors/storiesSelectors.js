const selectItem = (state, props) => {
    return (state.entities.itemsById || {})[props.itemId];
};

const selectTopStoryIds = state => {
    return state.entities.topStoryIds || [];
};

export { selectItem, selectTopStoryIds };
