import React from 'react'

const LargeOrangeDiamond = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F4900C" d="M1.061 19.062c-.583-.584-.583-1.539 0-2.122L16.94 1.061c.583-.583 1.539-.583 2.122 0L34.94 16.94c.583.583.583 1.538 0 2.121L19.062 34.939c-.583.583-1.539.583-2.122 0L1.061 19.062z"/></svg>
  )
}

export default LargeOrangeDiamond
