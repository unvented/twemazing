import React from 'react'

const ClockwiseVerticalArrows = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M4 36c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28c0 2.209-1.791 4-4 4H4z"/><path fill="#FFF" d="M26 30.2l6-7.2h-4v-8c0-5.523-4.477-10-10-10-1.414 0-2.758.297-3.977.827l2.75 3.3C17.169 9.044 17.579 9 18 9c3.315 0 6 2.686 6 6v8h-4l6 7.2zm-4.023-.026l-2.749-3.301c-.397.083-.807.127-1.228.127-3.314 0-6-2.687-6-6v-8h4l-6-7.2L4 13h4v8c0 5.522 4.477 10 10 10 1.414 0 2.758-.297 3.977-.826z"/></svg>
  )
}

export default ClockwiseVerticalArrows
