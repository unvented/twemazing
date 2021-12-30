import React from 'react'

const FlagSweden = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#006AA7" d="M15.5 31H32c2.209 0 4-1.791 4-4.5v-6H15.5V31zM32 5H15.5v10.5H36V9c0-2.209-1.791-4-4-4zM10.5 5H4C1.792 5 .002 6.789 0 8.997V15.5h10.5V5zM0 20.5v6.004C.002 29.211 1.792 31 4 31h6.5V20.5H0z"/><path fill="#FECC00" d="M15.5 5h-5v10.5H0v5h10.5V31h5V20.5H36v-5H15.5z"/></svg>
  )
}

export default FlagSweden
