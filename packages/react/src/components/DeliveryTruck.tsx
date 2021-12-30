import React from 'react'

const DeliveryTruck = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4v-3c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v3z"/><path fill="#FFCC4D" d="M19 13l-.979-1H7.146C4 12 3 14 3 14l-3 5.959V25h19V13z"/><path fill="#55ACEE" d="M9 20H2l2-4s1-2 3-2h2v6z"/><circle fill="#292F33" cx="9" cy="31" r="4"/><circle fill="#CCD6DD" cx="9" cy="31" r="2"/><circle fill="#292F33" cx="27" cy="31" r="4"/><circle fill="#CCD6DD" cx="27" cy="31" r="2"/><path fill="#CCD6DD" d="M32 8H17c-2.209 0-4 1.791-4 4v13h23V12c0-2.209-1.791-4-4-4z"/></svg>
  )
}

export default DeliveryTruck
