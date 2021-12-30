import React from 'react'

const RightArrowCurvingUp = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M20.589 5.8l6 7.2H23v7.2c0 5.523-4.683 10-10.206 10-1.414 0-2.861-.298-4.081-.827l2.699-3.3c.396.083.987.127 1.408.127 3.314 0 6.18-2.686 6.18-6V13h-4.411l6-7.2z"/></svg>
  )
}

export default RightArrowCurvingUp
