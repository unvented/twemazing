import React from 'react'

const RedExclamationMark = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#BE1931" cx="18" cy="32" r="3"/><path fill="#BE1931" d="M21 24c0 1.657-1.344 3-3 3-1.657 0-3-1.343-3-3V5c0-1.657 1.343-3 3-3 1.656 0 3 1.343 3 3v19z"/></svg>
  )
}

export default RedExclamationMark
