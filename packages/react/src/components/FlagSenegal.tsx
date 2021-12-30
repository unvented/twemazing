import React from 'react'

const FlagSenegal = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#00853F" d="M4 5C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h8V5H4z"/><path fill="#FDEF42" d="M12 5h12v26H12z"/><path fill="#E31B23" d="M32 5h-8v26h8c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#00853F" d="M18.869 16.674L18 14l-.869 2.674H14.32l2.274 1.652L15.726 21 18 19.348 20.274 21l-.868-2.674 2.274-1.652z"/></svg>
  )
}

export default FlagSenegal
