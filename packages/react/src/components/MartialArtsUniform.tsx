import React from 'react'

const MartialArtsUniform = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E1E8ED" d="M34 6c-2-3-9-4-16-4S3 3 2 5C.093 8.814 1 25 1 26s5 1 5 1V14l1-2v23s3 1 11 1 11-1 11-1V12l1 2v13s5 0 5-1 1.365-16.452-1-20z"/><path fill="#99AAB5" d="M7 27H6V14c0-1 1-2 1-2v15zm23 0h-1V12s1 1 1 2v13z"/><path fill="#66757F" d="M11.781 2l6.281 11.344L24 2 17.891.75z"/><path fill="#CCD6DD" d="M12 .625s2.25-.547 6-.547 6 .547 6 .547V3s-1.625-1-6-1-6 1-6 1V.625z"/><path fill="#99AAB5" d="M7 35S24.748 3.341 24.748 2.362c0-1-.748-1.737-.748-1.737L7 32v3z"/><path fill="#99AAB5" d="M17.818 14.722s-6.692-11.381-6.692-12.36c0-1 .874-1.737.874-1.737l6.761 12.573-.943 1.524z"/><path fill="#292F33" d="M7 22s5 2 11 2 11-2 11-2v3s-4 2-11 2-11-2-11-2v-3z"/><path fill="#292F33" d="M21 24s-2-1-3-1-3 1-3 1-1 0-1 1 1 2 1 2 2 1 3 1 3-1 3-1 1-1 1-2-1-1-1-1z"/><path fill="#292F33" d="M12 33l3 1s1-5 3-7l-2-3s-3 4-4 9zm12 0l-3 1s-1-5-3-7l2-3s3 4 4 9z"/></svg>
  )
}

export default MartialArtsUniform
