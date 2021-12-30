import React from 'react'

const ClutchBag = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C1694F" d="M7.598 13.736c-.993 3.26-3.588 5.228-5.091 5.228-.261 0-.507 0-.507-.964 0-1.699 2.78-3.284 5.598-4.264M10 11S0 13 0 18c0 2.043 1.069 2.964 2.507 2.964C5.469 20.964 10 17.059 10 11z"/><path fill="#A6D388" d="M33.752 14.969C33.479 12.786 31.457 11 29.257 11H10.743c-2.2 0-4.223 1.786-4.495 3.969L4.495 29.03C4.223 31.214 5.8 33 8 33h24c2.2 0 3.777-1.786 3.505-3.97l-1.753-14.061z"/><path fill="#77B255" d="M8 13s2.5 8.5 4 7-4-7-4-7zm23.258 0s-2.5 8.5-4 7 4-7 4-7z"/></svg>
  )
}

export default ClutchBag
