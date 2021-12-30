import React from 'react'

const FlagCuraAo = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#002B7F" d="M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-2H0v2z"/><path fill="#F9E814" d="M0 21h36v4H0z"/><path fill="#002B7F" d="M32 5H4C1.791 5 0 6.791 0 9v12h36V9c0-2.209-1.791-4-4-4zM4 9.764l-1.176.854.449-1.382-1.175-.854h1.453L4 7l.449 1.382h1.453l-1.175.854.449 1.382L4 9.764zm5.567 5.393L8 14.019l-1.567 1.139.599-1.843-1.567-1.139h1.937L8 10.333l.599 1.843h1.937l-1.567 1.139.598 1.842z"/><path fill="#FFF" d="M8.599 12.176L8 10.333l-.599 1.843H5.464l1.567 1.139-.598 1.842L8 14.019l1.567 1.138-.598-1.842 1.567-1.139zM5.902 8.382H4.449L4 7l-.449 1.382H2.098l1.175.854-.449 1.382L4 9.764l1.176.854-.449-1.382z"/></svg>
  )
}

export default FlagCuraAo
