import React from 'react';

jest.resetModules();
jest.mock('react-redux');

const WrappedComponent = () => (<li />);
let createItem;

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
  });
})
