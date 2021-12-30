import React from 'react'

const RegionalIndicatorSymbolLetterH = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M25.5 7C24.119 7 23 8.119 23 9.5V15H13V9.5C13 8.119 11.881 7 10.5 7S8 8.119 8 9.5v17c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5V20h10v6.5c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v-17C28 8.119 26.881 7 25.5 7z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterH
