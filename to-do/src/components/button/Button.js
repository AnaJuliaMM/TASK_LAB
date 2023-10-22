import React from 'react'
import './Button.css'

const Button = ({value, type, className, onClick}) => {
  return (
    <button className={className} type={type} onClick={onClick}>{value}</button>
  )
}

export default Button