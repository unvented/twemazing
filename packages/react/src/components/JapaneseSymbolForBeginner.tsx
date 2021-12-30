import React from 'react'

const JapaneseSymbolForBeginner = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#66757F" d="M17 36c-.512 0-1.024-.195-1.414-.586l-11-11C4.211 24.039 4 23.53 4 23V2C4 1.191 4.487.462 5.235.152c.747-.311 1.608-.139 2.179.434L17 10.171 26.586.586c.572-.573 1.431-.744 2.18-.434C29.513.462 30 1.191 30 2v21c0 .53-.211 1.039-.586 1.414l-11 11c-.39.391-.902.586-1.414.586z"/><path fill="#47DED4" d="M17 13L28 2v21L17 34z"/><path fill="#FFFF87" d="M6 2l11 11v21L6 23z"/></svg>
  )
}

export default JapaneseSymbolForBeginner
