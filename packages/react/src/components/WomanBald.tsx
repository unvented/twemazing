import React from 'react'

const WomanBald = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFDC5D" d="M29.5 15C28.406 7.311 23.392 3.875 18 3.875S7.594 7.311 6.5 15C5.119 15 4 16.791 4 19c0 2.107 1.021 3.815 2.314 3.97h.182v.001C7.971 29.348 12.563 34 18 34c5.437 0 10.029-4.652 11.504-11.03h.182C30.979 22.815 32 21.107 32 19c0-2.209-1.119-4-2.5-4z"/><path fill="#DF1F32" d="M18 30c-2.347 0-3.575-1.16-3.707-1.293-.391-.391-.391-1.023 0-1.414.387-.387 1.013-.39 1.404-.01.051.047.806.717 2.303.717 1.519 0 2.273-.69 2.305-.719.398-.373 1.027-.362 1.408.029.379.393.38 1.011-.006 1.397C21.575 28.84 20.347 30 18 30z"/><path fill="#C1694F" d="M19 25h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"/><path fill="#662113" d="M13 22c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z"/></svg>
  )
}

export default WomanBald
