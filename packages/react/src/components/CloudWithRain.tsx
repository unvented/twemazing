import React from 'react'

const CloudWithRain = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E1E8ED" d="M28 4c-.825 0-1.62.125-2.369.357C24.744 1.822 22.338 0 19.5 0c-3.044 0-5.592 2.096-6.299 4.921C12.447 4.351 11.519 4 10.5 4 8.015 4 6 6.015 6 8.5c0 .604.123 1.178.339 1.704C5.91 10.085 5.467 10 5 10c-2.762 0-5 2.238-5 5s2.238 5 5 5h23c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8z"/><path fill="#5DADEC" d="M11.999 24.961l-.113-3.421-2.87 1.708c-.638.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.109-.023 1.98-.937 1.943-2.039zm-1.979 7.46L9.907 29l-2.87 1.708c-.638.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.11-.023 1.98-.937 1.943-2.039zm-5-4.46l-.113-3.421-2.87 1.708c-.638.345-1.062 1.024-1.036 1.799.037 1.102.966 1.975 2.076 1.953 1.11-.023 1.98-.937 1.943-2.039zm18-3l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039zm-6.021 4l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039zm5.021 4.46L21.906 30l-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.11-.023 1.98-.937 1.943-2.039zm6.979-5.46l-.113-3.421-2.869 1.708c-.639.345-1.062 1.024-1.036 1.799.037 1.103.966 1.976 2.076 1.953 1.109-.023 1.979-.937 1.942-2.039z"/></svg>
  )
}

export default CloudWithRain
