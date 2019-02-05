import React from 'react';

jest.mock('../../selectors/itemSelectors');

jest.resetModules();
jest.mock('react-redux');

const WrappedComponent = () => (<li />);
let createItem;
const initialState = {
  entities: { user: jest.fn() }
};

describe('connect', () => {
  it('should call mapStateToProps()', () => {
    jest.resetModules();
    jest.mock('react-redux');
    const { connect } = require('react-redux');
    connect.mockReturnValue(jest.fn);
    createItem = require('../createItem').default;
    createItem(WrappedComponent);
    expect(connect).toHaveBeenCalled();
    expect(connect.mock.calls[0][0]).toHaveProperty('name', 'mapStateToProps');
  })

  describe('mapStateToProps', () => {
    let mapStateToProps;

    beforeEach(() => {
      const { connect } = require('react-redux');
      connect.mockReturnValue(jest.fn);
      createItem = require('../createItem').default;
      createItem(WrappedComponent);
      mapStateToProps = connect.mock.calls[0][0];
    });


    it('should return object', () => {
      const { selectItem } = require('../../selectors/itemSelectors');

      selectItem.mockReturnValue('myItem');

      const results = mapStateToProps(initialState);

      expect(results).toEqual({
        user: 'myItem'
      });
    });
  });
})
