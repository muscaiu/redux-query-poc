import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { connectRequest, querySelectors } from "redux-query";

import { selectPostsIds } from "../selectors/postsSelectors";
import { createFetchPostsQuery } from "../queries/postsQueries";

export default function (WrappedComponent) {
  class PostListHoc extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    console.log('state:', state)
    const query = createFetchPostsQuery();
    return {
      isLoading: querySelectors.isPending(state.queries, query),
      postsIds: selectPostsIds(state),
      query
    };
  }

  return compose(
    connect(mapStateToProps),
    connectRequest(props => props.query)
  )(PostListHoc);
}
