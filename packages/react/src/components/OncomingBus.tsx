import React from 'react'

const OncomingBus = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M11 34c0 1.104-.896 2-2 2H7c-1.104 0-2-.896-2-2v-7c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v7zm20 0c0 1.104-.896 2-2 2h-2c-1.104 0-2-.896-2-2v-7c0-1.104.896-2 2-2h2c1.104 0 2 .896 2 2v7z"/><path fill="#99AAB5" d="M3 17c0 .553-.448 1-1 1H1c-.552 0-1-.447-1-1v-7c0-.552.448-1 1-1h1c.552 0 1 .448 1 1v7zm33 0c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-7c0-.552.447-1 1-1h1c.553 0 1 .448 1 1v7z"/><path fill="#99AAB5" d="M35 11c0 .552-.447 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1h32c.553 0 1 .448 1 1zm0 4c0 .553-.447 1-1 1H2c-.552 0-1-.447-1-1 0-.553.448-1 1-1h32c.553 0 1 .447 1 1z"/><path fill="#CCD6DD" d="M24 2c0 1.104-.896 2-2 2h-8c-1.104 0-2-.896-2-2s.896-2 2-2h8c1.104 0 2 .896 2 2z"/><path fill="#CCD6DD" d="M28 2H8C5.791 2 4 3.791 4 6v26h28V6c0-2.209-1.791-4-4-4z"/><path fill="#FFCC4D" d="M4 16h28v16H4z"/><path fill="#66757F" d="M33 32c0 .553-.447 1-1 1H4c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h28c.553 0 1 .447 1 1v1zm-1-15c0 1.657-1.343 3-3 3H7c-1.657 0-3-1.343-3-3v-7c0-1.657 1.343-3 3-3h22c1.657 0 3 1.343 3 3v7z"/><path fill="#88C9F9" d="M30 16c0 1.104-.896 2-2 2H8c-1.104 0-2-.895-2-2v-5c0-1.104.896-2 2-2h20c1.104 0 2 .895 2 2v5z"/><path fill="#FFAC33" d="M4 25h28v5H4z"/><path fill="#FFF" d="M6 25h6v3H6zm18 0h6v3h-6z"/><path fill="#DD2E44" d="M4 25h2v3H4zm26 0h2v3h-2z"/><path fill="#66757F" d="M14 25h8v3h-8z"/><path fill="#292F33" d="M22 3.5c0 .829-.672 1.5-1.5 1.5h-5c-.829 0-1.5-.671-1.5-1.5S14.671 2 15.5 2h5c.828 0 1.5.671 1.5 1.5z"/></svg>
  )
}

export default OncomingBus
