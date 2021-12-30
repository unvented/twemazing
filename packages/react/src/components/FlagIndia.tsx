import React from 'react'

const FlagIndia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#138808" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-4H0v4z"/><path fill="#EEE" d="M0 13h36v10H0z"/><path fill="#F93" d="M36 13V9c0-2.209-1.791-4-4-4H4C1.791 5 0 6.791 0 9v4h36z"/><circle fill="navy" cx="18" cy="18" r="4"/><circle fill="#EEE" cx="18" cy="18" r="3"/><path fill="#6666B3" d="M18 15l.146 2.264 1.001-2.035-.73 2.147 1.704-1.498-1.497 1.705 2.147-.731-2.035 1.002L21 18l-2.264.146 2.035 1.001-2.147-.73 1.497 1.704-1.704-1.497.73 2.147-1.001-2.035L18 21l-.146-2.264-1.002 2.035.731-2.147-1.705 1.497 1.498-1.704-2.147.73 2.035-1.001L15 18l2.264-.146-2.035-1.002 2.147.731-1.498-1.705 1.705 1.498-.731-2.147 1.002 2.035z"/><circle fill="navy" cx="18" cy="18" r="1"/></svg>
  )
}

export default FlagIndia
