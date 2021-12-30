import React from 'react'

const FrowningFaceWithOpenMouth = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><ellipse fill="#664500" cx="11.5" cy="16.5" rx="2.5" ry="3.5"/><ellipse fill="#664500" cx="24.5" cy="16.5" rx="2.5" ry="3.5"/><path fill="#664500" d="M23.485 27.879C23.474 27.835 22.34 23.5 18 23.5s-5.474 4.335-5.485 4.379c-.053.213.044.431.232.544.188.112.433.086.596-.06.009-.008 1.013-.863 4.657-.863 3.59 0 4.617.83 4.656.863.095.09.219.137.344.137.084 0 .169-.021.246-.064.196-.112.294-.339.239-.557z"/></svg>
  )
}

export default FrowningFaceWithOpenMouth
