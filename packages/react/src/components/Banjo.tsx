import React from 'react'

const Banjo = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#67757F" cx="10.047" cy="16.953" r="1"/><circle fill="#67757F" cx="1.047" cy="25.953" r="1"/><circle fill="#67757F" cx="19.047" cy="25.953" r="1"/><circle fill="#67757F" cx="10.047" cy="34.953" r="1"/><circle fill="#67757F" cx="3.547" cy="19.828" r="1"/><circle fill="#67757F" cx="16.214" cy="32.495" r="1"/><path fill="#292F33" d="M32.339 5.338l-15.45 17.334-3.561-3.56L30.66 3.66z"/><ellipse transform="rotate(-52.019 10.047 25.953)" fill="#F18F26" cx="10.047" cy="25.953" rx="9" ry="9"/><ellipse transform="rotate(-52.019 10.047 25.953)" fill="#F5F8FA" cx="10.047" cy="25.953" rx="7" ry="7"/><path fill="#CCD6DD" d="M4.628 29.934L28.8 5.807l.53.531L5.16 30.466zm.869.87L29.67 6.676l.531.531L6.028 31.335z"/><path fill="#292F33" d="M2.047 31.953l2-3s1 0 2 1 1 2 1 2l-3 2-2-2z"/><path fill="#67757F" d="M9.097 30.903c-.256 0-.512-.098-.707-.293l-3-3c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0l3 3c.391.391.391 1.023 0 1.414-.196.196-.452.293-.707.293z"/><path fill="#F18F26" d="M34.704 2.685c.438.438.438 1.155-.001 1.592l-3.186 3.186c-.438.438-1.155.438-1.593-.001l-1.39-1.389c-.438-.438-.438-1.155.001-1.592l3.187-3.186c.438-.438 1.155-.438 1.593 0l1.389 1.39z"/><circle fill="#642116" cx="33" cy="8" r="1"/><circle fill="#642116" cx="35" cy="6" r="1"/><circle fill="#642116" cx="28" cy="3" r="1"/><circle fill="#642116" cx="30" cy="1" r="1"/></svg>
  )
}

export default Banjo
