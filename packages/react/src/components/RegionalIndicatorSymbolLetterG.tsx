import React from 'react'

const RegionalIndicatorSymbolLetterG = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M25.66 15.915c1.953 0 2.729.992 2.729 2.977 0 5.984-3.906 10.48-10.108 10.48-6.294 0-10.666-4.992-10.666-11.41 0-6.449 4.341-11.41 10.666-11.41 4.682 0 8.526 2.201 8.526 4.372 0 1.333-.836 2.17-1.922 2.17-2.108 0-2.542-2.263-6.604-2.263-3.875 0-5.829 3.379-5.829 7.131 0 3.782 1.892 7.132 5.829 7.132 2.45 0 5.272-1.365 5.272-4.899h-3.164c-1.271 0-2.17-.899-2.17-2.17 0-1.302.992-2.108 2.17-2.108h5.271z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterG
