import React from 'react'

const FlagNorway = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EF2B2D" d="M10 5H4C1.791 5 0 6.791 0 9v6h10V5zm22 0H16v10h20V9c0-2.209-1.791-4-4-4zM10 31H4c-2.209 0-4-1.791-4-4v-6h10v10zm22 0H16V21h20v6c0 2.209-1.791 4-4 4z"/><path fill="#002868" d="M14.5 5h-2.944l-.025 11.5H0v3h11.525L11.5 31h3V19.5H36v-3H14.5z"/><path fill="#EEE" d="M14.5 31H16V21h20v-1.5H14.5zM16 5h-1.5v11.5H36V15H16zm-4.5 0H10v10H0v1.5h11.5zM0 19.5V21h10v10h1.5V19.5z"/></svg>
  )
}

export default FlagNorway
