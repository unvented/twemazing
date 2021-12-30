import React from 'react'

const Pear = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#A6D388" d="M7.681 9.097c1.587-3.151 7.698-1.916 11.958 2.171 2.697 2.586 8.056 1.498 11.498 4.804 3.493 3.354 3.259 9.361-3.053 15.767C23 37 16 37 11.835 33.384c-4.388-3.811-2.476-8.61-4.412-13.585C5.487 14.823 3.1 9.375 7.681 9.097z"/><path fill="#662113" d="M8.178 9.534c-.43.448-1.114.489-1.527.093-3.208-3.079-3.918-7.544-3.946-7.776-.074-.586.348-1.157.939-1.278.592-.121 1.131.257 1.205.842.006.05.657 3.997 3.359 6.59.413.397.4 1.081-.03 1.529z"/></svg>
  )
}

export default Pear
