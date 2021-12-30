import React from 'react'

const DeafWomanMediumDarkSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#9268CA" d="M33.944 36v-3.5c0-3.314-3.686-5.5-7-5.5h-12c-3.313 0-7 2.186-7 5.5V36h26z"/><path fill="#60352A" d="M20.889 5.069c4.105 0 10.947 2.053 10.947 10.947 0 8.896 0 10.948-2.053 10.948s-4.79-2.053-8.895-2.053c-4.105 0-6.785 2.053-8.895 2.053-2.287 0-2.053-8.211-2.053-10.948 0-8.894 6.844-10.947 10.949-10.947"/><path fill="#AF7E57" d="M21.041 29.414c2.008 0 3.563-1.484 3.563-2.491v-3.108h-7.332v2.998c0 1.326 1.761 2.601 3.769 2.601z"/><path fill="#9B6A49" d="M17.266 25.179c1.022 1.155 2.29 1.468 3.668 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.338v2.936z"/><path fill="#AF7E57" d="M12.678 15.718c0-5.834 3.676-10.563 8.211-10.563 4.533 0 8.209 4.729 8.209 10.563 0 5.833-3.676 10.285-8.209 10.285-4.535 0-8.211-4.452-8.211-10.285"/><path fill="#DF1F32" d="M20.889 23.543c-1.606 0-2.447-.794-2.537-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.961-.007.035.032.551.491 1.576.491 1.038 0 1.555-.473 1.576-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.09.091-.929.885-2.535.885"/><path fill="#60352A" d="M10.669 19c-.021-1-.044-.224-.044-.465 0-3.422 2.053.494 2.053-1.943 0-2.439 1.368-2.683 2.736-4.051.685-.685 2.053-2.026 2.053-2.026s3.421 2.067 6.158 2.067c2.736 0 5.474 1.375 5.474 4.112 0 2.736 2.053-1.584 2.053 1.837 0 .244-.022-.531-.04.469h.719c.006-2 .006-1.924.006-3.202 0-8.895-6.842-11.672-10.948-11.672-4.104 0-10.947 2.722-10.947 11.617 0 .793-.02 1.257.008 3.257h.719z"/><path fill="#662113" d="M17.552 17.887c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.466 0 .847.381.847.846v.845c0 .466-.381.847-.847.847m6.765 0c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c0 .466-.381.847-.846.847"/><path fill="#915A34" d="M21.78 20.5h-1.69c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.69c.233 0 .424.19.424.424v.153c0 .233-.191.423-.424.423"/><path fill="#7450A8" d="M8.002 28.558V36h1l.303-7.442z"/><path fill="#9268CA" d="M4.335 28.053L3.002 36h5l.721-7.588z"/><path fill="#AF7E57" d="M6.789 22.258c.923-.923 3.558-2.964 4.215-3.637.658-.672 1.53.097 1.068.918-.462.821-3.129 3.847-3.129 3.847s1.59.462 1.949.872 1.026 3.078.41 3.488-1.539.103-1.539.103-.973 2.411-3.487 2.257c-1.044-.064-2.103-.975-2.001-2.514.103-1.539.904-2.969 1.18-3.796.308-.923 1.334-1.538 1.334-1.538z"/><path d="M6.103 20.705c-.048 0-.097-.007-.146-.021-2.429-.74-2.859-3.564-2.876-3.684-.039-.273.15-.525.423-.565.272-.038.526.149.566.422.003.023.362 2.316 2.178 2.869.264.081.413.36.333.624-.066.216-.264.355-.478.355zm-1.077 2.012c-.049 0-.099-.007-.148-.022C1.321 21.593.366 17.586.327 17.416c-.062-.269.106-.537.375-.599.271-.062.537.106.6.375.008.036.872 3.618 3.873 4.548.264.082.411.361.33.625-.067.214-.265.352-.479.352z" fill="#5DADEC"/></svg>
  )
}

export default DeafWomanMediumDarkSkinTone
