import React from 'react'

const WomanStudentLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M31 36v-3.5c0-3.314-3.685-5.5-7-5.5H12c-3.313 0-7 2.186-7 5.5V36h26z"/><path fill="#66757F" d="M8.1 33.341c.251 0 .401 2.659.401 2.659h-.956s.193-2.659.555-2.659m3 0c.251 0 .401 2.659.401 2.659h-.957c.001 0 .194-2.659.556-2.659m13.845 0c-.25 0-.4 2.659-.4 2.659h.955s-.193-2.659-.555-2.659m3 0c-.25 0-.4 2.659-.4 2.659h.955s-.193-2.659-.555-2.659"/><path fill="#9266CC" d="M18 34.411C22.078 32.463 23.62 27 23.62 27H12.38s1.542 5.463 5.62 7.411z"/><path fill="#744EAA" d="M13 27h9.875s-1.256 3.5-4.938 3.5S13 27 13 27"/><path fill="#292F33" d="M17.944 5.069c4.106 0 10.948 2.053 10.948 10.948s0 10.948-2.053 10.948c-2.054 0-4.79-2.053-8.896-2.053-4.105 0-6.784 2.053-8.895 2.053-2.287 0-2.053-8.211-2.053-10.948.002-8.895 6.844-10.948 10.949-10.948"/><path fill="#F7DECE" d="M14.328 27.02C14.328 28.5 16.5 29 18 29s3.66-.5 3.66-1.98v-3.205h-7.332v3.205z"/><path fill="#EEC2AD" d="M14.321 25.179c1.023 1.155 2.291 1.468 3.669 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.339v2.936z"/><path fill="#F7DECE" d="M9.734 15.717c0-5.834 3.676-10.563 8.21-10.563 4.534 0 8.211 4.729 8.211 10.563 0 5.833-3.677 10.286-8.211 10.286-4.534 0-8.21-4.452-8.21-10.286"/><path fill="#DF1F32" d="M17.944 23.543c-1.605 0-2.446-.794-2.536-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.96-.007.035.032.553.491 1.576.491 1.039 0 1.557-.473 1.577-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.089.091-.929.885-2.536.885"/><path fill="#662113" d="M14.608 17.886c-.465 0-.846-.381-.846-.846v-.845c0-.465.381-.846.846-.846s.847.381.847.846v.845c0 .465-.382.846-.847.846m6.765 0c-.465 0-.846-.381-.846-.846v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c0 .465-.381.846-.846.846"/><path fill="#C1694F" d="M18.837 20.5h-1.691c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.691c.232 0 .423.19.423.424v.153c0 .233-.191.423-.423.423"/><path fill="#292F33" d="M7.725 19c-.021-1-.044-.224-.044-.465 0-3.422 2.053.494 2.053-1.943 0-2.439 1.368-2.683 2.736-4.051.685-.685 2.053-2.026 2.053-2.026s3.421 2.067 6.158 2.067c2.736 0 5.474 1.375 5.474 4.112s2.053-1.584 2.053 1.837c0 .244-.023-.531-.04.469h.718c.007-2 .007-1.924.007-3.202 0-8.895-6.843-12.207-10.948-12.207S6.998 6.848 6.998 15.743c0 .793-.02 1.257.008 3.257h.719z"/><path fill="#F7DECE" d="M11.444 15.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623"/><path fill="#292F33" d="M32.104 3.511l-14-3c-.068-.015-.14-.015-.209 0l-14 3c-.224.048-.387.243-.395.472-.007.229.142.434.363.498l4.944 1.413C8.615 6.489 8.5 7.176 8.5 8c0 2.29 3.285 3.5 9.5 3.5s9.5-1.21 9.5-3.5c0-.824-.115-1.511-.307-2.106l4.945-1.413c.221-.063.37-.269.362-.498-.008-.229-.171-.424-.396-.472z"/><path fill="#66757F" d="M32.48 3.863c-.076-.265-.35-.417-.618-.344L18 7.48 4.137 3.519c-.262-.073-.542.078-.618.344-.076.265.078.542.344.618l14 4c.045.013.091.019.136.019.045 0 .092-.006.137-.019l14-4c.267-.076.421-.353.344-.618z"/><path fill="#FFCC4D" d="M17.958 3.502l-12 1c-.026.002-.458.057-.458.498v6.095c-.299.186-.5.74-.5 2.405 0 2.485.448 4.5 1 4.5s1-2.015 1-4.5c0-1.665-.201-2.219-.5-2.405V5.46l11.542-.962c.274-.023.479-.264.456-.54-.023-.275-.268-.482-.54-.456z"/></svg>
  )
}

export default WomanStudentLightSkinTone
