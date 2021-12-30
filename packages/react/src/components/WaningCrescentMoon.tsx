import React from 'react'

const WaningCrescentMoon = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#FFD983" cx="18" cy="18" r="18"/><path fill="#66757F" d="M36 18c0 9.941-8.059 18-18 18-.294 0-.58-.029-.87-.043C11.239 33.393 7 26.332 7 18 7 9.669 11.239 2.607 17.13.044 17.42.03 17.706 0 18 0c9.941 0 18 8.059 18 18z"/><circle fill="#5B6876" cx="25.5" cy="8.5" r="3.5"/><circle fill="#5B6876" cx="16" cy="16" r="3"/><circle fill="#5B6876" cx="14.5" cy="27.5" r="3.5"/><circle fill="#5B6876" cx="15" cy="6" r="2"/><circle fill="#5B6876" cx="33" cy="18" r="1"/><circle fill="#FFCC4D" cx="6" cy="9" r="1"/><circle fill="#5B6876" cx="21" cy="31" r="1"/><circle fill="#FFCC4D" cx="4" cy="19" r="2"/><circle fill="#5B6876" cx="26" cy="23" r="2"/></svg>
  )
}

export default WaningCrescentMoon
