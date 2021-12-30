import React from 'react'

const FlagGuernsey = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EEE" d="M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#E8112D" d="M21 31h-6V21H0v-6h15V5h6v10h15v6H21z"/><path fill="#F9DD16" d="M27.5 17H19V9.5l1-1h-4l1 1V17H8.5l-1-1v4l1-1H17v7.5l-1 1h4l-1-1V19h8.5l1 1v-4z"/></svg>
  )
}

export default FlagGuernsey
