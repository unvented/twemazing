import React from 'react'

const HeartDecoration = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#F5F8FA" d="M31.885 13.764c0-4.231-3.43-7.661-7.66-7.661-2.567 0-4.834 1.268-6.225 3.206-1.39-1.938-3.657-3.206-6.224-3.206-4.231 0-7.661 3.43-7.661 7.661 0 .6.076 1.18.206 1.74C5.385 22.113 12.733 29.085 18 31c5.266-1.915 12.614-8.887 13.678-15.496.131-.56.207-1.14.207-1.74z"/></svg>
  )
}

export default HeartDecoration
