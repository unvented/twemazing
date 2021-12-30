import React from 'react'

const ManMechanic = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CCD6DD" d="M36 36v-2c0-3.314-2.686-6-6-6H14c-3.313 0-6 2.686-6 6v2h28z"/><path fill="#FFDC5D" d="M17.64 28.038c0 2.846 8.72 2.962 8.72 0v-3.749h-8.72v3.749z"/><path fill="#F9CA55" d="M17.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.146-.373 4.363-1.746v-3.491h-8.728v3.491z"/><path fill="#FFDC5D" d="M15.444 15.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623"/><path fill="#FFDC5D" d="M13.477 16.959c0-5.589 3.816-10.121 8.523-10.121s8.522 4.532 8.522 10.121S26.707 27.08 22 27.08c-4.706 0-8.523-4.531-8.523-10.121"/><path fill="#C1694F" d="M22 23.802c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848"/><path fill="#FFAC33" d="M22 3.48c5.648 0 9.178 4.168 9.178 7.641s-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0 0 0 .706 2.779-3.53-.694 0 0-2.118 1.389-2.824 4.862-.196.964-1.412 0-1.412-3.473C12.822 7.648 15.646 3.48 22 3.48"/><path fill="#662113" d="M18 17c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1"/><path fill="#C1694F" d="M22.75 19.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75"/><path fill="#269" d="M13 28h3v8h-3zm15 0h3v8h-3z"/><path fill="#269" d="M30 31H14l-.875 5H31z"/><path fill="#3B88C3" d="M31.056 9.5c0 1.32-4.092 0-9 0-4.909 0-9 1.32-9 0 0-3.547 1-8.5 9-8.5 7 0 9 4.953 9 8.5z"/><path fill="#269" d="M13.111 9.5s-.5 3 1.5 3c1 0 2.5-2 7.5-2s6.5 2 7.5 2c2 0 1.5-3 1.5-3s-1.5.5-9 .5-9-.5-9-.5z"/><path fill="#55ACEE" d="M13.056 9s-.5 3 1.5 3c1 0 2.5-2 7.5-2s6.5 2 7.5 2c2 0 1.5-3 1.5-3s-1.5.5-9 .5-9-.5-9-.5z"/><path fill="#269" d="M20.556 1.5s0-1.5 1.5-1.5 1.5 1.5 1.5 1.5h-3z"/><ellipse fill="#F5F8FA" cx="27.75" cy="33.75" rx="2.25" ry="1.25"/><path fill="#66757F" d="M6.99 19.481l.012 4.409c0 .553-1.006 1.003-2.249 1.005-1.242.003-2.25-.443-2.251-.995l-.01-4.408c-1.48.807-2.494 2.359-2.492 4.164.007 2.622 2.137 4.746 4.761 4.74 2.624-.007 4.746-2.139 4.74-4.762-.005-1.804-1.026-3.352-2.511-4.153z"/><path fill="#66757F" d="M3.25 27.396h3V36h-3z"/></svg>
  )
}

export default ManMechanic
