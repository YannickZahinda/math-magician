import React from 'react';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => calculate(prevState, e.target.id));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <div className="my-calculator">
          <div className="Monitor">
            <span>{total}</span>
            <span>{operation}</span>
            <span>{next}</span>
          </div>
          <div className="buttons">
            <div className="grid-row-one">
              <button onClick={this.handleClick} type="button" id="AC">
                AC
              </button>
              <button onClick={this.handleClick} type="button" id="+/-">
                +/-
              </button>
              <button onClick={this.handleClick} type="button" id="%">
                %
              </button>
              <button onClick={this.handleClick} type="button" value="division" id="/">
                /
              </button>
            </div>
            <div className="grid-row-two">
              <button onClick={this.handleClick} type="button" value="7" id="7">
                7
              </button>
              <button onClick={this.handleClick} type="button" value="8" id="8">
                8
              </button>
              <button onClick={this.handleClick} type="button" value="9" id="9">
                9
              </button>
              <button onClick={this.handleClick} type="button" value="*" id="x">
                x
              </button>
            </div>
            <div className="grid-row-three">
              <button onClick={this.handleClick} type="button" value="4" id="4">
                4
              </button>
              <button onClick={this.handleClick} type="button" value="5" id="5">
                5
              </button>
              <button onClick={this.handleClick} type="button" value="6" id="6">
                6
              </button>
              <button onClick={this.handleClick} type="button" value="-" id="-">
                -
              </button>
            </div>
            <div className="grid-row-four">
              <button onClick={this.handleClick} type="button" value="1" id="1">
                1
              </button>
              <button onClick={this.handleClick} type="button" value="2" id="2">
                2
              </button>
              <button onClick={this.handleClick} type="button" value="3" id="3">
                3
              </button>
              <button onClick={this.handleClick} type="button" value="+" id="+">
                +
              </button>
            </div>
            <div className="grid-row-five">
              <button onClick={this.handleClick} type="button" value="0" id="0">
                0
              </button>
              <button onClick={this.handleClick} type="button" value="." id=".">
                .
              </button>
              <button onClick={this.handleClick} type="button" value="=" id="=">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
