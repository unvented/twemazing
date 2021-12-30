import React from 'react'

const Videocassette = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M36 25s0 4-4 4H4s-4 0-4-4V10c0-4 4-4 4-4h28s4 0 4 4v15z"/><path fill="#CCD6DD" d="M32 12h-6s-1 0-1 1v8s0 1 1 1h6c1 0 2-2 2-5s-1-5-2-5z"/><path d="M29.894 12H26s-1 0-1 1v1c1.656 0 3 1.343 3 3s-1.344 3-3 3v1s0 1 1 1h3.895C31.193 20.73 32 18.96 32 17c0-1.959-.808-3.729-2.106-5z"/><path fill="#66757F" d="M28 17c0-1.657-1.344-3-3-3v6c1.656 0 3-1.343 3-3z"/><path fill="#CCD6DD" d="M4 12h6s1 0 1 1v8s0 1-1 1H4c-1 0-2-2-2-5s1-5 2-5z"/><path d="M11 20c-1.657 0-3-1.343-3-3s1.343-3 3-3v-1c0-1-1-1-1-1H6.106C4.808 13.271 4 15.04 4 17s.808 3.729 2.106 5H10c1 0 1-1 1-1v-1z"/><path fill="#66757F" d="M8 17c0 1.657 1.343 3 3 3v-6c-1.657 0-3 1.343-3 3z"/><path fill="#88C9F9" d="M13 14s0-1 1-1h8s1 0 1 1v6s0 1-1 1h-8s-1 0-1-1v-6z"/><path d="M34 26c0 .553-.447 1-1 1H3c-.552 0-1-.447-1-1 0-.553.448-1 1-1h30c.553 0 1 .447 1 1z"/></svg>
  )
}

export default Videocassette
