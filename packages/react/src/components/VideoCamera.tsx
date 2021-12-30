import React from 'react'

const VideoCamera = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M29 18H16c-3.668 0-5-2.99-5-5v-2H7c-3 0-3 3-3 3s-2-1-3-1-1 1-1 1v10s0 1 1 1 3-1 3-1v7c0 4 4 4 4 4h18c4 0 4-4 4-4V17.894c-.347.069-.685.106-1 .106z"/><path fill="#66757F" d="M35 6c-.559 0-2.05.934-3.26 1.76C31.413 6.934 30.674 6 29 6H18s-5 0-5 5v2s0 3 3 3h13s2.075-.006 2.771-1.739C32.976 15.082 34.446 16 35 16c1 0 1-1 1-1V7s0-1-1-1zM9 35v-9s0-3 2.75-3H22s3 0 3 3v9h-2v-9s0-1-1-1H12s-1 0-1 1v9H9z"/></svg>
  )
}

export default VideoCamera
