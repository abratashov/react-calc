export const CALCULATE = 'CALCULATE'

export function calculate(expression) {
  return { type: CALCULATE, expression: expression }
}
