import React from 'react'

const TimerClock = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#AAB8C2" d="M18 0C8.611 0 1 7.611 1 17h.029v17c0 1.1.9 2 2 2H33c1.1 0 2-.9 2-2V17c0-9.389-7.611-17-17-17z"/><circle fill="#FFF" cx="18" cy="17" r="14"/><path fill="#66757F" d="M18 4c7.18 0 13 5.82 13 13s-5.82 13-13 13S5 24.18 5 17 10.82 4 18 4m0-2C9.729 2 3 8.729 3 17s6.729 15 15 15 15-6.729 15-15S26.271 2 18 2z"/><path fill="#292F33" d="M19 6c0-.552-.448-1-1-1s-1 .448-1 1v1c0 .552.448 1 1 1s1-.448 1-1V6zm0 21c0-.552-.448-1-1-1s-1 .448-1 1v1c0 .552.448 1 1 1s1-.448 1-1v-1zM8 16H7c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zm21 0h-1c-.552 0-1 .448-1 1s.448 1 1 1h1c.552 0 1-.448 1-1s-.448-1-1-1zm-2.293 8.293L26 23.586c-.391-.391-1.024-.391-1.414 0-.391.391-.391 1.024 0 1.414l.707.707c.391.391 1.024.391 1.414 0 .391-.39.391-1.024 0-1.414zM10 23.586l-.707.707c-.391.391-.391 1.024 0 1.414.391.391 1.024.391 1.414 0l.707-.707c.391-.391.391-1.024 0-1.414-.39-.391-1.023-.391-1.414 0zM9.293 9.707l.707.707c.391.391 1.024.391 1.414 0s.391-1.024 0-1.414l-.707-.707c-.391-.391-1.024-.391-1.414 0s-.391 1.024 0 1.414zM26 10.414l.707-.707c.391-.391.391-1.024 0-1.414-.391-.391-1.024-.391-1.414 0L24.586 9c-.391.391-.391 1.024 0 1.414.39.391 1.023.391 1.414 0z"/><path fill="#DD2E44" d="M8.915 13.839c-.095-.238-.099-.512.011-.765.218-.507.806-.741 1.314-.523l8.154 3.51c.507.218.741.806.523 1.314-.218.507-.806.741-1.314.523l-8.154-3.51c-.254-.11-.439-.311-.534-.549z"/></svg>
  )
}

export default TimerClock
