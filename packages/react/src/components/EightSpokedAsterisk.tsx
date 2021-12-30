import React from 'react'

const EightSpokedAsterisk = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#77B255" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M31.999 16h-9.171l6.899-6.899c.781-.781.782-2.047.001-2.828-.782-.782-2.048-.781-2.829 0L20 13.172V4c0-1.104-.896-2-2-2s-2 .896-2 2v9.171L9.101 6.272c-.781-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l6.9 6.9H4c-1.104 0-2.001.896-2 2 0 1.104.896 2 1.999 2h9.174l-6.9 6.9c-.781.78-.781 2.047 0 2.828.78.78 2.047.78 2.827 0l6.9-6.9V32c0 1.104.896 2 2 2s2-.896 2-2v-9.172l6.899 6.899c.781.781 2.047.782 2.828.001.781-.781.781-2.048 0-2.829L22.828 20h9.171C33.104 20 34 19.105 34 18.001 34 16.896 33.104 16 31.999 16z"/></svg>
  )
}

export default EightSpokedAsterisk
