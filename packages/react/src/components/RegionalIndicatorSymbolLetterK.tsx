import React from 'react'

const RegionalIndicatorSymbolLetterK = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M9.925 9.032c0-1.271.93-2.294 2.325-2.294 1.333 0 2.325.868 2.325 2.294v6.697l7.627-8.124c.342-.372.93-.868 1.799-.868 1.178 0 2.295.899 2.295 2.232 0 .806-.496 1.457-1.52 2.48l-5.861 5.767 7.162 7.473c.744.744 1.303 1.426 1.303 2.357 0 1.457-1.146 2.139-2.418 2.139-.898 0-1.488-.526-2.357-1.457l-8.031-8.682v7.906c0 1.21-.93 2.232-2.325 2.232-1.333 0-2.325-.867-2.325-2.232V9.032z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterK
