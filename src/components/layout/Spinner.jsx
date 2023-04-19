import React from 'react'
import spinner from './assets/spinner.gif'



function Spinner() {
  return (
    <div>
      <img width={180} className="text-center mx-auto" src={spinner} alt = "L o a d i n g..." />
    </div>
  )
}

export default Spinner
