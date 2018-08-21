import React from 'react';

const Square = (props) =>{
  
 return (
  <button className={props.classCol()} onClick={props.clicked}>
    {props.value}
  </button>
);

} 

export default Square;
