import React from 'react'

const Crown = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F4900C" d="M14.174 17.075L6.75 7.594l-3.722 9.481z"/><path fill="#F4900C" d="M17.938 5.534l-6.563 12.389H24.5z"/><path fill="#F4900C" d="M21.826 17.075l7.424-9.481 3.722 9.481z"/><path fill="#FFCC4D" d="M28.669 15.19L23.887 3.523l-5.88 11.668-.007.003-.007-.004-5.88-11.668L7.331 15.19C4.197 10.833 1.28 8.042 1.28 8.042S3 20.75 3 33h30c0-12.25 1.72-24.958 1.72-24.958s-2.917 2.791-6.051 7.148z"/><circle fill="#5C913B" cx="17.957" cy="22" r="3.688"/><circle fill="#981CEB" cx="26.463" cy="22" r="2.412"/><circle fill="#DD2E44" cx="32.852" cy="22" r="1.986"/><circle fill="#981CEB" cx="9.45" cy="22" r="2.412"/><circle fill="#DD2E44" cx="3.061" cy="22" r="1.986"/><path fill="#FFAC33" d="M33 34H3c-.552 0-1-.447-1-1s.448-1 1-1h30c.553 0 1 .447 1 1s-.447 1-1 1zm0-3.486H3c-.552 0-1-.447-1-1s.448-1 1-1h30c.553 0 1 .447 1 1s-.447 1-1 1z"/><circle fill="#FFCC4D" cx="1.447" cy="8.042" r="1.407"/><circle fill="#F4900C" cx="6.75" cy="7.594" r="1.192"/><circle fill="#FFCC4D" cx="12.113" cy="3.523" r="1.784"/><circle fill="#FFCC4D" cx="34.553" cy="8.042" r="1.407"/><circle fill="#F4900C" cx="29.25" cy="7.594" r="1.192"/><circle fill="#FFCC4D" cx="23.887" cy="3.523" r="1.784"/><circle fill="#F4900C" cx="17.938" cy="5.534" r="1.784"/></svg>
  )
}

export default Crown
