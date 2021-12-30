import React from 'react'

const Bowling = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CCD6DD" d="M22 10c0-1 1-3 1-5s0-3-1-4-2-1-2-1-1 0-2 1-1 2-1 4 1 4 1 5c0 3-4 5-4 9.084C14 22.417 16 29 17 31h6c1-2 3-8.583 3-11.916C26 15 22 13 22 10z"/><path fill="#BE1931" d="M18 10h4c0-.475.227-1.18.464-2h-4.927c.236.82.463 1.525.463 2zm5.902 4c-.494-.681-.976-1.333-1.332-2h-5.139c-.357.667-.839 1.319-1.332 2h7.803z"/><path fill="#CCD6DD" d="M32 13c0-1 1-3 1-5s0-3-1-4-2-1-2-1-1 0-2 1-1 2-1 4 1 4 1 5c0 3-4 5-4 9.084C24 25.417 26 32 27 34h6c1-2 3-8.583 3-11.916C36 18 32 16 32 13z"/><path fill="#BE1931" d="M28 13h4c0-.475.227-1.18.464-2h-4.927c.236.82.463 1.525.463 2zm5.902 4c-.494-.681-.976-1.333-1.332-2h-5.139c-.357.667-.839 1.319-1.332 2h7.803z"/><circle fill="#31373D" cx="12.562" cy="23.438" r="12.562"/><circle cx="12.915" cy="18.79" r="2.316"/><circle cx="6.505" cy="20.938" r="2.316"/><circle cx="11.431" cy="28.053" r="2.316"/></svg>
  )
}

export default Bowling
