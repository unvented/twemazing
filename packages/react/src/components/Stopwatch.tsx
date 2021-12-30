import React from 'react'

const Stopwatch = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M16 5h4v3h-4z"/><path fill="#8899A6" d="M22 1h-8c-1.1 0-2 .9-2 2s.9 2 2 2h8c1.1 0 2-.9 2-2s-.9-2-2-2zm6.184 10.507l-1.504-1.318c-.827-.725-.911-1.995-.186-2.822.725-.827 1.995-.911 2.822-.186l1.504 1.318c.827.725.911 1.995.186 2.822-.725.827-1.995.911-2.822.186z"/><circle fill="#F5F8FA" cx="18" cy="21" r="11"/><path fill="#66757F" d="M18 7C10.268 7 4 13.268 4 21s6.268 14 14 14 14-6.268 14-14S25.732 7 18 7zm0 25c-6.065 0-11-4.935-11-11s4.935-11 11-11 11 4.935 11 11-4.935 11-11 11z"/><path fill="#292F33" d="M27 22H17c-.552 0-1-.447-1-1s.448-1 1-1h10c.553 0 1 .447 1 1s-.447 1-1 1z"/><circle fill="#292F33" cx="18" cy="12" r="1"/><circle fill="#292F33" cx="18" cy="30" r="1"/><circle fill="#292F33" cx="12" cy="15" r="1"/><circle fill="#292F33" cx="24" cy="27" r="1"/><circle fill="#292F33" cx="9" cy="21" r="1"/><circle fill="#292F33" cx="24" cy="15" r="1"/><path fill="#DD2E44" d="M12 28c-.256 0-.512-.098-.707-.293-.391-.391-.391-1.023 0-1.414l7-7c.391-.391 1.023-.391 1.414 0s.391 1.023 0 1.414l-7 7c-.195.195-.451.293-.707.293z"/></svg>
  )
}

export default Stopwatch
