import React from 'react'

const WomanJugglingMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFE51E" d="M17.455 6.546c3.741 0 9.974 1.871 9.974 9.974 0 8.106 0 9.975-1.87 9.975s-4.363-1.869-8.104-1.869c-3.741 0-6.182 1.869-8.104 1.869-2.084 0-1.871-7.482-1.871-9.975-.001-8.103 6.233-9.974 9.975-9.974"/><path fill="#9266CC" d="M26 26.163l.017.836H6V36h24v-9.835z"/><path fill="#F3D2A2" d="M14 27s.85 2.063 3.55 2.063S21 27 21 27l-.024-3.9L14 23v4z"/><path fill="#E2C196" d="M14.019 24.686c1.058 1.207 2.049 1.51 3.477 1.51 1.426 0 2.426-.304 3.485-1.51v-2.5H14.02v2.5z"/><path fill="#F3D2A2" d="M9.972 16.249c0-5.316 3.35-9.625 7.482-9.625 4.13 0 7.48 4.309 7.48 9.625 0 5.313-3.35 9.37-7.48 9.37-4.132-.001-7.482-4.057-7.482-9.37"/><path fill="#DF1F32" d="M17.455 23.378c-1.464 0-2.229-.723-2.312-.807-.243-.244-.243-.639 0-.883.242-.238.631-.24.876-.004.032.029.502.447 1.436.447.946 0 1.417-.432 1.435-.449.25-.232.642-.226.877.018.237.246.237.631-.003.871-.08.084-.846.807-2.309.807"/><path fill="#FFE51E" d="M8.142 19.239c-.019-.912-.04-.205-.04-.424 0-3.118 1.871.449 1.871-1.771 0-2.222 1.247-2.444 2.494-3.69.624-.625 1.87-1.847 1.87-1.847s3.117 1.883 5.612 1.883c2.491 0 4.987 1.253 4.987 3.747 0 2.492 1.87-1.442 1.87 1.674 0 .223-.021-.484-.037.428h.655c.005-1.822.005-1.753.005-2.918 0-8.104-6.233-11.122-9.975-11.122-3.74 0-9.974 2.967-9.974 11.072 0 .723-.019 1.146.007 2.968h.655z"/><path fill="#662113" d="M14.414 18.224c-.423 0-.77-.346-.77-.771v-.769c0-.424.348-.771.77-.771.424 0 .771.347.771.771v.769c.001.425-.347.771-.771.771m6.163 0c-.424 0-.771-.346-.771-.771v-.769c0-.424.347-.771.771-.771.424 0 .771.347.771.771v.769c.001.425-.347.771-.771.771"/><path fill="#C1694F" d="M18.267 20.606h-1.541c-.212 0-.385-.174-.385-.387v-.139c0-.215.173-.389.385-.389h1.541c.212 0 .385.174.385.389v.139c-.001.214-.173.387-.385.387"/><path fill="#D1D3D4" d="M5.895 14.205s-3.834 1.39-4.214 6.221c0 0-2.4-4.817-.522-10.149l4.736 3.928zm14.156-8.228s-2.758-3.005-7.363-1.497c0 0 3.522-4.069 9.167-4.387l-1.804 5.884zm9.22 10.36s1.972-3.571-.923-7.457c0 0 4.978 2.046 7.075 7.296l-6.152.161z"/><circle fill="#5C913B" cx="4.603" cy="10.986" r="3.5"/><circle fill="#BE1931" cx="22.516" cy="3.5" r="3.5"/><circle fill="#3B88C3" cx="32.396" cy="17.854" r="3.5"/><path fill="#E2C196" d="M32.646 23.488c-.111-.538-.634-.884-1.169-.774l-2.057.431h-1.809c-.85 0-1.538.695-1.538 1.555v1.552h3.847c.83 0 1.503-.666 1.532-1.496l.273-.057h.503c0-.059-.022-.113-.035-.169.342-.215.537-.621.453-1.042z"/><path fill="#F3D2A2" d="M36.075 23.921c0-.429-.344-.776-.77-.776l-4.616.776h-3.847c-.426 0-.77.349-.77.778L26 26.25l1.611.002h3.078l4.616-1.553c.001 0 .77-.348.77-.778z"/><path fill="#E2C196" d="M3.43 27.236c.11-.538.633-.884 1.168-.774l2.058.431h1.808c.85 0 1.539.695 1.539 1.555V30H6.155c-.83 0-1.503-.666-1.532-1.496l-.273-.057h-.503c0-.059.022-.113.036-.169-.343-.215-.538-.621-.453-1.042z"/><path fill="#F3D2A2" d="M0 27.669c0-.429.344-.776.769-.776l4.617.776h3.847c.425 0 .769.349.769.778V30H5.386L.769 28.447S0 28.099 0 27.669z"/><path fill="#744EAA" d="M10 30h1v6h-1zm15-3h1v9h-1z"/></svg>
  )
}

export default WomanJugglingMediumLightSkinTone
