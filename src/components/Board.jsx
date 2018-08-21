import React, { Component, Fragment } from 'react';

import Square from './Square';

class Board extends Component {

 
  render() {
    let status = this.props.stateHandler()
    let classes = 'square'
    if (status ==='Winner : O') {
      classes = 'squareWinnerO' 
      }
  
      if (status ==='Winner : X') {
       classes = 'squareWinnerX'
      }
      

      
  
  
    
   return (  
   
       <Fragment>

        <div className="status h2 text-center">{status}</div>
        <div style={{display: 'flex', flexFlow: 'row nowrap'}}>
              <div className="board">
                <Square clicked={this.props.renderSquare} squares={this.props.squares} status={status} classes={classes} />
              </div>
            
        </div>
      
      </Fragment>
   )
  }
}

export default Board;
