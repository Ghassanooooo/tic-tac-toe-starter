import React from 'react'


const moveList = props => props.moves.map((move, index)=>(<li key={move} onClick={()=>props.moveHandler(index)} >move {move + 1}</li>))



export default moveList