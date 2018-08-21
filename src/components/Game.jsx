import React, {Component} from 'react';

import Board from './Board';
import MoveList from './MoveList';

class Game extends Component {

  state = {
    squares: [
      null, null, null, null, null, null, null, null, null
    ],
    history:[
      {
        squares: []
      }
    ],

    xPrev: true,
    moves: [],
    counter:0,
    showHistory: true
 
  }

  renderSquare = (i) => {

    const updateState = {
        ...this.state,
         moves: [...this.state.moves],
         squares: [...this.state.squares],
         history: [
          ...this.state.history
         ]
           
         
    }


    let history = updateState.history

    if (updateState.squares[i] === null && (this.stateHandler() === `Next player: O` || this.stateHandler() === `Next player: X`)){

  if (updateState.xPrev) {
      updateState.squares[i] = 'X'
      updateState.xPrev = false
   }else{
    updateState.squares[i] = 'O'
    updateState.xPrev = true
   }

 

   if(updateState.counter < 9  ){
    let counter = updateState.counter++
    updateState.moves.push(counter)
   }

  
    history = updateState.history.concat({squares: updateState.squares})
    updateState.showHistory = true
  }
 
    this.setState({ squares: updateState.squares,
       history,
      xPrev: updateState.xPrev,
      counter: updateState.counter,
      moves:updateState.moves,
      showHistory: updateState.showHistory

      })

   
   
  }

  moveHandler = (index)=>{
     
    const updateState = {
      ...this.state,
         moves: [...this.state.moves],
         squares: [...this.state.squares],
         history: [
          ...this.state.history
         ]
     
    }


    let squares = updateState.history[index+1].squares
   this.setState({squares})
    console.log('squares move',squares)
  }

  playAgine = ()=>{
    const updateState = {
      ...this.state,
         moves: [...this.state.moves],
         squares: [...this.state.squares],
         history: [
          ...this.state.history
         ]
     
    }
    updateState.squares =  [
      null, null, null, null, null, null, null, null, null
    ]

   let history = updateState.history=[
      {
        squares: []
      }
    ]

    updateState.moves = []

    updateState.showHistory= false

    this.setState({squares: updateState.squares, history: history, showHistory: updateState.showHistory, moves: updateState.moves, counter : 0})


  }

  
  stateHandler = () =>{

    let status = `Next player: ${this.state.xPrev ? 'X' : 'O'}`
    

    if((this.state.squares[0] === 'X'&& this.state.squares[3] === 'X'&& this.state.squares[6])=== 'X' ){
      
     return status = 'Winner : X'
    }
     if((this.state.squares[0] === 'X'&& this.state.squares[1] === 'X'&& this.state.squares[2])=== 'X'){
      
     return status = 'Winner : X'
    }
     if((this.state.squares[3] === 'X'&& this.state.squares[4] === 'X'&& this.state.squares[5])=== 'X' ){
      
     return status = 'Winner : X'
    }
     if((this.state.squares[6] === 'X'&& this.state.squares[7] === 'X'&& this.state.squares[8])=== 'X' ){
      
     return status = 'Winner : X'
    }
     if((this.state.squares[1] === 'X'&& this.state.squares[4] === 'X'&& this.state.squares[7])=== 'X' ){
      
     return status = 'Winner : X'
    }
     if((this.state.squares[2] === 'X'&& this.state.squares[5] === 'X'&& this.state.squares[8])=== 'X' ){
      
     return status = 'Winner : X'
    }
    
    
     if((this.state.squares[0] === 'O'&& this.state.squares[3] === 'O'&& this.state.squares[6])=== 'O' ){
      
     return status = 'Winner : O'
    }
     if((this.state.squares[0] === 'O'&& this.state.squares[1] === 'O'&& this.state.squares[2])=== 'O'){
      
     return status = 'Winner : O'
    }
     if((this.state.squares[3] === 'O'&& this.state.squares[4] === 'O'&& this.state.squares[5])=== 'O' ){
      
     return status = 'Winner : O'
    }
     if((this.state.squares[6] === 'O'&& this.state.squares[7] === 'O'&& this.state.squares[8])=== 'O' ){
      
     return status = 'Winner : O'
    }
     if((this.state.squares[1] === 'O'&& this.state.squares[4] === 'O'&& this.state.squares[7])=== 'O' ){
      
     return status = 'Winner : O'
    }
     if((this.state.squares[2] === 'O'&& this.state.squares[5] === 'O'&& this.state.squares[8])=== 'O' ){
      
     return status = 'Winner : O'
    }
    
   return status


  }

  render() {

    let outPutGameOver = this.state.counter > 8 || (this.stateHandler() === 'Winner : X' || this.stateHandler() === 'Winner : O')? <p style={{textAlign:'center', color: 'red', fontSize: '20px', backgroundColor: 'pink'}} onClick={this.playAgine}> Game Over ! <strong>Play agine</strong></p> : null
    return (
      <article className="game container mt-5">
        <section className="row">
          <div className="col-sm-8 game-board">
            <Board renderSquare={this.renderSquare} squares={this.state.squares} xPrev={this.state.xPrev} stateHandler={this.stateHandler}/>
          </div>
          <div className="col-sm-4 game-info">
            <p className="h2" style={{color: 'blue'}}>your moves History !!</p>
            <ul className="nav nav-pills flex-column">
             {this.state.showHistory ? <MoveList moves={this.state.moves} moveHandler={this.moveHandler}/> : null}
            </ul>
            {outPutGameOver}
          </div>
        </section>
       
      </article>
    );
  }
}

export default Game;
