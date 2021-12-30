import React from 'react'

const ManFrowningMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#F3D2A2" d="M9 5.938V17c0 4.971 4.029 9 9 9s9-4.029 9-9V6.25L9 5.938z"/><path fill="#662113" d="M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z"/><path fill="#C1694F" d="M19 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#F3D2A2" d="M10.847 13.715c0 1.58-.8 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.801-2.861 1.788-2.861s1.788 1.281 1.788 2.861zm17.882 0c0 1.58-.8 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.8-2.861 1.788-2.861s1.788 1.281 1.788 2.861z"/><path fill="#FFE51E" d="M18 .823c-7.019 0-10.139 4.684-10.139 8.588 0 3.903 1.343 4.986 1.56 3.903.78-3.903 3.12-5.101 3.12-5.101 4.68 3.904 3.9.781 3.9.781 4.679 4.684 2.34 0 2.34 0 1.56 1.562 6.239 1.562 6.239 1.562s.78 1.198 1.559 2.759c.78 1.562 1.56 0 1.56-3.903 0-3.905-3.9-8.589-10.139-8.589z"/><path fill="#4289C1" d="M27 27H9c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z"/><path fill="#2A6797" d="M26 32h1v4h-1zM9 32h1v4H9z"/><path fill="#F3D2A2" d="M15 24v4c0 1.657 1.343 3 3 3s3-1.343 3-3v-4h-6z"/><path fill="#F3D2A2" d="M15 24v4c0 1.657 1.343 3 3 3s3-1.343 3-3v-4h-6z"/><path fill="#C1694F" d="M15 24s1.001-2 3-2 3 2 3 2h-6z"/></svg>
  )
}

export default ManFrowningMediumLightSkinTone
