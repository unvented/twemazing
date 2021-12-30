import React from 'react'

const PersonGesturingOk = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#FFAC33" d="M21.906 1.262c-2.02-.654-6.772-.475-7.96 1.069-3.089.059-6.713 2.851-7.188 6.535-.47 3.645.578 5.338.951 8.079.422 3.106 2.168 4.099 3.564 4.515C13.281 24.114 15.415 24 19 24c7 0 10.334-4.684 10.629-12.639.178-4.812-2.645-8.456-7.723-10.099z"/><path fill="#FFDC5D" d="M25.909 11.701c-.677-.938-1.545-1.693-3.446-1.96.713.327 1.396 1.455 1.485 2.079.089.624.178 1.129-.386.505-2.26-2.499-4.722-1.515-7.162-3.041-1.704-1.066-2.223-2.246-2.223-2.246s-.208 1.574-2.792 3.178c-.749.465-1.643 1.5-2.139 3.03C8.889 14.345 9 15.325 9 17c0 4.889 4.029 9 9 9s9-4.147 9-9c0-3.041-.319-4.229-1.091-5.299z"/><path fill="#FA743E" d="M32 6.625L29 5l-2 1.625s3 7.25 3 11.125S26.5 27 26.5 27h-17S6 21.625 6 17.75 9 6.625 9 6.625L7 5 4 6.625S0 13.75 0 17.75 5.5 36 5.5 36h25S36 21.75 36 17.75 32 6.625 32 6.625z"/><path fill="#FFDC5D" d="M15 22v6c0 1.657 1.343 3 3 3s3-1.343 3-3v-6h-6zm4.24-19.604c.042-.521.593-.727 1.146-.708 0 0 5.456.311 7.521 1.271C30.522 4.174 32 6.625 32 6.625h-5S25.917 5.104 25.062 4.5c-.881-.623-4.222-1.215-4.719-1.312s-1.145-.271-1.103-.792zm-2.48 0c-.042-.521-.593-.727-1.146-.708 0 0-5.456.311-7.521 1.271C5.478 4.174 4 6.625 4 6.625h5s1.083-1.521 1.938-2.125c.881-.623 4.222-1.215 4.719-1.312.496-.098 1.145-.271 1.103-.792z"/><path fill="#C1694F" d="M22 21h-8s1 2 4 2 4-2 4-2zm-3-1.5h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5s-.224.5-.5.5z"/><path fill="#662113" d="M14 16c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1z"/></svg>
  )
}

export default PersonGesturingOk
