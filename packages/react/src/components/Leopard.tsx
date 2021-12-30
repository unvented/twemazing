import React from 'react'

const Leopard = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M32.855 16.484c-.259-.171-.543-.328-.855-.484-2-1-5 0-9 0-2 0-4.901-3-10-3-.801 0-2.256.635-4.341.89C8.62 12.837 8.044 12 7.333 12 6.597 12 6 12.895 6 14c0 .051.007.1.01.15C3.19 14.916 0 18.589 0 20.375 0 22.375 2 24 2 24s1 0 3-2c1.581-1.581 5-1 5-1l1 12s-1 1-2 1-1 2-1 2h6l1-9h3c2 0 7-1 7-1 2 3 4 4 4 4v3l-2 1c-2 1-1 2-1 2h6s1-8 2-13v5c0 .553.447 1 1 1s1-.447 1-1v-7c0-2.666-1.357-3.928-3.145-4.516z"/><circle fill="#292F33" cx="4" cy="17" r="1"/><path fill="#292F33" d="M0 20s0 2 1 2c0-2 1-2 1-2s-1-1-2 0z"/><g fill="#F4900C"><circle cx="10.5" cy="16.5" r="2"/><circle cx="17.5" cy="16.5" r="2"/><circle cx="14.5" cy="21.5" r="2"/><circle cx="21.5" cy="23.5" r="2"/><circle cx="24.5" cy="18.5" r="2"/><circle cx="28.5" cy="23.5" r="2"/><circle cx="31.5" cy="18.5" r="2"/></g><g fill="#FFAC33"><circle cx="10.5" cy="16.5" r="1"/><circle cx="17.5" cy="16.5" r="1"/><circle cx="14.5" cy="21.5" r="1"/><circle cx="21.5" cy="23.5" r="1"/><circle cx="24.5" cy="18.5" r="1"/><circle cx="28.5" cy="23.5" r="1"/><circle cx="31.5" cy="18.5" r="1"/></g></svg>
  )
}

export default Leopard
