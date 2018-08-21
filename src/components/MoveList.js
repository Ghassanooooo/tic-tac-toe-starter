import React from 'react'


const moveList = props => props.moves.map((move, index)=>(<li key={move}
     onClick={()=>props.moveHandler(index)}
      style={{textAlign: 'center', fontSize: '30px'}
    } >move  #{move + 1} ({move < 3 ? 0 : move < 6 ? 1 : 2},{move > 2 ? move > 5 ? move-6 : move-3 : move})</li>))



export default moveList