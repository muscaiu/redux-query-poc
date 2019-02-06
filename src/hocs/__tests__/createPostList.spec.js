import React from 'react';
import { shallow } from 'enzyme';
import createStore from 'redux-mock-store';

import createPostList from '../createPostList';

const mockStore = createStore();
const state = {
    queries: {},
    entities: {}
};
describe('createPostList', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return a connected component', () => {
        const PostList = createPostList();
        const store = mockStore(state);
        const wrapper = shallow(<PostList />, { context: { store } });
        expect(wrapper).toMatchSnapshot();
    });

    it('it should return a Spinner', () => {
        const selectQueryStatus = jest.fn(() => ({ isPending: true }));
        require('../../lib/redux-query-utils').default = selectQueryStatus; // eslint-disable-line global-require

        const PostList = createPostList();
        const store = mockStore(state);
        const wrapper = shallow(<PostList />, { context: { store } });

        expect(selectQueryStatus).toHaveBeenCalled();
        expect(wrapper.props().isLoading).toBeTruthy();
        expect(wrapper.dive().dive().find('Spinner')).toHaveLength(1);
        expect(wrapper.dive().dive().find('Spinner')).toMatchSnapshot();
        // console.log(wrapper.debug());
        // console.log(wrapper.dive().debug());
        // console.log(wrapper.dive().dive().debug());
    });
})
