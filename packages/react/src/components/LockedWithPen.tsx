import React from 'react'

const LockedWithPen = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#AAB8C2" d="M13 3C7.477 3 3 7.477 3 13v10h4V13c0-3.313 2.686-5.999 6-5.999S19 9.687 19 13v10h4V13c0-5.523-4.477-10-10-10z"/><path fill="#FFAC33" d="M26 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V20c0-2.209 1.791-4 4-4h18c2.209 0 4 1.791 4 4v12z"/><path fill="#66757F" d="M32 22l-16-4-11 7h12.184c.413-1.163 1.512-2 2.816-2 1.656 0 3 1.343 3 3s-1.344 3-3 3c-1.305 0-2.403-.837-2.816-2H5l11 7 16-4-1-4 1-4z"/><path fill="#292F33" d="M36 18h-3c-.55 0-1.201.402-1.447.894l-3.105 6.211c-.246.492-.246 1.297 0 1.789l3.105 6.211c.246.493.897.895 1.447.895h3V18z"/></svg>
  )
}

export default LockedWithPen
