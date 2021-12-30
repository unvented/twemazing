import React from 'react'

const RegionalIndicatorSymbolLetterC = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M19.723 6.552c2.264 0 6.666.744 6.666 3.473 0 1.116-.775 2.077-1.922 2.077-1.272 0-2.139-1.085-4.744-1.085-3.844 0-5.829 3.256-5.829 7.038 0 3.689 2.015 6.852 5.829 6.852 2.605 0 3.658-1.302 4.93-1.302 1.396 0 2.047 1.395 2.047 2.107 0 2.977-4.682 3.659-6.976 3.659-6.294 0-10.666-4.992-10.666-11.41-.001-6.448 4.34-11.409 10.665-11.409z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterC
