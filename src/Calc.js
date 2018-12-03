import React from 'react';

class Calc extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      expression: props.defaultExpression,
      result: this.calculate(props.defaultExpression)
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({
      expression: event.target.value,
      result: this.calculate(event.target.value)
    })
  }

  handleClear(e){
    e.preventDefault();
    this.setState({ expression: '' });
  }

  render() {
    return (
      <div>
        <h1>Enter expression:</h1>
        <button onClick={this.handleClear}>Clear</button>
        <input type='text' value={this.state.expression} onChange={(e) => this.handleChange(e)}/>
        = {this.state.result}
      </div>
    );
  }

  calculate(expression) {
    let res;
    try { res = eval(expression); } catch(error) {};
    return typeof(res) == 'number' ? res : '';
  }
}

export default Calc;
