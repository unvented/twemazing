import React from 'react'

const RacingCar = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#414042" d="M30 23h3l2-6h-3z"/><path fill="#F4900C" d="M29 19s-3-4-4-4h-9l-6 5-6.081 1.77c-.62.217-1.45.636-1.56 1.23L0 33c-.125.646.448 1 1 1h34c.553 0 1-.447 1-1V21c0-2-7-2-7-2z"/><path fill="#3B88C3" d="M16.094 20L11 34h12l5-14z"/><circle fill="#292F33" cx="8" cy="31" r="4"/><circle fill="#58595B" cx="8" cy="31" r="2"/><circle fill="#292F33" cx="29" cy="31" r="4"/><circle fill="#58595B" cx="29" cy="31" r="2"/><circle fill="#FFF" cx="19.5" cy="26.5" r="3.5"/><path fill="#231F20" d="M21.055 25.242c0 .441-.19.826-.574 1.072.504.23.854.699.854 1.254 0 .84-.769 1.547-1.764 1.547-1.037 0-1.682-.764-1.682-1.316 0-.273.287-.469.539-.469.477 0 .364.818 1.156.818.363 0 .658-.279.658-.65 0-.98-1.191-.26-1.191-1.086 0-.734.995-.238.995-1.016 0-.266-.188-.469-.505-.469-.665 0-.574.686-1.05.686-.288 0-.456-.258-.456-.518 0-.547.75-1.135 1.527-1.135 1.009.001 1.493.737 1.493 1.282z"/><path fill="#F4900C" d="M30 18l1-1 5-1v2z"/><path fill="#88C9F9" d="M17 16h8v4H12z"/><path fill="#FFCC4D" d="M6 24c0 .553-.448 1-1 1H3c-.552 0-1-.447-1-1 0-.553.448-1 1-1h2c.552 0 1 .447 1 1z"/><path fill="#DD2E44" d="M36 22h-1c-.553 0-1 .447-1 1v1c0 .553.447 1 1 1h1v-3z"/></svg>
  )
}

export default RacingCar
