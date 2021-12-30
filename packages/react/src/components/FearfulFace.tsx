import React from 'react'

const FearfulFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><path fill="#BDDDF4" d="M18 11c8.749 0 16.033 4.509 17.656 10.484.222-1.128.344-2.292.344-3.484 0-9.94-8.059-18-18-18C8.06 0 0 8.06 0 18c0 1.192.123 2.356.344 3.484C1.967 15.509 9.252 11 18 11z"/><ellipse fill="#664500" cx="11.5" cy="16.5" rx="2.5" ry="3.5"/><ellipse fill="#664500" cx="24.5" cy="16.5" rx="2.5" ry="3.5"/><path fill="#664500" d="M5.999 12c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C8.462 6.05 12.816 6 13 6c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4zm24.002 0c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C22.006 6.444 22.45 6 23 6c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zm-6.516 15.879C23.474 27.835 22.34 23.5 18 23.5s-5.474 4.335-5.485 4.379c-.053.213.043.431.231.544.187.112.433.086.596-.06.011-.008 1.015-.863 4.658-.863 3.589 0 4.617.83 4.656.863.095.09.219.137.344.137.084 0 .169-.021.246-.064.196-.112.294-.339.239-.557z"/></svg>
  )
}

export default FearfulFace
