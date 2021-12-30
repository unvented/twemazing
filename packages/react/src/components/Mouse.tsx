import React from 'react'

const Mouse = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#EA596E" d="M30 36H17c-.552 0-1-.447-1-1s.448-1 1-1h13c2.542 0 4-1.367 4-3.75 0-1.537-1.643-3.25-4-3.25h-7c-.553 0-1-.447-1-1s.447-1 1-1h7c3.589 0 6 2.715 6 5.25 0 3.493-2.355 5.75-6 5.75z"/><path fill="#CCD6DD" d="M12 26.717c0-2.85 3-7.035 0-7.035-4 0-10.137 6.566-10.137 8.442C1.863 30 8.304 30 11.153 30c2.849 0 .847-.434.847-3.283z"/><path fill="#CCD6DD" d="M33 23.902c0-7.973-6.554-9.752-11.381-8.787-9.38 1.876-11.132 6.442-11.132 10.194 0 4.922 9.149 4.69 14.071 4.69S33 28.825 33 23.902z"/><path fill="#CCD6DD" d="M25 22.496L7.894 24.371 11.425 30H25zm-8.082-5.353c0-2.683-1.997-4.858-4.458-4.858C9.997 12.286 8 14.46 8 17.143S9.997 22 12.46 22c2.461 0 4.458-2.174 4.458-4.857z"/><path fill="#F4ABBA" d="M14.37 17.683c0 1.788-1.141 3.239-2.548 3.239-1.408 0-2.548-1.451-2.548-3.239s1.14-3.238 2.548-3.238c1.407-.001 2.548 1.449 2.548 3.238z"/><circle fill="#DD2E44" cx="8.5" cy="24.5" r="1.5"/></svg>
  )
}

export default Mouse
