import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="my-calculator">
          <div className="Monitor">0</div>
          <div className="buttons">
            <div className="grid-row-one">
              <button type="button" id="clear-all">
                AC
              </button>
              <button type="button" id="negative">
                +/-
              </button>
              <button type="button" id="percentage">
                %
              </button>
              <button type="button" value="division" id="division">
                /
              </button>
            </div>
            <div className="grid-row-two">
              <button type="button" value="7" id="7">
                7
              </button>
              <button type="button" value="8" id="8">
                8
              </button>
              <button type="button" value="9" id="9">
                9
              </button>
              <button type="button" value="*" id="mulitiplication">
                x
              </button>
            </div>
            <div className="grid-row-three">
              <button type="button" value="4" id="4">
                4
              </button>
              <button type="button" value="5" id="5">
                5
              </button>
              <button type="button" value="6" id="6">
                6
              </button>
              <button type="button" value="-" id="subtraction">
                -
              </button>
            </div>
            <div className="grid-row-four">
              <button type="button" value="1" id="1">
                1
              </button>
              <button type="button" value="2" id="2">
                2
              </button>
              <button type="button" value="3" id="3">
                3
              </button>
              <button type="button" value="+" id="addition">
                +
              </button>
            </div>
            <div className="grid-row-five">
              <button type="button" value="0" id="zero">
                0
              </button>
              <button type="button" value="." id="dot">
                .
              </button>
              <button type="button" value="=" id="equals">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Calculator;
