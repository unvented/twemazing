import React from 'react'

const FlagSudan = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D21034" d="M32 5H4C1.791 5 0 6.791 0 9v4.5h36V9c0-2.209-1.791-4-4-4z"/><path fill="#141414" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4.5H0V27z"/><path fill="#EEE" d="M0 13.5h36v9H0z"/><path fill="#007229" d="M1.351 6.004H1.35C.522 6.737 0 7.808 0 9v18c0 1.193.522 2.264 1.351 2.997L17.5 18 1.351 6.004z"/></svg>
  )
}

export default FlagSudan
