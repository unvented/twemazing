import React from 'react'

const BabyChick = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F4900C" d="M8.512 15.93c0 1.657 1.974 2-.512 2-2.485 0-6-1-6-2s1.526-3 4.012-3 2.5 1.343 2.5 3z"/><path fill="#FFAC33" d="M27.88 33.027c-.098-.18-.25-.302-.418-.391C25.865 30.931 27 28.93 27 28.93c0-.553 1-2 0-2l-1 1c-1 1-1 4-1 4h-2c-.553 0-1 .447-1 1 0 .553.447 1 1 1h1.107l-.222.12c-.486.263-.667.869-.404 1.355s.869.667 1.356.404l2.639-1.427c.486-.262.667-.868.404-1.355zm-7 0c-.098-.18-.25-.302-.418-.391C18.865 30.931 20 28.93 20 28.93c0-.553 1-2 0-2l-1 1c-1 1-1 4-1 4h-2c-.553 0-1 .447-1 1 0 .553.447 1 1 1h1.108l-.222.12c-.486.263-.667.869-.404 1.355s.869.667 1.356.404l2.639-1.427c.485-.262.666-.868.403-1.355z"/><path fill="#FFCC4D" d="M35.217 17.305c-1.342 0-7.904 4.613-11.553-5.375-.005-.014-.012-.024-.018-.038-.956-3.453-3.809-6.113-7.367-6.789l-.037-.042C18.389 3.684 19 4.707 19 3.93c0-1.179-2.083-1.303-4 .012-1.917-1.315-4-1.191-4-.012 0 .761.583-.208 2.623 1.044C8.788 5.417 5 9.479 5 14.43c0 4.478 3.103 8.223 7.273 9.227 1.003 4.171 4.748 7.273 9.227 7.273 3.953 0 6.934-1.678 8.99-3.999.555-.626.111.602.842.235 4.24-2.132 5.168-9.861 3.885-9.861z"/><circle fill="#662113" cx="12.5" cy="13.43" r="1.5"/><path fill="#FFAC33" d="M21.81 15.93s-2 10 10 10c1 0 0 2-4 2s-9.999-5-7-11c.633-1.265 1-1 1-1z"/></svg>
  )
}

export default BabyChick
