import React from 'react'

const Balloon = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FCAB40" d="M27.999 36c-.448 0-.855-.303-.969-.758-.036-.136-.926-3.436-4.273-4.272C18.054 29.794 18 23.277 18 23c0-.552.447-.998.998-.999.554.034 1 .445 1.002.997 0 .053.054 5.234 3.242 6.032 4.53 1.132 5.682 5.54 5.727 5.728.135.535-.191 1.078-.727 1.212-.081.02-.163.03-.243.03z"/><path fill="#BB1A34" d="M18 25c-1.1 0-1.598-.805-1.105-1.789l1.211-2.422c.492-.984 1.297-.984 1.789 0l1.211 2.422C21.598 24.195 21.1 25 20 25h-2z"/><path fill="#BB1A34" d="M28 9c0 6-7 12-9 12s-9-6-9-12c0-5.799 4.582-9 9-9s9 3.201 9 9z"/><path fill="#FCAB40" d="M20 22h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"/></svg>
  )
}

export default Balloon
