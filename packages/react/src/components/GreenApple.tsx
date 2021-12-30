import React from 'react'

const GreenApple = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#77B255" d="M24 7c-3 0-3 1-6 1s-3-1-6-1c-4 0-9 2-9 9 0 11 6 20 10 20 3 0 3-1 5-1s2 1 5 1c4 0 10-9 10-20 0-7.001-5-9-9-9z"/><path fill="#3E721D" d="M17.311 7.88s-1.775-4.674-6.58-6.06c-3.843-1.108-6.318.26-6.318.26s3.012 3.991 5.895 4.822c2.882.83 7.003.978 7.003.978z"/><path fill="#662113" d="M18 10c-.552 0-1-.448-1-1 0-3.441 1.2-6.615 3.293-8.707.391-.391 1.023-.391 1.414 0s.391 1.024 0 1.414C19.986 3.427 19 6.085 19 9c0 .552-.448 1-1 1z"/></svg>
  )
}

export default GreenApple
