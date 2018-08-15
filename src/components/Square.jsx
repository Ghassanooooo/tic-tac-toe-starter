import React from 'react';

const Square = (props) => (
  <button className="square" onClick={props.clicked}>
    {props.value}
  </button>
);

export default Square;
