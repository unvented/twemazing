import React from 'react'

const FlagSwitzerland = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D32D27" d="M31 27c0 2.209-1.791 4-4 4H9c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v18z"/><path fill="#FFF" d="M25 16.063h-5v-5h-4v5h-5V20h5v5.063h4V20h5z"/></svg>
  )
}

export default FlagSwitzerland
