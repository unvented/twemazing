import React from 'react'

const MxClaus = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M20 0c-.249 0-.478.007-.713.012C19.19.01 19.097 0 19 0 9 0 2 4.582 2 9s6.373 4 13 4c4.442 0 7.648 0 9.966-.086L25 13l6 15h2s.343-3.055 1-7c1-6 .533-21-14-21z"/><path fill="#D1D3D4" d="M1.229 13c-.318 4.094.89 6.24 1.342 9.562.552 4.056 2.832 5.353 4.655 5.896 2.623 3.465 5.411 3.317 10.092 3.317 9.141 0 13.495-6.116 13.88-16.505.029-.781-.003-1.538-.093-2.269H1.229z"/><path fill="#FFDC5D" d="M26.339 15.713c-.884-1.225-2.017-2.211-4.499-2.56.931.427 1.823 1.901 1.939 2.715.116.815.233 1.474-.504.659-2.952-3.263-6.167-1.978-9.354-3.972-2.226-1.392-2.903-2.933-2.903-2.933s-.272 2.056-3.646 4.15c-.978.607-2.145 1.959-2.793 3.956-.465 1.435-.321 2.715-.321 4.903 0 6.385 5.262 11.753 11.753 11.753s11.753-5.415 11.753-11.753c0-3.97-.416-5.521-1.425-6.918z"/><path fill="#C1694F" d="M16 31c-2.347 0-3.575-1.16-3.707-1.293-.391-.391-.391-1.023 0-1.414.387-.387 1.013-.39 1.404-.01.051.047.806.717 2.303.717 1.519 0 2.273-.69 2.305-.719.398-.373 1.027-.362 1.408.029.379.393.38 1.011-.006 1.397C19.575 29.84 18.347 31 16 31zm1-5h-2c-.552 0-1-.447-1-1s.448-1 1-1h2c.553 0 1 .447 1 1s-.447 1-1 1z"/><path fill="#662113" d="M11 22c-.552 0-1-.447-1-1v-2c0-.552.448-1 1-1s1 .448 1 1v2c0 .553-.448 1-1 1zm10 0c-.553 0-1-.447-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2c0 .553-.447 1-1 1z"/><circle fill="#F1F2F2" cx="32" cy="29" r="4"/><path fill="#F1F2F2" d="M32 12c0 1.104-.896 2-2 2H2c-1.104 0-2-.896-2-2v-1c0-1.104.896-2 2-2h28c1.104 0 2 .896 2 2v1z"/></svg>
  )
}

export default MxClaus
