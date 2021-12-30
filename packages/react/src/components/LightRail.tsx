import React from 'react'

const LightRail = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#939598" d="M0 34h36v2H0z"/><path fill="#D1D3D4" d="M5 32.064l31-.065V6H17c-6 0-7 3-7 3S5 21.999 5 23.999v8.065z"/><path fill="#D1D3D4" d="M14 30c0 .553-.448 1-1 1H5c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1h8c.552 0 1 .447 1 1v2z"/><path fill="#F4900C" d="M36 35H4.527c-.531 0-1.136-.671-1.353-1.5l-.783-3C2.175 29.671 3 29 4 29h32v6z"/><path fill="#414042" d="M36 10H22.007c-1.987 0-3.907 1.791-4.286 4l-1.033 6c-.38 2.209 1.103 4 3.312 4h16V10z"/><path fill="#3B88C3" d="M36 12H23.095c-2.095 0-2.791 1.279-3.062 2.857l-.737 4.286C19.024 20.721 19.422 22 21 22h15V12z"/><path fill="#414042" d="M17 6c-6 0-7 3-7 3S5.008 21.98 5 23.995c2.448-.036 4.115-.344 5-2.995 1-3 2-7 3-9s2-3 5-3c2.493 0 3.592-1.385 3.896-3H17z"/><path fill="#55ACEE" d="M9 18c.944-2.832 3.663-7.442.6-7.949C8.759 12.273 6.793 17.539 5.723 21H6s2 0 3-3z"/><path fill="#DD2E44" d="M9 26c0 .553-.448 1-1 1H6c-.552 0-1-.447-1-1 0-.553.448-1 1-1h2c.552 0 1 .447 1 1z"/></svg>
  )
}

export default LightRail
