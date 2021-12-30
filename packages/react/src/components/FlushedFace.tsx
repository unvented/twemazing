import React from 'react'

const FlushedFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><circle fill="#FF7892" cx="29" cy="23" r="5"/><circle fill="#FF7892" cx="7" cy="23" r="5"/><circle fill="#F5F8FA" cx="24.5" cy="16.5" r="5.5"/><circle fill="#F5F8FA" cx="11.5" cy="16.5" r="5.5"/><circle fill="#292F33" cx="11.5" cy="16.5" r="2.5"/><circle fill="#292F33" cx="24.5" cy="16.5" r="2.5"/><path fill="#664500" d="M22 30h-8c-.552 0-1-.447-1-1s.448-1 1-1h8c.553 0 1 .447 1 1s-.447 1-1 1zm8.001-19c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C22.006 5.444 22.45 5 23 5c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zM5.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C8.462 5.05 12.816 5 13 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4z"/></svg>
  )
}

export default FlushedFace
