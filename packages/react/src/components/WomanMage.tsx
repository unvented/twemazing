import React from 'react'

const WomanMage = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><ellipse fill="#292F33" cx="18" cy="19.024" rx="15" ry="3.529"/><path fill="#D1D3D4" d="M8.226 16c-.135 1-.22 1.83-.22 2.79 0 2.737-.214 11.027 1.875 11.027 1.928 0 4.374-2.013 8.123-2.013 3.748 0 6.247 2.072 8.122 2.072C28 29.876 28 27.676 28 18.78c0-.96-.085-1.78-.22-2.78H8.226z"/><path fill="#9266CC" d="M26.276 28.276h-16c-2.486 0-4.774 1.443-5.762 3.449-.368-.415-.907-.619-1.514-.619-1.1 0-2 .935-2 1.998V36h31v-1.931c0-3.199-2.411-5.793-5.724-5.793z"/><path fill="#FFDC5D" d="M14 25v3.234c0 .004.011.007.015.011.132.237 3.737 6.739 3.989 6.739.253 0 3.854-6.502 3.985-6.739.004-.004.01-.007.01-.011V25H14z"/><path fill="#F9CA55" d="M14.006 27.599c1.115 1.155 2.497 1.468 3.999 1.468 1.503 0 2.886-.312 4.001-1.468v-2.937h-8v2.937z"/><path fill="#FFDC5D" d="M25.361 15.852c-.02 0-.039.008-.06.01-.771-4.678-3.743-8.168-7.298-8.168-3.557 0-6.529 3.49-7.3 8.169-.022-.001-.043-.01-.065-.01C9.734 15.852 9 17.027 9 18.475s.734 2.622 1.639 2.622c.05 0 .097-.017.146-.024.881 4.388 3.776 7.469 7.219 7.469 3.442 0 6.335-3.08 7.217-7.468.047.007.092.023.14.023.905 0 1.639-1.174 1.639-2.622s-.733-2.623-1.639-2.623z"/><path fill="#DF1F32" d="M18.004 26.526c-1.606 0-2.447-.794-2.537-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.961-.007.035.032.551.491 1.576.491 1.038 0 1.555-.473 1.576-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.09.091-.929.885-2.535.885"/><path fill="#C1694F" d="M18.895 23.5h-1.69c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.69c.233 0 .424.19.424.424v.153c0 .233-.191.423-.424.423"/><path fill="#662113" d="M14.667 21.384c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.466 0 .847.381.847.846v.845c0 .466-.381.847-.847.847m6.765 0c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c0 .466-.381.847-.846.847"/><path fill="#D1D3D4" d="M17 15s-4 4-8 4c0 0-1-1 0-2s8-2 8-2zm2 0s4 4 8 4c0 0 1-1 0-2s-8-2-8-2z"/><path fill="#9266CC" d="M25.765 15.157C24.537 12.47 18.793 0 18 0s-6.537 12.47-7.765 15.157C5.415 16.001 3 17.595 3 19c6-2 11-2.443 15-2.443S27 17 33 19c0-1.405-2.415-2.999-7.235-3.843z"/><path fill="#D99E82" d="M5 36H3V11.862L2 8h4l-1 3.862z"/><circle fill="#55ACEE" cx="4" cy="6" r="3"/><circle fill="#B0F0FF" cx="3.5" cy="5.5" r="1.5"/><path fill="#FFDC5D" d="M7 30.5C7 32.433 5.657 34 4 34s-3-1.567-3-3.5S2.343 28 4 28s3 .567 3 2.5z"/></svg>
  )
}

export default WomanMage
