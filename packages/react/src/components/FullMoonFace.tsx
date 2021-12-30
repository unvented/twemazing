import React from 'react'

const FullMoonFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFD983" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"/><g fill="#FFCC4D"><circle cx="9.5" cy="7.5" r="3.5"/><circle cx="24.5" cy="28.5" r="3.5"/><circle cx="22" cy="5" r="2"/><circle cx="3" cy="18" r="1"/><circle cx="30" cy="9" r="1"/><circle cx="16" cy="31" r="1"/><circle cx="32" cy="19" r="2"/><circle cx="6" cy="26" r="2"/></g><path d="M18 24.904c-7 0-9-2.618-9-1.381C9 24.762 13 28 18 28s9-3.238 9-4.477c0-1.237-2 1.381-9 1.381M27 15c0 1.657-1.344 3-3 3s-3-1.343-3-3 1.344-3 3-3 3 1.343 3 3m-12 0c0 1.657-1.344 3-3 3s-3-1.343-3-3 1.344-3 3-3 3 1.343 3 3" fill="#292F33"/></svg>
  )
}

export default FullMoonFace
