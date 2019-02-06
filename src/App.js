import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
// import StoriesList from "./components/StoriesList";
import PostList from "./components/PostList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <StoriesList /> */}
        <PostList />
      </Provider>
    );
  }
}

export default App;
