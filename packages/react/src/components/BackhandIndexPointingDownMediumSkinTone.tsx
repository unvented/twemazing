import React from 'react'

const BackhandIndexPointingDownMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#D5AB88" d="M4.005 15.861s-.099 2.362 1.784 3.073c1.666.629 2.31-.617 2.31-.617s-.063 1.914 1.936 2.626c1.883.673 2.752-.951 2.752-.951s.302 1.872 2.286 2.423c1.67.463 2.919-1.16 2.919-1.16l-.029 12.208c-.002.959.537 2.576 2.537 2.582 2 .007 2.461-1.653 2.463-2.57l.04-16.5.009-4c.003-1 1.003-.997 1 .003l-.006 2.666c-.009 3.792 2.023 6.148 2.734 6.798.712.652 1.665.983 2.818.741 1.957-.41 1.534-1.916.982-3.194-1.329-3.082-2.235-7.47-2.51-9.545C27.254 4.584 22.247.055 16.172.035 9.546.015 4.035 5.303 4.015 11.929l-.01 3.932z"/></svg>
  )
}

export default BackhandIndexPointingDownMediumSkinTone
