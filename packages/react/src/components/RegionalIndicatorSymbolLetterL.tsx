import React from 'react'

const RegionalIndicatorSymbolLetterL = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M12.792 9.156c0-1.55.992-2.418 2.325-2.418 1.333 0 2.325.868 2.325 2.418V24.72h5.52c1.58 0 2.263 1.179 2.232 2.232-.061 1.025-.868 2.048-2.231 2.048H15.21c-1.519 0-2.418-.992-2.418-2.543V9.156z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterL
