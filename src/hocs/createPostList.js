import React, { PureComponent } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  connectRequest,
  querySelectors
} from "redux-query";
import { getOr } from 'lodash/fp';

import { selectPosts } from "../selectors/postSelectors";
import { fetchPosts } from "../actions/postsActions";
import selectQueryStatus from '../lib/redux-query-utils';
import Spinner from '../components/Spinner';

const getQueryIsPending = getOr(true, 'isPending');

export default function (WrappedComponent) {
  class PostListHoc extends PureComponent {
    render() {
      if (this.props.isLoading) {
        return (<Spinner />)
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    console.log('state:', state)
    const query = fetchPosts();
    const queryStatus = selectQueryStatus(state.queries, query);
    return {
      // queryStatus,
      // isLoading: selectQueryStatus(state.queries, query).isPending,
      // isLoading: querySelectors.isPending(state.queries, query),
      isLoading: getQueryIsPending(queryStatus),
      posts: selectPosts(state),
      query
    };
  }

  return compose(
    connect(mapStateToProps),
    connectRequest(props => props.query)
  )(PostListHoc);
}
