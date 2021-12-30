import React from 'react'

const MobilePhone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M11 36s-4 0-4-4V4s0-4 4-4h14s4 0 4 4v28s0 4-4 4H11z"/><path fill="#55ACEE" d="M9 5h18v26H9z"/></svg>
  )
}

export default MobilePhone
