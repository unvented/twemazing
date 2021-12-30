import React from 'react'

const Ghost = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E1E8ED" d="M36 11c0-1.104-.896-2-2-2s-2 .896-2 2c0 0-.011 3.285-3 3.894V12c0-6.075-4.925-11-11-11S7 5.925 7 12v3.237C1.778 16.806 0 23.231 0 27c0 1.104.896 2 2 2s2-.896 2-2c0 0 .002-3.54 3.336-3.958C7.838 27.883 8.954 33 11 33h1c4 0 3 2 7 2s3-2 6-2 2.395 2 6 2c1.657 0 3-1.343 3-3 0-.675-2.274-4.994-3.755-9.268C35.981 21.348 36 14.58 36 11z"/><circle fill="#292F33" cx="13" cy="12" r="2"/><circle fill="#292F33" cx="23" cy="12" r="4"/><circle fill="#9AAAB4" cx="23" cy="13" r="2"/><path fill="#292F33" d="M22.192 19.491c2.65 1.987 3.591 5.211 2.1 7.199-1.491 1.988-4.849 1.988-7.5 0-2.65-1.987-3.591-5.211-2.1-7.199 1.492-1.989 4.849-1.988 7.5 0z"/></svg>
  )
}

export default Ghost
