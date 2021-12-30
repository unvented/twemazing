import React from 'react'

const FlagSyria = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EEE" d="M0 13h36v10H0z"/><path fill="#CE1126" d="M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z"/><path fill="#141414" d="M32 31H4c-2.209 0-4-1.791-4-4v-4h36v4c0 2.209-1.791 4-4 4z"/><path d="M9.177 18.332l-.633 1.947 1.656-1.203 1.656 1.203-.633-1.947 1.656-1.202h-2.047l-.632-1.947-.632 1.947H7.521zm15.6 0l-.633 1.947 1.656-1.203 1.656 1.203-.633-1.947 1.656-1.202h-2.047l-.632-1.947-.632 1.947h-2.047z" fill="#007A3D"/></svg>
  )
}

export default FlagSyria
