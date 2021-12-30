import React from 'react'

const BridgeAtNight = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#004A77" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FE5011" d="M32 23.958c1.575.963 2.957 1.676 4 2.171v-2.07C32.465 22.229 25.013 17.594 20 9c0 0 0-2-2-2s-2 2-2 2C10.987 17.594 3.535 22.229 0 24.059v2.07c1.043-.495 2.425-1.208 4-2.171V27H0v4h16v5h4v-5h16v-4h-4v-3.042zM30 27h-4v-7.435c1.362 1.186 2.716 2.214 4 3.095V27zM6 22.659c1.284-.88 2.637-1.908 4-3.094V27H6v-4.341zM12 27v-9.292c1.384-1.375 2.74-2.923 4-4.655V27h-4zm8-13.946c1.26 1.731 2.616 3.28 4 4.655V27h-4V13.054z"/><g fill="#FFF"><path d="M6.5 7C5.119 7 4 5.881 4 4.5c0-1.13.755-2.074 1.784-2.383C5.533 2.048 5.273 2 5 2 3.343 2 2 3.343 2 5s1.343 3 3 3c.959 0 1.803-.458 2.353-1.159C7.085 6.938 6.801 7 6.5 7z"/><circle cx="10.5" cy="2.5" r=".5"/><circle cx="26.5" cy="11.5" r=".5"/><circle cx="7.5" cy="11.5" r=".5"/><circle cx="22" cy="5" r="1"/><circle cx="4" cy="17" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="32" cy="17" r="1"/><circle cx="26.5" cy="5.5" r=".5"/><circle cx="31" cy="3" r="1"/><circle cx="31.5" cy="7.5" r=".5"/></g></svg>
  )
}

export default BridgeAtNight
