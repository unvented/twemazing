import React from 'react'

const PinchingHandLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F7DECE" d="M33.29 8.628C33.265 8.62 24.499 6 21.499 5c-1.2-.4-21-7-21 16 0 .637 2 11 4 11h11c8.375 0 5.642-10.68 15.92-12.106 1.739-.241 2.621-1.112 2.466-2.566-.165-1.549-1.975-2.059-3.534-2.059-1.146 0-5.754.233-9.026 1.951-.286-1.809-.826-4.013-.826-6.221 5 1 11.092 2.333 11.209 2.372 1.31.434 2.726-.271 3.162-1.582.438-1.309-.27-2.724-1.58-3.161z"/><path fill="#E0AA94" d="M19.207 7.293c-.389-.391-1.023-.392-1.414-.001-.391.39-.392 1.023-.001 1.415.017.017 1.704 1.737 1.704 4.293v7.109c0 .852-.501 1.154-.97 1.154-.496 0-1.025-.332-1.025-1.264v-2c0-3.767-.303-7.77-2.553-8.895-.495-.247-1.095-.046-1.342.447-.247.494-.047 1.095.447 1.342.66.33 1.447 1.831 1.447 7.105v.996s-.004 1.001-.004 3.114c0 .852-.501 1.154-.97 1.154-.496 0-1.025-.332-1.025-1.264v-2c0-3.767-.303-7.77-2.553-8.895-.495-.248-1.095-.046-1.342.447-.247.494-.047 1.095.447 1.342.66.33 1.447 1.831 1.447 7.105v2c0 .021.005.039.005.06-.001.017-.01.032-.01.049 0 .852-.501 1.154-.97 1.154-.496.004-1.025-.328-1.025-1.26 0-3.394 0-7.618-2.553-8.895-.495-.248-1.095-.046-1.342.447-.247.494-.047 1.095.447 1.342C7.5 15.618 7.5 19.613 7.5 22c0 2.143 1.522 3.264 3.025 3.264.722 0 1.445-.263 1.999-.769.56.505 1.281.769 2.001.769 1.236 0 2.473-.769 2.846-2.232.368.151.761.232 1.154.232 1.476 0 2.97-1.083 2.97-3.154V13c0-3.375-2.194-5.613-2.288-5.707z"/></svg>
  )
}

export default PinchingHandLightSkinTone
