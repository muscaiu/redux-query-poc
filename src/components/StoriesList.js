import React from "react";
import Item from "../components/Item";
import createStoriesList from "../hocs/createStoriesList";

const StoriesList = ({ isLoading, topStoryIds }) => (
  <ol>
    {isLoading && "LOADING..."}
    {topStoryIds.slice(0, 5).map(itemId => (
      <Item key={itemId} itemId={itemId} />
    ))}
  </ol>
);
export default createStoriesList(StoriesList);
