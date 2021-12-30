import React from 'react'

const Minibus = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CCD6DD" d="M35 10c0-1-1-4-4-4H9.401C6 6 0 18 0 21v6c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4V17c0-1.027-1-7-1-7z"/><path fill="#66757F" d="M0 23h36v3H0z"/><path fill="#E1E8ED" d="M9 25c-3.267 0-5.918 2.612-5.993 5.861.32.081.648.139.993.139h11c0-3.313-2.686-6-6-6zm23.993 5.86C32.918 27.612 30.268 25 27 25c-3.312 0-6 2.687-6 6h11c.345 0 .674-.058.993-.14z"/><path fill="#99AAB5" d="M5.686 26h6.629c-.95-.631-2.088-1-3.314-1-1.227 0-2.366.368-3.315 1zm18.001 0h6.629c-.949-.632-2.089-1-3.315-1s-2.364.369-3.314 1z"/><circle fill="#292F33" cx="9" cy="31" r="4"/><circle fill="#99AAB5" cx="9" cy="31" r="2"/><circle fill="#292F33" cx="27" cy="31" r="4"/><circle fill="#99AAB5" cx="27" cy="31" r="2"/><path fill="#55ACEE" d="M5 13h6v7H2zm8 0h8v7h-8zm10 0v7h13v-3c0-.526-.262-2.347-.518-4H23z"/><path fill="#99AAB5" d="M33 11H7c-.552 0-1-.448-1-1s.448-1 1-1h26c.553 0 1 .448 1 1s-.447 1-1 1z"/></svg>
  )
}

export default Minibus
