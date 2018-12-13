import {
  CALCULATE
} from '../actions'

const EXPRESSION = '1 + 2 + 3 + 4 + 5'

const INIT_STATE = {
  result: calculate(EXPRESSION),
  expression: EXPRESSION
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case CALCULATE:
      return {
        result: calculate(action.expression),
        expression: action.expression
      }
    default:
      return state
  }
}

function calculate(expression) {
  let res;
  try { res = eval(expression); } catch(error) {};
  return typeof(res) == 'number' ? res : '';
}
