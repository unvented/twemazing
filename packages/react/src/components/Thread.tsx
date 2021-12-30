import React from 'react'

const Thread = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#553788" d="M35 36c-.419 0-.809-.265-.948-.684C33.388 33.326 31.595 32 25 32c-.553 0-1-.447-1-1s.447-1 1-1c5.635 0 9.653.797 10.948 4.684.175.524-.108 1.091-.632 1.265-.105.034-.212.051-.316.051z"/><path fill="#553788" d="M3 3h22v30H3z"/><path fill="#C1694F" d="M26 4H2c-.55 0-2-3-2-3 0-.55.45-1 1-1h26c.55 0 1 .45 1 1 0 0-1.45 3-2 3zm0 28H2c-.55 0-2 3-2 3 0 .55.45 1 1 1h26c.55 0 1-.45 1-1 0 0-1.45-3-2-3z"/><path fill="#744EAA" d="M23 7H5c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zm0 4H5c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zm0 4H5c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zm0 4H5c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zm0 4H5c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zm0 4H5c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1zm0 4H5c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1 .45 1 1s-.45 1-1 1z"/><path fill="#9266CC" d="M17.261 7H7.739C7.332 7 7 6.668 7 6.261v-.522C7 5.332 7.332 5 7.739 5h9.523c.406 0 .738.332.738.739v.523c0 .406-.332.738-.739.738zm0 4H7.739C7.332 11 7 10.668 7 10.261v-.522C7 9.332 7.332 9 7.739 9h9.523c.406 0 .738.332.738.739v.523c0 .406-.332.738-.739.738zm0 4H7.739C7.332 15 7 14.668 7 14.261v-.523c0-.406.332-.738.739-.738h9.523c.406 0 .738.332.738.739v.523c0 .406-.332.738-.739.738zm0 4H7.739C7.332 19 7 18.668 7 18.261v-.523c0-.406.332-.738.739-.738h9.523c.406 0 .738.332.738.739v.523c0 .406-.332.738-.739.738zm0 4H7.739C7.332 23 7 22.668 7 22.261v-.523c0-.406.332-.738.739-.738h9.523c.406 0 .738.332.738.739v.523c0 .406-.332.738-.739.738zm0 4H7.739C7.332 27 7 26.668 7 26.261v-.523c0-.406.332-.738.739-.738h9.523c.406 0 .738.332.738.739v.523c0 .406-.332.738-.739.738zm0 4H7.739C7.332 31 7 30.668 7 30.261v-.523c0-.406.332-.738.739-.738h9.523c.406 0 .738.332.738.739v.523c0 .406-.332.738-.739.738z"/></svg>
  )
}

export default Thread
