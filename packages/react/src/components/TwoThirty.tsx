import React from 'react'

const TwoThirty = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#99AAB5" cx="18" cy="18" r="18"/><circle fill="#E1E8ED" cx="18" cy="18" r="14"/><path fill="#67757F" d="M18 31c-.552 0-1-.447-1-1V18c0-.552.448-1 1-1 .553 0 1 .448 1 1v12c0 .553-.447 1-1 1z"/><path fill="#67757F" d="M18.001 19c-.312 0-.62-.146-.815-.419-.321-.449-.217-1.074.233-1.395l7-5c.448-.32 1.073-.217 1.395.233.321.449.217 1.074-.232 1.395l-7 4.999c-.177.127-.38.187-.581.187z"/></svg>
  )
}

export default TwoThirty
