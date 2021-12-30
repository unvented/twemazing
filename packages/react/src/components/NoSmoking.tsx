import React from 'react'

const NoSmoking = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle cx="18" cy="18" r="17"/><path fill="#FFF" d="M23.703 17h-.017c-.407 0-.733-.261-.733-.668 0-.219.082-2.149 2.929-4.047 1.475-.983 1.784-2.609 1.447-3.721-.315-1.042-1.164-1.63-2.328-1.63-1.771 0-2.26.957-2.394 1.524-.169.713.046 1.179.268 1.369.325.279.8.218 1.075.049.196-.122.301-.331.301-.606 0-.414.336-.75.75-.75s.75.336.75.75c0 .799-.369 1.485-1.013 1.883-.721.446-1.832.4-2.557-.004-.886-.494-1.337-1.743-1.034-3.031.396-1.674 1.836-2.674 3.854-2.674 1.844 0 3.251 1.011 3.764 2.704.602 1.986-.242 4.215-2.051 5.421-2.173 1.449-2.259 2.723-2.261 2.779-.018.402-.349.652-.75.652zM22 19H6s-2 0-2 2v1c0 2 2 2 2 2h16v-5zm5 0h-3v5h3s2 0 2-2v-1c0-2-2-2-2-2z"/><path fill="#DD2E44" d="M18 0C8.059 0 0 8.06 0 18c0 9.941 8.059 18 18 18s18-8.059 18-18c0-9.94-8.059-18-18-18zm16 18c0 3.969-1.453 7.592-3.845 10.389L7.612 5.845C10.409 3.453 14.032 2 18 2c8.837 0 16 7.164 16 16zM2 18c0-3.968 1.453-7.591 3.844-10.387l22.543 22.543C25.591 32.548 21.968 34 18 34 9.164 34 2 26.837 2 18z"/></svg>
  )
}

export default NoSmoking
