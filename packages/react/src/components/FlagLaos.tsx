import React from 'react'

const FlagLaos = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CE1126" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-3H0v3zM32 5H4C1.791 5 0 6.791 0 9v3h36V9c0-2.209-1.791-4-4-4z"/><path fill="#002868" d="M0 24h36V12H0v12zm18-11c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/><circle fill="#FFF" cx="18" cy="18" r="5"/></svg>
  )
}

export default FlagLaos
