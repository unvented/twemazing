import React from 'react'

const CounterclockwiseArrowsButton = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M22.242 22.242l2.829 2.829c-3.905 3.905-10.237 3.904-14.143-.001-2.247-2.246-3.194-5.296-2.854-8.225l-4.037.367c-.215 3.84 1.128 7.752 4.062 10.687 5.467 5.467 14.333 5.468 19.799 0l2.828 2.828.849-9.334-9.333.849zM27.899 8.1C22.431 2.633 13.568 2.633 8.1 8.1L5.272 5.272l-.849 9.334 9.334-.849-2.829-2.829c3.906-3.905 10.236-3.905 14.142 0 2.248 2.247 3.194 5.297 2.856 8.226l4.036-.366c.216-3.841-1.128-7.753-4.063-10.688z"/></svg>
  )
}

export default CounterclockwiseArrowsButton
