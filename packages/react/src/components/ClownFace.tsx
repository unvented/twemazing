import React from 'react'

const ClownFace = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><circle fill="#4289C1" cx="29" cy="3" r="2"/><circle fill="#4289C1" cx="33" cy="8" r="3"/><circle fill="#4289C1" cx="33" cy="4" r="3"/><circle fill="#4289C1" cx="7" cy="3" r="2"/><circle fill="#4289C1" cx="3" cy="8" r="3"/><circle fill="#4289C1" cx="3" cy="4" r="3"/><path fill="#FEE7B8" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"/><circle fill="#4289C1" cx="30.5" cy="4.5" r="2.5"/><circle fill="#4289C1" cx="32" cy="7" r="2"/><circle fill="#4289C1" cx="5.5" cy="4.5" r="2.5"/><circle fill="#4289C1" cx="4" cy="7" r="2"/><circle fill="#FF7892" cx="6.93" cy="21" r="4"/><circle fill="#FF7892" cx="28.93" cy="21" r="4"/><path fill="#DA2F47" d="M27.335 23.629c-.178-.161-.444-.171-.635-.029-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9-.191-.142-.457-.13-.635.029-.177.16-.217.424-.094.628C8.7 24.472 11.788 31 18 31s9.301-6.528 9.429-6.743c.123-.205.084-.468-.094-.628z"/><path fill="none" d="M27.335 23.629c-.178-.161-.444-.171-.635-.029-.039.029-3.922 2.9-8.7 2.9-4.766 0-8.662-2.871-8.7-2.9-.191-.142-.457-.13-.635.029-.177.16-.217.424-.094.628C8.7 24.472 11.788 31 18 31s9.301-6.528 9.429-6.743c.123-.205.084-.468-.094-.628z"/><ellipse fill="#664500" cx="11.5" cy="11.5" rx="2.5" ry="3.5"/><ellipse fill="#664500" cx="25.5" cy="11.5" rx="2.5" ry="3.5"/><circle fill="#BB1A34" cx="18.5" cy="19.5" r="3.5"/></svg>
  )
}

export default ClownFace
