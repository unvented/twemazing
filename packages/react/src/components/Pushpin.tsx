import React from 'react'

const Pushpin = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#BE1931" d="M23.651 23.297L12.702 12.348l9.386-7.821 9.385 9.385z"/><path fill="#DD2E44" d="M34.6 13.912c-1.727 1.729-4.528 1.729-6.255 0l-6.257-6.256c-1.729-1.727-1.729-4.53 0-6.258 1.726-1.727 4.528-1.727 6.257 0L34.6 7.656c1.728 1.727 1.728 4.529 0 6.256z"/><path fill="#99AAB5" d="M14 17.823S-.593 35.029.188 35.813C.97 36.596 18.177 22 18.177 22L14 17.823z"/><path fill="#DD2E44" d="M25.215 27.991c-1.726 1.729-4.528 1.729-6.258 0L8.009 17.041c-1.727-1.728-1.727-4.528 0-6.256 1.728-1.729 4.53-1.729 6.258 0l10.948 10.949c1.728 1.729 1.728 4.528 0 6.257z"/></svg>
  )
}

export default Pushpin
