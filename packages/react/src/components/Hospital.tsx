import React from 'react'

const Hospital = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CCD6DD" d="M24 10c0 1.104-.896 2-2 2h-8c-1.104 0-2-.896-2-2V2c0-1.104.896-2 2-2h8c1.104 0 2 .896 2 2v8zM0 14v20c0 1.104.896 2 2 2h32c1.104 0 2-.896 2-2V14H0z"/><path fill="#99AAB5" d="M18 12H2c-1.104 0-2 .896-2 2h20c0-1.104-.896-2-2-2z"/><path fill="#99AAB5" d="M34 12H18c-1.104 0-2 .896-2 2h20c0-1.104-.896-2-2-2z"/><path fill="#55ACEE" d="M2 22h32v4H2zm0-6h32v4H2zm0 12h32v4H2z"/><path fill="#E1E8ED" d="M8 12h20v24H8z"/><path fill="#55ACEE" d="M10 20h16v4H10zm0-6h16v4H10zm0 12h16v4H10z"/><path fill="#3B88C3" d="M13 32h10v4H13z"/><path fill="#DD2E44" d="M22 4h-3V1h-2v3h-3v2h3v3h2V6h3z"/><path fill="#99AAB5" d="M26 10H10c-1.104 0-2 .896-2 2h20c0-1.104-.896-2-2-2z"/></svg>
  )
}

export default Hospital
