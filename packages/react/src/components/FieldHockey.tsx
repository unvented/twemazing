import React from 'react'

const FieldHockey = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#C1694F" d="M4 21c2.409 0 2 2 2 3s0 3 2 3 3.464-2.465 7-6L36 0v7S22.5 21.5 18 26s-7 7-10 7c-3.513 0-7-2.605-7-7 0-4 2-5 3-5z"/><circle fill="#DD2E44" cx="26.5" cy="29.5" r="6.5"/><path fill="#FFAC33" d="M25.01 18.712C30.254 13.171 36 7 36 7V0L25.01 10.99v7.722zM22 21.878l1-1.049V13l-1 1v7.878z"/></svg>
  )
}

export default FieldHockey
