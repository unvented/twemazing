import React from 'react'

const ManArtistMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#77B255" d="M30 28h-3.641v-3.71h-8.72V28H14c-3.313 0-6 2.686-6 6v2h28v-2c0-3.314-2.685-6-6-6z"/><path fill="#CC9B7A" d="M17.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.146-.373 4.363-1.746v-3.491h-8.728v3.491z"/><path fill="#D5AB88" d="M15.444 15.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623"/><path fill="#D5AB88" d="M13.477 16.959c0-5.589 3.816-10.121 8.523-10.121s8.522 4.532 8.522 10.121S26.707 27.08 22 27.08c-4.706 0-8.523-4.531-8.523-10.121"/><path fill="#963B22" d="M26.525 21.346l-1.268-.274c-.404-.094-1.173-.072-1.535-.072h-3.689c-.362 0-1.131-.022-1.536.071l-1.266.274c-.348.101-.55.393-.45.74.082.288.345.441.63.441.059 0 .12-.026.18-.042l1.267-.371c-.143.191-.181.446-.066.676.115.228.347.36.587.36.099 0 .199-.024.293-.071l1.034-.518c.022.215.139.414.346.518.094.046.195.069.293.069.241 0 .473-.134.587-.363l.068-.138-.053.138c.114.229.224.363.465.363.098 0 .198-.023.292-.069.207-.104.323-.303.347-.518l1.033.518c.095.047.195.071.293.071.241 0 .472-.132.587-.36.114-.229.076-.484-.066-.676l1.266.371c.059.016.121.042.181.042.285 0 .547-.152.63-.441.099-.347-.102-.639-.45-.739zM22 3.48c5.648 0 9.178 4.168 9.178 7.641s-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0 0 0 .706 2.779-3.53-.694 0 0-2.118 1.389-2.824 4.862-.196.964-1.412 0-1.412-3.473C12.822 7.648 15.646 3.48 22 3.48"/><path fill="#662113" d="M18 17c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1"/><path fill="#C1694F" d="M22.75 19.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75"/><path fill="#66757F" d="M33.015 6.385c-.439-2.026-3.627-3.888-8.267-4.105.346-.222.672-.402.924-.48.72-.224-.218-.917-.917-.917 0 0-1.092.505-1.93 1.41C16.069 2.641 10.832 6.344 11 7.302c.175 1.004 1.232-.01 1.273.845.04.855.938.938.938.938s2.44-.401 7.949.051c5.51.451 8.503.507 9.919.888.872.235 1.006-1.106 1.006-1.106s1.44-.168.93-2.533z"/><path fill="#D99E82" d="M27.47 36c-.279-3.867-4.091-7.954-9.64-9.879-6.702-2.326-13.383-.614-14.923 3.823-.671 1.936-.252 4.071.989 6.056H27.47z"/><path fill="#5C913B" d="M19.782 31.382c-.3.862.363 1.876 1.48 2.264 1.117.387 2.266.002 2.564-.861.3-.861-.363-1.876-1.48-2.263-1.117-.388-2.265-.003-2.564.86"/><path fill="#269" d="M5.401 33.001c-.299.863.364 1.876 1.481 2.264 1.117.388 2.265.003 2.564-.86.3-.862-.363-1.876-1.48-2.264-1.117-.388-2.266-.003-2.565.86"/><path fill="#DD2E44" d="M7.249 28.021c-.299.862.364 1.876 1.481 2.264 1.116.387 2.265.002 2.564-.861.3-.861-.364-1.876-1.48-2.263-1.117-.389-2.266-.004-2.565.86"/><path fill="#FFCC4D" d="M14.276 28.005c-.272.872.423 1.864 1.552 2.216 1.128.353 2.265-.069 2.536-.94.271-.872-.424-1.864-1.552-2.216-1.128-.353-2.264.069-2.536.94"/><path fill="#D5AB88" d="M1 30c.078-1.208 1.394-3.184 3-3 1.665.19.129 3.129 0 4s.144 2.938-1 3c-1.546.084-2.14-1.814-2-4"/></svg>
  )
}

export default ManArtistMediumSkinTone
