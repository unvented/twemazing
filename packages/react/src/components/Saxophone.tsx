import React from 'react'

const Saxophone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill-rule="evenodd" clip-rule="evenodd" fill="#FCAB40" d="M14 16L9 26s-1 2 1 2c1 0 2-2 2-2L26 7s2-4 8-1v2c-3-1-4 1-4 1L15 33s-2 3-7 3c-6 0-7-5-7-8 0-2 1-4 2-6s-2-6-2-6h13z"/><path fill="#FDCB58" d="M7.5 20C4.04 20 0 18.952 0 16c0-2.953 4.04-4 7.5-4s7.5 1.047 7.5 4c0 2.952-4.04 4-7.5 4z"/><circle fill="#CCD6DD" cx="19" cy="17" r="2"/><circle fill="#CCD6DD" cx="22" cy="13" r="2"/><circle fill="#CCD6DD" cx="25" cy="9" r="2"/><path fill="#9AAAB4" d="M33.998 10c-.3 0-.605-.068-.893-.211l-2-1c-.988-.494-1.389-1.695-.895-2.684.493-.986 1.693-1.39 2.684-.895l2 1c.988.494 1.389 1.695.895 2.684-.351.701-1.057 1.106-1.791 1.106z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#FCAB40" d="M8.806 21.703l1.267-1.547 6.19 5.069-1.267 1.547z"/></svg>
  )
}

export default Saxophone
