import React from 'react'

const Virgo = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#9266CC" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M28.742 23.398c1.696-5.48-.952-8.824-1.065-8.964l-.631-.776-.959.284c-.102.03-1.56.49-3.087 1.979V11c0-3.979-1.776-4.939-3.268-5.291-1.465-.345-2.971.291-4.024 1.269-.595-.751-1.313-1.113-1.976-1.269-1.46-.345-2.959.286-4.012 1.257C8.705 5.619 7.393 5.5 7 5.5c-.829 0-1.5.671-1.5 1.5S6.171 8.5 7 8.5c.135 0 .832.492 1 2.5v12c0 .828.671 1.5 1.5 1.5S11 23.828 11 23V9.914c0-.83.67-1.502 1.5-1.502s1.5.672 1.5 1.502V23c0 .828.671 1.5 1.5 1.5S17 23.828 17 23V9.914c0-.83.67-1.502 1.5-1.502s1.5.672 1.5 1.502v11.415c-.427 1.99-.011 4.162.704 6.127-1.385.751-2.712 1.29-3.511 1.557-.786.263-1.212 1.111-.95 1.897.261.786 1.108 1.211 1.895.951.154-.052 1.812-.611 3.788-1.662 1.038 1.983 2.089 3.382 2.188 3.512.295.388.742.592 1.194.592.316 0 .636-.1.907-.307.659-.501.787-1.442.285-2.102-.51-.671-1.301-1.863-2.021-3.266 1.875-1.339 3.6-3.086 4.263-5.23zm-2.865-.887c-.377 1.216-1.374 2.325-2.587 3.276-.463-1.467-.657-2.944-.28-4.164.729-2.354 1.986-3.61 2.882-4.239.386 1.029.714 2.773-.015 5.127z"/></svg>
  )
}

export default Virgo
