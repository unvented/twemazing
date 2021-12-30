import React from 'react'

const FlagLiberia = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path d="M35.692 28.538H.308C.911 29.983 2.336 31 4 31h28c1.664 0 3.089-1.017 3.692-2.462zM0 23.811h36v2.561H0zM11.5 9.629H36v2.561H11.5zm24.192-2.167C35.089 6.017 33.664 5 32 5H11.5v2.462h24.192zM11.5 14.356H36v2.561H11.5zM0 19.083h36v2.561H0z" fill="#BF0A30"/><path d="M11.5 12.189H36v2.167H11.5zM0 16.917v2.166h36v-2.166H12zm11.5-9.455v2.167H36V9c0-.545-.111-1.064-.308-1.538H11.5zM0 21.644h36v2.167H0zM0 27c0 .545.111 1.064.308 1.538h35.383c.198-.474.309-.993.309-1.538v-.629H0V27z" fill="#EEE"/><path fill="#002868" d="M4 5C1.791 5 0 6.791 0 9v7.917h12V5H4z"/><path fill="#FFF" d="M6.794 10.245L6 7.802l-.794 2.443H2.638l2.078 1.51-.794 2.443L6 12.688l2.078 1.51-.794-2.443 2.078-1.51z"/></svg>
  )
}

export default FlagLiberia
