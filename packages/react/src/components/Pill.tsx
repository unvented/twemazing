import React from 'react'

const Pill = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#BB1A34" d="M33.207 19.773l-8.868-8.855L11.105 24.54l8.684 8.685.001-.001C21.509 34.939 23.881 36 26.5 36c5.246 0 9.5-4.254 9.5-9.5 0-2.628-1.068-5.007-2.793-6.727z"/><path fill="#FDCB58" d="M15.921 2.513C14.229.957 11.979 0 9.5 0 4.253 0 0 4.253 0 9.5c0 2.479.958 4.73 2.514 6.421l-.014.014 8.605 8.605 13.234-13.622-8.418-8.405z"/></svg>
  )
}

export default Pill
