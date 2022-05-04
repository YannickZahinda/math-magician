import React from 'react';
import NavBar from '../nav';

const Quotes = () => (
  <>
    <div className="App">
      <NavBar />
      <div className="quotes">
        &quot; Without mathematics, there&apos;s nothing you can do.
        {' '}
        <br />
        Everything around you is mathematics. Everything around you is numbers.
        <br />
        <strong>— Shakuntala Devi, Indian writer and mental calculator</strong>
        &quot;
      </div>
    </div>
  </>
);

export default Quotes;
