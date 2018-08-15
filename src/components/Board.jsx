import React, { Component, Fragment } from 'react';

import Square from './Square';

class Board extends Component {
  state = {
    squares: [null, null, null, null, null, null, null, null, null]
  }
  renderSquare = (i) => {
    const updateState = {
      ...this.state,
      squares: [...this.state.squares]
    }

    updateState.squares[i] === null  ?
      updateState.squares[i] ='X'   :
      updateState.squares[i] === 'X' ?
        updateState.squares[i] = 'O'  :
        updateState.squares[i] = 'X'


    this.setState({ squares: updateState.squares })
  }

  render() {
    const status = 'Next player: X';
    const outputSquares = this.state.squares.map((s, index) => {
      return <Square key={index} value={s} clicked={() => this.renderSquare(index)} />
    })
    return (
      <Fragment>
        <div className="status h2 text-center">{status}</div>
        <div className="board">
          {outputSquares}
        </div>
      </Fragment>
    );
  }
}

export default Board;
