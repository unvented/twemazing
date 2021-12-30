import React from 'react'

const BackhandIndexPointingUpLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F7DECE" d="M30 20.145s.094-2.362-1.791-3.068c-1.667-.625-2.309.622-2.309.622s.059-1.913-1.941-2.622c-1.885-.667-2.75.959-2.75.959s-.307-1.872-2.292-2.417C17.246 13.159 16 14.785 16 14.785V2.576C16 1.618 15.458.001 13.458 0S11 1.66 11 2.576v20.5c0 1-1 1-1 0V20.41c0-3.792-2.037-6.142-2.75-6.792-.713-.65-1.667-.98-2.82-.734-1.956.416-1.529 1.92-.974 3.197 1.336 3.078 2.253 7.464 2.533 9.538.79 5.858 5.808 10.375 11.883 10.381 6.626.004 12.123-5.298 12.128-11.924v-3.931z"/></svg>
  )
}

export default BackhandIndexPointingUpLightSkinTone
