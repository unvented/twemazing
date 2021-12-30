import React from 'react'

const WomanFairyLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#ABDFFF" d="M20.769 20.273c-4.558 6.089-5.676 12.675-2.497 14.71 3.179 2.035 9.451-1.252 14.008-7.341 4.558-6.089 2.752-17.029 2.497-16.631-1.777 2.774-9.45 3.173-14.008 9.262z"/><path fill="#ABDFFF" d="M15.255 20.273c4.558 6.089 5.676 12.675 2.498 14.71-3.179 2.035-9.451-1.252-14.009-7.341S.904 10.673 1.247 11.011C5 14.71 10.698 14.184 15.255 20.273z"/><path fill="#55ACEE" d="M4.598 17.829c.96 1.604 1.586 3.147 4.251 5.659 1.03.971.941 2.245-.179 1.398-2.664-2.015-4.306-5.221-4.848-7.268-.382-1.441.292-.597.776.211zm26.804 0c-.96 1.604-1.586 3.147-4.251 5.659-1.03.971-.941 2.245.179 1.398 2.664-2.015 4.306-5.221 4.848-7.268.382-1.441-.292-.597-.776.211z"/><path fill="#F7DECE" d="M31 36v-3.5c0-3.314-3.685-5.5-7-5.5H12c-3.313 0-7 2.186-7 5.5V36h26z"/><path fill="#292F33" d="M17.945 3.069c4.105 0 10.947 4.053 10.947 12.947 0 8.896 0 10.948-2.053 10.948s-4.79-2.053-8.895-2.053c-4.105 0-6.785 2.053-8.895 2.053-2.287 0-2.053-8.211-2.053-10.948.001-8.894 6.844-12.947 10.949-12.947"/><path fill="#F7DECE" d="M14.328 27.018c1.466 1.065 2.964.98 3.672.98s2.194.085 3.66-.98v-3.203h-7.332v3.203z"/><path fill="#EEC2AD" d="M14.322 25.179c1.022 1.155 2.29 1.468 3.668 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.338v2.936z"/><path fill="#F7DECE" d="M9.734 15.718c0-5.834 3.676-12.564 8.211-12.564 4.533 0 8.209 6.729 8.209 12.564 0 5.833-3.676 10.285-8.209 10.285-4.535 0-8.211-4.452-8.211-10.285"/><path fill="#DF1F32" d="M17.945 23.543c-1.606 0-2.447-.794-2.537-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.961-.007.035.032.551.491 1.576.491 1.038 0 1.555-.473 1.576-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.089.091-.929.885-2.535.885"/><path fill="#292F33" d="M7.725 19c-.021-1-.044-.224-.044-.465 0-3.422 2.053.494 2.053-1.943 0-2.439 1.368-2.683 2.736-4.051.685-.685 2.053-2.026 2.053-2.026s3.421 2.067 6.158 2.067c2.736 0 5.474 1.375 5.474 4.112 0 2.736 2.053-1.584 2.053 1.837 0 .244-.023-.531-.04.469h.719c.006-2 .006-1.924.006-3.202 0-8.895-4.893-12.729-10.948-12.729C12 3.069 6.997 6.848 6.997 15.743c0 .793-.02 1.257.008 3.257h.72z"/><path fill="#F7DECE" d="M26 15l-.47.129s-1.192 3.401 0 3.997C28.194 20.457 29 15.332 29 14c0-1-3 1-3 1zm-16 0l.47.129s1.192 3.401 0 3.997C7.806 20.457 7 15.332 7 14c0-1 3 1 3 1z"/><path fill="#662113" d="M14.608 17.887c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.466 0 .847.381.847.846v.845c0 .466-.381.847-.847.847m6.765 0c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c0 .466-.381.847-.846.847"/><path fill="#C1694F" d="M18.836 20.5h-1.69c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.69c.233 0 .424.19.424.424v.153c0 .233-.191.423-.424.423"/><path fill="#77B255" d="M9 36h18v-5l-2.5 2-2-2-2.219 2L18 31l-2.234 2-2.25-2-2.016 2L9 31z"/></svg>
  )
}

export default WomanFairyLightSkinTone
