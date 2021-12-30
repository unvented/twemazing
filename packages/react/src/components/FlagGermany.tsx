import React from 'react'

const FlagGermany = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCD05" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4H0v4z"/><path fill="#ED1F24" d="M0 14h36v9H0z"/><path fill="#141414" d="M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4z"/></svg>
  )
}

export default FlagGermany
