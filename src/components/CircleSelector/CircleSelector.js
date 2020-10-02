import React from 'react'
import './CircleSelector.css'


function CircleSelector(props) {
  if (props.circle1) {
    return (
      <div className="CircleSelector">
        <button value="circle1" onClick={props.handleCricle}
          className={props.circle1 ? 'selected' : ''} > CIRCLE 1 SELECTED</button>
        <button value="circle2" onClick={props.handleCricle}
          className={props.circle2 ? 'selected' : ''}> SELECT CIRCLE 2</button>
        <button value="circle3" onClick={props.handleCricle}
          className={props.circle3 ? 'selected' : ''}> SELECT CIRCLE 3</button>
        <button value="circle4" onClick={props.handleCricle}
          className={props.circle4 ? 'selected' : ''}> SELECT CIRCLE 4</button>

      </div >
    )
  }
  else if (props.circle2) {
    return (
      <div className="CircleSelector">
        <button value="circle1" onClick={props.handleCricle}
          className={props.circle1 ? 'selected' : ''} > SELECT CIRCLE 1</button>
        <button value="circle2" onClick={props.handleCricle}
          className={props.circle2 ? 'selected' : ''}> CIRCLE 2 SELECTED</button>
        <button value="circle3" onClick={props.handleCricle}
          className={props.circle3 ? 'selected' : ''}> SELECT CIRCLE 3 </button>
        <button value="circle4" onClick={props.handleCricle}
          className={props.circle4 ? 'selected' : ''}> SELECT CIRCLE 4</button>

      </div >
    )
  }

  else if (props.circle3) {
    return (
      <div className="CircleSelector">
        <button value="circle1" onClick={props.handleCricle}
          className={props.circle1 ? 'selected' : ''} > SELECT CIRCLE 1</button>
        <button value="circle2" onClick={props.handleCricle}
          className={props.circle2 ? 'selected' : ''}> SELECT CIRCLE 2</button>
        <button value="circle3" onClick={props.handleCricle}
          className={props.circle3 ? 'selected' : ''}> CIRCLE 3 SELECTED</button>
        <button value="circle4" onClick={props.handleCricle}
          className={props.circle4 ? 'selected' : ''}> SELECT CIRCLE 4</button>

      </div >
    )
  }

  else if (props.circle4) {
    return (
      <div className="CircleSelector">
        <button value="circle1" onClick={props.handleCricle}
          className={props.circle1 ? 'selected' : ''} > SELECT CIRCLE 1</button>
        <button value="circle2" onClick={props.handleCricle}
          className={props.circle2 ? 'selected' : ''}> SELECT CIRCLE 2</button>
        <button value="circle3" onClick={props.handleCricle}
          className={props.circle3 ? 'selected' : ''}> SELECT CIRCLE 3</button>
        <button value="circle4" onClick={props.handleCricle}
          className={props.circle4 ? 'selected' : ''}> CIRCLE 4 SELECTED</button>

      </div >
    )
  }

}
export default CircleSelector;