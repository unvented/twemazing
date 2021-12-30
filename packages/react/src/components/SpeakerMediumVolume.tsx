import React from 'react'

const SpeakerMediumVolume = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#8899A6" d="M7 10s-2 0-2 2v12c0 2 2 2 2 2h6l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8H7z"/><path fill="#CCD6DD" d="M13 26l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8v16z"/><path fill="#8899A6" d="M28.709 25.959c-.289 0-.576-.124-.774-.365-.351-.427-.289-1.057.138-1.407C29.934 22.658 31 20.403 31 18c0-2.435-1.089-4.708-2.988-6.236-.431-.346-.498-.976-.152-1.406.348-.429.976-.499 1.406-.152C31.639 12.116 33 14.957 33 18c0 3.004-1.333 5.822-3.657 7.731-.186.154-.411.228-.634.228z"/></svg>
  )
}

export default SpeakerMediumVolume
