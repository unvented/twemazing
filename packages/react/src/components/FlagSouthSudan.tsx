import React from 'react'

const FlagSouthSudan = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#141414" d="M32 5H4C1.791 5 0 6.791 0 9v3h36V9c0-2.209-1.791-4-4-4z"/><path fill="#078930" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-3H0v3z"/><path fill="#DA121A" d="M0 12h36v12H0z"/><path d="M0 12h36v2H0zm0 10h36v2H0z" fill="#EEE"/><path fill="#0F47AF" d="M1.351 6.004H1.35C.522 6.737 0 7.808 0 9.267v18c0 .926.522 1.997 1.351 2.729L17.5 18 1.351 6.004z"/><path fill="#FCDD09" d="M8.249 17.917l1.777-2.446-2.875.934-1.776-2.445v3.023l-2.875.934 2.875.934v3.022l1.776-2.445 2.875.934z"/></svg>
  )
}

export default FlagSouthSudan
