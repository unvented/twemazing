import React from 'react'

const SpoutingWhale = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M32 12c2.122-2.122 5 14.312-3 21-2.757 2.305-6 2.969-8 2.969-2.371 0-10.029.031-13 .031-7.18 0-8-4.925-8-11s.82-11 8-11c6 0 10 2 13 3.996 4.977 3.312 5.992 3.861 8 2.004 3.213-2.97 1-6 3-8z"/><path fill="#55ACEE" d="M34.003 23c-.465 3.727-2.041 7.523-5.003 10-2.757 2.305-6 2.969-8 2.969-2.371 0-10.029.031-13 .031-4.035 0-6.062-1.555-7.062-3.996C.157 30.102 4 33 15 33c14 0 17-5 19.003-10z"/><path fill="#3B88C3" d="M32 14c4.123 0 4-5 4-7s-2 1-5 2-7-2-6 0 3 5 7 5z"/><path fill="#55ACEE" d="M10 7c0 2.209-.896 6-2 6S6 9.209 6 7s.896-2 2-2 2-.209 2 2z"/><path fill="#55ACEE" d="M8 5c0-3-6-2-6 0s3 1 4 3 2-3 2-3zm0 0c0-3 6-2 6 0s-3 1-4 3-2-3-2-3z"/><circle fill="#292F33" cx="6.5" cy="25.5" r="1.5"/></svg>
  )
}

export default SpoutingWhale
