import React from 'react'

const ScientistMediumLightSkinTone = ({ size, rem }: {
  size: number | string,
  rem?: boolean
}) => {
  const width = (typeof size === 'string') ? size : rem ? `${size}rem` : `${size}px`

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" style={{ width: width }}><path fill="#CCD6DD" d="M36 36v-4c0-3.314-2.686-6-6-6H14c-3.313 0-6 2.686-6 6v4h28z"/><path fill="#F3D2A2" d="M18 27l4 4 4-4v-5h-8z"/><path fill="#E2C196" d="M18 24c1.216 1.374 2.355 1.719 3.996 1.719 1.639 0 2.787-.346 4.004-1.719v-4h-8v4z"/><path fill="#FFE51E" d="M25.597 1.071C23.672.448 19.142.618 18.009 2.09c-2.944.057-6.398 2.718-6.851 6.228-.448 3.475.551 5.088.906 7.701.403 2.96 2.067 3.907 3.397 4.303 1.914 2.529 3.949 2.421 7.366 2.421 6.672 0 9.85-4.464 10.131-12.047.17-4.586-2.521-8.059-7.361-9.625z"/><path fill="#F3D2A2" d="M29.413 11.021c-.646-.894-1.472-1.614-3.284-1.868.68.311 1.331 1.387 1.416 1.982.085.595.17 1.076-.368.481-2.155-2.382-4.502-1.444-6.827-2.899-1.625-1.017-2.12-2.141-2.12-2.141s-.198 1.5-2.661 3.029c-.714.443-1.566 1.43-2.038 2.888-.34 1.048-.234 1.982-.234 3.578 0 4.66 3.841 8.578 8.578 8.578s8.578-3.953 8.578-8.578c0-2.899-.304-4.031-1.04-5.05z"/><path fill="#C1694F" d="M22.827 18.454h-1.906c-.263 0-.477-.213-.477-.477s.213-.477.477-.477h1.906c.263 0 .477.213.477.477s-.213.477-.477.477z"/><path fill="#662113" d="M18.062 15.118c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953zm7.625 0c-.526 0-.953-.427-.953-.953v-.953c0-.526.427-.953.953-.953s.953.427.953.953v.953c0 .526-.427.953-.953.953z"/><path fill="#C1694F" d="M22 22.434c-2.754 0-3.6-.705-3.741-.848-.256-.256-.256-.671 0-.927.248-.248.646-.255.902-.023.052.037.721.487 2.839.487 2.2 0 2.836-.485 2.842-.49.256-.255.657-.243.913.015.256.256.242.683-.014.938-.141.143-.987.848-3.741.848"/><path fill="#66757F" d="M19.059 36L18 26.781s1.41 1.645 4 1.645 4.219-1.645 4.219-1.645L24.996 36h-5.937z"/><path fill="#F5F8FA" d="M18.081 25.25C18.647 25.816 21 36 21 36h-3.156l-1.704-2.562 1.704-2.835-2.017-.634.254-3.957s1.729-1.033 2-.762m7.838 0C25.353 25.816 23 36 23 36h3.156l1.704-2.562-1.704-2.835 2.017-.634-.254-3.957s-1.729-1.033-2-.762"/><path opacity=".4" fill="#FFF" d="M14.753 10.75h14.5V16h-14.5z"/><path fill="#F5F8FA" d="M29 10H15c-1 0-1 1-1 1v4c0 1.461 2.333 2 4 2s2.599-1 4-1 2.333 1 4 1 4-.539 4-2v-4c0-1-1-1-1-1zm0 4c0 1.325-.852 2-3 2-1.539 0-2.804-1-4-1s-2.461 1-4 1c-2.148 0-3-.675-3-2v-3h14v3z"/><circle fill="#9266CC" cx="7" cy="11" r="1"/><circle fill="#9266CC" cx="9" cy="16" r="1"/><circle fill="#9266CC" cx="5.5" cy="14.5" r="1.5"/><path fill="#A8BCCC" d="M10 18H5s-2 0-2 2 2 2 2 2v5l-4 5c-.883 1.104-1 1.821-1 2 0 2 2 2 2 2h11s2 0 2-2c0-.134.153-.559-1-2l-4-5v-5s2 0 2-2-2-2-2-2z"/><path fill="#E1E8ED" d="M9 27.351V21h1c.449-.012 1-.194 1-1 0-.803-.547-.987-1.008-1H5c-.45.012-1 .194-1 1s.55.988 1.012 1l.975.024L6 27.351l-1.894 2.368 3.394 3.5 3.394-3.5L9 27.351z"/><path fill="#9266CC" d="M.999 34.034c.001.772.551.954 1.013.966H13c.449-.012 1-.194 1-1v-.041l.006-.082c0-.003-.055-.337-.787-1.252l-2.325-2.906H4.106l-2.325 2.906c-.719.899-.782 1.404-.782 1.409z"/></svg>
  )
}

export default ScientistMediumLightSkinTone
