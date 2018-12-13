import React from 'react';
import { connect } from 'react-redux';
import { calculate } from '../actions'

const Calc = ({result, expression, onCalculate}) => (
  <div>
    <h1>Enter expression:</h1>
    <input type='text' value={expression} onChange={(e) => onCalculate(e.target.value) }/>
    = {result}
  </div>
);

// React syntax fix :(

const mapStateToProps = (state, ownProps) => ({
  result: state.result,
  expression: state.expression
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCalculate: (expression) => dispatch(calculate(expression))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calc)
