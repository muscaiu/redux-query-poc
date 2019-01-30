import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import StoriesList from "./components/StoriesList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StoriesList />
      </Provider>
    );
  }
}

export default App;
