import React from 'react'

const WomanFarmerMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#77B255" d="M31 27.575c-.959-.372-1.996-.575-3-.575H16c-1.004 0-2.041.203-3 .575-2.207.855-4 2.614-4 4.925V36h26v-3.5c0-2.311-1.792-4.07-4-4.925z"/><path fill="#269" d="M28 27v7.5H16V27c-1.004 0-2.041.203-3 .575V36h18v-8.425c-.959-.372-1.996-.575-3-.575z"/><path fill="#3E721D" d="M18 27h8l-4 7-4-7"/><path fill="#FFE51E" d="M21.945 5.069c4.105 0 10.947 2.053 10.947 10.947 0 8.896 0 10.948-2.053 10.948s-4.79-2.053-8.895-2.053c-4.105 0-6.785 2.053-8.895 2.053-2.287 0-2.053-8.211-2.053-10.948.001-8.894 6.844-10.947 10.949-10.947"/><path fill="#F3D2A2" d="M18.328 27.018c1.466 1.065 2.964.98 3.672.98s2.194.085 3.66-.98v-3.203h-7.332v3.203z"/><path fill="#E2C196" d="M18.322 25.179c1.022 1.155 2.29 1.468 3.668 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.338v2.936z"/><path fill="#F3D2A2" d="M13.734 15.718c0-5.834 3.676-10.563 8.211-10.563 4.533 0 8.209 4.729 8.209 10.563 0 5.833-3.676 10.285-8.209 10.285-4.535 0-8.211-4.452-8.211-10.285"/><path fill="#DF1F32" d="M21.945 23.543c-1.606 0-2.447-.794-2.537-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.961-.007.035.032.551.491 1.576.491 1.038 0 1.555-.473 1.576-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.089.091-.929.885-2.535.885"/><path fill="#FFE51E" d="M11.725 19c-.021-1-.044-.224-.044-.465 0-3.422 2.053.494 2.053-1.943 0-2.439 1.368-2.683 2.736-4.051.685-.685 2.053-2.026 2.053-2.026s3.421 2.067 6.158 2.067c2.736 0 5.474 1.375 5.474 4.112 0 2.736 2.053-1.584 2.053 1.837 0 .244-.022-.531-.04.469h.719c.006-2 .006-1.924.006-3.202 0-8.895-6.842-10.729-10.948-10.729-4.104 0-10.947 1.778-10.947 10.674 0 .793-.02 1.257.008 3.257h.719z"/><path fill="#662113" d="M18.608 17.887c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.466 0 .847.381.847.846v.845c0 .466-.381.847-.847.847m6.765 0c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c0 .466-.381.847-.846.847"/><path fill="#C1694F" d="M22.836 20.5h-1.69c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.69c.233 0 .424.19.424.424v.153c0 .233-.191.423-.424.423M7 31.75c0-.69-.56-1.25-1.25-1.25s-1.25.56-1.25 1.25V36H7v-4.25z"/><path fill="#66757F" d="M10.75 13.5c-.414 0-.75.336-.75.75v8.5l.002.01c-.005 2.088-1.516 3.813-3.502 4.168V14.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75v12.677c-1.986-.355-3.497-2.079-3.502-4.168l.002-.01v-8.5c0-.414-.336-.75-.75-.75s-.75.337-.75.751v8.5c0 2.921 2.18 5.327 5 5.696V31c0 .414.336.75.75.75s.75-.336.75-.75v-2.554c2.82-.368 5-2.775 5-5.696v-8.5c0-.414-.336-.75-.75-.75z"/><path fill="#C1694F" d="M30 8.8c0 1.32-3.092 2.2-8 2.2-4.909 0-8-.88-8-2.2C14 5.253 18 0 19.333 0 20.667 0 21.556 1.76 22 1.76S23.333 0 24.667 0C26 0 30 5.253 30 8.8z"/><path fill="#C1694F" d="M36 8c0 1.657-3.5 6-14 6S8 9.657 8 8s6.82-1 14-1 14-.657 14 1z"/><path fill="#292F33" d="M30 8.8c0 1.32-3.092 2.2-8 2.2-4.909 0-8-.88-8-2.2 0-.566.102-1.175.279-1.8 2.388 2 13.054 2 15.443.004.175.623.278 1.231.278 1.796z"/><path fill="#F3D2A2" d="M15.444 15.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623"/></svg>
  )
}

export default WomanFarmerMediumLightSkinTone
