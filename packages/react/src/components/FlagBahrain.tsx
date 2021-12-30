import React from 'react'

const FlagBahrain = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EEE" d="M15 6L8 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h4l7-1V6z"/><path fill="#CE1126" d="M32 5H8l6.081 2.6L8 10.2l6.081 2.6L8 15.4l6.081 2.6L8 20.6l6.081 2.6L8 25.8l6.081 2.6L8 31h24c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/></svg>
  )
}

export default FlagBahrain
