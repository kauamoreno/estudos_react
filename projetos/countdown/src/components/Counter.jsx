import React from 'react';
import './Counter.css'

function Counter({title, number}) {
  return (
    <div className="counter">
        <p className="counter_number">{number}</p>
        <h3 className="counter_text">{title}</h3>
    </div>
  )
}

export default Counter