import React from 'react'

const HushedFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"/><ellipse fill="#664500" cx="18" cy="25.5" rx="3" ry="3.5"/><path fill="#664500" d="M31.001 11c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C23.006 5.444 23.45 5 24 5c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zM4.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C7.462 5.05 11.816 5 12 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4z"/><ellipse fill="#664500" cx="12" cy="14.5" rx="2.5" ry="3.5"/><ellipse fill="#664500" cx="24" cy="14.5" rx="2.5" ry="3.5"/></svg>
  )
}

export default HushedFace
