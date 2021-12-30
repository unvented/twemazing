import React from 'react'

const MiddleFingerDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#7C533E" d="M30.011 20.183s.093-2.362-1.792-3.068c-1.667-.625-2.309.622-2.309.622s.059-1.914-1.941-2.622c-1.885-.668-2.984.773-2.984.773s-.072-1.687-2.058-2.232c-1.671-.459-2.916 1.167-2.916 1.167v-.822c0-.959-.542-2.575-2.543-2.576-2-.002-2.457 1.659-2.457 2.576v1.614c0 1.323-.948.198-1.636.823-1.57 1.427-2.269 6.431-1.188 10.5 1.312 4.938 4.062 9.101 9.694 9.101 8.132 0 12.124-5.298 12.129-11.924l.001-3.932z"/><path fill="#7C533E" d="M21 18.5c0 1.381-1.119 2.5-2.5 2.5S16 19.881 16 18.5v-16C16 1.119 17.119 0 18.5 0S21 1.119 21 2.5v16zM12.25 16l-2.312.003c-1.625 0-2.141.465-2.812 3.122-.438 1.729-.984 2.547-.984 4.391 0 2.906 4.594 12.348 11.359 12.391L12.25 16z"/><path fill="#543226" d="M10 25.521c0 .251.204.479.456.479h.088c.252 0 .456-.204.456-.456V16h-.969L10 25.521z"/></svg>
  )
}

export default MiddleFingerDarkSkinTone
