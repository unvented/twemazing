import React from 'react'

const Locomotive = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#939598" d="M0 34h36v2H0z"/><path fill="#231F20" d="M6 27h29v5H6z"/><circle fill="#58595B" cx="6.999" cy="32" r="3"/><circle fill="#58595B" cx="12.999" cy="32" r="3"/><circle fill="#A0041E" cx="6.999" cy="32" r="1.5"/><circle fill="#A0041E" cx="12.999" cy="32" r="1.5"/><path fill="#DD2E44" d="M5 33H1c-1 0-1.5-.5 0-2l4-4c1-1 2-2.001 2 0v4c0 2-.001 2-2 2z"/><path fill="#231F20" d="M8 20c0 3.313-1.343 6-3 6s-3-2.687-3-6c0-3.314 1.343-6 3-6s3 2.686 3 6z"/><path fill="#6D6E71" d="M11 15H7L5 7h8z"/><path fill="#414042" d="M26 25c0 1.104-.896 2-2 2H6c-1.104 0-2-.896-2-2V15c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v10z"/><path fill="#C1694F" d="M13 26c0 .553-.448 1-1 1s-1-.447-1-1V13c0-.552.448-1 1-1s1 .448 1 1v13zm6 0c0 .553-.447 1-1 1-.553 0-1-.447-1-1V13c0-.552.447-1 1-1 .553 0 1 .448 1 1v13z"/><path fill="#808285" d="M36 26c0 .553-.447 1-1 1H7c-.552 0-1-.447-1-1 0-.553.448-1 1-1h28c.553 0 1 .447 1 1z"/><circle fill="#58595B" cx="29.999" cy="31" r="4"/><circle fill="#58595B" cx="21.999" cy="31" r="4"/><circle fill="#A0041E" cx="29.999" cy="31" r="2"/><circle fill="#A0041E" cx="21.999" cy="31" r="2"/><path fill="#414042" d="M12 3H6c-.552 0-1 .448-1 1v3h8V4c0-.552-.448-1-1-1z"/><path fill="#BE1931" d="M23 7h12v18H23z"/><path fill="#A0041E" d="M36 6c0 .552-.447 1-1 1H23c-.553 0-1-.448-1-1s.447-1 1-1h12c.553 0 1 .448 1 1z"/><path fill="#EA596E" d="M25 18h8v5h-8z"/><path fill="#F4900C" d="M30 32h-8c-.127 0-.253-.024-.371-.071L16.807 30H10c-.552 0-1-.447-1-1s.448-1 1-1h7c.128 0 .253.024.372.071L22.192 30H30c.553 0 1 .447 1 1s-.447 1-1 1z"/><path fill="#55ACEE" d="M33 10c0-.552-.447-1-1-1h-6c-.553 0-1 .448-1 1v5c0 .552.447 1 1 1h6c.553 0 1-.448 1-1v-5z"/></svg>
  )
}

export default Locomotive
