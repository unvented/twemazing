import React from 'react'

const CoupleWithHeartWomanManMediumLightSkinToneMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFE51E" d="M13.982 20H14v-9C14 4.925 9.075 0 3 0 1.956 0 .955.165 0 .44v31.037c.652.11 1.317.179 2 .179 6.511 0 11.799-5.189 11.982-11.656z"/><path fill="#9268CA" d="M11.431 27C11.287 26.984 0 27 0 27v9h15v-5c0-2.061-1.566-3.782-3.569-4z"/><path fill="#7450A8" d="M10 32h1v4h-1z"/><path fill="#F3D2A2" d="M0 8.018v22.204C.532 30.7 1.228 31 2 31c1.657 0 3-1.343 3-3v-2.523c3.494-1.237 6-4.56 6-8.477v-5.019c-5.92-.2-9.207-2.168-11-3.963z"/><path fill="#DF1F32" d="M0 22v1.637c.538.212 1.191.363 2 .363 1.413 0 2.369-.445 3-.915C5.707 22.558 6 22 6 22H0z"/><path fill="#C1694F" d="M3 19.5H1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#662113" d="M6 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z"/><path fill="#963B22" d="M33 0c-6.075 0-11 4.925-11 11s4.925 11 11 11c1.041 0 2.045-.154 3-.425V.425C35.045.154 34.041 0 33 0z"/><path fill="#4289C1" d="M25 27c-2.209 0-4 1.791-4 4v5h15v-9H25z"/><path fill="#2A6797" d="M25 32h1v4h-1z"/><path fill="#D4AB88" d="M36 11.28c-4.23-1.125-6.313-3.328-7.266-4.804-.42 1.804-1.438 4.699-3.734 5.369V17c0 .589.061 1.162.168 1.719.61 3.15 2.863 5.706 5.832 6.757V27l3 5 2-3.396V11.28z"/><path fill="#C1694F" d="M30 22s.293.558 1 1.085c.63.469 1.587.915 3 .915.809 0 1.462-.151 2-.363V22h-6zm5-2.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#662113" d="M30 16c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z"/><path fill="#DD2E44" d="M26.539 4.711c0-2.602-2.11-4.711-4.711-4.711C20.249 0 18.855.78 18 1.972 17.144.78 15.75 0 14.172 0c-2.601 0-4.711 2.109-4.711 4.711 0 .369.047.727.127 1.07.654 4.065 5.173 8.353 8.411 9.529 3.238-1.177 7.758-5.465 8.412-9.528.081-.344.128-.702.128-1.071z"/></svg>
  )
}

export default CoupleWithHeartWomanManMediumLightSkinToneMediumSkinTone
