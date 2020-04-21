import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './Components/cell.js'
import Board from './Components/board.js'
import cellData from './Components/cellData.js'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      cells: cellData
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleClear() {
    this.setState(prevState => {
      console.log('CLEAR')
      return {
        cells: prevState.cells.map(cell => {
          return {
            ...cell,
            completed: false
          } 
        }) 
      }
    })
  }

  handleChange(id) {
    this.setState(prevState => {
      return {
        cells: prevState.cells.map(cell => {
          if (cell.id === id) {
            console.log("HERE",cell.id, cell.completed)
          }
          return {
            ...cell,
            completed: cell.id == id ? !cell.completed : cell.completed
          }
        })
      }
    })
  }

  handleEnter(id) {
    this.state.cells.map(cell => {
      if (cell.id === id) {
        console.log(cell.id, cell.completed)
      }
      return cell
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Grid Game</h1>
        <Board 
          cells={this.state.cells} 
          handler={this.handleChange} 
          handleEnter={this.handleEnter} 
        />
        <button className="butt" onClick={this.handleClear} type="button">Clear!</button>
      </div>
    )
  }
}

export default App;
