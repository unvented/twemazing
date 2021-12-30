import React from 'react'

const MaleSign = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#269" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M15 30.5c-4.687 0-8.5-3.813-8.5-8.5s3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5zm0-14c-3.032 0-5.5 2.468-5.5 5.5s2.468 5.5 5.5 5.5 5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5z"/><path fill="#FFF" d="M28.5 7h-8.969c-.829 0-1.5.671-1.5 1.5s.671 1.5 1.5 1.5h5.348l-7 6.879L20 19l7-6.879V17.5c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5v-9c0-.829-.672-1.5-1.5-1.5z"/></svg>
  )
}

export default MaleSign
