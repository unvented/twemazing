import React from 'react'

const WavyDash = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M27 23c-2.589 0-4.005-2.549-5.374-5.014C20.537 16.026 19.411 14 18 14c-1.412 0-2.537 2.026-3.626 3.986C13.004 20.451 11.588 23 9 23c-2.65 0-3.853-2.706-4.914-5.094C3.038 15.546 2.256 14 1 14c-.552 0-1-.448-1-1s.448-1 1-1c2.65 0 3.853 2.706 4.914 5.094C6.962 19.453 7.744 21 9 21c1.412 0 2.537-2.026 3.626-3.986C13.996 14.549 15.412 12 18 12c2.589 0 4.005 2.549 5.374 5.014C24.463 18.974 25.589 21 27 21c1.256 0 2.037-1.547 3.086-3.906C31.147 14.706 32.351 12 35 12c.553 0 1 .448 1 1s-.447 1-1 1c-1.256 0-2.037 1.546-3.086 3.906C30.853 20.294 29.649 23 27 23z"/></svg>
  )
}

export default WavyDash
