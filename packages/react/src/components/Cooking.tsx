import React from 'react'

const Cooking = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M34.238 27.931c-.704-.703-3.857-2.661-6.935-4.364C28.999 21.137 30 18.187 30 15c0-8.284-6.716-15-15-15C6.715 0 0 6.716 0 15c0 8.284 6.715 15 15 15 3.159 0 6.086-.981 8.504-2.649 1.705 3.081 3.666 6.24 4.37 6.944C29.288 35.709 31 36.002 32 36c1.177-.002 4.055-2.881 4-4-.049-.999-.348-2.655-1.762-4.069z"/><circle fill="#66757F" cx="15" cy="15" r="12"/><path fill="#F5F8FA" d="M16 25c4.863-1.533 4-5 4-9s4.001-6.708.334-9.75c-2.177-1.806-6.75-2.417-8.875-1.625C9.506 5.352 7 6.833 7 9.833s-.058 2.927-1.708 5.625C2.667 19.75 9.125 27.167 16 25z"/><circle fill="#FFAC33" cx="13" cy="18" r="4"/></svg>
  )
}

export default Cooking
