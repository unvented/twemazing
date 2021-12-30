import React from 'react'

const DesktopComputer = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CCD6DD" d="M36 22c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z"/><path fill="#5DADEC" d="M4 4h28v18H4z"/><path fill="#CCD6DD" d="M13 26h10v6H13z"/><path fill="#9AAAB4" d="M13 26h10v2H13z"/><path fill="#E1E8ED" d="M36 33c0-1.657-1.343-3-3-3H3c-1.657 0-3 1.343-3 3s1.343 3 3 3h30c1.657 0 3-1.343 3-3z"/><path fill="#F5F8FA" d="M3 32h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2z"/></svg>
  )
}

export default DesktopComputer
