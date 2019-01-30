const selectItem = (state, props) => {
  return (state.entities.itemsById || {})[props.itemId];
};

export { selectItem };
