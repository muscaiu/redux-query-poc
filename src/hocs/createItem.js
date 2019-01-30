import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { connectRequest } from "redux-query";

import { selectItem } from "../selectors/itemSelectors";
import { itemRequest } from "../queries/itemQueries";

export default function(WrappedComponent) {
  class ItemHoc extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state, props) {
    const query = itemRequest(props.itemId);
    return {
      item: selectItem(state, props),
      query
    };
  }

  return compose(
    connect(mapStateToProps),
    connectRequest(props => props.query)
  )(ItemHoc);
}
