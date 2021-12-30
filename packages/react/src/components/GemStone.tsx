import React from 'react'

const GemStone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#BDDDF4" d="M13 3H7l-7 9h10z"/><path fill="#5DADEC" d="M36 12l-7-9h-6l3 9z"/><path fill="#4289C1" d="M26 12h10L18 33z"/><path fill="#8CCAF7" d="M10 12H0l18 21zm3-9l-3 9h16l-3-9z"/><path fill="#5DADEC" d="M18 33l-8-21h16z"/></svg>
  )
}

export default GemStone
