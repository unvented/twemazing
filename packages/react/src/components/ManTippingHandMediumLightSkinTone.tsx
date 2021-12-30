import React from 'react'

const ManTippingHandMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#4289C1" d="M22 27H4c-2.209 0-4 1.791-4 4v5h26v-5c0-2.209-1.791-4-4-4z"/><path fill="#2A6797" d="M21 32h1v4h-1zM4 32h1v4H4z"/><path fill="#F3D2A2" d="M10 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6z"/><path fill="#4289C1" d="M29 36h-7l1-17h6z"/><path fill="#E2C196" d="M31.541 15.443c-.144-.693-.822-1.139-1.517-.997L27.35 15H25c-1.104 0-2 .896-2 2v2h5c1.079 0 1.953-.857 1.992-1.927l.355-.073H31c0-.074-.028-.144-.045-.216.444-.276.698-.799.586-1.341z"/><path fill="#F3D2A2" d="M36 16c0-.552-.447-1-1-1l-6 1h-5c-.553 0-1 .448-1 1v2h6l6-2s1-.447 1-1zM4 5.938V17c0 4.971 4.029 9 9 9s9-4.029 9-9V6.25L4 5.938z"/><path fill="#C1694F" d="M9 22h8s-1 2-4 2-4-2-4-2z"/><path fill="#662113" d="M9 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z"/><path fill="#C1694F" d="M14 19.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#F3D2A2" d="M5.847 13.715c0 1.58-.801 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.801-2.861 1.788-2.861s1.788 1.281 1.788 2.861zm17.882 0c0 1.58-.8 2.861-1.788 2.861s-1.788-1.281-1.788-2.861c0-1.58.8-2.861 1.788-2.861s1.788 1.281 1.788 2.861z"/><path fill="#FFE51E" d="M13 .823C5.981.823 2.861 5.507 2.861 9.411c0 3.903 1.343 4.986 1.56 3.903.78-3.903 3.12-5.101 3.12-5.101 4.68 3.904 3.9.781 3.9.781 4.679 4.684 2.34 0 2.34 0 1.56 1.562 6.239 1.562 6.239 1.562s.78 1.198 1.559 2.759c.78 1.562 1.56 0 1.56-3.903 0-3.905-3.9-8.589-10.139-8.589z"/></svg>
  )
}

export default ManTippingHandMediumLightSkinTone
