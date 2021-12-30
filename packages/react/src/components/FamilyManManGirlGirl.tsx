import React from 'react'

const FamilyManManGirlGirl = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFDC5D" d="M26 22v-4h5v4h2v6h-9v-6z"/><path fill="#3B93D9" d="M31 22l-2.528 3.778L26 22h-5c-2 0-3 1-3 2.973V36h18V22h-5z"/><path fill="#1B6399" d="M20.986 26h1.028v10h-1.028z"/><path fill="#FFDC5D" d="M21 4l.024 10c.011.175.036.347.059.518.494 3.64 3.618 6.45 7.417 6.45 3.978 0 7.223-3.079 7.476-6.969H36V4H21z"/><path fill="#FFAC33" d="M19.042 8.861c0 2.151.767 4.123 2.042 5.658-.023-.172-.048-.343-.059-.518l-.01-4.033c5.362-.302 8.513-2.675 10.202-4.57C31.782 7.17 33.114 10 35.861 10H36V1.887C34.906 1.206 33.619.806 32.236.806c-.201 0-.398.014-.595.03C30.504.305 29.24 0 27.902 0c-4.894 0-8.86 3.967-8.86 8.861z"/><path fill="#BF6952" d="M25.278 17.723h6.444s-.805 1.61-3.222 1.61-3.222-1.61-3.222-1.61zM28 15.5h1c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-1c-.276 0-.5.224-.5.5s.224.5.5.5z"/><path fill="#662113" d="M32 13c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1s-1 .448-1 1v1c0 .552.448 1 1 1zm-7 0c.552 0 1-.448 1-1v-1c0-.552-.448-1-1-1s-1 .448-1 1v1c0 .552.448 1 1 1z"/><path fill="#FFDC5D" d="M5 22v-4h5v4h2v6H3v-6z"/><path fill="#3B94D9" d="M15 22h-5l-2.472 3.778L5 22H0v14h18V24.973C18 23 17 22 15 22z"/><path fill="#1B6399" d="M13.986 26h1.028v10h-1.028z"/><path fill="#FFDC5D" d="M15 14V5L0 4v10h.024c.252 3.89 3.498 6.969 7.476 6.969 3.791 0 6.932-2.799 7.438-6.428.025-.18.05-.358.062-.541z"/><path fill="#FFAC33" d="M3.806.806C2.405.806 1.102 1.215 0 1.912v8.083c5.947-.055 9.375-2.593 11.162-4.598.506 1.589 1.633 4.021 3.838 4.51V14c-.012.183-.037.361-.062.54C16.224 13.002 17 11.023 17 8.861 17 3.967 13.033 0 8.139 0 6.801 0 5.538.305 4.4.836c-.196-.017-.394-.03-.594-.03zM15 5v.166l-.028-.167L15 5z"/><path fill="#BF6952" d="M10.722 17.723H4.278s.805 1.61 3.222 1.61 3.222-1.61 3.222-1.61zM8 15.5H7c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#662113" d="M4 13c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm7 0c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z"/><path fill="#FFDC5D" d="M32.998 22.714l-4.286-.857-7.714.857V27H21l-.002.04c0 3.291 2.685 5.96 5.998 5.96 3.312 0 5.997-2.669 5.997-5.96l-.002-.04h.007v-4.286z"/><path fill="#F4900C" d="M33.995 25.192c0-.023.003-.044.003-.067l-.002-.039.002-.086-.006.006C33.928 21.679 31.216 19 27.873 19c-.298 0-.588.029-.875.07-.286-.041-.577-.07-.875-.07-3.383 0-6.125 2.742-6.125 6.125 0 0 .125 3.188-1 6.875 0 0 3.344 2 8 2s8-2 8-2c-.968-3.172-1.01-6.061-1.003-6.808zm-1.002 1.848c0 3.291-2.685 5.96-5.997 5.96s-5.997-2.669-5.997-5.96c-.001-.013.001-.027.001-.04h-.002v-1.911c4.172-.181 6.588-1.592 7.929-2.91.91 1.074 2.351 2.414 4.071 2.816V27h-.007l.002.04z"/><path fill="#FFDC5D" d="M28.998 34v-3h-4v3h-1v2h6v-2z"/><path fill="#EA596E" d="M31.998 33h-3l-2 2-2-2h-2c-2.493 0-4.276 1.385-4.814 3h17.632c-.518-1.602-2.159-3-3.818-3z"/><path fill="#BF6952" d="M28.998 30h-4s.389 1.333 2 1.333 2-1.333 2-1.333zm-2-.5c-.13 0-.26-.05-.35-.15-.1-.09-.15-.22-.15-.35s.05-.26.15-.36c.17-.17.52-.18.71.01.09.091.14.221.14.351s-.05.26-.15.35c-.09.099-.22.149-.35.149z"/><path fill="#662113" d="M28.998 28c-.461 0-.833-.373-.833-.833v-.833c0-.461.373-.833.833-.833.461 0 .833.373.833.833v.833c.001.46-.372.833-.833.833zm-4 0c-.461 0-.833-.373-.833-.833v-.833c0-.461.373-.833.833-.833.461 0 .833.373.833.833v.833c.001.46-.372.833-.833.833z"/><path fill="#FFDC5D" d="M14.998 22.714l-4.286-.857-7.714.857V27H3l-.002.04c0 3.291 2.685 5.96 5.998 5.96 3.312 0 5.997-2.669 5.997-5.96l-.002-.04h.007v-4.286z"/><path fill="#F4900C" d="M15.995 25.192c0-.023.003-.044.003-.067l-.002-.039.002-.086-.006.006C15.928 21.679 13.216 19 9.873 19c-.298 0-.588.029-.875.07-.286-.041-.577-.07-.875-.07-3.383 0-6.125 2.742-6.125 6.125 0 0 .125 3.188-1 6.875 0 0 3.344 2 8 2s8-2 8-2c-.968-3.172-1.01-6.061-1.003-6.808zm-1.002 1.848c0 3.291-2.685 5.96-5.997 5.96s-5.997-2.669-5.997-5.96C2.998 27.027 3 27.013 3 27h-.002v-1.911c4.172-.181 6.588-1.592 7.929-2.91.91 1.074 2.351 2.414 4.071 2.816V27h-.007l.002.04z"/><path fill="#FFDC5D" d="M10.998 34v-3h-4v3h-1v2h6v-2z"/><path fill="#EA596E" d="M13.998 33h-3l-2 2-2-2h-2C2.505 33 .722 34.385.184 36h17.632c-.518-1.602-2.159-3-3.818-3z"/><path fill="#BF6952" d="M10.998 30h-4s.389 1.333 2 1.333 2-1.333 2-1.333zm-2-.5c-.13 0-.26-.05-.35-.15-.1-.09-.15-.22-.15-.35s.05-.26.15-.36c.17-.17.52-.18.71.01.09.091.14.221.14.351s-.05.26-.15.35c-.09.099-.22.149-.35.149z"/><path fill="#662113" d="M10.998 28c-.461 0-.833-.373-.833-.833v-.833c0-.461.373-.833.833-.833.461 0 .833.373.833.833v.833c.001.46-.372.833-.833.833zm-4 0c-.461 0-.833-.373-.833-.833v-.833c0-.461.373-.833.833-.833.461 0 .833.373.833.833v.833c.001.46-.372.833-.833.833z"/></svg>
  )
}

export default FamilyManManGirlGirl
