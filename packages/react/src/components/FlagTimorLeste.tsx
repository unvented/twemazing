import React from 'react'

const FlagTimorLeste = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DC241F" d="M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#FFC726" d="M16 18L1.296 29.947c.079.072.16.141.244.207L23.667 18 1.54 5.846c-.084.066-.166.135-.244.207L16 18z"/><path fill="#141414" d="M1.296 6.053l-.002.001C.499 6.785 0 7.834 0 9v18c0 1.166.499 2.216 1.296 2.947L16 18 1.296 6.053z"/><path fill="#FFF" d="M4.761 19.01l.492 3.269 1.523-2.934 3.262.542-2.32-2.355 1.523-2.934-2.957 1.478-2.32-2.355.493 3.269L1.5 18.468z"/></svg>
  )
}

export default FlagTimorLeste
