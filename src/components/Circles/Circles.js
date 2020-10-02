import React from 'react'
import './Circles.css'

function Circles(props) {
  return (
    <div className="Circles">
      <div className={props.circle1 ? 'selected' : ''}>1</div>
      <div className={props.circle2 ? 'selected' : ''}>2</div>
      <div className={props.circle3 ? 'selected' : ''}>3</div>
      <div className={props.circle4 ? 'selected' : ''}>4</div>

    </div>
  )
}
export default Circles;