import React, { Component } from "react";

import createItem from "../hocs/createItem";

const Item = ({ item }) => {
  return (
    <li>
      {item && (
        <div>
          <div>
            <a href={item.url} target="_blank">
              {item.title}
            </a>
          </div>
          <div>
            {item.score} points by{" "}
            <a
              href={`https://news.ycombinator.com/user?id=${item.by}`}
              target="_blank"
            >
              {item.by}
            </a>
          </div>
        </div>
      )}
    </li>
  );
};

export default createItem(Item);
