import React from 'react'

const OpenMailboxWithLoweredFlag = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C1694F" d="M22 33c0 2.209-8 2.209-8 0V23c0-2.209 1.791-4 4-4s4 1.791 4 4v10z"/><path fill="#99AAB5" d="M26 3H10v20h24V11c0-4.418-3.582-8-8-8z"/><path fill="#292F33" d="M10 3c-4.418 0-8 3.582-8 8v12h16V11c0-4.418-3.582-8-8-8z"/><path fill="#DD2E44" d="M34 13H22c-1.104 0-2 .896-2 2s.896 2 2 2h8v2c0 1.104.896 2 2 2h2c1.104 0 2-.896 2-2v-4c0-1.104-.896-2-2-2z"/></svg>
  )
}

export default OpenMailboxWithLoweredFlag
