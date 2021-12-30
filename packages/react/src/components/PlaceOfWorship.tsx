import React from 'react'

const PlaceOfWorship = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#9266CC" d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z"/><path fill="#FFF" d="M21.52 10.704c.521 1.843-.267 3.68-1.764 4.103-1.494.423-3.128-.729-3.649-2.573-.522-1.843.268-3.68 1.762-4.103 1.494-.423 3.129.729 3.651 2.573zm-10.603 3.921C11.958 15.75 13 17 14 18s6.625-2.667 7.625-2.667S25 17 26 21c.527 2.107.792 4.458.542 5-.852 1.528-3.538 3.665-4.542 4h5c1 0 2 1 2 2s-1 2-2 2H15.708c-2.5 0-2.177-2.665-.708-4 2.292-2.083 3.625-3.25 4.625-4.25 0-1-.875-5.042-1.875-5.042C17.75 20.708 15 22 14 22c-2 0-3.924-4.04-5-6-.708-1.292 1.094-2.264 1.917-1.375z"/><path fill="#FFF" d="M30.559 8.626l-11.69-6.649c-.573-.25-.918-.334-1.149-.316l-.021-.001-.021.001c-.237-.018-.549.066-1.001.316L4.986 8.626c-.645.368-.871 1.188-.504 1.834.368.646 1.189.871 1.834.504l11.456-6.516 11.456 6.516c.646.367 1.467.142 1.835-.504.367-.646.141-1.466-.504-1.834z"/></svg>
  )
}

export default PlaceOfWorship
