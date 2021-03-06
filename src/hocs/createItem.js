import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { connectRequest } from "redux-query";

import { selectItem } from "../selectors/storiesSelectors";
import { fetchItem } from "../actions/storiesActions";

export default function(WrappedComponent) {
  class ItemHoc extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state, props) {
    const query = fetchItem(props.itemId);
    return {
      query,
      item: selectItem(state, props)
    };
  }

  return compose(
    connect(mapStateToProps),
    connectRequest(props => props.query)
  )(ItemHoc);
}
