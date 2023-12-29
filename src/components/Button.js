import React from 'react'

function Button({text="Button", handleButton}) {
  return (
    <button className='btn btn-primary' onClick={handleButton}>{text}</button>
  )
}

export default Button