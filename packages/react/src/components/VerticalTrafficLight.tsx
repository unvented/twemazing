import React from 'react'

const VerticalTrafficLight = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M27 32c0 2.209-1.791 4-4 4H13c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h10c2.209 0 4 1.791 4 4v28z"/><path fill="#77B255" d="M17.999 25c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z"/><path fill="#FFCC4D" d="M17.999 14c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z"/><path fill="#DD2E44" d="M17.999 3c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z"/></svg>
  )
}

export default VerticalTrafficLight
