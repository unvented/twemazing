import React from 'react'

const HourglassDone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFE8B6" d="M21 18c0-2.001 3.246-3.369 5-6 2-3 2-10 2-10H8s0 7 2 10c1.754 2.631 5 3.999 5 6s-3.246 3.369-5 6c-2 3-2 10-2 10h20s0-7-2-10c-1.754-2.631-5-3.999-5-6z"/><path fill="#FFAC33" d="M20.999 24c-.999 0-2.057-1-2.057-2C19 20.287 19 19.154 19 18c0-3.22 3.034-4.561 4.9-7H12.1c1.865 2.439 4.9 3.78 4.9 7 0 1.155 0 2.289.058 4 0 1-1.058 2-2.058 2-2 0-3.595 1.784-4 3-1 3-1 7-1 7h16s0-4-1-7c-.405-1.216-2.001-3-4.001-3z"/><path fill="#3B88C3" d="M30 34c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2s.896-2 2-2h20c1.104 0 2 .896 2 2zm0-32c0 1.104-.896 2-2 2H8c-1.104 0-2-.896-2-2s.896-2 2-2h20c1.104 0 2 .896 2 2z"/></svg>
  )
}

export default HourglassDone
