import React from 'react'

const HighHeeledShoe = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M35.447 32.12S34.349 34 32.573 34h-13.23c-3.635 0-4.391-4.179-7.604-10.605-3.213-6.427-6.906-3.048-6.906-3.048L3.618 35H2.334s-.614-12.551-1.25-14.596c-1.445-4.65-.625-8.181-.625-8.181l8.018.543 10.1 15.524 16.87 3.83z"/><path fill="#DD2E44" d="M30.449 26.497c-1.137-.31-1.874-.625-1.874-.625-.512.534-1.231.625-1.874.625-3.825 0-5.808-1.556-8.122-6.873C13.58 8.144 5.354 3.38 2.959 3.38.408 3.38-1.004 15.251.46 15.251c4.607 0 8.415.928 11.119 3.749 4.043 4.217 5.513 13.12 8.117 13.12h15.752s.624-4.061-4.999-5.623z"/></svg>
  )
}

export default HighHeeledShoe
