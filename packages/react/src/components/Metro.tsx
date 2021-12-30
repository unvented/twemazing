import React from 'react'

const Metro = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18z"/><path d="M8.896 33.509c.7.412 1.421.79 2.178 1.106L17.65 20h-1.419L8.896 33.509zM19.77 20h-1.42l6.577 14.615c.756-.316 1.478-.694 2.178-1.106L19.77 20z" fill="#808285"/><path fill="#58595B" d="M12 26h2v2h-2zm10 0h2v2h-2z"/><path fill="#A7A9AC" d="M26 25c0 1.104-.896 2-2 2H12c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v2z"/><path fill="#D1D3D4" d="M24.363 6H11.636C9.628 6 8 7.628 8 9.636V23c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V9.636C28 7.628 26.372 6 24.363 6z"/><path fill="#DD2E44" d="M8 19v4c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-8H8v4z"/><path fill="#58595B" d="M26 17c0 1.104-.896 2-2 2H12c-1.104 0-2-.896-2-2v-7c0-1.104.896-2 2-2h12c1.104 0 2 .896 2 2v7z"/><path fill="#55ACEE" d="M24 16c0 .552-.447 1-1 1H13c-.552 0-1-.448-1-1v-5c0-.552.448-1 1-1h10c.553 0 1 .448 1 1v5z"/><path fill="#FFD983" d="M10 21h4v2h-4zm12 0h4v2h-4z"/><path fill="#808285" d="M20 9c0 .552-.447 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.553 0 1 .448 1 1z"/></svg>
  )
}

export default Metro
