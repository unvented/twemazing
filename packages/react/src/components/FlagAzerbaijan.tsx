import React from 'react'

const FlagAzerbaijan = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E00034" d="M0 13h36v10H0z"/><path fill="#0098C3" d="M32 5H4C1.791 5 0 6.791 0 9v4h36V9c0-2.209-1.791-4-4-4z"/><g fill="#FFF"><path d="M17.844 21.333c-1.841 0-3.333-1.492-3.333-3.333 0-1.841 1.492-3.333 3.333-3.333.982 0 1.865.425 2.475 1.101C19.601 14.701 18.382 14 17 14c-2.209 0-4 1.791-4 4s1.791 4 4 4c1.382 0 2.601-.701 3.32-1.768-.61.676-1.493 1.101-2.476 1.101z"/><path d="M23.667 17.998l-1.196-.424.544-1.146-1.146.545-.426-1.195-.424 1.196-.003-.002-1.144-.542.546 1.146-1.196.426 1.196.424-.544 1.146 1.141-.543.005-.002.426 1.195.424-1.196 1.147.544-.546-1.146z"/></g><path fill="#00AE65" d="M4 31h28c2.209 0 4-1.791 4-4v-4H0v4c0 2.209 1.791 4 4 4z"/></svg>
  )
}

export default FlagAzerbaijan
