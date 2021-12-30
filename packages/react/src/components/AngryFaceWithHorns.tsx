import React from 'react'

const AngryFaceWithHorns = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#AA8DD8" cx="18" cy="18" r="18"/><path fill="#AA8DD8" d="M10 4C7.42 4 4.369 1.534 3.414.586 2.843.014 1.981-.157 1.235.153.487.462 0 1.191 0 2c0 3.459 1.672 10 8 10 .757 0 1.45-.428 1.789-1.106l2-4c.31-.62.277-1.356-.088-1.946C11.337 4.359 10.693 4 10 4zM34.766.153c-.75-.311-1.607-.139-2.18.434C31.7 1.472 28.589 4 26 4c-.693 0-1.337.359-1.701.949-.364.589-.397 1.326-.088 1.946l2 4C26.55 11.572 27.242 12 28 12c6.328 0 8-6.541 8-10 0-.809-.487-1.538-1.234-1.847z"/><path fill="#553986" d="M15.894 14.211l-6-3c-.988-.494-2.189-.093-2.684.895-.494.988-.093 2.189.895 2.684l4.212 2.106c-.306.533-.317 1.105-.317 1.105v2s0 2 2 2 2-2 2-2v-2s-.003-.109-.025-.263c.338-.189.628-.471.814-.843.494-.988.093-2.189-.895-2.684zm12.895-2.105c-.493-.986-1.694-1.391-2.684-.895l-6 3c-.988.494-1.389 1.695-.895 2.684.186.372.476.654.814.843-.021.154-.024.263-.024.263v2s0 2 2 2 2-2 2-2v-2s-.011-.572-.318-1.105l4.212-2.106c.989-.495 1.389-1.696.895-2.684zm-4.507 17.489c-.039-.165-.985-3.848-6.282-3.848-5.291 0-6.245 3.69-6.282 3.848-.063.26.047.525.274.661.227.135.515.098.703-.092.015-.016 1.583-1.522 5.306-1.522s5.291 1.507 5.305 1.521c.108.112.259.176.412.176.1 0 .199-.026.289-.079.224-.134.338-.407.275-.665z"/></svg>
  )
}

export default AngryFaceWithHorns
