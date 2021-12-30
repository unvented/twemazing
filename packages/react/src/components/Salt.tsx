import React from 'react'

const Salt = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#66757F" d="M26 4c0 3-3.582 6-8 6s-8-3-8-6c0-4.418 6-4 8-4s8-.418 8 4z"/><path fill="#CCD6DD" d="M24.306 12H11.694c-.978 0-1.812.707-1.973 1.671l-3.333 20C6.185 34.89 7.125 36 8.361 36h19.278c1.236 0 2.176-1.11 1.973-2.329l-3.333-20c-.161-.964-.996-1.671-1.973-1.671z"/><path fill="#F5F8FA" d="M19.344 14h-6.802c-.489 0-.906.353-.986.836l-3 18c-.103.609.367 1.164.985 1.164h10.427l-.624-20zm5.101.836c-.08-.483-.498-.836-.986-.836h-2.413l.909 20h4.505c.618 0 1.088-.555.986-1.164l-3.001-18z"/><ellipse fill="#CCD6DD" cx="15" cy="1.5" rx="1.2" ry=".6"/><ellipse fill="#CCD6DD" cx="21" cy="1.5" rx="1.2" ry=".6"/><ellipse fill="#CCD6DD" cx="18" cy="3.5" rx="1.2" ry=".6"/><path fill="#66757F" d="M25 12H11V9.528c0-.844.684-1.262 1.528-1.262h10.944c.844 0 1.528.418 1.528 1.262V12z"/><path fill="#CCD6DD" d="M23.472 8H12.528c-.657 0-1.213.417-1.429 1H24.9c-.215-.583-.77-1-1.428-1zM11 10h14v1H11zm0 2h14v.5H11z"/></svg>
  )
}

export default Salt
