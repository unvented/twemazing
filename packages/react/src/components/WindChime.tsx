import React from 'react'

const WindChime = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M17 36c-1.32 0-9.241-.826-10.707-2.293-.215-.216-.321-.518-.287-.82.035-.303.205-.573.464-.734 4.563-2.853 6.825-7.969 6.541-14.796-.007-.162-.011-.282-.011-.357 0-.552.448-1 1-1h9c.522 0 .957.402.997.923.841 10.931-2.468 15.783-3.93 17.361C19.043 35.391 17.954 36 17 36z"/><path fill="#3E721D" d="M18 18c-.552 0-1-.448-1-1v-3c0-.552.448-1 1-1s1 .448 1 1v3c0 .552-.448 1-1 1z"/><path fill="#77B255" d="M26 10c0 4.418-3.582 5-8 5s-8-.582-8-5 3.582-8 8-8 8 3.582 8 8z"/><path fill="#3E721D" d="M18 4c-.552 0-1-.448-1-1V1c0-.552.448-1 1-1s1 .448 1 1v2c0 .552-.448 1-1 1z"/><circle fill="#FFF" cx="18" cy="21" r="2"/><circle fill="#FFF" cx="17" cy="27" r="2"/><ellipse fill="#FFF" cx="14" cy="32.5" rx="2" ry="1.5"/></svg>
  )
}

export default WindChime
