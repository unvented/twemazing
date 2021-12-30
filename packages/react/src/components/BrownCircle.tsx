import React from 'react'

const BrownCircle = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#C1694F" cx="18" cy="18" r="18"/></svg>
  )
}

export default BrownCircle
