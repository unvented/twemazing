import React from 'react'

const WomanWithVeilMediumDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E6E7E8" d="M35 18c0-7.002-2-13-7-16s-10-.784-10-.784v.034l-.001-.034S13-1 8 2s-7 8.998-7 16c0 7.003-1 18-1 18h36s-1-10.998-1-18z"/><path fill="#60352A" d="M17.999 2.809C22.875 2.809 31 5.247 31 15.81c0 10.564 0 13.001-2.438 13.001s-5.688-2.438-10.563-2.438c-4.876 0-8.056 2.438-10.563 2.438-2.716 0-2.438-9.751-2.438-13.001 0-10.563 8.125-13.001 13.001-13.001z"/><path fill="#FFF" d="M32 36v-1c0-3.313-2.687-6-6-6H10c-3.313 0-6 2.687-6 6v1h28z"/><path fill="#AF7E57" d="M27.75 15.455c0-6.928-4.366-12.544-9.751-12.544s-9.75 5.616-9.75 12.544c0 5.581 2.835 10.305 6.751 11.934V29h-3v5h12v-5h-3v-1.613c3.916-1.629 6.75-6.353 6.75-11.932z"/><path fill="#60352A" d="M5.863 20c-.025 0-.052-.59-.052-.876 0-4.063 2.438.425 2.438-2.47s1.625-3.266 3.25-4.891c.812-.812 2.438-2.446 2.438-2.446s4.063 2.434 7.314 2.434c3.25 0 6.5 1.624 6.5 4.874s2.438-1.563 2.438 2.5c0 .289-.027.875-.047.875h.853C31 19 31 17.392 31 15.874 31 5.311 22.875 1.216 17.999 1.216c-4.876 0-13.001 4.11-13.001 14.674 0 .942-.023 2.11.01 4.11h.855z"/><path fill="#DF1F32" d="M20.344 22.969c-.531.344-1.219.812-2.349.812-1.13 0-1.817-.469-2.349-.812-.531-.344-1.469.289-.656.988.812.699 2.053.979 3.001.979h.008c.948 0 2.188-.279 3.001-.979.812-.699-.125-1.332-.656-.988z"/><path fill="#915A34" d="M19 20.5c0 .276-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h1c.276 0 .5.224.5.5z"/><path fill="#662113" d="M14 18c-.552 0-1-.448-1-1v-1c0-.552.448-1 1-1s1 .448 1 1v1c0 .552-.448 1-1 1zm8 0c-.553 0-1-.448-1-1v-1c0-.552.447-1 1-1s1 .448 1 1v1c0 .552-.447 1-1 1z"/><path fill="#FFF" d="M27.647 5.96c-.477-.564-.981-1.079-1.516-1.535C24.69 4.765 21.596 5 18 5c-3.591 0-6.682-.234-8.126-.572-.534.456-1.04.97-1.516 1.534C10.229 6.58 13.844 7 18 7c4.159 0 7.777-.42 9.647-1.04z"/></svg>
  )
}

export default WomanWithVeilMediumDarkSkinTone
