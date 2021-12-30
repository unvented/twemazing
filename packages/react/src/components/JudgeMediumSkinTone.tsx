import React from 'react'

const JudgeMediumSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#292F33" d="M36 36v-2c0-3.314-2.686-6-6-6H14c-3.313 0-6 2.686-6 6v2h28z"/><path fill="#E1E8ED" d="M17 28h9.929v8H17z"/><path fill="#D4AB88" d="M17.64 28.101c1.744 1.268 2.848 1.963 4.36 1.963 1.512 0 2.615-.696 4.359-1.963V24.29h-8.72v3.811z"/><path fill="#CC9B7A" d="M17.632 25.973c1.216 1.374 2.724 1.746 4.364 1.746 1.639 0 3.146-.373 4.363-1.746v-3.491h-8.728v3.491z"/><path fill="#6D6E71" d="M25.597 3.516c-1.925-.623-6.455-.453-7.588 1.019-2.944.057-6.398 2.718-6.851 6.228-.448 3.475.551 5.088.906 7.701.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.85-4.464 10.131-12.047.17-4.585-2.521-8.059-7.361-9.625z"/><path fill="#D4AB88" d="M29.413 13.466c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.624-1.016-2.119-2.141-2.119-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c-.001-2.898-.305-4.031-1.041-5.05z"/><path fill="#C1694F" d="M22.827 20.9h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z"/><path fill="#662113" d="M18.062 17.564c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953zm7.625 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z"/><path fill="#C1694F" d="M22 24.88c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.142-.987.848-3.741.848"/><path fill="#99AAB5" d="M22.001 30.878s3.381 2.494 4.093 2.778c.156.063-.366-3.656-.366-3.656h-7.454s-.523 3.781-.231 3.625c.638-.343 3.958-2.747 3.958-2.747"/><path fill="#F5F8FA" d="M17.292 26.625c.566.566 4.709 3.383 4.709 3.383s-2.126 1.242-4.084 3.534c-.197.23-1.542-4.625-1.583-5.709-.012-.303.687-1.479.958-1.208m9.438 0c-.566.566-4.709 3.383-4.709 3.383s2.126 1.242 4.084 3.534c.196.23 1.542-4.625 1.583-5.709.012-.303-.687-1.479-.958-1.208"/><path fill="#292F33" d="M27.62 28s-1.542 5.463-5.62 7.411C17.922 33.463 16.38 28 16.38 28H15v8h14v-8h-1.38z"/><path fill="#66757F" d="M12.083 33.341c.251 0 .401 2.659.401 2.659h-.956s.193-2.659.555-2.659m3 0c.251 0 .401 2.659.401 2.659h-.956s.193-2.659.555-2.659m16.846 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659m-3 0c-.251 0-.401 2.659-.401 2.659h.956c-.001 0-.194-2.659-.555-2.659"/><path fill="#C1694F" d="M7.854 23.665c.468 1.24.178 2.498-.649 2.812-.826.311-1.876-.441-2.345-1.681-.468-1.239-.178-2.498.649-2.811.826-.312 1.876.44 2.345 1.68"/><path fill="#662113" d="M9.092 36l-3.479-9.208.25-.094c1.098-.415 1.656-1.651 1.242-2.75-.415-1.097-1.652-1.656-2.75-1.241l-1.995.754c-1.098.413-1.657 1.65-1.242 2.749.414 1.098 1.652 1.656 2.749 1.241l.25-.094L7.382 36h1.71z"/><path fill="#C1694F" d="M3.363 25.361c.468 1.24.178 2.498-.649 2.812-.826.312-1.876-.44-2.345-1.681-.468-1.239-.178-2.498.649-2.811.827-.312 1.877.44 2.345 1.68"/><path fill="#D4AB88" d="M11.318 36l-.466-1.588c-.363-1.239-1.673-1.955-2.911-1.592l-1.255.368c-1.205.354-1.907 1.604-1.61 2.812h6.242z"/></svg>
  )
}

export default JudgeMediumSkinTone
