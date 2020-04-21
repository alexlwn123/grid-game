import React from 'react'
import Cell from './cell.js'

class Board extends React.Component {

  constructor(props) {
    super(props) 
    this.handleChange = props.handler.bind(this)
    this.handleEnter = props.handleEnter.bind(this)
  }


  render() {
    const cellGrid = this.props.cells.map(cell => 
      <Cell 
        key={cell.id} 
        handler={this.handleChange} 
        handleEnter={this.handleEnter} 
        item={cell}
      />
    )

    return ( 
      <div> 
        <h1>Board</h1>
        <div className="grid">
          {cellGrid}
        </div>
      </div>
    )
  }
}


export default Board
