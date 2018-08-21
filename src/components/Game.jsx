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
    counter:0
 
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

    if (updateState.squares[i] === null){

  if (updateState.xPrev) {
      updateState.squares[i] = 'X'
      updateState.xPrev = false
   }else{
    updateState.squares[i] = 'O'
    updateState.xPrev = true
   }

 

   if(updateState.counter < 9){
    let counter = updateState.counter++
    updateState.moves.push(counter)
   }

  
    history = updateState.history.concat({squares: updateState.squares})
  }
 
    this.setState({ squares: updateState.squares,
       history,
      xPrev: updateState.xPrev,
      counter: updateState.counter,
      moves:updateState.moves
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




  render() {



    let outPutGameOver = this.state.counter > 8 ? <p style={{textAlign:'center', color: 'red', fontSize: '40px'}}> game over</p> : null
    return (
      <article className="game container mt-5">
        <section className="row">
          <div className="col-sm-8 game-board">
            <Board renderSquare={this.renderSquare} squares={this.state.squares}/>
          </div>
          <div className="col-sm-4 game-info">
            <p className="h2">your moves</p>
            <ul className="nav nav-pills flex-column">
              <MoveList moves={this.state.moves} moveHandler={this.moveHandler}/>
            </ul>
            {outPutGameOver}
          </div>
        </section>
       
      </article>
    );
  }
}

export default Game;
