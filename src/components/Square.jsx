import React from 'react';

const Square = (props) =>{

 return props.squares.map((s, index)=>(
  <button key={index} className={props.classes} onClick={()=>props.clicked(index)} >
   {s}
 </button>
))}

export default Square;
