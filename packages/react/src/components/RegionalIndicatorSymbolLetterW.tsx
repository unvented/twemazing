import React from 'react'

const RegionalIndicatorSymbolLetterW = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M4.298 9.838c-.093-.403-.124-.62-.124-1.054 0-.992.837-2.046 2.201-2.046 1.488 0 2.202.868 2.48 2.232l2.636 13.177h.062l4.031-13.58c.341-1.116 1.272-1.83 2.418-1.83 1.148 0 2.077.713 2.419 1.83l4.03 13.58h.062L27.15 8.97c.277-1.364.992-2.232 2.48-2.232 1.363 0 2.201 1.054 2.201 2.046 0 .434-.031.651-.125 1.054l-3.936 16.93c-.311 1.303-1.334 2.418-3.069 2.418-1.519 0-2.698-.992-3.069-2.263l-3.597-11.969h-.062l-3.597 11.969c-.372 1.271-1.551 2.263-3.07 2.263-1.736 0-2.759-1.115-3.07-2.418L4.298 9.838z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterW
