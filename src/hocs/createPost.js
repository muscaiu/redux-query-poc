import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { connectRequest } from "redux-query";

import { selectItem } from "../selectors/itemSelectors";
import { postRequest } from "../queries/postsQueries";

export default function(WrappedComponent) {
  class PostHoc extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state, props) {
    const query = postRequest(props.postId);
    return {
      query,
      item: selectItem(state, props)
    };
  }

  return compose(
    connect(mapStateToProps),
    connectRequest(props => props.query)
  )(PostHoc);
}
