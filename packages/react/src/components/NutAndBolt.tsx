import React from 'react'

const NutAndBolt = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#8899A6" d="M35.354 30.646L10 5.293 5.293 10l25.354 25.354c.061.061.613.591 1.391.591.475 0 .93-.204 1.316-.591l2-2c.543-.544.993-1.714 0-2.708z"/><path d="M30 35c-.104 0-.211-.017-.316-.052-.523-.174-.807-.74-.632-1.265l2-6c.175-.523.735-.808 1.265-.632.523.174.807.74.632 1.265l-2 6c-.14.419-.53.684-.949.684zm-3-3c-.104 0-.211-.017-.316-.052-.523-.174-.807-.74-.632-1.265l2-6c.174-.523.737-.809 1.265-.632.523.174.807.74.632 1.265l-2 6c-.14.419-.53.684-.949.684zm-3-3c-.104 0-.211-.017-.316-.052-.523-.174-.807-.74-.632-1.265l2-6c.175-.523.735-.808 1.265-.632.523.174.807.74.632 1.265l-2 6c-.14.419-.53.684-.949.684zm-3-3c-.104 0-.211-.017-.316-.052-.523-.174-.807-.74-.632-1.265l2-6c.174-.523.737-.809 1.265-.632.523.175.807.741.632 1.265l-2 6c-.14.419-.53.684-.949.684zm-5-5c-.104 0-.211-.017-.316-.052-.524-.174-.807-.74-.632-1.265l2-6c.175-.524.74-.808 1.265-.632.524.175.807.741.632 1.265l-2 6c-.14.419-.53.684-.949.684zm-3-3c-.104 0-.211-.017-.316-.052-.524-.175-.807-.741-.632-1.265l2-6c.174-.523.739-.81 1.265-.632.524.175.807.741.632 1.265l-2 6c-.14.419-.53.684-.949.684zm-3-3c-.104 0-.211-.017-.316-.052-.524-.175-.807-.741-.632-1.265l2-6c.175-.523.74-.808 1.265-.632.524.175.807.741.632 1.265l-2 6c-.14.419-.53.684-.949.684z" fill="#66757F"/><path fill="#CCD6DD" d="M13 25s-1-1 0-2l10-10s1-1 2 0l3 3s1 1 0 2L18 28s-1 1-2 0l-3-3z"/><path fill="#8899A6" d="M13 23c-1 1 0 2 0 2l3 3c1 1 2 0 2 0l2-2-5-5-2 2z"/><path fill="#E1E8ED" d="M28 18c1-1 0-2 0-2l-3-3c-1-1-2 0-2 0l-2 2 5 5 2-2z"/><path fill="#CCD6DD" d="M1 13s-1-1 0-2L11 1s1-1 2 0l3 3s1 1 0 2L6 16s-1 1-2 0l-3-3z"/><path fill="#8899A6" d="M1 11c-1 1 0 2 0 2l3 3c1 1 2 0 2 0l2-2-5-5-2 2z"/><path fill="#E1E8ED" d="M16 6c1-1 0-2 0-2l-3-3c-1-1-2 0-2 0L9 3l5 5 2-2z"/></svg>
  )
}

export default NutAndBolt
