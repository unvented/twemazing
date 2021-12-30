import React from 'react'

const FamilyManManBoy = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFDC5D" d="M26 22v-4h5v4h2v6h-9v-6z"/><path fill="#3B93D9" d="M31 22l-2.528 3.778L26 22h-5c-2 0-3 1-3 2.973V36h18V22h-5z"/><path fill="#1B6399" d="M20.986 26h1.028v10h-1.028z"/><path fill="#FFDC5D" d="M21 4l.024 10c.011.175.036.347.059.518.494 3.64 3.618 6.45 7.417 6.45 3.978 0 7.223-3.079 7.476-6.969H36V4H21z"/><path fill="#FFAC33" d="M19.042 8.861c0 2.151.767 4.123 2.042 5.658-.023-.172-.048-.343-.059-.518l-.01-4.033c5.362-.302 8.513-2.675 10.202-4.57C31.782 7.17 33.114 10 35.861 10H36V1.887C34.906 1.206 33.619.806 32.236.806c-.201 0-.398.014-.595.03C30.504.305 29.24 0 27.902 0c-4.894 0-8.86 3.967-8.86 8.861z"/><path fill="#BF6952" d="M25.278 17.723h6.444s-.805 1.61-3.222 1.61-3.222-1.61-3.222-1.61zM28 15.5h1c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-1c-.276 0-.5.224-.5.5s.224.5.5.5z"/><path fill="#662113" d="M32 13c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1s-1 .448-1 1v1c0 .552.448 1 1 1zm-7 0c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1s-1 .448-1 1v1c0 .552.448 1 1 1z"/><path fill="#FFDC5D" d="M5 22v-4h5v4h2v6H3v-6z"/><path fill="#3B94D9" d="M15 22h-5l-2.472 3.778L5 22H0v14h18V24.973C18 23 17 22 15 22z"/><path fill="#1B6399" d="M13.986 26h1.028v10h-1.028z"/><path fill="#FFDC5D" d="M15 14V5L0 4v10h.024c.252 3.89 3.498 6.969 7.476 6.969 3.791 0 6.932-2.799 7.438-6.428.025-.18.05-.358.062-.541z"/><path fill="#FFAC33" d="M3.806.806C2.405.806 1.102 1.215 0 1.912v8.083c5.947-.055 9.375-2.593 11.162-4.598.506 1.589 1.633 4.021 3.838 4.51V14c-.012.183-.037.361-.062.54C16.224 13.002 17 11.023 17 8.861 17 3.967 13.033 0 8.139 0 6.801 0 5.538.305 4.4.836c-.196-.017-.394-.03-.594-.03zM15 5v.166l-.028-.167L15 5z"/><path fill="#BF6952" d="M10.722 17.723H4.278s.805 1.61 3.222 1.61 3.222-1.61 3.222-1.61zM8 15.5H7c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#662113" d="M4 13c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm7 0c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z"/><path fill="#FFDC5D" d="M20.091 35v-4h-4v4h-1v1h6v-1z"/><path fill="#88C9F9" d="M23.091 33h-3l-2 3h8.818c-.518-1.602-2.159-3-3.818-3zM9.277 36h8.814l-2-3h-2c-.368 0-.719.032-1.055.088-1.941.326-3.301 1.535-3.759 2.912z"/><path fill="#FFDC5D" d="M25.085 26.047L25.083 26h.008v-6h-3.557c-1.018-.574-2.192-.906-3.446-.906s-2.428.332-3.446.906h-3.551v6h.002l-.002.047c0 .145.013.286.022.428.224 3.64 3.257 6.525 6.975 6.525 3.383 0 6.206-2.387 6.856-5.558.092-.451.141-.917.141-1.395z"/><path fill="#F4900C" d="M26.425 22.861c0-4.342-3.519-7.861-7.861-7.861-1.245 0-2.418.297-3.464.812-3.33.07-6.009 2.786-6.009 6.133 0 1.8.786 3.408 2.022 4.53-.009-.142-.022-.284-.022-.428l.002-.047h-.002v-3.035c4.856-.18 7.656-1.81 9.204-3.332 1.065 1.257 2.765 2.841 4.796 3.257V26h-.008l.002.047c0 .478-.049.944-.141 1.395.928-1.291 1.481-2.869 1.481-4.581z"/><path fill="#BF6952" d="M21.091 30h-6s.583 2 3 2 3-2 3-2zm-3-.5c-.13 0-.26-.05-.35-.15-.1-.09-.15-.22-.15-.35s.05-.26.15-.36c.17-.17.52-.18.71.01.09.091.14.221.14.351s-.05.26-.15.35c-.09.099-.22.149-.35.149z"/><path fill="#662113" d="M15.091 28c-.552 0-1-.447-1-1v-1c0-.553.448-1 1-1s1 .447 1 1v1c0 .553-.448 1-1 1zm6 0c-.553 0-1-.447-1-1v-1c0-.553.447-1 1-1 .553 0 1 .447 1 1v1c0 .553-.447 1-1 1z"/></svg>
  )
}

export default FamilyManManBoy
