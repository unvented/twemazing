import React from 'react'

const Blowfish = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D99E82" d="M33 17c.461.184.902 3-1 3-6 0-11 11-20 11S1 18.5 1 16 5.82 6 13 6s15 9 20 11z"/><path fill="#D99E82" d="M3 19c0 .553-.671 1-1.5 1S0 19.553 0 19s0-2 1.5-1c.689.46 1.5.447 1.5 1z"/><path fill="#C1694F" d="M33 17c.461.184.876.688-1 1-6 1-10.045-.896-19 0-10 1-12 1-12-2C1 13.5 5.82 6 13 6s15 9 20 11z"/><path fill="#D99E82" d="M30 17.5c0 2.485 3.343 4.5 5 4.5s0-2.015 0-4.5 1.657-4.5 0-4.5-5 2.015-5 4.5z"/><circle fill="#292F33" cx="7" cy="13" r="1"/><path fill="#D99E82" d="M19.16 25S22 29 24 29s0-5 0-5h-2.84c-3 0-2 1-2 1z"/><path fill="#C1694F" d="M21.351 8.923S24.211 6.106 26 7c4.074 2.036-2 4-2 4l-1.593-.106c-2.993-.201-1.056-1.971-1.056-1.971z"/><circle fill="#C1694F" cx="16" cy="25" r="2"/><circle fill="#C1694F" cx="20" cy="21" r="1"/><circle fill="#C1694F" cx="24.5" cy="20.5" r="1.5"/><circle fill="#662113" cx="16.5" cy="14.5" r="1.5"/><circle fill="#662113" cx="23.5" cy="15.5" r="1.5"/><circle fill="#662113" cx="20" cy="11" r="1"/><path fill="#C1694F" d="M3 17c0 .552 1 2-1.5 1-.77-.308-1.5-.448-1.5-1s.671-1 1.5-1 1.5.448 1.5 1z"/></svg>
  )
}

export default Blowfish
