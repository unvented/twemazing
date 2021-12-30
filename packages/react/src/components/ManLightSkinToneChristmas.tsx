import React from 'react'

const ManLightSkinToneChristmas = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F7DECE" d="M5 21c0 2.209-1.119 4-2.5 4S0 23.209 0 21s1.119-4 2.5-4S5 18.791 5 21z"/><path fill="#F7DECE" d="M3 18.562C3 10.037 8.373 3.125 15 3.125s12 6.912 12 15.438C27 27.088 21.627 34 15 34S3 27.088 3 18.562z"/><path fill="#DD2E44" d="M20 0c-.249 0-.478.007-.713.012C19.19.01 19.097 0 19 0 9 0 2 4.582 2 9s6.373 4 13 4c4.442 0 7.648 0 9.966-.086L25 13l6 15h2s.343-3.055 1-7c1-6 .533-21-14-21z"/><path fill="#F7DECE" d="M30 21c0 2.209-1.119 4-2.5 4S25 23.209 25 21s1.119-4 2.5-4 2.5 1.791 2.5 4z"/><path fill="#662113" d="M10 21c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z"/><path fill="#B7755E" d="M16 26h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.552 0 1 .447 1 1s-.448 1-1 1z"/><path fill="#E6E7E8" d="M27 25c0-2-2.293-.707-3 0-1 1-3 3-5 2-2.828-1.414-4-1-4-1s-1.171-.414-4 1c-2 1-4-1-5-2-.707-.707-3-2-3 0s1 2 1 2c-1 2 1 3 1 3 0 3 3 3 3 3 0 3 4 2 4 2 1 1 3 1 3 1s2 0 3-1c0 0 4 1 4-2 0 0 3 0 3-3 0 0 2-1 1-3 0 0 1 0 1-2z"/><path fill="#F7DECE" d="M15 28c7 0 4 2 0 2s-7-2 0-2z"/><ellipse fill="#D1D3D4" cx="3" cy="14" rx="2" ry="4"/><ellipse fill="#D1D3D4" cx="26" cy="14" rx="2" ry="4"/><circle fill="#F1F2F2" cx="32" cy="29" r="4"/><path fill="#F1F2F2" d="M29 12c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2v-1c0-1.104.896-2 2-2h25c1.104 0 2 .896 2 2v1z"/></svg>
  )
}

export default ManLightSkinToneChristmas
