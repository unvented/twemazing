import React from 'react'

const CurlingStone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#BE1931" d="M28 12H13V8c0-.552.448-1 1-1h11c1.104 0 2-.896 2-2s-.896-2-2-2H14c-2.761 0-5 2.239-5 5v4H8c-1.104 0-2 .896-2 2s.896 2 2 2h20c1.104 0 2-.896 2-2s-.896-2-2-2z"/><path fill="#66757F" d="M36 25c0 3.313-2.687 6-6 6H6c-3.313 0-6-2.687-6-6v-5c0-3.313 2.687-6 6-6h24c3.313 0 6 2.687 6 6v5z"/><path fill="#99AAB5" d="M0 20h36v5H0z"/></svg>
  )
}

export default CurlingStone
