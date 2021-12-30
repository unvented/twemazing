import React from 'react'

const OpenFileFolder = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#269" d="M0 29c0 2.209 1.791 4 4 4h24c2.209 0 4-1.791 4-4V12c0-2.209-1.791-4-4-4h-9c-3.562 0-3-5-8.438-5H4C1.791 3 0 4.791 0 7v22z"/><path fill="#55ACEE" d="M32.336 12h-6.562c-5.438 0-5.383 5-8.945 5h-9c-2.209 0-4.182 1.791-4.406 4l-.493 3.874L2.406 29l-.02-.002c-.116.607-.672.999-1.3.999-.643 0-1.106-.507-1.074-1.144C.01 28.903 0 28.95 0 29c0 2.004 1.478 3.648 3.4 3.939.177.038.371.061.6.061h26c2.209 0 4.182-1.791 4.406-4l1.523-13c.225-2.209-1.384-4-3.593-4z"/></svg>
  )
}

export default OpenFileFolder
