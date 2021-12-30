import React from 'react'

const SlightlySmilingFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#FFCC4D" cx="18" cy="18" r="18"/><path fill="#664500" d="M10.515 23.621C10.56 23.8 11.683 28 18 28c6.318 0 7.44-4.2 7.485-4.379.055-.217-.043-.442-.237-.554-.195-.111-.439-.078-.6.077C24.629 23.163 22.694 25 18 25s-6.63-1.837-6.648-1.855C11.256 23.05 11.128 23 11 23c-.084 0-.169.021-.246.064-.196.112-.294.339-.239.557z"/><ellipse fill="#664500" cx="12" cy="13.5" rx="2.5" ry="3.5"/><ellipse fill="#664500" cx="24" cy="13.5" rx="2.5" ry="3.5"/></svg>
  )
}

export default SlightlySmilingFace
