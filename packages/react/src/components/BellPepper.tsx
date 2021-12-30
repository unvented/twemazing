import React from 'react'

const BellPepper = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3E721D" d="M16 10c-1-3 0-8 4-9s6 1 6 2-1 3-2 2-3-1-4 1 0 4 0 4h-4z"/><path fill="#5C913B" d="M23.945 21.966c0 7.199-3.092 8.978-11 12.034-7.761 3-6.761-5-8-12.034-.522-2.964-1.02-3.781-1.562-5.987-.753-3.072-.58-7.048 4.562-7.048 8.837 0 16 5.836 16 13.035z"/><path fill="#5C913B" d="M12.055 21.966c0 7.199 3.092 8.978 11 12.034 7.761 3 6.761-5 8-12.034.522-2.964 1.02-3.781 1.562-5.987.754-3.071.581-7.048-4.562-7.048-8.837 0-16 5.836-16 13.035z"/><path fill="#77B255" d="M24.971 22.431C24.971 29.887 24.05 35 18 35s-6.971-5.113-6.971-12.569S6.049 8 18 8s6.971 6.975 6.971 14.431z"/></svg>
  )
}

export default BellPepper
