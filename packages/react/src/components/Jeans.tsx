import React from 'react'

const Jeans = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M20.182 0H10v4.568L3.818 33.682 11.545 36l6.41-23.182z"/><path fill="#3B88C3" d="M15.818 0H26v4.568l6.182 29.114L24.454 36l-6.409-23.182z"/><path fill="#269" d="M10 2h16v2H10zm9 10h-2l-4-2h10z"/><path fill="#269" d="M12 0h2v3h-2zm10 0h2v3h-2zm-6 4h2v7h-2z"/></svg>
  )
}

export default Jeans
