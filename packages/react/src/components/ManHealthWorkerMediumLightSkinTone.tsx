import React from 'react'

const ManHealthWorkerMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#3B88C3" d="M32 36v-4c0-3.314-2.685-6-6-6H10c-3.313 0-6 2.686-6 6v4h28z"/><path fill="#F3D2A2" d="M14 26l4 5.001L22 26v-4h-8z"/><path fill="#E2C196" d="M14 24c1.216 1.374 2.355 1.719 3.996 1.719 1.639 0 2.787-.346 4.004-1.719v-4h-8v4z"/><path fill="#F3D2A2" d="M11.444 13.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623"/><path fill="#F3D2A2" d="M9.477 14.96c0-5.589 3.816-10.121 8.523-10.121s8.522 4.532 8.522 10.121S22.707 25.081 18 25.081c-4.707-.001-8.523-4.532-8.523-10.121"/><path fill="#C1694F" d="M18 21.802c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848"/><path fill="#FFE51E" d="M18 1.48c5.648 0 9.178 4.168 9.178 7.641s-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0 0 0 .706 2.779-3.53-.694 0 0-2.118 1.389-2.824 4.862-.196.964-1.412 0-1.412-3.473C8.822 5.648 11.646 1.48 18 1.48"/><path fill="#662113" d="M14 15c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1"/><path fill="#C1694F" d="M18.75 17.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75"/><path fill="#292F33" d="M10 32.5H8c0-4.094 1.877-8.5 6-8.5v2c-3.164 0-4 4.252-4 6.5zm17-4h-2c0-.411-.521-2.5-3-2.5v-2c3.533 0 5 2.931 5 4.5z"/><circle fill="#CCD6DD" cx="9" cy="32.5" r="3"/><circle fill="#F5F8FA" cx="9" cy="32.5" r="2"/><path fill="#292F33" d="M30 34h-2c0-.835-.108-5-2.25-5s-2.25 4.165-2.25 5h-2c0-4.383 1.589-7 4.25-7S30 29.617 30 34z"/><circle fill="#CCD6DD" cx="22.5" cy="34" r="1"/><circle fill="#CCD6DD" cx="29" cy="34" r="1"/></svg>
  )
}

export default ManHealthWorkerMediumLightSkinTone
