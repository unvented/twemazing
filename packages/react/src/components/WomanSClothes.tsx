import React from 'react'

const WomanSClothes = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#553788" d="M12 3h12s-1 3-6 3-6-3-6-3z"/><path fill="#AA8DD8" d="M30.559 16.823L35 11c-4-2-11-8-11-8s-2 4-6 4-6-4-6-4-7 6-11 8l4.439 5.824L10 15s.25 16-3 19c0 0 5 1 11 1s11-1 11-1c-3.25-3-3-19-3-19l4.559 1.823z"/><path fill="#9266CC" d="M6 17c-.293 0-.584-.128-.781-.375l-4-5c-.345-.431-.275-1.061.156-1.405.43-.345 1.061-.275 1.405.156l4 5c.345.431.275 1.061-.156 1.405C6.44 16.928 6.22 17 6 17zm23.999 0c-.219 0-.439-.072-.624-.219-.431-.345-.501-.974-.156-1.405l4-5c.347-.431.974-.501 1.406-.156.431.345.501.974.156 1.405l-4 5c-.198.247-.488.375-.782.375zM24 3s-3 3-6 3-6-3-6-3l2 7 3-2.25V34c0 .553.448 1 1 1s1-.447 1-1V7.75L22 10l2-7z"/></svg>
  )
}

export default WomanSClothes
