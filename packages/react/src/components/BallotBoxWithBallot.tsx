import React from 'react'

const BallotBoxWithBallot = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#8CCAF7" d="M34.5 24.995c0 2.209-1.791 2-4 2h-25c-2.209 0-4 .209-4-2L3.5 11c.293-1.75 1-2 2-2h25c1 0 1.791.208 2 2l2 13.995z"/><path fill="#292F33" d="M28.5 16.5c0 .829-.672 1.5-1.5 1.5H9c-.829 0-1.5-.671-1.5-1.5S8.172 15 9 15h18c.828 0 1.5.671 1.5 1.5z"/><path fill="#FFD983" d="M26.25 17.188v-14c0-1.105-.895-2-2-2h-13c-1.104 0-2 .895-2 2v14h17z"/><path fill="#5DADEC" d="M34.5 25c0-1.104-.896-2-2-2h-29c-1.104 0-2 .896-2 2v8c0 1.104.896 2 2 2h29c1.104 0 2-.896 2-2v-8z"/><path fill="#4289C1" d="M13.5 23v6c0 1.104.896 2 2 2h5c1.105 0 2-.896 2-2v-6h-9z"/><path fill="#5DADEC" d="M22.5 23v-1c0-1.104-.895-2-2-2h-5c-1.104 0-2 .896-2 2v1h9zm-3 4.5c0 .828-.672 1.5-1.5 1.5-.829 0-1.5-.672-1.5-1.5v-1c0-.828.671-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5v1z"/><path d="M24 5c0 .276-.224.5-.5.5H16c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.5c.276 0 .5.224.5.5m0 4c0 .276-.224.5-.5.5H16c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.5c.276 0 .5.224.5.5m0 4c0 .276-.224.5-.5.5H16c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h7.5c.276 0 .5.224.5.5" fill="#C1694F"/><g fill="#C1694F"><circle cx="13" cy="5" r="1"/><circle cx="13" cy="9" r="1"/><circle cx="13" cy="13" r="1"/></g></svg>
  )
}

export default BallotBoxWithBallot
