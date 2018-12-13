import {
  CALCULATE
} from '../actions'

export default (state = 0, action) => {
  switch (action.type) {
    case CALCULATE:
      return calculate(action.expression)
    default:
      return state
  }
}

function calculate(expression) {
  let res;
  try { res = eval(expression); } catch(error) {};
  return typeof(res) == 'number' ? res : '';
}
