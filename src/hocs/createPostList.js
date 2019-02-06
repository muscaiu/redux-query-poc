import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  connectRequest,
  // querySelectors 
} from "redux-query";

import { selectPosts } from "../selectors/postsSelectors";
import { fetchPosts } from "../actions/postsActions";
import selectQueryStatus from '../lib/redux-query-utils';

export default function (WrappedComponent) {
  class PostListHoc extends PureComponent {
    render() {
      if (this.props.isLoading) {
        return (<div>...loading</div>)
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    console.log('state:', state)
    const query = fetchPosts();
    return {
      // isLoading: querySelectors.isPending(state.queries, query),
      // queryStatus : selectQueryStatus(state.queries, query),
      isLoading: selectQueryStatus(state.queries, query).isPending,
      posts: selectPosts(state),
      query
    };
  }

  return compose(
    connect(mapStateToProps),
    connectRequest(props => props.query)
  )(PostListHoc);
}
