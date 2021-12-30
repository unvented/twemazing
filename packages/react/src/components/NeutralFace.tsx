import React from 'react'

const NeutralFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><ellipse fill="#664500" cx="11.5" cy="16.5" rx="2.5" ry="3.5"/><ellipse fill="#664500" cx="24.5" cy="16.5" rx="2.5" ry="3.5"/><path fill="#664500" d="M25 26H11c-.552 0-1-.447-1-1s.448-1 1-1h14c.553 0 1 .447 1 1s-.447 1-1 1z"/></svg>
  )
}

export default NeutralFace
