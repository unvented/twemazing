import React from 'react'

const FlagCzechia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D7141A" d="M1.383 29.973C2.084 30.628 2.998 31 4 31h28c2.209 0 4-1.791 4-4.5V18H17.5L1.383 29.973z"/><path fill="#EEE" d="M32 5H4c-1.016 0-1.94.382-2.646 1.006L17.5 18H36V9c0-2.209-1.791-4-4-4z"/><path fill="#11457E" d="M1.383 29.973L17.5 18 1.354 6.006C.525 6.739 0 7.807 0 9v17.5c0 1.48.537 2.683 1.383 3.473z"/></svg>
  )
}

export default FlagCzechia
