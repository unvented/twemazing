import React from 'react'

const Rose = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3E721D" d="M19.32 25.358c-.113 0-.217.003-.32.005v-.415c4.805-.479 8.548-4.264 8.548-7.301 0-3.249 0 1.47-9.562 1.47-9.558 0-9.558-4.719-9.558-1.47 0 3.043 3.757 6.838 8.572 7.305v.411c-.104-.002-.207-.005-.321-.005-2.553 0-6.603-2.05-6.603-1.32 0 .646 4.187 4.017 6.924 4.796V35c0 .553.447 1 1 1s1-.447 1-1v-6.166c2.738-.779 6.924-4.15 6.924-4.796 0-.729-4.05 1.32-6.604 1.32z"/><path fill="#A0041E" d="M26.527 7.353c-3.887-4.412 1.506-5.882-2.592-5.882-.713 0-1.921.44-3.29 1.189C19.951 1.088 19.023 0 18 0c-2.05 0-3.726 4.342-3.873 8.269-1.108 1.543-1.855 3.235-1.855 4.966 0 6.092 2.591 8.823 6.479 8.823 7.776.001 13.644-8.047 7.776-14.705z"/><path fill="#BE1931" d="M23.728 13.235c0 6.092-2.59 8.823-6.48 8.823-7.776 0-13.643-8.048-7.776-14.706C13.361 2.94 7.967 1.47 12.064 1.47c2.593.001 11.664 5.674 11.664 11.765z"/></svg>
  )
}

export default Rose
