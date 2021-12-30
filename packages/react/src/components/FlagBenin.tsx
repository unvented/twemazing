import React from 'react'

const FlagBenin = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FCD116" d="M32 5H14v13h22V9c0-2.209-1.791-4-4-4z"/><path fill="#E8112D" d="M14 31h18c2.209 0 4-1.791 4-4v-9H14v13z"/><path fill="#008751" d="M14 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h10V5z"/></svg>
  )
}

export default FlagBenin
