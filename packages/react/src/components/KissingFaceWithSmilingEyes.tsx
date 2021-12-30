import React from 'react'

const KissingFaceWithSmilingEyes = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFCC4D" d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"/><path fill="#664500" d="M20.871 28c1.335-.412 2.629-1.156 2.629-2.5 0-2.619-4.912-2.968-5.472-2.999-.274-.027-.509.193-.527.468-.017.274.19.511.464.53.035.002 3.535.299 3.535 2.001s-3.5 1.999-3.535 2.001c-.013.001-.023.008-.036.01-.053.006-.102.018-.149.041l-.015.009c-.048.027-.091.059-.127.1-.014.015-.023.031-.035.047-.023.032-.044.064-.06.103-.012.029-.018.061-.024.092-.004.023-.016.044-.018.067 0 .011.004.021.004.031s-.005.021-.004.031c.001.024.013.045.018.068.006.031.011.061.023.09.013.03.031.057.049.084.017.024.032.05.052.071.023.023.05.041.078.061.024.017.046.034.074.047.032.015.066.021.101.027.024.006.044.018.069.02.035.001 3.535.298 3.535 2s-3.5 1.999-3.535 2.001c-.274.02-.481.257-.464.53.017.265.237.469.499.469l.028-.001c.56-.031 5.472-.38 5.472-2.999 0-1.344-1.294-2.088-2.629-2.5zM16 19c-.419 0-.809-.265-.949-.684C14.848 17.717 14.034 16 13 16c-1.062 0-1.888 1.827-2.051 2.316-.175.523-.738.808-1.265.632-.524-.174-.807-.74-.632-1.265C9.177 17.307 10.356 14 13 14s3.823 3.307 3.949 3.684c.175.524-.108 1.091-.632 1.265-.106.034-.213.051-.317.051zm10 0c-.419 0-.809-.265-.948-.684C24.849 17.717 24.033 16 23 16c-1.062 0-1.889 1.827-2.052 2.316-.175.523-.736.808-1.265.632-.523-.174-.807-.74-.632-1.265C19.177 17.307 20.355 14 23 14s3.823 3.307 3.948 3.684c.175.524-.108 1.091-.632 1.265-.105.034-.212.051-.316.051z"/></svg>
  )
}

export default KissingFaceWithSmilingEyes
