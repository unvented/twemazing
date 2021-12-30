import React from 'react'

const WomanPoliceOfficer = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#2A6797" d="M30.941 36v-3.5c0-3.314-3.686-5.5-7-5.5h-12c-3.313 0-7 2.186-7 5.5V36h26z"/><ellipse fill="#2A6797" cx="18.003" cy="7.501" rx="12" ry="7.5"/><path fill="#FFAC33" d="M17.887 5.069c4.104 0 10.947 2.053 10.947 10.947 0 8.896 0 10.948-2.053 10.948s-4.79-2.053-8.895-2.053c-4.105 0-6.785 2.053-8.895 2.053-2.287 0-2.053-8.211-2.053-10.948 0-8.894 6.843-10.947 10.949-10.947"/><path fill="#FFDC5D" d="M14.269 29.479c1.466 1.065 2.964.98 3.672.98s2.194.085 3.66-.98v-5.664h-7.332v5.664z"/><path fill="#F9CA55" d="M14.264 25.179c1.022 1.155 2.29 1.468 3.668 1.468 1.379 0 2.647-.312 3.67-1.468v-2.936h-7.338v2.936z"/><path fill="#FFDC5D" d="M9.675 15.718c0-5.834 3.676-10.563 8.211-10.563 4.533 0 8.209 4.729 8.209 10.563 0 5.833-3.676 10.285-8.209 10.285-4.534 0-8.211-4.452-8.211-10.285"/><path fill="#FFAC33" d="M7.667 19c-.021-1-.044-.224-.044-.465 0-3.422 2.053.494 2.053-1.943 0-2.439 1.368-2.683 2.736-4.051.685-.685 2.053-2.026 2.053-2.026s3.421 2.067 6.158 2.067c2.736 0 5.474 1.375 5.474 4.112 0 2.736 2.053-1.584 2.053 1.837 0 .244-.022-.531-.04.469h.719c.006-2 .006-1.924.006-3.202 0-8.895-6.842-11.672-10.948-11.672-4.104 0-10.947 2.722-10.947 11.617 0 .793-.02 1.257.008 3.257h.719z"/><path fill="#FFDC5D" d="M27.774 15.936c0 1.448-.733 2.622-1.639 2.622-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623m-16.388 0c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623"/><path fill="#DF1F32" d="M17.887 23.543c-1.606 0-2.447-.794-2.537-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.961-.007.035.032.551.491 1.576.491 1.038 0 1.555-.473 1.576-.492.273-.256.703-.248.963.02.26.269.26.691-.004.955-.09.091-.93.885-2.535.885"/><path fill="#662113" d="M14.55 17.887c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.466 0 .847.381.847.846v.845c-.001.466-.381.847-.847.847m6.765 0c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c-.001.466-.382.847-.846.847"/><path fill="#C1694F" d="M18.777 20.5h-1.69c-.233 0-.423-.19-.423-.423v-.153c0-.233.189-.424.423-.424h1.69c.233 0 .424.19.424.424v.153c0 .233-.19.423-.424.423"/><path fill="#2A6797" d="M8.5 8v1c0 1.105 4.253 2 9.5 2s9.5-.895 9.5-2V8h-19z"/><path fill="#4289C1" d="M27.001 8V6S23.251 3.75 18 3.75C12.752 3.75 9.002 6 9.002 6v2h17.999z"/><path fill="#FDCB58" d="M27.5 8h-19c-.275 0-.5.225-.5.5s.225.5.5.5h19c.275 0 .5-.225.5-.5s-.225-.5-.5-.5z"/><path fill="#193D59" d="M22.094 33.07c.156.062-.366-3.656-.366-3.656h-7.454s-.523 3.781-.231 3.625c.712-.382.867-.491 2.036-1.346.037.104.073.197.105.255.156.281.528.906.528.906s-.82 1.144-1.103 3.146h4.75c-.281-1.595-1.047-3.146-1.047-3.146.65-1.084.696-1.202.531-.906.032-.059.068-.152.104-.256.887.622 1.812 1.245 2.147 1.378z"/><path fill="#4289C1" d="M13.292 26.043c.566.566 4.709 3.383 4.709 3.383s-2.126 1.242-4.084 3.534c-.197.23-1.542-4.625-1.583-5.709-.012-.303.687-1.48.958-1.208m9.438 0c-.566.566-4.709 3.383-4.709 3.383s2.126 1.242 4.084 3.534c.196.23 1.542-4.625 1.583-5.709.012-.303-.687-1.48-.958-1.208"/><path fill="#1E4B6E" d="M18.016 30.105c.39-.022 1.543.771 1.422 1.25-.461 1.827-.849 1.391-1.391 1.391-.611 0-.964.473-1.391-1.312-.093-.387.797-1.297 1.36-1.329M20 36s-.481-2.749-1.958-2.749S16.031 36 16.031 36H20"/><path fill="#FDCB58" d="M20.25 1.501h-.002c-.233.001-.433.114-.57.282-.281.069-.667.084-1.157-.071-.136-.129-.318-.211-.521-.211-.201 0-.384.082-.519.212-.491.155-.877.14-1.157.071-.138-.168-.338-.282-.571-.282h-.002c-.415 0-.75.335-.75.75 0 .414.335.75.75.75h.002c0 3 1.498 3.75 2.247 3.75.751 0 2.248-.75 2.248-3.75h.002c.416 0 .751-.336.751-.75 0-.416-.335-.751-.751-.751z"/><path fill="#4289C1" d="M11.083 28.892l-4.378 1.361c-.262.085-.545-.059-.63-.321l-.309-.952c-.084-.26.06-.544.322-.629l4.379-1.362c.262-.084.545.061.63.321l.309.952c.083.26-.062.544-.323.63"/><circle fill="#FFF" cx="10.252" cy="28.044" r=".576"/><path fill="#4289C1" d="M24.837 28.892l4.379 1.361c.262.085.545-.059.631-.321l.309-.952c.084-.26-.061-.544-.322-.629l-4.379-1.362c-.262-.084-.545.061-.63.321l-.309.952c-.085.26.06.544.321.63"/><circle fill="#FFF" cx="25.668" cy="28.044" r=".576"/></svg>
  )
}

export default WomanPoliceOfficer
