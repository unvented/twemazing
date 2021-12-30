import React from 'react'

const MouseTrap = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#662113" d="M24.833.089L0 11.655l12 17.431v.003h18.212L36 16.828z"/><path fill="#3D130C" d="M29.249 28.073H12.457l2.431-15.561h3.291z"/><path fill="#511212" d="M12.457 28.073L1.758 12.512h13.13l2.666 4.149z"/><path fill="#FFCC4D" d="M25.608 24.422l-12.364 5.522.78-1.581c.141.025.269.038.422.038.69 0 1.266-.301 1.266-.69 0-.339-.46-.615-1.048-.678l1.805-3.665c.602-.19 2.872-.405 5.918.163-.013.364.192.703.55.841.435.176.933-.025 1.125-.452.243.05.473.125.703.213l.843.289z"/><ellipse fill="#F4900C" cx="18.604" cy="24.424" rx="1.053" ry=".517"/><path fill="#F4900C" d="M15.716 27.706c0 .389-.574.697-1.27.697-.15 0-.287-.013-.423-.04l.642-1.327c.586.054 1.051.335 1.051.67zm10.097 2.238L13.244 35.09v-1.092c.627 0 1.138-.515 1.138-1.142 0-.615-.511-1.13-1.138-1.13v-1.782l12.364-5.522.077 2.033c-.153-.088-.32-.125-.511-.125-.639 0-1.151.502-1.151 1.13s.511 1.129 1.151 1.129c.217 0 .422-.063.588-.163l.051 1.518z"/><ellipse fill="#F4900C" cx="20.039" cy="27.023" rx="2.156" ry="1.058"/><path fill="#C1694F" d="M18.293 11.655H0L7.562.089h17.271z"/><g fill="#F98E00"><path d="M6.69 13.401h1.583V36H6.69z"/><path d="M7.485 12.842c-.874 0-1.582-.708-1.582-1.582V8.892c0-.409-.321-.73-.73-.73-.398 0-.73.321-.73.73v2.235c0 .83.343 1.593.885 2.147.553.542 1.317.885 2.158.885 1.093 0 2.045-.588 2.579-1.459H8.132c-.197.089-.415.142-.647.142z"/></g></svg>
  )
}

export default MouseTrap
