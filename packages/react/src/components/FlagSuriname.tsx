import React from 'react'

const FlagSuriname = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#377E3F" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-1H0v1z"/><path fill="#EEE" d="M0 23h36v3H0z"/><path fill="#377E3F" d="M32 5H4C1.791 5 0 6.791 0 9v1h36V9c0-2.209-1.791-4-4-4z"/><path fill="#EEE" d="M0 10h36v3H0z"/><path fill="#B40A2D" d="M0 23h36V13H0v10zm16.833-6.11L18 13.297l1.167 3.593h3.778l-3.057 2.221 1.167 3.593L18 20.483l-3.056 2.221 1.167-3.593-3.057-2.221h3.779z"/><path fill="#ECC81D" d="M14.944 22.703L18 20.483l3.056 2.22-1.167-3.593 3.056-2.22h-3.778L18 13.297l-1.167 3.593h-3.778l3.056 2.22z"/></svg>
  )
}

export default FlagSuriname
