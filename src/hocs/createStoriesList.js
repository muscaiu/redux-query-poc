import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { connectRequest, querySelectors } from "redux-query";

import { selectTopStoryIds } from "../selectors/topStorySelectors";
import { topStoriesRequest } from "../queries/topStoriesQueries";

export default function(WrappedComponent) {
  class TopStoriesHoc extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    const query = topStoriesRequest();
    return {
      isLoading: querySelectors.isPending(state.queries, query),
      topStoryIds: selectTopStoryIds(state),
      query
    };
  }

  return compose(
    connect(mapStateToProps),
    connectRequest(props => props.query)
  )(TopStoriesHoc);
}
