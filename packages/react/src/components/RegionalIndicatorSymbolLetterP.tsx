import React from 'react'

const RegionalIndicatorSymbolLetterP = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M10.777 9.342c0-1.458.868-2.418 2.419-2.418h5.488c4.559 0 7.938 2.977 7.938 7.41 0 4.527-3.504 7.349-7.751 7.349H15.43v5.085c0 1.551-.992 2.418-2.326 2.418s-2.326-.867-2.326-2.418V9.342zm4.651 8.248h3.162c1.954 0 3.194-1.426 3.194-3.287 0-1.86-1.24-3.287-3.194-3.287h-3.162v6.574z"/></svg>
  )
}

export default RegionalIndicatorSymbolLetterP
