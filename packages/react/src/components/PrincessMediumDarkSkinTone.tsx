import React from 'react'

const PrincessMediumDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#60352A" d="M18 4c6 0 16 3 16 16s0 16-3 16-7-3-13-3-9.915 3-13 3c-3.343 0-3-12-3-16C2 7 12 4 18 4z"/><path fill="#AF7E57" d="M6 19.562c0-8.526 5.373-15.438 12-15.438s12 6.912 12 15.438S24.627 35 18 35 6 28.088 6 19.562z"/><path fill="#DF1F32" d="M18 31c-2.347 0-3.575-1.16-3.707-1.293-.391-.391-.391-1.023 0-1.414.387-.388 1.013-.39 1.404-.01.051.047.806.717 2.303.717 1.519 0 2.273-.69 2.305-.719.399-.374 1.027-.363 1.408.029.379.393.38 1.011-.006 1.397C21.575 29.84 20.347 31 18 31z"/><path fill="#915A34" d="M19 26h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"/><path fill="#60352A" d="M3.064 25c-.03-.325-.064-.647-.064-1 0-5 3 .562 3-3 0-3.563 2-4 4-6l3-3s5 3 9 3 8 2 8 6 3-2 3 3c0 .355-.033.673-.058 1h1.049C34 23.523 34 21.868 34 20 34 7 24 2 18 2S2 7 2 20c0 1.158-.028 2.986.012 5h1.052z"/><path fill="#A7A9AC" d="M8 6h20V5l-3-1-2-3-3 1-2-2-2 2-3-1-2 3-3 1z"/><ellipse fill="#F1F2F2" cx="18" cy="3.5" rx="1" ry="1.5"/><circle fill="#F1F2F2" cx="14" cy="4" r="1"/><circle fill="#F1F2F2" cx="22" cy="4" r="1"/><path fill="#60352A" d="M13 23c-.552 0-1-.447-1-1v-2c0-.553.448-1 1-1s1 .447 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.553.447-1 1-1s1 .447 1 1v2c0 .553-.447 1-1 1z"/></svg>
  )
}

export default PrincessMediumDarkSkinTone
