import React, { Component, Fragment } from 'react';

import Square from './Square';

class Board extends Component {


  winnerColor (index,status) {
    console.log(status)
   return status === 'Winner : X' || status ===   'Winner : O' ? 'squareWinner' : 'square'
  }



  stateHandler = () =>{

    let status = 'Next player: X';
    

    if((this.props.squares[0] === 'X'&& this.props.squares[3] === 'X'&& this.props.squares[6])=== 'X' ){
      
     return status = 'Winner : X'
    }
     if((this.props.squares[0] === 'X'&& this.props.squares[1] === 'X'&& this.props.squares[2])=== 'X'){
      
     return status = 'Winner : X'
    }
     if((this.props.squares[3] === 'X'&& this.props.squares[4] === 'X'&& this.props.squares[5])=== 'X' ){
      
     return status = 'Winner : X'
    }
     if((this.props.squares[6] === 'X'&& this.props.squares[7] === 'X'&& this.props.squares[8])=== 'X' ){
      
     return status = 'Winner : X'
    }
     if((this.props.squares[1] === 'X'&& this.props.squares[4] === 'X'&& this.props.squares[7])=== 'X' ){
      
     return status = 'Winner : X'
    }
     if((this.props.squares[2] === 'X'&& this.props.squares[5] === 'X'&& this.props.squares[8])=== 'X' ){
      
     return status = 'Winner : X'
    }
    
    
     if((this.props.squares[0] === 'O'&& this.props.squares[3] === 'O'&& this.props.squares[6])=== 'O' ){
      
     return status = 'Winner : O'
    }
     if((this.props.squares[0] === 'O'&& this.props.squares[1] === 'O'&& this.props.squares[2])=== 'O'){
      
     return status = 'Winner : O'
    }
     if((this.props.squares[3] === 'O'&& this.props.squares[4] === 'O'&& this.props.squares[5])=== 'O' ){
      
     return status = 'Winner : O'
    }
     if((this.props.squares[6] === 'O'&& this.props.squares[7] === 'O'&& this.props.squares[8])=== 'O' ){
      
     return status = 'Winner : O'
    }
     if((this.props.squares[1] === 'O'&& this.props.squares[4] === 'O'&& this.props.squares[7])=== 'O' ){
      
     return status = 'Winner : O'
    }
     if((this.props.squares[2] === 'O'&& this.props.squares[5] === 'O'&& this.props.squares[8])=== 'O' ){
      
     return status = 'Winner : O'
    }
    
   return status


  }
  

  render() {

    const status = this.stateHandler()
    const outputSquares = this.props.squares.map((s, index) => {
     
      return <Square key={index} value={s} clicked={() => this.props.renderSquare(index)} classCol={()=>this.winnerColor(index, status)}/>
    })
    return (
      <Fragment>
        <div className="status h2 text-center">{status}</div>
        <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
              <div className="board">
                {outputSquares}
              </div>
            
        </div>
      
      </Fragment>
    );
  }
}

export default Board;
