import React from 'react'

const ManWithVeilMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#E6E7E8" d="M35 18c0-7.002-2-13-7-16s-10-.784-10-.784v.034l-.001-.034S13-1 8 2s-7 8.998-7 16c0 7.003-1 18-1 18h36s-1-10.998-1-18z"/><path fill="#FFF" d="M26 28H10c-3.313 0-6 2.686-6 6v2h28v-2c0-3.314-2.685-6-6-6z"/><path fill="#F3D2A2" d="M13.64 28.101c1.744 1.268 2.857 2.032 4.37 2.032 1.512 0 2.606-.766 4.35-2.032V24.29h-8.72v3.811z"/><path fill="#E2C196" d="M13.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.147-.373 4.363-1.746v-3.491h-8.728v3.491z"/><path fill="#F3D2A2" d="M11.445 15.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623 1.639 1.174 1.639 2.623m16.388 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623 1.639 1.174 1.639 2.623"/><path fill="#F3D2A2" d="M9.478 16.96c0-5.589 3.816-10.121 8.523-10.121s8.523 4.532 8.523 10.121-3.816 10.121-8.523 10.121c-4.707-.001-8.523-4.532-8.523-10.121"/><path fill="#FFE51E" d="M18 3.48c5.648 0 9.178 4.168 9.178 7.641s-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0 0 0 .706 2.779-3.53-.694 0 0-2.118 1.389-2.824 4.862-.196.964-1.412 0-1.412-3.473C8.822 7.648 11.646 3.48 18 3.48"/><path fill="#C1694F" d="M18 23.802c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.645-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848m.75-4.052h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75"/><path fill="#662113" d="M22 17c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m-8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1"/><path fill="#FFF" d="M23.104 4.821C21.653 4.932 19.901 5 18 5c-2.023 0-3.874-.076-5.375-.202-.81.471-1.488 1.039-2.032 1.674C12.549 6.798 15.139 7 18 7c2.763 0 5.274-.188 7.206-.494-.583-.639-1.29-1.211-2.102-1.685z"/></svg>
  )
}

export default ManWithVeilMediumLightSkinTone
