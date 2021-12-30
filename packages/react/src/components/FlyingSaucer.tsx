import React from 'react'

const FlyingSaucer = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFD983" d="M32.831 20.425c-.689 3.241-9.21 6.221-17.314 4.499S.841 17.013 1.53 13.772s8.587-3.287 16.69-1.564 15.3 4.976 14.611 8.217z"/><path fill="#FFD983" d="M27 36l-2-14-17-5-8 19z"/><ellipse transform="rotate(-78 17.482 15.686)" fill="#67757F" cx="17.481" cy="15.685" rx="7.556" ry="17"/><path fill="#67757F" d="M.414 10.977l.414 2.315 32.866 6.986 1.412-2.126z"/><ellipse transform="rotate(-78 18.013 13.186)" fill="#9AAAB4" cx="18.012" cy="13.186" rx="8" ry="18"/><ellipse transform="rotate(-78 18.43 11.23)" fill="#CCD6DD" cx="18.428" cy="11.229" rx="6" ry="15"/><ellipse transform="rotate(-78 18.845 9.274)" fill="#E1E8ED" cx="18.844" cy="9.273" rx="3" ry="9"/><path fill="#5DADEC" d="M10.041 7.402c.344-1.621 2.996-4.475 9.843-3.02s8.108 5.141 7.764 6.762c-.344 1.621-4.565 2.097-9.427 1.063s-8.525-3.184-8.18-4.805z"/><circle fill="#8CCAF7" cx="16.765" cy="19.055" r="1"/><circle fill="#8CCAF7" cx="24.798" cy="19.74" r="1"/><circle fill="#8CCAF7" cx="32.269" cy="18.261" r="1"/><ellipse transform="rotate(-50.811 34.182 14.066)" fill="#8CCAF7" cx="34.183" cy="14.067" rx=".5" ry="1"/><ellipse transform="rotate(-15.188 2.802 7.396)" fill="#8CCAF7" cx="2.802" cy="7.397" rx="1" ry=".5"/><circle fill="#8CCAF7" cx="2.924" cy="12.023" r="1"/><circle fill="#8CCAF7" cx="9.148" cy="16.413" r="1"/><ellipse transform="rotate(-78 19.573 5.85)" fill="#8CCAF7" cx="19.572" cy="5.85" rx="1.5" ry="5"/></svg>
  )
}

export default FlyingSaucer
