import React from 'react'
import './Button.css'

const Button = ({value, type, className}) => {
  return (
    <button className={className} type={type}>{value}</button>
  )
}

export default Button