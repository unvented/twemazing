import React from 'react'

const RegionalIndicatorSymbolLetterY = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M26.621 9.001c0-1.24-.93-2.263-2.232-2.263-.807 0-1.52.341-1.922.93l-4.465 6.48-4.465-6.48c-.403-.589-1.116-.93-1.922-.93-1.302 0-2.232 1.023-2.232 2.263 0 .496.155.992.434 1.396L15 17.692v8.417C15 27.706 16.294 29 17.891 29h.219c1.596 0 2.89-1.294 2.89-2.891v-8.414l5.188-7.299c.279-.403.433-.899.433-1.395z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterY
