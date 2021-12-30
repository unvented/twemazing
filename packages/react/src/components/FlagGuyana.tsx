import React from 'react'

const FlagGuyana = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#009E49" d="M32 5H4C1.791 5 0 6.791 0 9v18c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V9c0-2.209-1.791-4-4-4z"/><path fill="#FFF" d="M1.808 5.654c-.154.101-.302.213-.44.334v24.024c.139.121.286.233.441.335L36 18 1.808 5.654c.001-.001 0-.001 0 0z"/><path fill="#FCD116" d="M3.168 28.712L32.5 18 3.168 7.288z"/><path fill="#141414" d="M18 18L3.168 7.288l-1.8-1.3c-.31.271-.577.589-.791.942l.018 22.126c.214.354.463.684.773.955l1.8-1.3L18 18z"/><path fill="#CE1126" d="M.577 6.93l-.001.002C.21 7.536 0 8.243 0 9v18c0 .757.229 1.453.594 2.057L16 18 .577 6.93z"/></svg>
  )
}

export default FlagGuyana
