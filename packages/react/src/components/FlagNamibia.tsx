import React from 'react'

const FlagNamibia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#009543" d="M1.067 29.701C1.798 30.495 2.836 31 4 31h28c2.209 0 4-1.791 4-4V9c0-1.018-.393-1.937-1.019-2.643L1.067 29.701z"/><path fill="#003580" d="M34.933 6.299C34.202 5.505 33.164 5 32 5H4C1.791 5 0 6.791 0 9v18c0 1.018.393 1.937 1.019 2.643L34.933 6.299z"/><path fill="#EEE" d="M36 9c0-2.209-1.791-4-4-4h-.664L0 26.942V27c0 2.209 1.791 4 4 4h.664L36 9.059V9z"/><path fill="#D20F34" d="M32.984 5.136L.175 28.108c.399 1.377 1.506 2.447 2.912 2.777L35.843 7.949c-.378-1.382-1.468-2.459-2.859-2.813z"/><path fill="#FFCE00" d="M8 8l.809 1.981L10.5 8.67l-.29 2.12 2.12-.29-1.311 1.691L13 13l-1.981.809L12.33 15.5l-2.12-.29.29 2.12-1.691-1.311L8 18l-.809-1.981L5.5 17.33l.29-2.12-2.12.29 1.311-1.691L3 13l1.981-.809L3.67 10.5l2.12.29-.29-2.12 1.691 1.311z"/><circle fill="#003580" cx="8" cy="13" r="3.175"/><circle fill="#FFCE00" cx="8" cy="13" r="2.467"/></svg>
  )
}

export default FlagNamibia
