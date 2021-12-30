import React from 'react'

const Keyboard = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#99AAB5" d="M36 28c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2V12c0-1.104.896-2 2-2h32c1.104 0 2 .896 2 2v16z"/><path d="M5.5 19c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h1c.552 0 1 .447 1 1v1zm4 0c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h1c.552 0 1 .447 1 1v1zm4 0c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h1c.552 0 1 .447 1 1v1zm4 0c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h1c.552 0 1 .447 1 1v1zm4 0c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1h1c.553 0 1 .447 1 1v1zm4 0c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1h1c.553 0 1 .447 1 1v1zm4 0c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1h1c.553 0 1 .447 1 1v1zm4 0c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1h1c.553 0 1 .447 1 1v1zm-26 4c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h1c.552 0 1 .447 1 1v1zm4 0c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h1c.552 0 1 .447 1 1v1zm4 0c0 .553-.448 1-1 1h-1c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h1c.552 0 1 .447 1 1v1zm4 0c0 .553-.447 1-1 1h-1c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h1c.553 0 1 .447 1 1v1zm4 0c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1h1c.553 0 1 .447 1 1v1zm4 0c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1h1c.553 0 1 .447 1 1v1zm4 0c0 .553-.447 1-1 1h-1c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1h1c.553 0 1 .447 1 1v1zM10 27c0 .553-.448 1-1 1H7c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h2c.552 0 1 .447 1 1v1zm20 0c0 .553-.447 1-1 1h-2c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1h2c.553 0 1 .447 1 1v1zm-5 0c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1h12c.553 0 1 .447 1 1v1zM5.5 13.083c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1s.448-1 1-1h1c.552 0 1 .448 1 1zm4 0c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1s.448-1 1-1h1c.552 0 1 .448 1 1zm4 0c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1s.448-1 1-1h1c.552 0 1 .448 1 1zm4 0c0 .552-.448 1-1 1h-1c-.552 0-1-.448-1-1s.448-1 1-1h1c.552 0 1 .448 1 1zm4 0c0 .552-.447 1-1 1h-1c-.553 0-1-.448-1-1s.447-1 1-1h1c.553 0 1 .448 1 1zm4 0c0 .552-.447 1-1 1h-1c-.553 0-1-.448-1-1s.447-1 1-1h1c.553 0 1 .448 1 1zm4 0c0 .552-.447 1-1 1h-1c-.553 0-1-.448-1-1s.447-1 1-1h1c.553 0 1 .448 1 1zm4 0c0 .552-.447 1-1 1h-1c-.553 0-1-.448-1-1s.447-1 1-1h1c.553 0 1 .448 1 1z" fill="#292F33"/></svg>
  )
}

export default Keyboard
