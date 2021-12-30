import React from 'react'

const TransgenderSymbol = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#9266CC" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M18 24.3c-3.749 0-6.8-3.051-6.8-6.8s3.051-6.8 6.8-6.8 6.8 3.051 6.8 6.8-3.051 6.8-6.8 6.8zm0-11.2c-2.426 0-4.4 1.974-4.4 4.4s1.974 4.4 4.4 4.4 4.4-1.974 4.4-4.4-1.974-4.4-4.4-4.4z"/><path fill="#FFF" d="M18 31.5c-.663 0-1.2-.538-1.2-1.2v-7.2c0-.663.537-1.2 1.2-1.2s1.2.538 1.2 1.2v7.2c0 .662-.537 1.2-1.2 1.2z"/><path fill="#FFF" d="M21.9 28.3h-7.8c-.663 0-1.2-.537-1.2-1.2s.537-1.2 1.2-1.2h7.8c.663 0 1.2.538 1.2 1.2s-.537 1.2-1.2 1.2zm6.9-22.8h-7.175c-.663 0-1.2.537-1.2 1.2s.537 1.2 1.2 1.2h4.278l-5.6 5.503L22 15.1l5.6-5.503V13.9c0 .662.538 1.2 1.2 1.2.663 0 1.2-.538 1.2-1.2V6.7c0-.663-.538-1.2-1.2-1.2zm-15.194 5.291l-2.315 2.315c-.469.469-1.229.468-1.697 0-.468-.468-.469-1.228 0-1.697l2.315-2.315c.469-.469 1.229-.468 1.697 0 .469.468.469 1.228 0 1.697z"/><path fill="#FFF" d="M7.2 5.5h7.175c.663 0 1.2.537 1.2 1.2s-.537 1.2-1.2 1.2h-4.278l5.6 5.503L14 15.1 8.4 9.597V13.9c0 .662-.537 1.2-1.2 1.2S6 14.562 6 13.9V6.7c0-.663.537-1.2 1.2-1.2z"/></svg>
  )
}

export default TransgenderSymbol
