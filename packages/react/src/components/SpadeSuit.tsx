import React from 'react'

const SpadeSuit = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#31373D" d="M32.799 20.336C32.799 11.456 18 .198 18 .198S3.201 11.456 3.201 20.336c0 6.946 8.175 10.172 12.766 5.173C15.631 29.688 11.247 33 7 33h.5c-.829 0-1.5.672-1.5 1.5S6.671 36 7.5 36h21c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5h.5c-4.246 0-8.632-3.312-8.967-7.491 4.591 4.999 12.766 1.773 12.766-5.173z"/></svg>
  )
}

export default SpadeSuit
