import React, { useState } from 'react';
import calculate from '../logic/calculate';
import NavBar from './components/nav';
const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const { total, next, operation } = state;
  const handleClick = (e) => {
    e.preventDefault();
    setState((prevState) => calculate(prevState, e.target.id));
  };

  return (
    <div className="App">
      <NavBar />
      <div className="calculation-interface">
        <h1>Let&apos;s do some math !</h1>
        <div className="my-calculator">
          <div className="Monitor">
            <span>{total}</span>
            <span>{operation}</span>
            <span>{next}</span>
          </div>
          <div className="buttons">
            <div className="grid-row-one">
              <button onClick={handleClick} type="button" id="AC">
                AC
              </button>
              <button onClick={handleClick} type="button" id="+/-">
                +/-
              </button>
              <button onClick={handleClick} type="button" id="%">
                %
              </button>
              <button
                onClick={handleClick}
                type="button"
                value="division"
                id="÷"
              >
                ÷
              </button>
            </div>
            <div className="grid-row-two">
              <button onClick={handleClick} type="button" value="7" id="7">
                7
              </button>
              <button onClick={handleClick} type="button" value="8" id="8">
                8
              </button>
              <button onClick={handleClick} type="button" value="9" id="9">
                9
              </button>
              <button onClick={handleClick} type="button" value="*" id="x">
                x
              </button>
            </div>
            <div className="grid-row-three">
              <button onClick={handleClick} type="button" value="4" id="4">
                4
              </button>
              <button onClick={handleClick} type="button" value="5" id="5">
                5
              </button>
              <button onClick={handleClick} type="button" value="6" id="6">
                6
              </button>
              <button onClick={handleClick} type="button" value="-" id="-">
                -
              </button>
            </div>
            <div className="grid-row-four">
              <button onClick={handleClick} type="button" value="1" id="1">
                1
              </button>
              <button onClick={handleClick} type="button" value="2" id="2">
                2
              </button>
              <button onClick={handleClick} type="button" value="3" id="3">
                3
              </button>
              <button onClick={handleClick} type="button" value="+" id="+">
                +
              </button>
            </div>
            <div className="grid-row-five">
              <button onClick={handleClick} type="button" value="0" id="0">
                0
              </button>
              <button onClick={handleClick} type="button" value="." id=".">
                .
              </button>
              <button onClick={handleClick} type="button" value="=" id="=">
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
