import React from 'react'

const WomanSingerMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M27.875 26h-12c-3.313 0-7.125 2.186-7.125 5.5V36h26v-4.5c0-3.314-3.56-5.5-6.875-5.5z"/><path fill="#F2D1A1" d="M21.75 25.917l-6.188.601 6.188 8.045 5.229-8.045z"/><path fill="#A88DC1" d="M21.749 36h9.001c4-3.5 5.083-6.5 5.083-6.5S32.5 26 26.062 24.854c0 1.224.988 3.132.988 3.132l-5.301 6.576V36z"/><path fill="#7355A2" d="M33 27.406s-1.953-1.328-4.156-2.062c-3.058-1.019-2.375 1.82-2.375 1.82s-3.82 6.034-4.72 7.399c0 0 6.534-5.43 11.251-7.157z"/><path fill="#522E8D" d="M21.75 34.563s7.333-7.479 12.125-8.354c-4.083-3.417-10.125-3.042-10.125-3.042 0 1.224 1.488 1.868 1.488 3.382 0 2.485-2.59 6.203-3.489 7.567l.001.447z"/><path fill="#A88DC1" d="M21.749 36h-9.001c-4-3.5-5.083-6.5-5.083-6.5s3.333-3.5 9.771-4.646c0 1.224-.988 3.132-.988 3.132l5.301 6.576V36z"/><path fill="#7355A2" d="M10.498 27.406s1.953-1.328 4.156-2.062c3.058-1.019 2.375 1.82 2.375 1.82s3.82 6.034 4.72 7.399c0 0-6.534-5.43-11.251-7.157z"/><path fill="#522E8D" d="M21.748 34.563s-7.333-7.479-12.125-8.354c4.083-3.417 10.125-3.042 10.125-3.042 0 1.224-1.488 1.868-1.488 3.382 0 2.485 2.59 6.203 3.489 7.567l-.001.447z"/><path fill="#F2D1A1" d="M18.25 26.518c1.466 1.065 2.792.98 3.5.98s2.194.085 3.488-.949l.012-4.14h-7v4.109z"/><path fill="#E0BF94" d="M18.25 24.155c.975 1.102 2.185 1.4 3.499 1.4 1.315 0 2.526-.298 3.501-1.4v-2.801h-7v2.801z"/><path fill="#F4ABBA" d="M30.877 21.749c-.175.369-.534.739-.736.93 1.969.427 3.359.946 3.359.946s-.483-.662-.694-1.875c-.074-.422-.391-.826-.458-1.375-.079-.651-.164-1.393-.208-2.208-.052-.951-.121-1.809-.083-2.958.289-8.89-6.256-11.23-10.36-11.23S10.459 6.036 10.748 14.926c.037 1.149.019 2.206-.032 3.157-.044.815-.113 1.553-.193 2.205-.067.549-.141 1.037-.215 1.459-.212 1.213-.417 1.879-.417 1.879s6.906-2.592 11.805-.958c2.234-.745 4.881-.609 7.105-.242.347-.098 1.437-.408 2.076-.677z"/><path fill="#F2D1A1" d="M21.695 4.064c-4.535 0-8.211 4.729-8.211 10.563 0 1.358.206 2.636.569 3.805.049.157.099.312.153.464.237.663.529 1.284.866 1.859.206.352.429.686.669 1 1.496 1.959 3.608 3.157 5.954 3.157 4.533 0 8.209-4.452 8.209-10.285 0-5.834-3.676-10.563-8.209-10.563z"/><path fill="#DD2E44" d="M19.766 14.133l2.581-3.69-4.362-1.775-3.933 9.764c.049.157.099.312.153.464l1.946-.798-1.08 2.657c.206.352.429.686.669 1l6.822-8.236-2.796.614z"/><path fill="#DE2032" d="M21.695 22.452c-1.606 0-2.447-.794-2.537-.885-.268-.267-.268-.7 0-.967.266-.265.692-.267.961-.007.035.032.551.491 1.576.491 1.038 0 1.555-.473 1.576-.492.273-.256.703-.248.963.019.26.269.26.691-.004.955-.089.092-.929.886-2.535.886"/><path fill="#C1694F" d="M22.586 19.409h-1.69c-.233 0-.423-.189-.423-.423v-.153c0-.233.189-.424.423-.424h1.69c.233 0 .424.19.424.424v.153c0 .234-.191.423-.424.423"/><path fill="#662213" d="M25.123 16.796c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.465 0 .846.381.846.846v.845c0 .466-.381.847-.846.847m-6.765 0c-.465 0-.846-.381-.846-.847v-.845c0-.465.381-.846.846-.846.466 0 .847.381.847.846v.845c0 .466-.381.847-.847.847"/><path fill="#F4ABBA" d="M32.681 17.022c.003-1.113.003-1.269.003-2.315 0-2.237-.434-4.12-1.147-5.686.382.076.845.139 1.244.094-.779-.556-1.912-1.586-2.354-1.994-2.36-3.27-6.077-4.621-8.691-4.621-3.754 0-9.783 2.739-10.787 10.011l-.015-.111s-.84 2.042-1.461 3.114c.475-.155.974-.495 1.316-.758-.002.732-.018 1.244.009 3.153h.72c-.021-1-.044-.224-.044-.465 0-3.422 2.053.494 2.053-1.943 0-2.438 1.368-2.683 2.736-4.051.331-.331.821-.815 1.24-1.227 1.396.632 3.268 1.109 5.734 1.228.238.069 1.847.574 3.119 1.903-.042-.857-.384-1.432-.604-1.721 1.947.399 3.147 1.725 3.406 3.971l.011.072c-.014.374-.12 1.783-.914 3.1.686-.223 1.1-.619 1.314-.881 1.205 4.775 3.932 5.732 3.932 5.732-.555-2.414-.75-4.83-.82-6.605z"/><path fill="#F2D1A1" d="M15.194 14.845c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622.734-2.623 1.639-2.623 1.639 1.175 1.639 2.623"/><path fill="#424143" d="M10.513 20.292c-1.695 0-3.069 1.374-3.069 3.07 0 .478.119.925.314 1.328l-.232-.232c-.347-.347-.89-.327-1.212.045L.826 30.725c-.544.628-.798 1.643.011 2.452.809.809 1.807.574 2.454.013l.892-.815V36h1.784v-5.255l3.443-3.146c.372-.323.393-.865.045-1.211l-.271-.271c.404.196.851.315 1.33.315 1.696 0 3.07-1.374 3.07-3.07-.001-1.696-1.376-3.07-3.071-3.07z"/><path fill="#59595C" d="M12.161 26.327c-.15.15-.393.15-.543 0l-4.07-4.07c-.15-.15-.15-.392 0-.542l.543-.543c.15-.15.393-.15.543 0l4.07 4.07c.15.15.15.393 0 .543l-.543.542z"/></svg>
  )
}

export default WomanSingerMediumLightSkinTone
