import React from 'react'

const CarpStreamer = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CCD6DD" d="M3 3h2v33H3z"/><circle fill="#F4900C" cx="4" cy="3" r="3"/><path fill="#66757F" d="M9 28H4c-.552 0-1-.447-1-1s.448-1 1-1h5c.552 0 1 .447 1 1s-.448 1-1 1z"/><path fill="#DD2E44" d="M31 27c0-2.209 6.209-6 4-6h-8.447c-1.203-1.464-4.595-3-7.053-3-2.459 0-3.23 1.536-3.435 3H10c-2.209 0-3 1.791-3 4v4c0 2.209.791 4 3 4h25c2.209 0-4-3.791-4-6z"/><circle fill="#FFF" cx="12" cy="25" r="3"/><circle cx="11.5" cy="24.5" r="1.5"/><path fill="#F4ABBA" d="M35 21H15.962c2.068 2.286 4.742 6.465-.037 12H35c2.209 0-4-3.791-4-6s6.209-6 4-6z"/><path fill="#66757F" d="M9 12H4c-.552 0-1-.448-1-1s.448-1 1-1h5c.552 0 1 .448 1 1s-.448 1-1 1z"/><path fill="#55ACEE" d="M31 11c0-2.209 6.209-6 4-6h-8.446c-1.203-1.464-4.595-3-7.054-3-2.459 0-3.23 1.536-3.435 3H10C7.791 5 7 6.791 7 9v4c0 2.209.791 4 3 4h25c2.209 0-4-3.791-4-6z"/><circle fill="#FFF" cx="12" cy="9" r="3"/><circle cx="11.5" cy="8.5" r="1.5"/><path fill="#BBDDF5" d="M35 5H15.962c2.068 2.286 4.742 6.465-.037 12H35c2.209 0-4-3.791-4-6s6.209-6 4-6z"/></svg>
  )
}

export default CarpStreamer
