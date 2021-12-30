import React from 'react'

const Hotel = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C1694F" d="M21 15c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-3c0-2.209 1.791-4 4-4h13c2.209 0 4 1.791 4 4v3z"/><path fill="#C1694F" d="M36 6c0 2.209-1.791 4-4 4H20c-2.209 0-4-1.791-4-4V5c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v1z"/><path fill="#FFCC4D" d="M0 12v22c0 1.104.896 2 2 2h31V12H0z"/><path fill="#55ACEE" d="M2 32h12v4H2zm0-6h16v4H2z"/><path fill="#FFE8B6" d="M16 5v31h18c1.104 0 2-.896 2-2V5H16z"/><path fill="#55ACEE" d="M18 20h16v4H18zm0-6h16v4H18zm0-6h16v4H18zm0 18h16v4H18z"/><path fill="#FFE8B6" d="M22 7h2v24h-2zm6 0h2v24h-2z"/><path fill="#3B88C3" d="M22 32h8v4h-8zM10 14v4H6v-4H4v10h2v-4h4v4h2V14z"/><path fill="#FFCC4D" d="M7 25h2v6H7zm7 0h2v6h-2z"/></svg>
  )
}

export default Hotel
