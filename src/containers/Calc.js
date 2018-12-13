import React from 'react';
import { connect } from 'react-redux';
import { calculate } from '../actions'

const Calc = ({value, onCalculate}) => (
  <div>
    <h1>Enter expression:</h1>
    <input type='text' onChange={(e) => onCalculate(e.target.value) }/>
    = {value}
  </div>
);

// React syntax fix :(

const mapStateToProps = (state, ownProps) => ({
  value: state,
  defaultExpression: ownProps.defaultExpression
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCalculate: (expression) => dispatch(calculate(expression))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calc)
