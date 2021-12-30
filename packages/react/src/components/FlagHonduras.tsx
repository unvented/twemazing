import React from 'react'

const FlagHonduras = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EEE" d="M0 14h36v8H0z"/><path fill="#0156A3" d="M32 5H4C1.791 5 0 6.791 0 9v5h36V9c0-2.209-1.791-4-4-4zM0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-5H0v5z"/><path fill="#2657A7" d="M18.265 17.76l-.249-.766-.249.766h-.806l.652.473-.249.767.652-.474.652.474-.249-.767.652-.473zm5.332 2.48l-.249.766.652-.473.652.473-.249-.766.652-.473h-.806L24 19l-.249.767h-.806zm.652-4.48L24 14.994l-.249.766h-.806l.652.473-.249.767.652-.474.652.474-.249-.767.652-.473zm-12.707 4.48l-.249.766.652-.473.652.473-.249-.766.652-.473h-.806L11.945 19l-.249.767h-.806zm.652-4.48l-.249-.766-.249.766h-.806l.652.473-.249.767.652-.474.652.474-.249-.767.652-.473z"/></svg>
  )
}

export default FlagHonduras
