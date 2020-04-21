import React from 'react'

function Cell(props) {
  if (props.item.id === 1) {
    console.log(props)
  }
  return (
    <div>
      <input 
        className="cell"
        type="checkbox" 
        checked={props.item.completed} 
        onMouseOver={() => props.handleEnter(props.item.id)}
        onChange={()=>props.handler(props.item.id)}
      />
    </div>
  )

}


export default Cell
