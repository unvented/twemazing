import React from 'react'

const BackhandIndexPointingRightMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D5AB88" d="M15.856 31s2.394-.208 3.068-1.792c.697-1.639-.622-2.309-.622-2.309s1.914.059 2.622-1.941c.668-1.885-.958-2.75-.958-2.75s1.871-.307 2.417-2.292C22.842 18.245 21.216 17 21.216 17h12.208c.959 0 2.575-.542 2.576-2.543.002-2-1.659-2.457-2.576-2.457h-20.5c-1 0-1-1 0-1h2.666c3.792 0 6.143-2.038 6.792-2.751.65-.713.979-1.667.734-2.82-.415-1.956-1.92-1.529-3.197-.975-3.078 1.337-7.464 2.254-9.538 2.533C4.523 7.778.006 12.796 0 18.871-.004 25.497 5.298 30.995 11.924 31h3.932z"/></svg>
  )
}

export default BackhandIndexPointingRightMediumSkinTone
