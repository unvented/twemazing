import React from 'react'

const SportUtilityVehicle = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M36 24c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-6c0-.553.447-1 1-1h1c.553 0 1 .447 1 1v6z"/><path fill="#3B88C3" d="M5 31h26c1 0 3-1 3-4 0-2 0-8-1-9s0-7-4-7H15c-3 0-6 7-6 7l-4 1s-4 1-4 4v3s-1 .338-1 1.957S1 30 1 30l4 1z"/><circle fill="#292F33" cx="9" cy="31" r="4"/><circle fill="#CCD6DD" cx="9" cy="31" r="2"/><circle fill="#292F33" cx="27" cy="31" r="4"/><circle fill="#CCD6DD" cx="27" cy="31" r="2"/><path fill="#BBDDF5" d="M24 17c0 .552.447 1 1 1h4c.553 0 1-.448 1-1v-3c0-.552-.447-1-1-1h-4c-.553 0-1 .448-1 1v3zm-11 0c0 1 .448 1 1 1h7c.553 0 1-.448 1-1v-3c0-.552-.447-1-1-1h-5c-1 0-3 3-3 4z"/><path fill="#55ACEE" d="M32 23.5c0 .828-.672 1.5-1.5 1.5h-22c-.829 0-1.5-.672-1.5-1.5 0-.829.671-1.5 1.5-1.5h22c.828 0 1.5.671 1.5 1.5z"/></svg>
  )
}

export default SportUtilityVehicle
