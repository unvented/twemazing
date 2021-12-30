import React from 'react'

const FaxMachine = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M8 17H0v15c0 2.209 1.791 4 4 4s4-1.791 4-4c0 2.209 1.791 4 4 4h20c2.209 0 4-1.791 4-4V17H8z"/><path fill="#66757F" d="M32 10H12c-2.209 0-4 1.791-4 4 0-2.209-1.791-4-4-4s-4 1.791-4 4v15c0 2.209 1.791 4 4 4s4-1.791 4-4c0 2.209 1.791 4 4 4h20c2.209 0 4-1.791 4-4V14c0-2.209-1.791-4-4-4z"/><path fill="#C6E5B3" d="M21 16c0 1.104-.896 2-2 2h-7c-1.104 0-2-.896-2-2v-2c0-1.104.896-2 2-2h7c1.104 0 2 .896 2 2v2z"/><g fill="#CCD6DD"><circle cx="11.5" cy="21.5" r="1.5"/><circle cx="15.5" cy="21.5" r="1.5"/><circle cx="19.5" cy="21.5" r="1.5"/><circle cx="11.5" cy="25.5" r="1.5"/><circle cx="15.5" cy="25.5" r="1.5"/><circle cx="19.5" cy="25.5" r="1.5"/><circle cx="11.5" cy="29.5" r="1.5"/><circle cx="15.5" cy="29.5" r="1.5"/><circle cx="19.5" cy="29.5" r="1.5"/></g><path d="M34 21c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1zm0 3c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1zm0 3c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1zm0 3c0 .553-.447 1-1 1h-9c-.553 0-1-.447-1-1 0-.553.447-1 1-1h9c.553 0 1 .447 1 1z" fill="#99AAB5"/><circle fill="#CCD6DD" cx="25" cy="15" r="2"/><circle fill="#CCD6DD" cx="32" cy="15" r="2"/><path fill="#CCD6DD" d="M32 10H12V4c0-2.209 1.791-4 4-4h12c2.209 0 4 1.791 4 4v6z"/><path fill="#99AAB5" d="M30 4c0 .553-.447 1-1 1H15c-.553 0-1-.447-1-1 0-.553.447-1 1-1h14c.553 0 1 .447 1 1zm-8 3c0 .553-.447 1-1 1h-6c-.553 0-1-.447-1-1 0-.553.447-1 1-1h6c.553 0 1 .447 1 1z"/></svg>
  )
}

export default FaxMachine
