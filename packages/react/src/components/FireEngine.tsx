import React from 'react'

const FireEngine = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CCD6DD" d="M35 8H13c-.552 0-1 .448-1 1s.448 1 1 1h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2c.553 0 1-.448 1-1s-.447-1-1-1zm1 5c0 .552-.447 1-1 1H13c-.552 0-1-.448-1-1s.448-1 1-1h22c.553 0 1 .448 1 1z"/><path fill="#DD2E44" d="M32 14H14s.041-2-2.979-2H5.146C0 12 0 19.959 0 19.959V27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-9c0-2.209-1.791-4-4-4z"/><path fill="#F5F8FA" d="M2 22h32v3H2z"/><circle fill="#292F33" cx="7" cy="31" r="4"/><circle fill="#8899A6" cx="7" cy="31" r="2"/><circle fill="#292F33" cx="28" cy="31" r="4"/><circle fill="#8899A6" cx="28" cy="31" r="2"/><path fill="#55ACEE" d="M7 20H2s0-6 3-6h2v6zm5 0H9v-6h1c1 0 2 1 2 2v4z"/><path fill="#FFAC33" d="M8 11c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1z"/><path fill="#3B88C3" d="M10 11c0 .552-.448 1-1 1H7c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1z"/></svg>
  )
}

export default FireEngine
