import React from 'react'

const AutoRickshaw = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M19 9h2v11h-2z"/><path fill="#55ACEE" d="M10 9c-2 2-4 5-4 7 0 4 5 1 5 1V9h-1z"/><circle fill="#292F33" cx="5" cy="32" r="4"/><circle fill="#99AAB5" cx="5" cy="32" r="2"/><path fill="#1E5200" d="M29 23h-2c-1.105 0-2 .895-2 2v5c0 1.105.895 2 2 2h2c1.105 0 2-.895 2-2v-5c0-1.105-.895-2-2-2zm-10 0h-2c-1.105 0-2 .895-2 2v5c0 1.105.895 2 2 2h2c1.105 0 2-.895 2-2v-5c0-1.105-.895-2-2-2z"/><path fill="#5C913B" d="M2 28.377c-1.387.225-2.581-1.152-1-2.435 2-1.623 7-2.435 9-1.623S12 33 11 33s-4-5.435-9-4.623z"/><path fill="#3E721D" d="M11 33h13c1 0 2 0 2-2 0-1 1-4 3-4s5 3 5 4 0 2 1 2 1-1 1-2V19h-8c0 3-1 8-1 8s-1-1-1 1c0 .606-1 2-2 2h-1c-1 0-2-.666-2-1.672V19c0-1-2-1-2 0v9.328C19 29.334 18.262 30 17.341 30h-3.33C13 30 12 29 12 28v-9H5c0 6 5 14 6 14z"/><path fill="#5C913B" d="M34 32c0 1 1 0 1-2 0-3-.833-5-5-5s-5 3-5 5c0 1 1 3 1 2s.667-2 4-2 4 1 4 2z"/><path fill="#FFAC33" d="M12 19H5c0-1 1-3 1-3h4c.552 0 1-.448 1-1v-4s-2 0-2-2c0-.326.106-.652.25-.944C9.573 7.4 10.258 7 10.99 7H33c2 0 3 5 3 12h-8s0-8-3-8H12v8z"/><circle fill="#292F33" cx="30" cy="32" r="4"/><circle fill="#99AAB5" cx="30" cy="32" r="2"/><path fill="#F4900C" d="M9 18.5v-1c0-.276-.224-.5-.5-.5H5.552C5.286 17.648 5 18.464 5 19h3.5c.276 0 .5-.224.5-.5z"/></svg>
  )
}

export default AutoRickshaw
