import React from 'react'

const WomanGuardMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#DD2E44" d="M28 36v-2.5c0-3.313-1.687-5.5-5-5.5H13c-3.313 0-5 2.187-5 5.5V36h20z"/><path fill="#292F33" d="M27 6c0-3.3-2.7-6-6-6h-6c-3.3 0-6 2.7-6 6v12c0 4.971 4.029 5 9 5s9-.029 9-5V6z"/><path fill="#FFE51E" d="M18 18H9.679s-.016 1.731.01 2.844c.06 2.517.342 5.496 1.539 5.496 1.594 0 3.616-1.549 6.715-1.549 3.099 0 5.166 1.549 6.715 1.549 1.293 0 1.506-1.09 1.542-5.345.008-.846.009-2.995.009-2.995H18z"/><path fill="#F3D2A2" d="M24.94 18.883c0-.298-.013-.592-.035-.883H10.983c-.022.291-.035.585-.035.883 0 3.545 1.598 6.483 3.915 7.881v1.749c1.249.907 2.041 1.153 3.124 1.153 1.083 0 1.874-.246 3.124-1.153v-1.799c2.27-1.418 3.829-4.329 3.829-7.831z"/><path fill="#DF1F32" d="M17.944 25.551c-1.368 0-2.084-.676-2.161-.754-.228-.228-.228-.597 0-.824.226-.225.59-.227.819-.006.03.027.47.418 1.342.418.885 0 1.325-.402 1.344-.419.232-.218.599-.211.821.017.221.229.221.589-.003.814-.078.077-.794.754-2.162.754z"/><path fill="#662113" d="M15.17 20.731h-.137c-.358 0-.652-.293-.652-.652v-.858c0-.358.293-.652.652-.652h.137c.358 0 .652.293.652.652v.858c0 .359-.293.652-.652.652zm5.764 0h-.137c-.358 0-.652-.293-.652-.652v-.858c0-.358.293-.652.652-.652h.137c.358 0 .652.293.652.652v.858c0 .359-.293.652-.652.652z"/><path fill="#C1694F" d="M18.679 22.958h-1.391c-.212 0-.385-.173-.385-.385v-.081c0-.212.173-.385.385-.385h1.391c.212 0 .385.173.385.385v.081c0 .212-.173.385-.385.385z"/><path fill="#292F33" d="M13.578 29.492l-4.653.737c-.272.043-.529-.144-.572-.416l-.156-.988c-.043-.272.144-.529.416-.572l4.653-.737c.272-.043.529.144.572.416l.156.988c.043.271-.144.529-.416.572zm8.87 0l4.653.737c.272.043.529-.144.572-.416l.156-.988c.043-.272-.144-.529-.416-.572l-4.653-.737c-.272-.043-.529.144-.572.416l-.156.988c-.043.271.144.529.416.572z"/><path fill="#99AAB5" d="M11.875 18s-.174 9 6.113 9 6.137-9 6.137-9H25s-.307 10-7 10-7-10-7-10h.875z"/><path fill="#F5F8FA" d="M17.5 30h1v6h-1z"/><path fill="#292F33" d="M21.13 26.971c0 1.459-2.071 2.022-3.13 2.022-1 0-3.13-.563-3.13-2.022 0 0-.574-.117-.574 1.096 0 1.214 1.704 2.778 3.704 2.778 1.956 0 3.704-1.564 3.704-2.778 0-1.213-.574-1.096-.574-1.096z"/></svg>
  )
}

export default WomanGuardMediumLightSkinTone
