import React from 'react'

const Moai = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#66757F" d="M8 27s-2 4-2 6 4 3 12 3 12-1 12-3-2-6-2-6H8zM9 6C6 6 6 7 5 16c-.994 8.945 0 10 4 10 2 0 2-20 0-20zm18 0c3 0 3 1 4 10 .994 8.945 0 10-4 10-2 0-2-20 0-20z"/><path fill="#CCD6DD" d="M8 3s1-3 10-3 10 3 10 3 1 6 1 14-1 14-1 14-1 2-10 2-10-2-10-2-1-3-1-14S8 3 8 3z"/><path fill="#66757F" d="M28 8c0-1-3-4-10-4S8 7 8 8c0 .807 4.548 1.612 6.311 1.894C14.999 12.548 15 18 15 18c.805-3.218.315-7.079.093-8.467C15.295 8.942 15.941 8 18 8c3 0 3 2 3 2h.002c-.234 1.657-.566 5.089.162 8 0 0 .002-5.491.697-8.134C23.727 9.562 28 8.782 28 8z"/><path fill="#66757F" d="M14 20c0-1 2-3 4-3s4 2 4 3-1 1-4 1-4 0-4-1zm-2 4s2-2 6-2 6 2 6 2-2-1-6-1-6 1-6 1zm0 2c0-1 2-2 6-2s6 1 6 2-1 1-6 1-6 0-6-1z"/></svg>
  )
}

export default Moai
