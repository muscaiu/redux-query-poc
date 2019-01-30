import React, { Component } from "react";
import Item from "../components/Item";
import createStoriesList from "../../hocs/createStoriesList";

const StoriesList = props => {
  return (
    <ol>
      {props.isLoading && "LOADING..."}
      {props.topStoryIds.slice(0, 5).map(itemId => (
        <Item key={itemId} itemId={itemId} />
      ))}
    </ol>
  );
};
export default createStoriesList(StoriesList);
