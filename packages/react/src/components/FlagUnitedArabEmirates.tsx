import React from 'react'

const FlagUnitedArabEmirates = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#068241" d="M32 5H9v9h27V9c0-2.209-1.791-4-4-4z"/><path fill="#EEE" d="M9 14h27v8H9z"/><path fill="#141414" d="M9 31h23c2.209 0 4-1.791 4-4v-5H9v9z"/><path fill="#EC2028" d="M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h5V5H4z"/></svg>
  )
}

export default FlagUnitedArabEmirates
