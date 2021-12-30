import React from 'react'

const Footprints = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path d="M25.776 4.708c1.333 0 6.833 1.333 6.833 7.75s-6.261 15.73-8.625 15.959c-2.583.25-4.208-1.375-4.208-4s4.083-4.334 2.208-8.292-2.333-11.417 3.792-11.417zm7.081 2.232c-.432.733-.323 1.598.242 1.93.565.333 1.374.007 1.805-.727.432-.734.323-1.599-.242-1.931-.565-.332-1.374-.006-1.805.728zm-2.902-2.862c-.117.843.342 1.604 1.025 1.699.684.095 1.334-.511 1.451-1.355.117-.843-.342-1.604-1.025-1.699-.683-.095-1.334.511-1.451 1.355zm-3.221-1.37c0 .921.598 1.667 1.334 1.667.736 0 1.333-.746 1.333-1.667 0-.92-.597-1.667-1.333-1.667s-1.334.747-1.334 1.667zm-3.791-.687c0 1.024.635 1.854 1.416 1.854.783 0 1.417-.83 1.417-1.854S25.142.167 24.359.167c-.781 0-1.416.83-1.416 1.854zm-5.307 2.156c.378 1.459 1.604 2.405 2.741 2.111 1.137-.294 1.751-1.715 1.373-3.174-.377-1.459-1.604-2.404-2.74-2.11-1.137.293-1.751 1.715-1.374 3.173zm-7.719 7.531c-1.333 0-6.833 1.333-6.833 7.75s6.261 15.73 8.625 15.959c2.583.25 4.208-1.375 4.208-4s-4.083-4.334-2.208-8.292 2.333-11.417-3.792-11.417zM2.836 13.94c.432.733.323 1.598-.242 1.93-.566.333-1.375.007-1.805-.727-.432-.734-.323-1.599.242-1.931.566-.332 1.374-.006 1.805.728zm2.902-2.862c.117.843-.342 1.604-1.025 1.699-.684.095-1.334-.511-1.451-1.354-.117-.843.342-1.604 1.025-1.699.684-.096 1.334.51 1.451 1.354zm3.22-1.37c0 .921-.597 1.667-1.333 1.667s-1.333-.746-1.333-1.667c0-.92.597-1.667 1.333-1.667.737.001 1.333.747 1.333 1.667zm3.792-.687c0 1.024-.634 1.854-1.417 1.854s-1.417-.83-1.417-1.854.634-1.854 1.417-1.854 1.417.83 1.417 1.854zm5.308 2.156c-.377 1.459-1.604 2.405-2.741 2.111-1.137-.294-1.752-1.715-1.374-3.174.377-1.459 1.604-2.404 2.74-2.11 1.137.293 1.752 1.715 1.375 3.173z" fill="#662113"/></svg>
  )
}

export default Footprints
