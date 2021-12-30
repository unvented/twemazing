import React from 'react'

const PickupTruck = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M33 31c1 0 1-1 1-4 0-.692 0-3.862-.041-5.138C33.939 21.258 33.149 20 32 20H20v-6c0-1.058-.235-2-2-2h-5c-3 0-6 8-6 8s-6 0-6 3v4s-1 .338-1 1.957S1 31 2 31h31z"/><circle fill="#292F33" cx="9" cy="31" r="4"/><circle fill="#CCD6DD" cx="9" cy="31" r="2"/><circle fill="#292F33" cx="27" cy="31" r="4"/><circle fill="#CCD6DD" cx="27" cy="31" r="2"/><path fill="#BBDDF5" d="M10 19c0 1 .448 1 1 1h5c.553 0 1-.448 1-1v-4c0-.552-.447-1-1-1h-3c-1 0-3 4-3 5z"/><path fill="#F492A9" d="M36 21.5c0 .828-.672 1.5-1.5 1.5H20v-3h14.5c.828 0 1.5.671 1.5 1.5z"/><path fill="#99AAB5" d="M1 23h1v5H1z"/><path fill="#CCD6DD" d="M2 31H1c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1zm32 0h-1c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1z"/></svg>
  )
}

export default PickupTruck
