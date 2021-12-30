import React from 'react'

const Egg = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F7DECE" d="M23.142 3.403C21.492 1.899 19.712 1 18 1 12.375 1 6 10.611 6 20c0 .975.079 1.899.202 2.791C7.261 30.484 12.623 35 18 35c6 0 12-5.611 12-15 0-6.531-3.086-13.161-6.858-16.597z"/><path fill="#E0AA94" d="M23.142 3.403c2.908 3.519 5.108 9.018 5.108 14.453 0 9.009-5.672 14.393-11.344 14.393-4.541 0-9.075-3.459-10.705-9.459C7.261 30.484 12.623 35 18 35c6 0 12-5.611 12-15 0-6.531-3.086-13.161-6.858-16.597z"/></svg>
  )
}

export default Egg
