import React from 'react'

const StopSign = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M12 3l-9 8.985V24l9 9h12l9-9V11.985L24 3z"/><path fill="#CCD6DD" d="M24.827 1H11.173L1 11.156v13.672L11.172 35h13.657L35 24.828V11.156L24.827 1zM33 24l-9 9H12l-9-9V11.985L12 3h12l9 8.985V24z"/></svg>
  )
}

export default StopSign
