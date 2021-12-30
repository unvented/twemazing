import React from 'react'

const FlagLatvia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#9E3039" d="M32 5H4C1.791 5 0 6.791 0 9v6h36V9c0-2.209-1.791-4-4-4zm0 26H4c-2.209 0-4-1.791-4-4v-6h36v6c0 2.209-1.791 4-4 4z"/><path fill="#EEE" d="M0 15h36v6H0z"/></svg>
  )
}

export default FlagLatvia
