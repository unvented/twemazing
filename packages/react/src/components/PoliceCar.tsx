import React from 'react'

const PoliceCar = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E1E8ED" d="M32 22s-2-8-5-8H16c-3 0-7 7-7 7s-8 1-8 5v2c0 .09.021.175.026.263C.417 28.605 0 29.251 0 30c0 1.104.896 2 2 2h30c2.209 0 4-1.791 4-4v-2c0-2.209-1.791-4-4-4z"/><path fill="#292F33" d="M1 26v2c0 .09.021.175.026.263C.417 28.605 0 29.251 0 30c0 1.104.896 2 2 2h30c2.209 0 4-1.791 4-4v-2c0-.348-.059-.679-.142-1H1.201c-.117.312-.201.641-.201 1z"/><path fill="#66757F" d="M15.91 32c.055-.326.09-.658.09-1 0-3.313-2.686-6-6-6-3.313 0-6 2.687-6 6 0 .342.035.674.09 1h11.82zm17 0c.055-.326.09-.658.09-1 0-3.313-2.687-6-6-6s-6 2.687-6 6c0 .342.035.674.09 1h11.82z"/><circle fill="#292F33" cx="10" cy="31" r="4"/><circle fill="#E1E8ED" cx="10" cy="31" r="2"/><circle fill="#292F33" cx="27" cy="31" r="4"/><circle fill="#E1E8ED" cx="27" cy="31" r="2"/><path fill="#DD2E44" d="M21 13c0 .552-.447 1-1 1h-3c-.552 0-1-.448-1-1s.448-1 1-1h3c.553 0 1 .448 1 1z"/><path fill="#55ACEE" d="M22 13c0 .552-.447 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.553 0 1 .448 1 1zm1 8h7s-2-5-3-5h-4v5zm-2-5h-5c-2 0-5 5-5 5h10v-5z"/></svg>
  )
}

export default PoliceCar
