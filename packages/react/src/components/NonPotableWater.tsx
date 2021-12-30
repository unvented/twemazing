import React from 'react'

const NonPotableWater = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path d="M34.999 17.999c0 9.389-7.611 17-17 17S1 27.388 1 17.999 8.61 1 17.999 1s17 7.61 17 16.999z"/><path fill="#FFF" d="M17 19c-1 0-1 1-1 1v4h-6v-4s-.021-1-1.021-1S8 20 8 20v8s0 2 2 2h6c2 0 2-2 2-2v-8s0-1-1-1z"/><g fill="#FFF"><path d="M28 10h-9V5s0-1-1-1-1 1-1 1v5c-6 0-6 6-6 6v1c0 1 1 1 1 1h2s1 0 1-1v-1c0-2 2-2 2-2h11c1 0 1-1 1-1v-2s0-1-1-1z"/><path d="M16 5h-2c-.552 0-1 .448-1 1s.448 1 1 1h2c.552 0 1-.448 1-1s-.448-1-1-1zm4 2h2c.553 0 1-.448 1-1s-.447-1-1-1h-2c-.553 0-1 .448-1 1s.447 1 1 1z"/></g><path fill="#DD2E44" d="M18 0C8.059 0 0 8.06 0 18c0 9.941 8.059 18 18 18s18-8.059 18-18c0-9.94-8.059-18-18-18zm16 18c0 3.968-1.453 7.591-3.845 10.388L7.612 5.845C10.409 3.453 14.032 2 18 2c8.837 0 16 7.164 16 16zM2 18c0-3.968 1.453-7.592 3.845-10.388l22.543 22.544C25.592 32.548 21.968 34 18 34 9.164 34 2 26.837 2 18z"/></svg>
  )
}

export default NonPotableWater
