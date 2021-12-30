import React from 'react'

const PassengerShip = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M31 12h-4l1-5h3z"/><path fill="#CCD6DD" d="M33 12h-8l.887-3h6.523z"/><path fill="#CCD6DD" d="M35.583 14l-.183-1h-1l-.4-2H18l-1-2H8.342L8 10h1l-.45 1H7.371L7 12h1l-2 6h28.531l.453-.969L34.6 14z"/><path fill="#CCD6DD" d="M15 10h-4l1-3h3z"/><path fill="#269" d="M14 10H9l-.45 1h5.742zm21.375 3H8.422l.328-1H35.2zm-.656 2H7.75l.344-1H34.6zM35 17H7.125l.325-1h27.425zm-2 6.964S35 21 35 17H1c1 2 4 3 5 5.817 2.272 6.401 27 1.147 27 1.147z"/><path fill="#CCD6DD" d="M4.937 21h29.417c.358-1.114.646-2.481.646-4H1c.75 1.5 2.624 2.438 3.937 4z"/><path fill="#55ACEE" d="M0 24h36v12H0z"/><path d="M16 18v.229c0 .426.345.771.771.771h1.458c.426 0 .771-.345.771-.771V18h-3zm3 0v.229c0 .426.346.771.771.771h1.457c.426 0 .772-.345.772-.771V18h-3zm3 0v.229c0 .426.346.771.771.771h1.457c.426 0 .772-.345.772-.771V18h-3zm4 0v.229c0 .426.346.771.771.771h1.457c.426 0 .772-.345.772-.771V18h-3zm3 0v.229c0 .426.346.771.771.771h1.457c.426 0 .772-.345.772-.771V18h-3z" fill="#FFAC33"/></svg>
  )
}

export default PassengerShip
