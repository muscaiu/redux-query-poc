import React from 'react';
import createItem from '../createItem';
const WrappedComponent = () => (<li />);

describe('createItem', () => {
  it('should create an Item component', () => {
    let Item = createItem(<WrappedComponent/>);    
    expect(Item).toBeDefined();
  })
})

describe('connect', () =>{
  it('should call mapStateToProps()',() =>{
    // jest.resetModules();
    // jest.mock('react-redux');
    const { connect } = require('react-redux');
    connect.mockReturnValue(jest.fn);
    createItem(WrappedComponent);
    expect(connect).toHaveBeenCalled();
    expect(connect.mock.calls[0][0]).toHaveProperty('name', 'mapStateToProps');
  })
})
