import React from 'react'

const FlagUruguay = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#0038A8" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-1H0v1zm0-8h36v4H0z"/><path fill="#EEE" d="M0 23h36v3H0z"/><path fill="#0038A8" d="M36 9c0-2.209-1.791-4-4-4H16v4h20zm-20 3h20v4H16z"/><path fill="#EEE" d="M16 9V5H4C1.791 5 0 6.791 0 9v10h36v-3H16v-4h20V9H16z"/><path fill="#FFD983" d="M13 12c0-2.762-2.238-5-5-5s-5 2.239-5 5 2.239 5 5 5c2.762 0 5-2.239 5-5z"/><path fill="#FFCC4D" d="M12 12c0-2.209-1.79-4-4-4-2.209 0-4 1.791-4 4 0 2.208 1.791 4 4 4 2.21 0 4-1.792 4-4z"/><path fill="#FFAC33" d="M8 5.597l.633 4.041 2.569-3.183-1.473 3.816 3.816-1.473-3.183 2.569 4.041.633-4.041.633 3.183 2.569-3.816-1.473 1.473 3.816-2.569-3.183L8 18.403l-.633-4.041-2.569 3.183 1.473-3.816-3.816 1.473 3.183-2.569L1.597 12l4.041-.633-3.183-2.569 3.816 1.473-1.473-3.816 2.569 3.183z"/><path fill="#C1694F" d="M11 12c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.656 1.343 3 3 3s3-1.344 3-3z"/><path fill="#FFAC33" d="M5.834 12.004c0-1.19.964-2.154 2.153-2.154s2.153.964 2.153 2.154c0 1.189-.964 2.152-2.153 2.152s-2.153-.964-2.153-2.152z"/></svg>
  )
}

export default FlagUruguay
