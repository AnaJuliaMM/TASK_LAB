import React from 'react'
import './Button.css'

const Button = ({value, type, style, onClick}) => {
  return (
    <button  style={style} type={type} onClick={onClick}>{value}</button>
  )
}

export default Button